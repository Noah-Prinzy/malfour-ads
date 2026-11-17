// Live take of "Add product" for the Inventory explainer (EXPLAINER-PLAN.md, scenes 3–6).
// Drives the signed-in recording profile (.chrome-profile) and records the page itself with a CDP
// screencast, so other windows on the desktop never end up in the video.
//   node record-add.mjs   ->  takes/add-product-take2.mp4, takes/record-log.json
// Creates ONE fictional product (Demo Paracetamol 500mg). Delete it after the take.
import fs from "node:fs"
import path from "node:path"
import { execSync } from "node:child_process"
import { createRequire } from "node:module"

const require = createRequire("C:/Users/Noah/Documents/Ads Projects/SHAMBA-DEMO/")
const puppeteer = require("puppeteer")
const OUT = path.resolve("takes")
fs.mkdirSync(OUT, { recursive: true })
const VIDEO = path.join(OUT, "add-product-take2.mp4")
const FFMPEG = execSync("where ffmpeg").toString().split(/\r?\n/)[0].trim()
const log = []
const t0 = Date.now()
const note = (m) => { const s = ((Date.now() - t0) / 1000).toFixed(1); console.log(s, m); log.push({ t: +s, m }) }
const wait = (ms) => new Promise((r) => setTimeout(r, ms))

const browser = await puppeteer.launch({
  headless: false,
  executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
  userDataDir: path.resolve(".chrome-profile"),
  defaultViewport: { width: 1920, height: 1080, deviceScaleFactor: 1 },
  args: ["--lang=en-GB", "--disable-notifications", "--window-size=1920,1180",
    // keep painting at full rate when the window is covered or in the background
    "--disable-backgrounding-occluded-windows", "--disable-renderer-backgrounding", "--disable-background-timer-throttling"],
})
const page = (await browser.pages())[0] ?? (await browser.newPage())
await page.goto("https://pharmacy.malfour.com/inventory", { waitUntil: "domcontentloaded" })
// Wait for real numbers (the page reads "0 batches" while loading).
await page.waitForFunction(() => /TOTAL BATCHES\s*[1-9]/i.test(document.body.innerText), { timeout: 180000, polling: 1000 })
await wait(2500)
// Hide the subscription banner for the take (the app's own "dismiss until tomorrow").
await page.evaluate(() => document.querySelector('[aria-label="Dismiss until tomorrow"], [title="Dismiss until tomorrow"]')?.click())
await wait(1200)

// ---- a visible cursor with a click ripple (the screencast does not show the OS cursor) ----
const cursorJs = () => {
  if (document.getElementById("__cur")) return
  const c = document.createElement("div")
  c.id = "__cur"
  c.innerHTML = `<svg width="30" height="30" viewBox="0 0 24 24"><path d="M4 2l16 9.5-7 1.6-3.6 6.6z" fill="#111" stroke="#fff" stroke-width="1.6" stroke-linejoin="round"/></svg>`
  Object.assign(c.style, { position: "fixed", left: "0", top: "0", zIndex: 2147483647, pointerEvents: "none", transform: "translate(960px,540px)", filter: "drop-shadow(0 2px 3px rgba(0,0,0,.35))" })
  document.documentElement.appendChild(c)
  addEventListener("mousemove", (e) => { c.style.transform = `translate(${e.clientX - 4}px,${e.clientY - 2}px)` }, true)
  addEventListener("mousedown", (e) => {
    const r = document.createElement("div")
    Object.assign(r.style, { position: "fixed", left: e.clientX - 22 + "px", top: e.clientY - 22 + "px", width: "44px", height: "44px", borderRadius: "50%", border: "3px solid #BE1E2D", zIndex: 2147483646, pointerEvents: "none", transition: "transform .45s ease-out, opacity .45s ease-out", transform: "scale(.3)", opacity: "1" })
    document.documentElement.appendChild(r)
    requestAnimationFrame(() => { r.style.transform = "scale(1.2)"; r.style.opacity = "0" })
    setTimeout(() => r.remove(), 600)
  }, true)
}
await page.evaluate(cursorJs)
let mx = 960, my = 540
const moveTo = async (x, y) => {
  const steps = Math.max(12, Math.round(Math.hypot(x - mx, y - my) / 14))
  for (let i = 1; i <= steps; i++) {
    const p = i / steps, e = p < 0.5 ? 2 * p * p : 1 - (-2 * p + 2) ** 2 / 2
    await page.mouse.move(mx + (x - mx) * e, my + (y - my) * e)
    await wait(10)
  }
  mx = x; my = y
}
const clickAt = async (box, pause = 350) => {
  await moveTo(box.x + box.width / 2, box.y + box.height / 2)
  await wait(180)
  await page.mouse.down(); await wait(70); await page.mouse.up()
  await wait(pause)
}
const typeHuman = async (text) => { for (const ch of text) { await page.keyboard.type(ch); await wait(55 + Math.random() * 60) } }

