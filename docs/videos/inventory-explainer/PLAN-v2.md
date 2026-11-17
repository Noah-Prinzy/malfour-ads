# MalFour Inventory explainer, version 2 (polished final) — PLAN

> Shared, editable plan. Noah edits anything here; nothing is built until he says "go".
> Lines marked **[DECIDE]** need his answer. Everything else is my proposal.

## 1. What you asked for (11 Nov 2026)

- Base: **video B** (Jane + corporate tech music) is the favourite.
- **Two polished finals**, same picture and same script:
  1. **Jane** (approved takes `voice/jane/vo/s1–s9`)
  2. **Paul**: my choice is **`en_paul_confident`** (Mistral Voxtral preset). It is warm and sure of itself without sounding salesy. The fallback is `en_paul_happy`.
- **Nicer, more expressive animation.** Not only the dashboard recording: add other visuals that show the pharmacy world around it.
- Look at what's online for **Rwanda / pharmacies**, then make our own.
- **Thumbnail, SRT and YouTube chapters** for both finals.

**[DECIDE]** I read "it should just be the dashboard" as *"it should **not** just be the dashboard"*, because you went on to say "include other visuals". Correct?

## 2. What's out there (research, 11 Nov 2026)

- **No Rwandan pharmacy-software explainer exists on YouTube.** Rwanda's online pharmacy video is government work: the Rwanda Medicines Agency's digital stock tracking, the RBC supply chain, and Rwanda FDA interviews. MalFour would be the first product video of its kind. → Sources: [KT Press](https://www.ktpress.rw/2025/06/rwanda-medicines-agency-turns-to-tech-to-tackle-drug-shortages/), [New Times](https://newtimes.co.rw/article/83433/National/govt-introduces-digital-drug-supply-chain), [eCancer / Rwanda FDA](https://ecancer.org/en/video/12429-understanding-rwanda-s-fda-and-its-role-in-medicine-regulation)
- **Neighbours in the region** (Zendawa, Maisha Meds, Shelf Life) all sell on the same three pains:
  - **expiry losses**
  - **stock-take time**
  - **pen-and-paper / low-connectivity reality**

  → Our hook should name these, in Rwandan terms (RWF, RFDA, TAX_A). Sources: [TechCabal on Zendawa](https://techcabal.com/2025/10/28/the-backend-zendawa/), [TechCabal op-ed](https://techcabal.com/2025/02/08/op-ed-pharmacy-health-tech-in-africa/), [Maisha Meds](https://maishameds.org/)
- **2026 SaaS explainer norms** (106-video study):
  - 80 of 106 show the real interface.
  - 93 of 106 have no presenter on camera.
  - Median length is 1:14 (middle half 0:51–1:44).
  - The common shape is hook → reveal → depth → context.
  - Whiteboard style reads as dated.

  → Keep the real UI as the hero, but **frame it**: floating cards, 3D tilt, kinetic type and callouts, not raw screen recording. Sources: [Advids swipe file](https://advids.co/blog/enterprise-saas-product-explainer-video-swipe-file), [Frameo examples](https://frameo.ai/blog/best-saas-explainer-videos-examples/)

## 3. The idea

**"From the shelf to the screen."** Every feature first appears as a real pharmacy moment, drawn in the brand style (cream, dark red, ink line art). Then it **morphs into the MalFour screen** that handles it. The viewer always sees the problem in the pharmacy before the fix on screen.

The visual language (all built in Remotion, nothing stock):

| Element | What it looks like |
|---|---|
| **Pharmacy line art** | A flat illustration of a Kigali pharmacy counter, with shelves, boxes and a paper ledger. Ink lines draw themselves on (stroke animation), with red accents. No people's faces (stylised hands only). |
| **Morph transitions** | A drawn object becomes the UI. Examples: the ledger page flips into the product table, a medicine box flies into the Add product form, a barcode on a box scans into the barcode field. |
| **Floating UI** | The live take is cut into **cards**, such as the form, a field or a row. They lift off the page with soft shadows and a slight 3D tilt (perspective 1600, about 8°), and parallax over a blurred dashboard. |
| **Kinetic type** | Big words on the beats ("Add." "Scan." "Import." "Export."). Manrope 800, 140–180 px, with letters that snap in on the music's kick (126 BPM grid from v2 analysis). |
| **Live counters** | Numbers tick: Total batches 100 → 101, Units 5,100 → 5,300, sell price RWF 0 → 100. |
| **Expiry alert moment** | A NEW short scene, not in v1. A calendar flips forward to Feb 2028, and a red "Expiring soon" badge pops with a soft chime. It pays off the "warn you before it expires" line. |
| **Rwanda grounding** | A small animated map pin on Kigali in the opening, plus RWF, RFDA reg. and TAX_A shown as stamps in close-ups. |

Text sizes: captions 40 px minimum, kinetic words 140 px or more (your note: no small text).

## 4. Script (unchanged: Jane's approved lines; Paul reads the same)

Keeping the script keeps Jane's approved takes. The only issue: line 1 says "in about two minutes" and the video is about 1:30. That's fine, but **[DECIDE]** should I change it to "in under two minutes"? That means one new Jane take for line 1 only.

## 5. Shot list (target about 1:28, 1080p, 30 fps)

| # | Time (approx.) | Voice-over | Picture |
|---|---|---|---|
| 1 Hook | 0:00–0:09 | "Every pharmacy runs on stock…" | The pharmacy line art draws on, a pin drops on Kigali, and shelves fill. On "goes wrong", a box tips and a paper ledger flutters, red ✕. On "MalFour", the ledger flips into the real dashboard (morph). |
| 2 Toolbar | 0:09–0:16 | "Everything starts here…" | The dashboard in a 3D tilt. The four toolbar buttons lift out as cards, each with an icon animation (plus, barcode, upload, download), on four beats. |
| 3 Basic | 0:16–0:26 | "Adding a product…" | A medicine box (line art) flies into the Add product form (live take). The name and category fields enlarge as cards. "Strip of 10 = 10 tablets": the box opens, a strip slides out, and 10 tablets count up. |
| 4 Barcode | 0:26–0:36 | "Add the barcode now…" | The live take of the field fill, then the built barcode scene (phone and scanner) with a laser sweep and a "found in 0.4 s" badge. |
| 5 Pricing | 0:36–0:42 | "Enter what you paid…" | The live take. Cost 60 → margin 40% → **sell price ticks RWF 0 → 100** as a big floating number. |
| 6 Stock, expiry, tax, save | 0:42–0:54 | "Add the batch…" | The live take (date picker sped up). Then a **new expiry beat**: the calendar flips to 2028 and a "Expiring soon" badge pops. Then RFDA / TAX_A stamps thud in. "Save. Done!": a red check burst and a confetti line of small pills. |
| 7 Import | 0:54–1:04 | "Moving from paper…" | Paper ledger pages fly into a CSV icon, which pours rows into the table (built Import scene, re-animated with stagger and a counter). |
| 8 Export | 1:04–1:12 | "And your stock is always yours…" | The rows highlight, fold into a CSV card, and fly to three destinations (accountant, supplier, you) drawn as line-art icons. |
| 9 Pay-off | 1:12–1:28 | "Add. Scan. Import. Export…" | Kinetic type, one word per beat over a fast montage of the four moments. Then the search result found, and the ad's **logo and end card** (malfour.com). |

## 6. Sound

- **Music:** `tech-minimal` (from video B), cut to the beat grid. Ducked under the voice: 0.09 while speaking, 0.22 in gaps.
- **SFX** (licensed Pixabay, already in the library): swoosh on morphs, a soft tick on each kinetic word, a pop on badges, a chime on Save and on the expiry alert, a paper flutter for the ledger.
  - The paper flutter is a new Pixabay pick, added to `LIBRARY.md`.
- **Mastering:** −14 LUFS, true peak −1 dB (as in v1).

## 7. Paul version

- Generate s1–s9 with `en_paul_confident` (Voxtral). I send you a 20-second audition **before** the full build.
- Paul's lines will run longer or shorter than Jane's. Each scene stretches to fit its line (the timeline is built from the line lengths, as in v1), so both finals stay in sync with no manual retiming.

## 8. Extras (for both finals)

- **Thumbnail** (1280×720):
  - Big type "Stock, sorted." (or **[DECIDE]** your line), in Manrope 800, ink plus a red accent.
  - On the right, the Add product form as a tilted floating card.
  - The line-art box and barcode in the corner, and the MalFour logo.
  - Readable at phone size.
- **SRT:** generated from the caption cues (same timing as the on-screen captions), one per voice.
- **Chapters** (YouTube description, per voice), e.g.:
  ```
  0:00 Why stock matters
  0:09 The inventory toolbar
  0:16 Add a product
  0:26 Barcodes
  0:36 Pricing & margin
  0:42 Batch, expiry & tax
  0:54 Import from CSV / Excel
  1:04 Export your stock
  1:12 Summary
  ```
  The final times will come from the real timeline.

## 9. What I need from you

1. The **[DECIDE]** items above: the "not just the dashboard" reading, the line 1 wording, and the thumbnail line.
2. Anything in the shot list to add, cut or change. Edit this file directly.
3. Then say **go**. I build both finals in one pass, plus the Paul audition first, then the thumbnail, SRT and chapters.

## 10. Rules carried over

- Fictional demo data only.
- No new records created in the live app (the existing take is reused, so no new recording is needed).
- No real faces or voices.
- Licensed assets only, logged in `LIBRARY.md`.
- Nothing posted or uploaded.
