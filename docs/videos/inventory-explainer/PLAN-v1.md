# Explainer video plan: MalFour Inventory (Add product · Barcode · Import/Export)

*Draft 1, 10 Nov 2026. Shared working doc: edit anything. Nothing is recorded until this is locked.*

## 1. Brief

| | |
|---|---|
| **Ask (Emmanuel)** | One feature explainer: visual + audio + description of what it is, the problem, how it helps. **The picture must be a live, recorded, step-by-step walkthrough.** |
| **Feature** | **Inventory**, centred on: (1) adding a product, (2) the barcode, (3) importing and exporting |
| **Audience** | Pharmacy owners and staff watching on **YouTube**; clients and prospects |
| **Length** | 1:45–2:00 (about 250 words of voice-over) |
| **Format** | 16:9, 1080p master (4K screen capture if the machine allows), plus a 9:16 cut for Shorts/Reels later |
| **Language** | English first; Kinyarwanda/French captions optional later (native-speaker check) |
| **Purpose for Noah** | A showcase of quality: it will be judged on clarity, audio and craft |

## 2. What the app does (observed live, 10 Nov 2026)

**Inventory screen** (`/inventory`): toolbar of **Add Product · Bulk Prices · Import CSV or Excel · Export CSV · Scan Barcode**. KPI cards: total batches, units in stock, expiring soon, low stock. Tabs: Batches, Categories, Operations, Purchases & imports, Valuation, Stock Forecast, Compliance, Settings. Filters: category, supplier, status. Batch table: product, category, VAT band, quantity, cost, selling price, expiry, supplier, status.

**Add product: a 5-step dialog**
1. **Basic:** brand/trade name (required), therapeutic category, INN/generic name, base unit (e.g. Tablet), **selling pack** (pack size such as "Strip of 10", units per pack; it prints "Sold as Strip of 10 · contains 10 Tablet"), **barcode**, description.
2. **Pricing:** cost price and sell price (both required, RWF), plus a **markup calculator**: enter a target gross margin % *or* markup % and the sell price fills in.
3. **Stock:** batch number (required), opening quantity, **expiry date (required)**, reorder level, manufacture date, storage condition (e.g. Ambient 15–30 °C).
4. **Supplier:** name, contact, address.
5. **Rwanda Reg.:** **RRA/VSDC fiscal classification** (TAX_A 0% exempt, TAX_B 18% standard, TAX_C 0% zero-rated; "the item code is generated on the server"), RFDA registration number, manufacturer, country of origin, **controlled-substance flag** (narcotic/psychotropic → special register).

**Not yet seen:** what Import and Export actually open (Import opened nothing visible in the pane, likely a native file chooser; Export likely downloads), and what Scan Barcode does (camera vs a typed/scanner field; there is also a "Scan barcode…" input beside it). All three get checked in rehearsal (section 7) before the script is locked.

**Observed risk:** the app was slow at times (clicks took several seconds to show). Recording must allow for this.

## 3. Problems and how each feature solves them (the story)

| Problem the viewer knows | Feature | Message |
|---|---|---|
| Typing every new medicine takes time, and mistakes in packs/prices cause wrong stock and wrong change | **Add product** with pack-size logic and markup calculator | "Set the pack once; the price follows your margin." |
| Wrong VAT or missing registration details = tax trouble | **Rwanda Reg. tab** | "Tax category and registration are captured at the start." |
| Looking up products by name is slow and error-prone at the till | **Barcode** | "One scan finds it, or adds it." |
| Hundreds of products typed by hand when moving from paper or another system | **Import CSV/Excel** | "Bring your whole stock list in one go." |
| Accountant, auditor, supplier want the numbers | **Export CSV** | "Take your stock out just as easily." |

## 4. Script (draft 1, about 115 s, about 255 words)

*Voice: calm, warm, unhurried, about 130 words per minute. Product name said "Mal-Four". Screen text in brackets. Every action shown on screen is the action being spoken.*