// ---- locators (evaluate in page, return a box) ----
const box = async (fn, arg) => {
  const b = await page.evaluate(fn, arg)
  if (!b) throw new Error("not found: " + JSON.stringify(arg))
  return b
}
const byText = (arg) => {
  const [text, sel, exact, global] = arg
  const scope = global ? document : (document.querySelector("[data-dlg]") ?? document)
  const el = [...scope.querySelectorAll(sel)].find((e) => e.offsetParent && (exact ? e.innerText.trim() === text : e.innerText.trim().startsWith(text)))
  if (!el) return null
  el.scrollIntoView({ block: "nearest" }); const r = el.getBoundingClientRect(); return { x: r.x, y: r.y, width: r.width, height: r.height }
}
const fieldByLabel = (label) => {
  const dlg = document.querySelector("[data-dlg]") ?? document
  const all = [...dlg.querySelectorAll("label, div, span, p")].filter((e) => e.offsetParent && e.innerText.trim().toUpperCase().startsWith(label))
  if (!all.length) return null
  let lab = all[0]
  for (const e of all) if (lab.contains(e)) lab = e // innermost element carrying the label text
  let c = lab, f = null
  for (let i = 0; i < 4 && c && !f; i++, c = c.parentElement) f = c.querySelector("input:not([type=hidden]), textarea, button[role=combobox], button[aria-haspopup]")
  if (!f) return null
  f.scrollIntoView({ block: "nearest" }); const r = f.getBoundingClientRect(); return { x: r.x, y: r.y, width: r.width, height: r.height }
}
const clickText = async (text, sel = "button", exact = false, pause, global = false) => { await clickAt(await box(byText, [text, sel, exact, global]), pause); note("click " + text) }
const fill = async (label, value) => { await clickAt(await box(fieldByLabel, label), 250); await typeHuman(value); note(`fill ${label} = ${value}`); await wait(500) }

