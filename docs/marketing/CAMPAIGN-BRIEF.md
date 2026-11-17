# MalFour Pharmacy System: Campaign & Creative Brief (Rwanda)

*Mark, 10 Nov 2026. Extends the locked 42 s ad (PLAN.md — not included in this repo; "Not a museum" + "One sale"). Product observations come from a read-only walk through the live demo account (URUMURI Pharmacy, "Demo Pharma"), signed in by Noah. Nothing was changed. Market statements are practitioner-level context, **not sourced statistics**: items marked ⚠ must be verified before they appear in any ad or paid copy.*

---

## 1. What the live product shows (observed 10 Nov 2026)

| Area | Observed | Ad use |
|---|---|---|
| **Dashboard** | Cards: Daily Revenue, Transactions, Stock Alerts (low stock), **Expiring Soon (items < 30 days)**, each with "vs yesterday"; Inventory Value by Category (at cost); Low Stock Alerts; **Daily Sales Goal** progress bar (goal RWF 500,000); **Tomorrow's Forecast** (RWF 11,249); **Top Selling Products (7 days)**; Recent Transactions; **Expiring Within 30 Days** list; Refresh Now / Pause Auto-refresh | The "owner sees the day" proof. Forecast + goal bar = predictive clarity |
| **Inventory** | 100 batches, 5,010 units; tabs: Batches, Categories, Operations, Purchases & imports, Valuation, **Stock Forecast**, Compliance; barcode scan, import/export, bulk prices; per-batch expiry date and VAT band | FEFO / expiry story. Stock Forecast tab not yet opened |
| **POS** | Catalogue with keyboard flow (↑ ↓ Enter, F4 to pay); cart, VAT 18% (incl.), discount; client TIN / ID / phone; payments **Cash · Mobile Money · Card · Insurance**; shift-based till ("Start a shift before taking payment"); drawer: cash movements, transaction log, close shift, audit trail | Multi-tender, shift control |
| **EBM / RRA** | On-screen rule: walk-in without a TIN → enter client phone; the phone minus its first digit goes to RRA as client ID and is not printed. Reports: **X, Z and PLU fiscal reports**, Business and Sales dashboards, **Controlled Drug Register** | Tax-compliance proof. The Controlled Drug Register is a strong, rarely advertised differentiator |
| **Insurance** | Claims, Tariffs, Batches, Providers; per claim: patient paid, insurer owed, outstanding, status, form | "Insurance without phone calls" beat |
| **Other** | Patients, Expenses, Reports, Accounting, Settings, Help & Support | Back-office depth |

**Gaps to be honest about**
- The demo shows **zero sales today, nothing expiring and no claims**, so the dashboard looks empty. The "expires in 21 days" glow, MoMo prompt and RSSB check need **seeded data or rebuilt UI**. Ask Emmanuel to seed a realistic day first, or real-screen footage will undersell the product.
- **Offline mode** and the **allergy warning** can't be shown from read-only browsing. The Settings page loaded blank, so EBM configuration wasn't inspected.
- The account shows a **subscription banner (ends 21 Nov 2026)**: crop it out of any recording.
- Real screens show Emmanuel's name (MD, his own account). Use only seeded sample names for patients and customers.

---

## 2. Rwanda market analysis ⚠

1. **Operational friction.** Independent pharmacies buy from a few wholesalers, often on credit, on thin margins. Stock is the biggest asset. Three losses compound: cash tied up in slow movers, stock-outs of fast movers, and **expired product nobody noticed** (a pure write-off, and a regulatory problem if sold). Multi-branch owners run it by notebook, calls and WhatsApp. The emotional truth: *you learn what went wrong after the money is gone.*
2. **Regulatory and fiscal pressure.** RRA requires fiscal receipts through EBM, and MalFour sends sales via its VSDC integration. Pain: separate EBM handling, double entry, VAT-band mistakes (exempt vs 18%), audit fear. Message: **tax filing becomes a by-product of the sale.**
3. **Checkout complexity.** Customers split bills across cash, mobile money and insurance (RSSB/CBHI). Each tender has its own reconciliation (float, claims, co-pay), and errors surface at close. Message: **one till, every tender, a drawer that balances.**
4. **Infrastructure.** Connectivity drops, and a cloud-only till stops. MalFour states it works offline and syncs later (site and explainer; not yet tested by us).
5. **Buyer.** Owner-pharmacist or manager, 1–5 branches, Kigali first, then Musanze, Huye, Rubavu. They decide on trust, staff ease, local support, price and a peer already using it. They live on WhatsApp, Instagram, Facebook and LinkedIn.

**Verify before paid use:** RSSB/CBHI live verification, RRA VSDC certification, MoMo/Airtel providers, Kinyarwanda coverage, any customer numbers.

---

## 3. Campaign core