| # | Time | Screen (live recording) | Voice-over | On-screen text |
|---|---|---|---|---|
| 1 | 0:00–0:10 | Slow push on the Inventory page, numbers visible | "Every pharmacy runs on stock. Get the stock wrong, and everything at the counter goes wrong. Here's how MalFour keeps it right, in about two minutes." | MalFour Pharmacy System · Inventory |
| 2 | 0:10–0:22 | Zoom to the toolbar; cursor touches each button | "Everything starts here. Add a product, scan a barcode, import your list, or export it." | Add · Scan · Import · Export |
| 3 | 0:22–0:40 | Add Product → Basic: type a name, choose a category, set the pack (Strip of 10); caption reads "Sold as Strip of 10" | "Adding a product takes one short form. Name it, choose the category, and set how you sell it. A strip of ten, and MalFour knows it's ten tablets." | Step 1 · Basic |
| 4 | 0:40–0:55 | Barcode field: scan or type the code | "Add the barcode now, and the product will be found in one scan at the till, or when you receive stock." | Barcode |
| 5 | 0:55–1:10 | Pricing tab: cost price, then type a target margin; sell price fills itself | "Enter what you paid, type the margin you want, and the selling price is worked out for you." | Cost → margin → price |
| 6 | 1:10–1:25 | Stock tab (batch number, quantity, expiry) then Rwanda Reg. tab (VAT category, controlled flag); Save | "Add the batch and its expiry date, so MalFour can warn you before it expires. Then the tax category and registration details. Save. Done." | Batch · Expiry · Tax · Save |
| 7 | 1:25–1:45 | Import: choose a CSV/Excel file; preview/confirm; the list fills | "Moving from paper or another system? Don't type it all. Import a CSV or Excel file and your whole list comes in at once." | Import CSV or Excel |
| 8 | 1:45–1:55 | Export: click Export; file appears | "And your stock is always yours. Export it in one click, for your accountant, your supplier, or yourself." | Export CSV |
| 9 | 1:55–2:05 | Back to the full list; logo end card | "Add. Scan. Import. Export. MalFour Pharmacy System, built for how pharmacies actually work. See it yourself at malfour dot com." | malfour.com |

*Word count and timing get re-measured on the first real voice take; trim steps 6 and 7 first if over time.*

## 5. Audio plan ("best quality")

