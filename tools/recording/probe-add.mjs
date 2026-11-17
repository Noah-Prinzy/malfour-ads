// Probe the Add product dialog: opens it, dumps every visible field per step, never saves.
//   node probe-add.mjs   ->  rehearsal/add-*.png, rehearsal/add-fields.json
import fs from "node:fs"
import path from "node:path"
import { createRequire } from "node:module"

const require = createRequire("C:/Users/Noah/Documents/Ads Projects/SHAMBA-DEMO/")
const puppeteer = require("puppeteer")
const OUT = path.resolve("rehearsal")
const wait = (ms) => new Promise((r) => setTimeout(r, ms))

const browser = await puppeteer.launch({
  headless: false,
  executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
  userDataDir: path.resolve(".chrome-profile"),
  defaultViewport: { width: 1920, height: 1080, deviceScaleFactor: 1 },
  args: ["--lang=en-GB", "--disable-notifications", "--window-size=1920,1180"],
})
const page = (await browser.pages())[0] ?? (await browser.newPage())
await page.goto("https://pharmacy.malfour.com/inventory", { waitUntil: "domcontentloaded" })
await page.waitForFunction(() => /\b\d+ batches\b/.test(document.body.innerText) && !/\b0 batches\b/.test(document.body.innerText), { timeout: 60000 }).catch(() => {})
await wait(1500)

const dump = () => page.evaluate(() => {
  const dlg = document.querySelector("[role=dialog]") ?? document.body
  const vis = (e) => e.offsetParent !== null
  const labelOf = (e) => {
    if (e.id) { const l = dlg.querySelector(`label[for="${e.id}"]`); if (l) return l.innerText.trim() }
    const l = e.closest("label"); if (l) return l.innerText.trim()
    const p = e.parentElement?.parentElement; return p ? (p.querySelector("label")?.innerText.trim() ?? "") : ""
  }
  return {
    title: dlg.querySelector("h2, [role=heading]")?.innerText ?? "",
    fields: [...dlg.querySelectorAll("input, select, textarea, button[role=combobox]")].filter(vis).map((e) => ({
      tag: e.tagName, type: e.type, id: e.id, name: e.name, ph: e.placeholder, label: labelOf(e), value: e.value ?? e.innerText, rect: (({ x, y, width, height }) => ({ x, y, width, height }))(e.getBoundingClientRect()),
    })),
    buttons: [...dlg.querySelectorAll("button, [role=tab]")].filter(vis).map((b) => b.innerText.trim()).filter(Boolean),
    text: dlg.innerText.slice(0, 1500),
  }
})

const result = {}
const opened = await page.evaluate(() => {
  const b = [...document.querySelectorAll("button")].find((e) => e.offsetParent && /^\+?\s*add product$/i.test(e.innerText.trim()))
  if (!b) return false; b.click(); return true
})
console.log("opened", opened)
await wait(2500)
await page.screenshot({ path: path.join(OUT, "add-0.png") })
result.step0 = await dump()

// Visit each step by its tab/step button (no Next, so no validation and nothing is saved).
for (const [i, name] of ["Pricing", "Stock", "Supplier", "Rwanda Reg."].entries()) {
  const ok = await page.evaluate((n) => {
    const dlg = document.querySelector("[role=dialog]") ?? document.body
    const b = [...dlg.querySelectorAll("button, [role=tab]")].find((e) => e.offsetParent && e.innerText.trim().includes(n))
    if (!b) return false; b.click(); return true
  }, name)
  console.log("step", name, ok)
  await wait(1200)
  await page.screenshot({ path: path.join(OUT, `add-${i + 1}.png`) })
  result["step" + (i + 1)] = { ok, ...(await dump()) }
}
fs.writeFileSync(path.join(OUT, "add-fields.json"), JSON.stringify(result, null, 2))
await page.keyboard.press("Escape")
await wait(800)
await browser.close()
