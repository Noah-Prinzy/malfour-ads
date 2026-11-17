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

await wait(5000)
const body = async (n = 1500) => (await page.evaluate(() => document.body.innerText)).replace(/\s+/g, " ").slice(0, n)
note("inventory header: " + (await body(400)).slice(250))
await page.type('input[placeholder*="Search products"]', "Demo", { delay: 50 }); await wait(3500); await shot("20-search-demo")
note("search Demo: " + (await body(1400)).slice(380))
await clickText("Purchases & imports"); await wait(3500); await shot("21-purchases-imports")
note("purchases & imports: " + (await body(1600)).slice(380))
fs.writeFileSync(path.join(OUT, "log3.json"), JSON.stringify(log, null, 2))
await browser.close()
