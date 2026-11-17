# Demo account — current state & footage rules

*Observed read-only on 17 Nov 2026 at `pharmacy.malfour.com`, signed in as the
**MalFour Owner** account. Use this before planning any screen recording: it
says what the data looks like today and what must stay off camera. Numbers
change daily — re-check on the recording day.*

## How it's set up

- **Chain:** "MalFour Pharmacy" with **3 branches** — Malfour Pharmacy
  **Kigali** (Main, branch ID 00), **Kampala** (01), **Nairobi** (02). All in
  **RWF**, one RRA MRC, **sandbox** EBM/VSDC devices. (The 10 Nov log described
  an older single-shop demo, "URUMURI Pharmacy / Demo Pharma" — that's gone.)
- **Workspaces:** Head Office at `/hq/…`; each branch at `/branch/<id>/…`
  (open a branch row on HQ Overview → **Work at branch**). In the branch the
  owner shows as **Admin**.
- **Catalogue:** 149 products (mostly generic medicines as "Tablet", plus a few
  "CSV Validation …" test products and "MalFour Pain Relief HQ").

## Snapshot (17 Nov 2026)

| Area | What it shows |
|---|---|
| HQ Overview | 3 branches · 0 online · 3 need attention; takings today 2,264; 3 sales; 5 tills open; **2 offline sales waiting** (27 days old); 0 receipts not at RRA; **11 exceptions** |
| Kigali inventory | **2,033 batches · 5,095,455 units**, 57 expiring soon, 9 low stock; stock value ≈ RWF 129 B at cost |
| Kigali POS | "Live", 147 items; owner's shift open ~18 h |
| Insurance (HQ) | 52 recent claims — RSSB Medical (RAMA) and one private insurer; mostly DRAFT |
| Patients (HQ) | 3 patients |
| Accounting, Nov 2026 | HQ: sold 171.6 M RWF, gross margin 0.3%. Kigali: **−57% gross margin** (cost > sales) |
| Expenses (Kigali) | 7,000 RWF this month (two categories) |
| Transfers | Nothing moving |
| Learning Centers | 13 HQ + 22 branch guides, all "Video coming soon" |

## Off camera — always crop, blur or avoid

1. **Real-looking personal data.** Staff list (branch Settings → Staff) shows
   **personal email addresses**; Insurance and Patients show **names and phone
   numbers**, some of which look like real people (including MalFour staff).
   Never show these. Use seeded fictional customers only.
2. **Accounting / Profit summary** — the demo numbers are unrealistic
   (0.3% and −57% margins) and would undersell the product.
3. **Absurd values** — near-expiry "won't sell" values in the billions,
   stock value RWF 129 B, units in the millions.
4. **Expired batches from 2024** at the top of the Inventory list, and the
   dashboard's "Expiring Within 30 Days" card showing **negative days**
   ("−1030 days left") — reads as a bug on camera.
5. **"VAT unknown"** labels on dashboard cards (Inventory shows the real VAT B).
6. **Test data names** — "CSV Validation …", "Magic Man", "TEST Beneficiary",
   one-letter patient names.
7. **Alert noise** — 11 exceptions, "0 online", tills open 18 h+, offline sales
   stuck 27 days. Fine for an "exceptions" demo, bad for a clean overview shot.
8. The **subscription banner** (seen 10 Nov) and the notification badge.
9. **Duplicate categories** (e.g. "Antibiotic" with 0 batches next to
   "Antibiotics") in Inventory → Categories.
10. The P&L line **"5100 Stock Adjustments / Loss (legacy)"** (RWF 6.3 M in
    Kigali, Nov) — the reason for the −57% margin.

## Ask MalFour to seed before recording

From the campaign brief and how-to plans, still open:

- A believable day of sales (mixed Cash / Mobile Money / Insurance), realistic
  margins.
- Three batches expiring within 30 days (not already expired), and old 2024
  batches cleaned up or archived.
- One clean RSSB claim end-to-end; fictional patients with plausible names.
- Close the long-open shifts and clear the stuck offline sales, or keep one
  deliberately for an "offline" story.
- A recording-only staff user with a non-personal email.

## Safety rules for any automation

- **Read-only by default.** POS, Refund, End Shift, Save Product, price cells in
  Governance ("Click a price to change it") and Inventory Operations all
  write to the live account.
- ⚠ **Inventory → Settings → "Delete all inventory"** clears stock across
  **every branch**. Never click it, never let a script go near it.
- Opening **Add Product** and pressing **Cancel** saves nothing (checked 17 Nov).
- Screenshots: Chrome only captures a tab whose window is visible; with the
  Add Product form open on the 2,000-batch inventory page, capture timed out
  even when visible — record that form on a lighter page or with ffmpeg.
- Reference screenshots: [screenshots/](screenshots/).
- Wait for KPI cards to fill before reading numbers — pages show "0 batches ·
  0 units" while loading (the 11 Nov false alarm).
- Avoid buttons that raise browser confirm dialogs (deletes) during automated
  sessions.
