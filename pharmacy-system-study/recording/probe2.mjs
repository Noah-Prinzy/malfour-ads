// Rehearsal for the Inventory explainer: opens the real app in its own Chrome profile at 1920x1080.
//
//   node rehearse.mjs signin    visible window; Noah signs in once (profile kept in .chrome-profile/, never committed)
//   node rehearse.mjs probe     opens Add product, Import, Export, Scan and logs what each really does
//
// Writes rehearsal/<name>.png and rehearsal/log.json. Downloads land in rehearsal/downloads/.
import fs from "node:fs"
import path from "node:path"
import { createRequire } from "node:module"

const require = createRequire("C:/Users/Noah/Documents/Ads Projects/SHAMBA-DEMO/")
const puppeteer = require("puppeteer")

const APP = "https://pharmacy.malfour.com"
const mode = process.argv[2] ?? "probe"
const OUT = path.resolve("rehearsal")
fs.mkdirSync(path.join(OUT, "downloads"), { recursive: true })
const log = []
const note = (m) => { console.log(m); log.push({ t: Date.now(), m }) }

const browser = await puppeteer.launch({
  headless: false,
  executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
  userDataDir: path.resolve(".chrome-profile"),
  defaultViewport: { width: 1920, height: 1080, deviceScaleFactor: 1 },
  args: ["--lang=en-GB", "--disable-notifications", "--window-size=1920,1180", "--use-fake-ui-for-media-stream"],
})
const page = (await browser.pages())[0] ?? (await browser.newPage())
await page.setViewport({ width: 1920, height: 1080 })
const cdp = await page.createCDPSession()
await cdp.send("Browser.setDownloadBehavior", { behavior: "allow", downloadPath: path.join(OUT, "downloads"), eventsEnabled: true }).catch(() => {})
await page.goto(APP + "/inventory", { waitUntil: "domcontentloaded" })

const shot = async (name) => { await page.screenshot({ path: path.join(OUT, name + ".png") }); note("shot " + name) }
const wait = (ms) => new Promise((r) => setTimeout(r, ms))
const clickText = async (text, sel = "button, a, [role=tab]") => {
  const ok = await page.evaluate((t, s) => {
    const el = [...document.querySelectorAll(s)].find((e) => e.offsetParent && e.textContent.trim().toLowerCase() === t.toLowerCase())
    if (!el) return false
    el.click(); return true
  }, text, sel)
  note(`click "${text}" -> ${ok}`)
  return ok
}

if (false) {
  note("Sign in in the window. Waiting until the inventory page shows (up to 10 min)...")
  await page.waitForFunction(() => !location.pathname.startsWith("/login"), { timeout: 600000, polling: 1000 }).catch(() => {})
  await wait(3000)
  note("URL now " + page.url())
  await shot("signed-in")
  await browser.close()
  process.exit(0)
}

// ---- probe 2: typed barcode, real import, export ----
await wait(4000)
const csv = path.resolve("../rehearsal-kit/sample-import.csv")
const closeModal = async () => { await page.evaluate(() => { const b = document.querySelector('[role=dialog] button[aria-label*="lose" i], [role=dialog] button'); b && b.click() }); await wait(1200) }
const bodyText = async (n = 900) => (await page.evaluate(() => document.body.innerText)).replace(/\s+/g, " ").slice(0, n)

await clickText("Scan Barcode"); await wait(2500)
await page.click('input[placeholder*="Focus here"]'); await page.keyboard.type("2001234567800", { delay: 60 })
await shot("10-typed-barcode")
await clickText("Use barcode"); await wait(3500); await shot("11-after-use-barcode")
note("after use barcode: " + await bodyText(700))
await closeModal(); await page.keyboard.press("Escape"); await wait(800); await shot("12-closed")

// Import: choose the sample file
const chooserP = page.waitForFileChooser({ timeout: 8000 }).catch(() => null)
await clickText("Import CSV or Excel"); const ch = await chooserP
if (ch) { await ch.accept([csv]); note("file accepted"); await wait(5000); await shot("13-import-after-file"); note("import text: " + await bodyText(1200)) } else note("no chooser")

fs.writeFileSync(path.join(OUT, "log2.json"), JSON.stringify(log, null, 2))
await browser.close()