// Collect every toast/alert the app shows, so a failed save explains itself.
await page.evaluate(() => {
  window.__toasts = []
  new MutationObserver((ms) => { for (const m of ms) for (const n of m.addedNodes) if (n.nodeType === 1) {
    const t = (n.matches?.("[role=status],[role=alert],[data-sonner-toast],li") ? n : n.querySelector?.("[role=status],[role=alert],[data-sonner-toast]"))?.innerText?.trim()
    if (t && t.length < 300) window.__toasts.push(t)
  } }).observe(document.body, { childList: true, subtree: true })
})
// ---- the take ----
globalThis.rec = await page.screencast({ path: VIDEO, ffmpegPath: FFMPEG, fps: 30, quality: 18 })
note("recording")
try {
  await moveTo(1300, 300); await wait(1500)

  await clickText("Add product", "button", true, 1800)
  // The dialog has no role=dialog: tag the smallest element holding both its subtitle and "Save Product".
  await page.waitForFunction(() => {
    const sub = [...document.querySelectorAll("div, p, span")].find((e) => e.offsetParent && e.innerText?.trim() === "Add a new product to inventory")
    if (!sub) return false
    let c = sub
    while (c && ![...c.querySelectorAll("button")].some((b) => b.innerText.trim() === "Save Product")) c = c.parentElement
    if (!c) return false
    c.setAttribute("data-dlg", "")
    return true
  }, { timeout: 30000, polling: 300 })

  // 1 · Basic
  await fill("BRAND / TRADE NAME", "Demo Paracetamol 500mg")
  await clickAt(await box(fieldByLabel, "THERAPEUTIC CATEGORY"), 700)
  await typeHuman("Analg"); await wait(600)
  await clickText("Analgesics & NSAIDs", "[role=option], li, button, div", true, 700, true)
  await fill("INN / GENERIC NAME", "Paracetamol")
  await wait(1200) // let "Sold as Strip of 10 · contains 10 Tablet" read
  await fill("BARCODE", "2001234567800")
  await wait(1200)

  // 2 · Pricing
  await clickText("Pricing", "button", false, 900)
  await fill("COST PRICE", "60")
  await fill("TARGET GROSS MARGIN", "40")
  await wait(2500) // sell price fills in: RWF 100, margin 40%, profit RWF 40

  // 3 · Stock
  await clickText("Stock", "button", true, 900)
  await fill("BATCH NUMBER", "DEMO-B001")
  await fill("OPENING QUANTITY", "200")
  await fill("REORDER LEVEL", "20")
  await clickAt(await box(fieldByLabel, "EXPIRY DATE"), 700)
  const head = () => page.evaluate(() => [...document.querySelectorAll("[data-dlg] *")].find((e) => e.offsetParent && e.children.length === 0 && /^[A-Z][a-z]+ 20\d\d$/.test(e.innerText.trim()))?.innerText.trim())
  for (let i = 0; i < 30 && (await head()) !== "March 2028"; i++) {
    const next = await box(() => {
      const h = [...document.querySelectorAll("[data-dlg] *")].find((e) => e.offsetParent && e.children.length === 0 && /^[A-Z][a-z]+ 20\d\d$/.test(e.innerText.trim()))
      const btns = [...h.parentElement.querySelectorAll("button")]
      const b = btns[btns.length - 1]; b.scrollIntoView({ block: "nearest" }); const r = b.getBoundingClientRect(); return { x: r.x, y: r.y, width: r.width, height: r.height }
    })
    await clickAt(next, 90)
  }
  await clickText("31", "button", true, 900)
  note("expiry set")
  await wait(1200)

  // 5 · Rwanda Reg. (Supplier left empty)
  await clickText("Rwanda Reg.", "button", false, 1200)
  await clickText("TAX_A", "button, label, [role=radio], [role=button]", false, 600)
  await fill("RFDA REG. NUMBER", "RFDA/DEMO/2026/001")
  await fill("MANUFACTURER", "Demo Labs Ltd")
  await wait(1200)

  // Save
  await clickText("Save Product", "button", true, 600)
  await page.waitForFunction(() => !document.querySelector("[data-dlg]")?.offsetParent, { timeout: 20000 })
  note("saved")
  await wait(3000)

  // Pay-off: find it in the list
  const search = await box(() => { const e = document.querySelector('input[placeholder^="Search products"]'); const r = e.getBoundingClientRect(); return { x: r.x, y: r.y, width: r.width, height: r.height } })
  await clickAt(search, 300)
  await typeHuman("Demo Paracetamol")
  await wait(5000)
  note("result shown")
  await moveTo(1300, 700); await wait(1500)
} catch (e) {
  note("ERROR " + e.message); note("toasts: " + JSON.stringify(await page.evaluate(() => window.__toasts)))
  await page.screenshot({ path: path.join(OUT, "take2-error.png") })
} finally {
  await globalThis.rec.stop()
  note("stopped")
  fs.writeFileSync(path.join(OUT, "record-log.json"), JSON.stringify(log, null, 2))
  await page.screenshot({ path: path.join(OUT, "take2-end.png") })
  await browser.close()
}