**Big idea:** *"Your pharmacy shouldn't…"*: true, slightly funny pains, each answered by one real screen (MalFour's own Instagram voice).
**Positioning:** *Built for how Rwandan pharmacies actually work.*
**Audience:** independent pharmacy owners and managers. **Goal:** free demo bookings at malfour.com.

| Pain | Emotion | Proof screen |
|---|---|---|
| Expired stock found too late | Dread, waste | Expiring Within 30 Days; sell oldest first |
| Takings unknown until closing | Anxiety | Live revenue, goal bar, tomorrow's forecast |
| Queue stalls when Wi-Fi drops | Frustration | Offline selling, syncs later |
| Cash, MoMo, insurance split | Confusion | One POS, four tenders |
| Tax as homework | Audit fear | Fiscal receipt to RRA; X/Z reports |
| Many branches, many chats | Overload | One dashboard |
| Controlled-drug paperwork | Compliance worry | Controlled Drug Register |

**Hooks (first 2 s, sound-off safe):** (1) "Your pharmacy isn't a museum." (2) "How much expired stock is on your shelf right now?" (3) "Tomorrow's sales: RWF 11,249. Predicted." (needs seeded data)

---

## 4. Script, 45 s (English VO; Kinyarwanda on-screen lines need a native speaker ⚠)

Voice: John (consented clone) or a Rwandan voice actor. Music: warm Afro-house, ducked under VO.

| # | Time | VO | On-screen (EN / Kinyarwanda ⚠) | Audio |
|---|---|---|---|---|
| 1 | 0–3 | "Your pharmacy isn't a museum." | Your pharmacy isn't a museum. / *Farumasi yawe si inzu ndangamurage.* | Kick enters, stamp hits |
| 2 | 3–8 | "MalFour flags stock before it expires. Sell the oldest first." | Sell the oldest first. | Soft tick |
| 3 | 8–12 | "A queue shouldn't wait for the Wi-Fi." | Offline. Still selling. Synced ✓ | Music filters down, opens on Synced |
| 4 | 12–24 | "Scan. Allergies, checked. Insurance, verified. Paid by MoMo. Tax, filed." | Scan · Allergy · Insurance · MoMo · Tax | UI tick per step |
| 5 | 24–31 | "Today's sales, your goal, tomorrow's forecast. From anywhere." | Today · Goal · Forecast | Gentle rise |
| 6 | 31–36 | "Three branches shouldn't mean fourteen group chats." | One dashboard | Bubble pops, then silence |
| 7 | 36–45 | "MalFour Pharmacy System. Built for how Rwandan pharmacies actually work. Book your free demo at malfour dot com." | Book a free demo · malfour.com | Music resolves on logo |

**Cut-downs:** 15 s = beats 1, 4, 7. 6 s = beat 1 + logo.

---

## 5. Storyboard notes

- **Frame:** cream `#FAF9F8`, charcoal `#2A2A2A`, red `#BE1E2D`; Manrope; calm precise motion, no bounce.
- **Screens:** UI at 110–125% scale, 3° perspective tilt, soft shadow on cream; hard cut from claim to proof; crop browser chrome and the subscription banner. Record only after seeding the demo (a day of sales, three batches under 30 days, one RSSB claim, one MoMo sale), or rebuild the UI in code from the real layout.
- **Shots:** (1) Kigali sunrise aerial, slow push (Pexels, licensed). (2) Product cards, EXPIRED stamps. (3) Expiry list, oldest batch glows. (4) Wi-Fi off, counter keeps ticking. (5) One camera move through one sale: cart → allergy flash → insurance share → generic "Mobile Money" prompt → receipt "Sent to RRA ✓". (6) Dashboard: revenue count-up, goal bar fills, forecast pulses once. (7) Branch overview. (8) End card, logo strike.
- **Grade:** warm, lifted shadows on footage; UI flat and clean. **Transitions:** hard cuts on the beat; one whoosh into the sale.
- **Formats:** 9:16 (Instagram, TikTok, Shorts, WhatsApp Status), 16:9 (YouTube, LinkedIn, site), optional 1:1. Burn in captions.

---

## 6. Distribution and performance playbook

| Channel | Format | Role | Metric |
|---|---|---|---|
| Instagram / Facebook Reels (Kigali, 28–55, pharmacy and business interests) | 9:16, 45 s + 15 s | Awareness, demo clicks | 3 s hook rate, cost per demo request |
| LinkedIn (owners, managers, pharmacists in Rwanda) | 16:9, sponsored | B2B leads | Cost per lead, form-fill rate |
| WhatsApp (status, broadcasts, forwardable 15 s) | 9:16 | Warmest channel | Replies, bookings |
| YouTube | 16:9 + 6 s bumper | Search, retargeting | View-through, site visits |
| Pharmacy associations and events (names ⚠) | Full ad on screen; Emmanuel intro | Credibility | Event sign-ups |
| malfour.com | Ad above the demo form | Conversion | Visit → request % |

**Plan:** weeks 1–2 test three hooks (museum, expiry question, forecast) on equal small budgets; keep the best two; retarget viewers with a customer-proof clip once a Rwandan pharmacy agrees to appear. UTMs per channel, plus "how did you hear" on the form. Success thresholds are set with Emmanuel after week 1 (no benchmark claimed here).

---

## 7. Decisions needed

1. Seed the demo account for recording, or rebuild screens in code?
2. A native Kinyarwanda speaker for the on-screen lines.
3. Confirm the ⚠ claims, and whether offline and allergy warning can be demonstrated.
4. Is this a new campaign cut, or an add-on to the locked ad awaiting Emmanuel's pick?
