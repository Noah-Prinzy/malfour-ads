# MalFour how-to video: add a product to your stock (PLAN, v3)

Edit this file freely. Lines marked **[DECIDE]** need an answer before I build. The build starts only when you say the plan is final. This plan replaces [the inventory explainer v2 plan](../inventory-explainer/PLAN-v2.md).

## 1. What changed (supervisor's correction, 11 Nov 2026)

- **This is a how-to video, not an ad.**
  - Remove the hook ("Every pharmacy runs on stock… here's how MalFour keeps it right").
  - Remove the "Book a free demo" end card.
  - Remove the "Add. Scan. Import. Export." payoff.
- **Teach one thing.** No import. Every other part of adding a product is explained.
- **Structure:** an intro ("How to … in MalFour Pharmacy System"), then Step 1, Step 2 and so on, each a plain instruction: do this, then that.
- **The audience is not fluent in English.** That means simple words, short sentences, a slower voice and longer pauses. The screen shows the action while the voice is quiet.
- **New voice: ElevenLabs** instead of Mistral Voxtral.

**[DECIDE] Title.** The supervisor said "how to edit your stock". The footage we have, already recorded on the demo account, shows **adding a new product to your stock**. The options:

- **A (recommended):** "How to add a product to your stock". Uses the existing footage, with no new records created on the live account.
- **B:** "How to edit a product in your stock", for changing an existing product's quantity, price or expiry. This needs a new recording that edits an existing demo product. That changes data on the live demo account, so it needs your OK first.

**[DECIDE] Export.** Leave it out, so the video teaches one thing (recommended)? Export and Import can each be their own short how-to later, in the same style. Or should "Export your stock list" be a final step?

## 2. Script (simple English; the supervisor allows 4–5 minutes)

**Target: about 4:15–4:45.** That's roughly 520 spoken words at about 125 words a minute, plus pauses and silent on-screen action.

The extra time goes into **explaining each field fully and slowly**, not into more features. It is still one task: adding a product.

Rules for the script:
- one idea per sentence
- at most about 12 words per sentence
- button and field names said exactly as they appear on screen
- no idioms, no marketing words
- every step follows the same shape: **where to click → what to type → why it matters**

| # | Time | On screen | Voice |
|---|---|---|---|
| 0 Intro | 0:00–0:20 | Title card: "How to add a product to your stock", MalFour logo, "MalFour Pharmacy System" | "Hello, and welcome. In this video, you will learn how to add a new product to your stock, in MalFour Pharmacy System. You can pause the video at any time, and follow along on your own computer." |
| 0b Before you start | 0:20–0:40 | A drawn checklist next to a medicine box and an invoice: name ✓ barcode ✓ batch ✓ expiry date ✓ price paid ✓ | "Before you start, have the product box in front of you. You will need its name, barcode, batch number and expiry date. Have your supplier's invoice too. It shows the price you paid." |
| 1 Open the form | 0:40–1:05 | Click **Inventory** → **Add Product** → the form opens → the 5 tabs light up one by one | "Step one. Open the form. At the top of the screen, click Inventory. Then click the Add Product button, on the right. A form opens. It has five tabs: Basic, Pricing, Stock, Supplier, and Rwanda Reg. We will fill them one by one." |
| 2 Name and category | 1:05–1:30 | Basic tab: Brand / trade name → Therapeutic category → INN / generic name | "Step two. The product name. In Brand or trade name, type the name on the box. Then open Therapeutic category, and choose the right group. Here, we choose Analgesics. In Generic name, type the medicine inside. Here, it is paracetamol." |
| 3 How you sell it | 1:30–2:00 | Base unit → Pack size → Units per pack; the blister animation: 1 strip = 10 tablets | "Step three. How you sell it. First, choose the base unit. This is the smallest piece you sell. Here, it is one tablet. Then choose the pack size. Our product comes in strips of ten. So one strip is ten tablets. MalFour counts your stock in tablets, so your numbers stay right." |
| 4 Barcode | 2:00–2:15 | The Barcode field; a small built inset of a scanner beeping | "Step four. The barcode. Click in the Barcode field. Scan the barcode on the box, or type the numbers by hand. Later, at the counter, one scan finds this product." |
| 5 Price | 2:15–2:50 | **Pricing** tab: Cost price 60 → Target gross margin 40 → Sell price 100 (big number callout) | "Step five. The price. Click the Pricing tab. In Cost price, type what you paid for one unit. You can find it on your invoice. Here, it is sixty francs. Now find Target gross margin. Type the profit you want, as a percent. Here, forty. MalFour fills in the selling price for you. Check it. You can still change it by hand." |
| 6 Stock and expiry | 2:50–3:30 | **Stock** tab: Batch number → Opening quantity → Reorder level → Expiry date picker | "Step six. Stock and expiry. Click the Stock tab. Type the batch number from the box. Then type the opening quantity. That is how many you have now. In Reorder level, type the lowest number you want to keep. Below it, MalFour shows the product as low stock. Now click Expiry date. Choose the date printed on the box. MalFour will warn you before this batch expires." |
| 7 Supplier | 3:30–3:45 | **Supplier** tab → choose a supplier | "Step seven. The supplier. Click the Supplier tab. Choose who sold you this product. This step is optional, but it helps you reorder faster." |
| 8 Tax and registration | 3:45–4:10 | **Rwanda Reg.** tab: RRA VAT category → RFDA reg. number → Manufacturer → Controlled substance | "Step eight. Tax and registration. Click the Rwanda Reg. tab. Under VAT category, choose the tax type for this product. Then type the R-F-D-A registration number, and the manufacturer. If it is a controlled medicine, choose Yes. If not, leave it on No." |
| 9 Save | 4:10–4:20 | Click **Save Product** → the "saved" message | "Step nine. Save. Check your tabs one more time. Then click Save Product. A message tells you it is saved." |
| 10 Check | 4:20–4:35 | Type the name in the search box → the product row, with quantity, price and expiry highlighted | "Step ten. Check your stock. In the search box, type the product name. There it is, with the right quantity, price and expiry date." |
| 11 Recap | 4:35–4:55 | The checklist of the 10 steps, each ticking off; then the MalFour logo | "Let's review. Open the form. Add the name, and how you sell it. Add the barcode. Set the price. Add the stock and expiry date. Choose the supplier. Add tax and registration. Save, and check. Well done. You can now add products to your stock in MalFour." |