| Job | Plan |
|---|---|
| **Voice** | **Decision needed.** (a) John's cloned voice (Voxtral): he consented to **"the MalFour ad"** only. An explainer on YouTube is a new use, so **ask John to extend his consent in writing**. (b) A Rwandan voice actor, recorded properly (about $50–150). (c) Noah's own voice. A real human read beats a clone for a showcase piece; the clone is the fast route. |
| **Recording (if human)** | Quiet room, soft furnishings, pop filter or sock over the mic, phone about 20 cm away or a USB condenser, 48 kHz / 24-bit WAV, three full reads |
| **Script pass** | Read it aloud first, then cut anything that trips the tongue; spell "MalFour" as "Mal-Four" for the TTS |
| **Cleaning** | Noise reduction (light), de-ess, gentle compression, EQ for warmth (cut below 80 Hz, small presence boost near 3 kHz) |
| **Music** | Soft modern Afro-house or warm instrumental, **from Pixabay (licence recorded)**, mixed 18–20 dB under the voice, ducked on every line |
| **SFX** | Subtle UI sounds: click, tick, "pop" when the price fills, soft whoosh between steps (royalty-free) |
| **Loudness** | Master to **-14 LUFS integrated, true peak -1 dB** (YouTube's target), two-pass loudnorm; check on phone speaker and headphones |

## 6. Picture plan

**Tools (all free, already in use or installable):**
- **Recording:** a dedicated Chrome window at exactly **1920×1080**, driven by Puppeteer, captured with **ffmpeg (gdigrab) at 60 fps** with a visible, human-paced cursor (smooth curve movement) and click ripples. Slow responses get trimmed or speed-ramped in the edit. (The Shamba capture setup is the model.)
- **Edit and motion:** **Remotion** (existing template): zooms, callouts, step badges, captions, lower-thirds, end card.
- **Audio:** Mistral Voxtral (if cloning), or the human take; **ffmpeg + a free DAW (Audacity/Reaper)** for clean-up; loudnorm for the master.
- **Thumbnail:** a designed 1280×720 in the MalFour brand (red `#BE1E2D` on cream `#FAF9F8`, Manrope).
- **Outputs:** 1080p H.264 (YouTube), a 4K master if the capture allows, SRT captions, chapters list.

**Look:** the app UI is the hero: cream background, big, crisp, 110–125% zoom on every click, a soft red highlight ring around the field being used, step badges (1–5), captions burned in at the bottom third. Calm motion, no bounce.

## 7. Recording method and safety

- **Demo data only:** use fictional sample data. The account already holds SAMPLE batches. New test product: a fictional medicine name; fictional supplier.
- **Test files:** make a **sample import CSV** (about 8 rows, fictional products, the app's own template if it offers one: download it from the import dialog).
- **Cleanup:** the walkthrough adds test data. Plan to delete or deactivate the test product after recording, or accept it (Emmanuel's call).
- **Before recording:** hide the subscription banner (dismiss until tomorrow), turn off notifications, maximise the window, reset zoom to 100%, clear the search box.
- **Rehearsal pass:** walk every step once with no recording; note exact click paths, load times and any error states; fix the script to match what the app really does.
- **Takes:** 3 full takes; pick the best segments per step.

## 8. Timeline (suggested)

1. Lock the plan (you).
2. Rehearsal and screenshot pass.
3. Final script and voice choice.
4. Voice recording or clone.
5. Screen recording.
6. Edit, mix, captions.
7. Review draft.
8. Revisions and final export.

## 8a. Decisions (Noah, 10 Nov 2026)

- **Voice:** John's voice. Noah is sending it. We still need John's consent covering the explainer videos on YouTube (his first consent covered the ad only), and ideally a longer clean reference recording.
- **Barcode:** a phone showing a barcode image, scanned on camera or by the app's barcode field.
- **Cleanup:** test products may be deleted after recording.
- **Audience:** YouTube viewers and clients (not the board). **Account:** Noah's signed-in demo account, with all permissions.

## 8b. Rehearsal findings and decision (11 Nov 2026)

- **Scan Barcode:** opens a camera view ("Hold the barcode inside the guide until it is detected") plus an "External USB/Bluetooth scanner" box (focus, scan, "Use barcode"). The code fills the search box and filters the product list; an unknown code shows "No products match your filters" (it does **not** offer to add the product). Camera needs HTTPS and camera permission.
- **Import CSV or Excel:** opens a single-file chooser straight away (no template or preview seen).
- **Export CSV:** not confirmed (a modal was in the way during the test).
- **Purchases & imports tab:** a different feature: RRA supplier invoices and customs imports.
- **Incident:** after the rehearsal ran a real import of `sample-import.csv`, the demo inventory showed 0 batches (it had 100 batches, 5,108 units just before). Cause unknown (import, a reset, or a server problem). Flagged to Noah; Emmanuel to check and restore. **No more imports.**
  - **Resolved (11 Nov 2026, later): false alarm.** A fresh check showed 100 batches and 5,108 units, and no "Demo" products. The page reads "0 batches · 0 units" while it is still loading, which is what the rehearsal caught. The import added nothing. Lesson: wait for the KPI cards to fill before reading any number.
- **Decision (Noah):** the **barcode, Import and Export are narrated over visuals Mark builds** (motion graphics in the app's style). **Add product** stays a live recording.
- **Script line 4 changed** to match the app: "Add the barcode now. Later, one scan with a camera or a USB scanner finds the product in seconds."

## 9. Open questions (items 1, 3 and 4 are now decided; see 8a)

1. **Voice:** John (with extended consent), a Rwandan actor, or you?
2. **Import/Export:** is there a downloadable import template? Can we do a real file pick on this machine's browser window?
3. **Barcode:** do they scan with a camera, a USB scanner, or a typed code? For the recording, one of these must be possible. A phone showing a barcode image works too.
4. **Cleanup:** is it OK to leave a test product in the demo, or should it be deleted after?
5. **Deliverables:** English only, or captions in Kinyarwanda too? Also a 9:16 cut?
6. **Branding:** can we use the MalFour logo and the end card as in the ad?

> **Version 2 (polished finals, Jane + Paul):** see [PLAN-v2.md](PLAN-v2.md). Superseded for the how-to direction by [../howto-add-product/PLAN.md](../howto-add-product/PLAN.md).
