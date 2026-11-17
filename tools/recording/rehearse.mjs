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

if (mode === "signin") {
  note("Sign in in the window. Waiting until the inventory page shows (up to 10 min)...")
  await page.waitForFunction(() => !location.pathname.startsWith("/login"), { timeout: 600000, polling: 1000 }).catch(() => {})
  await wait(3000)
  note("URL now " + page.url())
  await shot("signed-in")
  await browser.close()
  process.exit(0)
}

// ---- probe ----
await wait(4000)
note("URL " + page.url())
await shot("00-inventory")

// Scan Barcode
page.on("dialog", async (d) => { note("dialog: " + d.message()); await d.dismiss() })
await clickText("Scan Barcode"); await wait(2500); await shot("01-scan")
note("scan text: " + (await page.evaluate(() => document.body.innerText.slice(0, 600))).replace(/\s+/g, " "))
await page.keyboard.press("Escape"); await wait(800)

// Import: catch the native file chooser, hand it the sample CSV only if told to (IMPORT=1), else cancel
const csv = path.resolve("../rehearsal-kit/sample-import.csv")
const chooserP = page.waitForFileChooser({ timeout: 6000 }).catch(() => null)
await clickText("Import CSV or Excel"); await wait(2500); await shot("02-import")
const chooser = await chooserP
if (chooser) {
  note("file chooser opened directly (multiple=" + chooser.isMultiple() + ")")
  if (process.env.IMPORT === "1") { await chooser.accept([csv]); await wait(4000); await shot("03-import-after-file") }
  else await chooser.cancel()
} else {
  note("no native chooser; dialog text: " + (await page.evaluate(() => document.body.innerText.slice(0, 900))).replace(/\s+/g, " "))
}

// Export
await page.keyboard.press("Escape"); await wait(800)
await clickText("Export CSV"); await wait(5000); await shot("04-export")
note("downloads: " + JSON.stringify(fs.readdirSync(path.join(OUT, "downloads"))))

fs.writeFileSync(path.join(OUT, "log.json"), JSON.stringify(log, null, 2))
await browser.close()