These need checking against the app before the voice is generated:
- **[CHECK]** The exact tax wording. I won't claim which tax type most medicines use; the video only says "choose the tax type for this product".
- **[CHECK]** That the Supplier tab works as described.
- **[CHECK]** That Reorder level drives the low-stock flag.

**[DECIDE] Tips section** (about +20 s): "Three tips. Always use the date printed on the box. Count in tablets if you sell by the strip. If you make a mistake, you can edit the product later." This only goes in if editing is confirmed in the app.

### Footage for the longer video

The existing take is 1:49, recorded fast, and has no Supplier tab. For a calm 4–5 minute tutorial, the best result is **a new, slow take**, recorded by the same scripted Puppeteer screencast:
- real-time typing
- deliberate mouse moves
- a pause on each field
- includes the Supplier tab

To keep the live demo account clean:
- The new take fills the whole form and then clicks **Cancel**, so **no new product is saved**.
- The **Save → saved message → search** moments reuse the existing take. Same product, same values.

**[DECIDE]** May I record this new take (form filled, then Cancel, nothing saved)? If not, I'll stretch the existing take and build the Supplier step as an animation.

## 3. Picture: a calm tutorial look

**Remove:**
- the hook pharmacy art, the ledger morph and the "✕ Expired" tags
- the toolbar four-card intro
- the TAX/RFDA stamps and the confetti burst
- the Import and Export scenes
- the payoff words
- the demo end card

**Keep, and make clearer:**

- **The real recording at a readable speed.** No more 3–5× speed-ups. Typing plays at real time or a little faster. Waits and the long date picker get cut or frozen.
- **A step banner**, always visible at the top left: a big red number in a circle, then the short step name ("**3** Choose how you sell it"), plus a progress bar "Step 3 of 10".
- **A spotlight on the action.** The rest of the screen dims slightly, a ring follows the cursor, and each click shows a ripple with a soft click sound.
- **Zoom to the field being used.** The camera pushes in, about 1.6–2×, on each field as it's filled, then pulls back so viewers can see where they are on the page.
- **Callout labels.** An arrow and a label point to the exact button or field. The label uses the name as written on screen ("Add Product", "Save Product") so viewers can match it.
- **Captions built into the picture,** like the final: words appear as they're spoken. Calmer than the ad version:
  - larger (60–64 px)
  - at most 2 lines, on a white card placed away from the action
  - on-screen names (buttons, tabs) shown as small button-style chips, so viewers recognise them
- **The one built animation kept:** the strip of 10 → 10 tablets, because it explains a real idea.
- **Transitions:** a soft cream flash between steps. No red wipes; they feel like an ad.
- **Ending:** the recap checklist, then the MalFour logo only, with no call to action. **[DECIDE]** Small "malfour.com" under the logo, or nothing?

## 4. Voice: ElevenLabs

- **Model:** `eleven_multilingual_v2`. It's stable, has the clearest diction, and supports `<break time="1.0s" />` pauses.
- **Settings:**
  - `speed` about 0.85–0.9 (1.0 is normal)
  - `stability` about 0.6, for an even and calm read
  - `similarity_boost` 0.75
  - `style` 0
- **Pacing:** a 1.0 s break between sentences and about 1.5 s between steps. Extra silence is added in the edit while the screen shows the action.
- **Word timings:** the `/with-timestamps` endpoint returns the timing of every character. Captions and animations hang off those directly, with no transcription step needed.
- **Voice audition:**
  - I list voices from your account and the voice library, choosing clear, warm, neutral-accent voices.
  - I also look for voices with an East African or other African English accent, which may be easier for Rwandan viewers to follow.
  - I generate the same two test lines (intro and step 5) with 4–5 voices at speed 0.85 and 0.9, and you pick.

**[DECIDE] What you must do (I can't create accounts or handle keys):**

1. Create or sign in to your ElevenLabs account.
2. **Licence:** the free plan does not allow commercial use and requires attribution. A client video for MalFour needs a paid plan (Starter or higher includes a commercial licence). Please check current pricing on their site.
3. Create an API key (Profile → API keys) and add it yourself to `D:/Noah/Desktop/Projects/PHRONESIS/.env` as `ELEVENLABS_API_KEY=...`. I read it from there and never print it.

**Our own voice (ElevenLabs Voice Design):** go to Voices → Create a voice → Voice Design. Paste the description and the preview text below, generate, play the 3 previews, and save the best one. Send me its **voice ID** in chat; the ID is not secret. The **API key** goes only in `.env`, never in chat.

Description (main, male; it follows on from Paul, whom you chose):
> A warm, friendly male voice in his early thirties with a clear East African English accent, like a patient trainer teaching pharmacy staff in Kigali. He speaks slowly and calmly, pronouncing every word fully and clearly, with short natural pauses between sentences. His tone is encouraging and reassuring, never salesy or rushed, with a gentle smile in his voice. Mid-low pitch, steady pace. Studio-quality recording, close microphone, no background noise, no reverb.

Description (alternative, female):
> A warm, kind female voice in her early thirties with a clear East African English accent, like a patient trainer teaching pharmacy staff in Kigali. She speaks slowly and calmly, pronouncing every word fully and clearly, with short natural pauses between sentences. Her tone is encouraging and reassuring, never salesy or rushed. Medium pitch, steady pace. Studio-quality recording, close microphone, no background noise, no reverb.

Preview text (written in the script's own style, so you hear the real job):
> Welcome. This video shows you how to add a new product to your stock, in MalFour Pharmacy System. Step one. Open Inventory. Click the Add Product button. A form opens. Step two. Type the name of the product. Then choose its category. Take your time. You can pause the video at any step.

Tips:
- If the accent comes out too strong or unclear, change "clear East African English accent" to "a light East African accent, very clear international English".
- If it's too fast, add "speaks at a slow, deliberate teaching pace".
- Generate 2–3 rounds and keep the clearest one, not the most dramatic.

**Credits:** the 4–5 min script is about 3,000 characters. With auditions and 2–3 retakes, expect about 20–25k characters in total. Check that your plan's monthly credits cover this.

## 5. Sound

- **Music:** quiet and calm (tech-minimal or a softer licensed track), well under the voice.
- **SFX:** a soft click on each click, and a gentle chime on Save and on each recap tick. Nothing else.
- **Master:** −14 LUFS, −1 dB true peak.

## 6. Deliverables

- `malfour-howto-add-product.mp4`, 1920 × 1080, about 4:30
- A thumbnail: "How to add a product" plus the form card
- SRT captions
- A YouTube description with chapters (Step 1 … Step 10)
- **[DECIDE]** A Kinyarwanda SRT as well? It would help viewers who read Kinyarwanda better than English. I would translate it, and a native speaker should check it before use.

## 7. Rules carried over

- Only fictional demo data on screen.
- No new records on the live demo account (option A reuses the existing take).
- Licensed audio only, logged in LIBRARY.md.
- Never post or upload. Commit, don't push.
- Quality bar: the steps in the ad quality playbook (stills check before the render, etc.).
