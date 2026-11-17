# MalFour Pharmacy System — Study for the explainer video

Researched 13 Nov 2026 from the live app (`pharmacy.malfour.com/hq`, Head Office
workspace, demo account with fictional data) and the public site
(`malfour.com`). Read-only; nothing was created or changed.

---

## 1. What the system is

**MalFour Pharmacy System** is an **integrated ERP + POS platform for pharmacies**,
built by **MalFour Limited** (a software company serving African businesses —
ERP, POS and digital-learning tools). It runs a whole pharmacy business, not just
a till: selling, inventory, multi-branch control, accounting, regulatory
compliance, insurance claims, patients, staff and purchasing — in one system.

Positioning (malfour.com): *"Powering Businesses with Intelligent Software
Solutions… Every system starts with how you actually operate, not a generic
template."* The Pharmacy System is their flagship product: *"Integrated ERP + POS
built for modern pharmacies."*

**Who it is for:** pharmacies and pharmacy chains in East/Central Africa (demo
chain runs branches in **Kigali, Kampala, Nairobi**; region selector shows
Uganda; currency RWF; regulator RRA). From a single shop to a multi-branch group
with a Head Office.

**Design philosophy (their words):**
- **Built for local realities** — patchy connectivity (**offline-first**: tills
  keep selling offline and sync later; the "heard"/"offline sales waiting"
  concept), mobile money, real workflows.
- **Intelligent by design** — *rule-based automation, statistical pattern
  detection, smart alerting* built on real pharmacy data ("No data analyst
  required").
- **Built to grow** — success measured in "hours saved and problems that stop
  recurring".

**Two levels of the product:**
1. **Head Office (HQ)** — the multi-branch oversight workspace studied here
   (`/hq/...`): watch every branch, compare, govern prices, see group accounts
   and compliance.
2. **Branch workspace** — the operational layer each shop uses: the **Point of
   Sale** (Cart, Dispense, Scan, Hold, Returns, Split Pay — visible in the
   website hero screenshot) and the **Inventory** entry screens (Add Product,
   Scan, Import, Export; Basic / Pricing / Stock / Rwanda Reg tabs — documented
   in our earlier how-to project). This is where the first video lived.

---

## 2. Features & functionalities (Head Office modules)

Top navigation: **Overview · Stock · Transfers · Compliance · Insurance ·
Patients · Exceptions · Staff · Governance · Expenses · Reports · Accounting ·
Settings.**

| Module | What it does | Key sub-areas |
|---|---|---|
| **Overview** | Live chain dashboard: today's takings, sales, tills open, offline sales waiting, receipts not at RRA; every branch's status (online/quiet/offline), takings, fiscal state, stock & expiry, alerts. | All Branches / Month to Date; "Needs attention" feed |
| **Stock** | Cross-branch stock: where a medicine is, how much, which lot — every branch side by side. | All branches, Move stock, Where is it, Near expiry, Transfers |
| **Transfers** | Move stock between branches/HQ; track what's approved but not received, late first. | New transfer, Plan, Requests, Moving, History, Routes (waiting to leave / in transit / late) |
| **Compliance** | **Rwanda fiscalisation**: EBM/VSDC receipts to **RRA** per branch — live, waiting, refused, not-live; controlled drugs; licences. A till stops issuing receipts if RRA hasn't accepted one for 24 h. | All branches, Controlled drugs; EBM/VSDC by branch; Insurance claims status; Rwanda FDA premises licence & Pharmacist (NPC) licences |
| **Insurance** | Insurer claims, price lists, monthly submissions and payments (RSSB/RAMA, CBHI/Mutuelle, private). Patient share vs insurer-owed, claim status, RSSB form PDFs. | Claims, Tariffs, Batches, Providers |
| **Patients** | Every customer/patient: prescriptions, insurance cards, history, in one place. | Filters: Insured, Active prescriptions, Chronic, Allergies, Owing, Families, Businesses; prescription-code lookup; owes (credit) |
| **Exceptions** | Everything needing attention now, most urgent first — operational + loss prevention. | Alerts, Voids & discounts, Cash, Credit (offline sales, expiring stock, quiet branch, till left open, out-of-stock) |
| **Staff** | Everyone across the chain, where they work, who's on duty now. | People (Admin/Pharmacist/Cashier), Attendance, Performance; shifts, per-person licence expiry, invites, activity log, branch access |
| **Governance** | One chain price for every branch, override only where needed (149-product drug catalogue). | Prices, Promotions, Branches, Roles, Plan |
| **Expenses** | Everything the pharmacy spends, receipt → approval. | Expenses, Bills, Recurring, Budget plan, Insights; categories, budget vs takings, approval workflow, CSV export |
| **Reports** | Full ERP reporting engine (≈60 reports — see §3). | Fiscal (X/Z/PLU), Business overview, Sales, Receivables, Insurance, Purchases, Payables, Inventory, Taxes, Accountant, Dashboards, Controlled Drug Register |
| **Accounting** | Plain-language profit summary — *"Did the pharmacy make money this month, in plain words."* Per-branch P&L, 6-month trend, PDF. Backed by a real double-entry ledger (GL 4000 Sales, 5000 COGS, 6000 OpEx…). | Profit summary; each branch |
| **Settings** | Pharmacy profile (logo on receipts, reg no, Tax PIN, Rwanda FDA licence/class), Branches, Billing & Plan, Data & Backup, Inventory rules, Printers (receipt & label), Integrations & API (RRA VSDC per branch), Notifications, Security (2FA, sessions, audit log), Localization (currency/timezone/language), Appearance. | — |

### Branch workspace (operational layer)
- **Point of Sale** — Cart, Dispense, barcode Scan, Hold cart, Reprint, Silent
  print, Returns, Split Pay, walk-in vs insured customer, discounts, VAT, quick
  categories, live stock on each product.
- **Inventory entry** — Add Product (Basic: name, category, generic; unit &
  pack sizes; Pricing: cost + margin → auto selling price; Stock: batch, qty,
  expiry; Rwanda Reg: tax category + RFDA no.), Scan, Import (CSV/Excel),
  Export. (Subject of the first how-to video.)

### "Intelligent" features (marketing pillars, visible in the app)
- **Smart stock alerts** — low-stock and approaching-expiry detected early.
- **Sales pattern detection** — top sellers, slow movers, peak windows from your
  own history.
- **Automated reporting** — daily/weekly/monthly summaries with no manual effort.
- **Intelligent drug search** — fuzzy match across brand/generic/dosage.

---

## 3. Reports catalogue (what the engine can produce)

Fiscal (X, Z, PLU per branch) · **Business:** Balance Sheet, Performance Ratios,
Cash Flow, Profit & Loss · **Sales:** Discount Analysis, Product Sales, Sales
Analysis, Returns, Summary, by Customer, by Payment Method · **Receivables:** AR
Aging (detail/summary), Customer Balances, Payments Received · **Insurance:**
Balances, Claims Register, Monthly Submissions, Sales by Insurer, Payments &
Rejections · **Purchases:** Budget vs Actual, Expense Details, Expenses by
Category, Purchases by Item/Vendor, Supplier Performance · **Payables:** AP Aging
(detail/summary), Payables Summary, Payments Made, Vendor Balances ·
**Inventory (≈19):** ABC Classification, Branch Comparison, Expiry Risk, Ageing,
Position, Summary, Turnover, Valuation (+ as-at), Reorder, Serial Traceability,
Shrinkage, Slow/Non-moving, Stock Count Variance, Stock Movement, Stock by Batch,
by State, in Transit · **Taxes:** VAT Summary · **Accountant:** Account
Transactions, Account Type Summary, General Ledger, Journal, Trial Balance ·
**Dashboards:** Business, Sales · **Controlled Drug Register.**

---

## 4. Use cases (who does what)

- **Owner / HQ manager** — every morning open Overview, see which branches need
  attention, work the Exceptions list; compare branch performance; read the
  plain-language monthly profit; set chain prices and promotions; approve
  expenses; watch RRA compliance and licence expiries across the group.
- **Branch pharmacist** — dispense prescriptions at POS, manage controlled
  drugs, add/receive stock, check expiry, serve insured patients.
- **Cashier** — ring up sales (incl. offline), take mobile money/cash/split
  payments, issue RRA fiscal receipts, handle returns and held carts.
- **Accountant / finance** — P&L, balance sheet, VAT, receivables/payables,
  general ledger, trial balance — all generated from live operations.
- **Stock controller** — transfers between branches, reorder reports, expiry and
  shrinkage control, batch/serial traceability for recalls.
- **Insurance clerk** — build and submit RSSB/CBHI claim batches, track
  insurer-owed balances and rejections.

### Problems it solves (video angles)
Offline sales not lost · stock-outs and expiry caught early · RRA receipts never
stuck · insurance claims not left on paper · one price list across branches ·
accounting without an accountant · one screen to watch every branch · recalls by
batch/serial · credit customers tracked · licences never lapse.

---

## 5. Brand & colour theme for the videos

> **SUPERSEDED — see `../BRAND.md`.** The official Brand Identity pack
> (received 13 Nov 2026) is authoritative and corrects the web-sampled values
> below: the brand red is **`#BE1E2D`** (logo) / `#BA000C` (book), the base is
> **white, not cream**, and the typeface is **Inter, not Manrope**. The table
> below was my earlier website sample and is kept only for reference.

**Earlier web sample (malfour.com computed values — superseded by BRAND.md):**
The site chrome read as deep maroon on near-white; the official pack confirms a
brighter red on white with Inter.

| Role | Hex | Use |
|---|---|---|
| **Primary — deep maroon / oxblood** | `#610000` | headers, key words, highlight outlines, CTA, the logo slash |
| Darker red (hover / secondary accent) | `#8b0000` | links, pressed state, deeper accent |
| **Background — warm cream / off-white** | `#faf9f8` | base (60%) |
| Light neutral | `#eeeeed` | panels, dividers |
| **Ink — near-black** | `#1a1c1c` | body text (30%) |
| White | `#ffffff` | text on maroon, cards |
| Warm taupe/brown | `#5a403c` | secondary warm neutral, subtle |

- **Typeface: Manrope** (sans-serif) for everything — display and text; use
  weights for hierarchy. Licence: OFL (free for commercial video).
- **60-30-10:** cream `#faf9f8` dominant, ink `#1a1c1c` secondary, maroon
  `#610000` as the 10% accent reserved for key words, highlights and CTA.
- **Logo:** "MalFour" wordmark with a red forward-slash mark (its 'f'); on
  receipts it prints between the RRA mark and the national seal.
- **Tone:** confident, practical, local, warm; not flashy. "Intelligent",
  "built for how you actually work", ROI, hours saved.

**To do:** check MalFour's YouTube channel (linked in the site header) for any
existing video to match motion/sound identity before we lock the style frame.

---

## 6. Things easy to miss (include these)

- **Offline-first** is a headline feature, not a footnote — "heard", "offline
  sales waiting", tills that keep working without internet. Strong local hook.
- **RRA EBM/VSDC fiscalisation** is deeply built in (per-branch devices, 24-hour
  receipt cut-off) — a real compliance pain the system removes.
- **Real double-entry accounting** underneath, surfaced in **plain language** —
  "did the pharmacy make money this month" — a genuine differentiator for
  owners who aren't accountants.
- **Insurance** (RSSB/RAMA, CBHI/Mutuelle) claim workflow with printable forms —
  big for Rwandan pharmacies.
- **Multi-branch** is core: chain pricing with overrides, transfers, branch
  comparison, Head Office vs branch workspaces.
- **Regulatory depth:** controlled-drug register, Rwanda FDA premises licence,
  pharmacist (NPC) licences, batch/serial traceability for recalls.
- **Approval workflows** (expenses), **RBAC** (admin/pharmacist/cashier, branch
  scoping), **audit log**, **data backup/export** — enterprise-grade trust.
- **Intelligence** is explicitly "rule-based + statistical", not hype — honest
  framing to keep in the script.
- Currency **RWF**, region East Africa; demo branches Kigali/Kampala/Nairobi.

---

## 7. Learning Center structure — the two libraries (deep study 14 Nov 2026)

The app ships **two separate Learning Centers**, one per workspace. This matters
for the series: the supervisor's voice feedback (14 Nov) was looking at the
**branch** library, not the HQ one the first video came from.

### 7a. Head Office Learning Center (`/hq/tutorials`) — 13 guides
Categories (filter chips): All · Head office · Reports & compliance · Help ·
Inventory · Patients & insurance · Team & settings · Finance · Getting started.
Each guide card = category tag, title, one-line task, read time, "Read guide".
A guide page = "Follow these steps" (numbered) + a "Video lesson" slot
("Video coming soon… the video will play here when it is published") + "Try it
in the app" deep links + "Related pages". This is the slot our videos fill.

| # | Guide | Category | Read |
|---|---|---|---|
| 1 | Watch your branches | Head office | 3 min |
| 2 | Check fiscal and stock issues | Head office | 3 min |
| 3 | Work through exceptions | Head office | 4 min |
| 4 | Compare branch performance | Reports & compliance | 3 min |
| 5 | Review stock across branches | Inventory | 4 min |
| 6 | Coordinate branch transfers | Inventory | 5 min |
| 7 | Review insurance across branches | Patients & insurance | 4 min |
| 8 | Find patients across the organisation | Patients & insurance | 3 min |
| 9 | Manage staff and branch access | Team & settings | 5 min |
| 10 | Set up branches and policies | Team & settings | 5 min |
| 11 | Review organisation finances | Finance | 5 min |
| 12 | Get help with a problem | Help | 2 min |
| 13 | Follow head office updates | Getting started | 2 min |

### 7b. Branch Learning Center (`/branch/<id>/tutorials`) — 22 guides
**This is the library the supervisor's audio feedback points at** — it has a
**Sales & POS** category and a branch **Inventory** category (the "cores" he
named). Categories: All · Sales & POS · Inventory · Patients & insurance ·
Reports & compliance · Team & settings · Help · Getting started · Finance.

| Guide | Category | Read |
|---|---|---|
| **Make your first sale** | Sales & POS | 3 min |
| **Review a refund or void** | Sales & POS | 4 min |
| **Close and review a till** | Sales & POS | 4 min |
| **Check stock and expiry** | Inventory | 3 min |
| **Import and receive stock** | Inventory | 5 min |
| **Count stock on the shelf** | Inventory | 5 min |
| **Move stock between branches** | Inventory | 5 min |
| Serve an insured patient | Patients & insurance | 4 min |
| Find and update a patient | Patients & insurance | 3 min |
| Download an RSSB claim form | Patients & insurance | 3 min |
| Review sales reports | Reports & compliance | 3 min |
| Review VAT and fiscal records | Reports & compliance | 4 min |
| Set up your pharmacy | Team & settings | 4 min |
| Manage staff access | Team & settings | 4 min |
| Record an expense | Finance | 4 min |
| Track supplier bills | Finance | 4 min |
| Create a customer invoice | Finance | 5 min |
| Review money and banking | Finance | 4 min |
| Find your way around the dashboard | Getting started | 4 min |
| Manage your profile and security | Getting started | 3 min |
| Stay on top of updates | Getting started | 2 min |
| Get help with a problem | Help | 2 min |

So the full catalogue is **13 (HQ) + 22 (branch) = 35 guide pages**, each with a
"Video coming soon" slot. The earlier "13 guides → 26 videos" scope was HQ-only.

---

## 8. Branch (operational) workspace — deep study

The branch workspace is reached from HQ by opening a branch row →
**"Work at branch"** (URL `/branch/<id>/...`). It is the layer cashiers and
pharmacists use. Top nav: **Dashboard · Inventory · Transfers · Point of Sale ·
Insurance · Patients · Expenses · Reports · Accounting · Settings**, plus
"← Back to Head Office". Role for the owner here reads **Admin**.

### 8a. Dashboard
"Welcome back, [name]." KPI tiles: **Daily Revenue** (vs yesterday), **Transactions**
(vs yesterday), **Stock Alerts** (low-stock count), **Expiring Soon** (items < 30 d).
"Open learning center" banner (→ branch library). **Inventory Value by Category**
donut (total at cost, e.g. RWF 128.91B; 14 categories, % and value). **Low Stock
Alerts** list with per-item **Quick Reorder**. Refresh / Pause Auto-refresh.

### 8b. Inventory — the core module (full map)
Header KPIs: Total Batches, Units in Stock, Expiring Soon, Low Stock. Toolbar:
Add Product, Bulk Prices (PRODUCTS) · Import CSV or Excel, Export CSV (DATA) ·
Scan Barcode (FIND). Also inline Scan / Import / Export / Add product.
**Stock is tracked per BATCH/lot** (batch no "BN…", expiry, RRA badge, VAT class).

Sub-tabs:
- **Batches** — product list: name + RRA badge + batch no, category, VAT (A/B/C),
  quantity (units + base unit e.g. Tablet), cost price, selling price, expiry,
  supplier, status (Expired / OK / low). Filters: Categories, Suppliers, Status.
  Row "…" menu for per-batch actions.
- **Categories** — create category; list of **24 categories**, each with batch
  count + Edit/Delete.
- **Operations** — "Controlled stock operation. Every operation posts a
  lot-level, location-aware ledger document." Operation type (e.g. Quarantine
  stock), Source location, Batch/lot, Quantity, Reference (recall notice / SOP /
  doc no.), Destination, Reason/audit notes → Post operation. + Location setup
  (receiving bays, shelves, cold-chain zones, dispensing counters).
- **Purchases & imports** — RRA/EBM integration: **Supplier invoices from RRA**
  (suppliers bill your TIN in EBM; accept = approved 02 → PO to receive; reject =
  cancelled 04), **Imported items from RRA (customs)** (customs lines for your
  TIN; approve 3 → booked as a product, stock in 01; reject 4), **Notices from
  RRA** (announcements to your TIN, fetched ~every 30 min → notification bell).
  Each has Fetch from RRA / Full re-read.
- **Locations** — live lot-level balances per physical zone; state filter.
- **Cycle counts** — compare physical count to location balance; variance needs a
  reason + pharmacist approval; Count approvals queue.
- **Valuation** — value inventory as of a date; Batch / Location / Qty / Value.
- **Stock Forecast** — projected levels from inventory + incoming + sales
  forecast: Current, Reserved, Available, Incoming, Forecast Out, Projected, Avg
  Daily Sales, Months of Stock, Status (Overstocked / Normal / low).
- **Compliance** — Expiry risk (<90 d), Recalled lots (never dispensable, kept
  for traceability), Cold-chain exceptions (fridge stock outside a cold-chain
  location), Controlled stock (needs reconciliation), Disposed stock (destroyed,
  kept for audit), Cold-chain temperature log (out-of-range → corrective action).
- **Settings** — Low Stock Threshold (10), Expiry Warning Days (30), VAT
  registration note (A exempt / B 18% / C zero-rated; D n/a; no return to
  non-VAT; each item's tax type changeable once), Default VAT 18%, Batch Tracking.

**Add Product** = 5-step modal:
1. **Basic** — Brand/Trade name*, Therapeutic category, INN/Generic name, Base
   unit (smallest dispensed), Selling pack (pack size + units per pack, e.g.
   "Strip of 10 = 10 Tablet"), Barcode, Description.
2. **Pricing** — Cost price*, Sell price*; Markup calculator (target gross margin
   % OR target markup % → auto-fills sell price).
3. **Stock** — Batch number*, Opening quantity, Expiry date*, Reorder level,
   Manufacture date, Storage condition (e.g. Ambient 15–30 °C).
4. **Supplier** — Supplier name (select/type), contact, address.
5. **Rwanda Reg.** — RRA/VSDC fiscal classification (LIVE): item class search,
   RRA item class*, confirm-class checkbox, Product type*, Fiscal origin country*,
   Packaging unit*, Quantity unit*, RRA item code (generated on save — code only,
   not submitted to RRA), RRA VAT category (tax type changeable once).

### 8c. Point of Sale — the core module (full map)
Action bar, grouped: **SALE** → Take Payment, Hold Sale, Split Payment ·
**RECEIPTS** → Reprint, Refund, Refund Journal · **NON-FISCAL** → Create Proforma,
Create Training, Document Journal · **DRAWER** → Open Drawer, End Shift ·
**VIEW** → Shortcuts.

- **Left**: "Live" status; search a medicine or scan then Enter; category filter;
  product list (name, category·base unit·VAT, expiry badge e.g. "expires in 0d",
  stock "N left", price). Keyboard nav (↑↓ PgUp/PgDn, Enter to add).
- **Right (Cart)**: line items with − qty + stepper and line total, Clear;
  Subtotal, **VAT 18% (incl.)**, Discount (+Add), **Total**. Customer: **Walk-in
  Customer** vs attach customer account (+New); **Load prescription**; Client
  taxpayer TIN (optional, 9-digit), Client ID (optional, non-tax), **Client phone
  (required without a TIN)** — note: a walk-in's phone (less its first digit) is
  sent to RRA as the client ID in the background, not printed in place of the TIN.
  **Shift open for Xh, float RWF** banner + End Shift.
  **Payment methods: Cash · Mobile Money · Card · Insurance** ("Manage insurance
  claims and price lists"); Cash received quick-amounts + entry (min = total);
  **Pay RWF … · F4**.
- **Reprint** — "Reprint a receipt. Every receipt issued at this branch." Search
  by receipt no / customer / phone.
- **Refund** — "Return / Refund. Enter the receipt number from the original sale
  to load the items." Receipt no → Find.
- **Refund Journal** — "Refund receipt journal. Accepted internal and RRA refund
  documents." Entries carry RRA-style serials (RTN/branch/number) linked to the
  original receipt, with amount.
- **Document Journal** — "Non-fiscal document journal. Immutable Proforma and
  Training documents." Search by document number or type (PS / TS / TR).
- **Create Proforma** / **Create Training** — issue a quote / a practice
  (non-fiscal training) sale. **Open Drawer** — open the cash drawer.
  **End Shift** — close the shift (cash-up / Z-reading).
- **Shortcuts**: F2 focus search · F4 pay/checkout · F8 clear cart · Esc close ·
  +/− adjust last item qty · 1 Cash · 2 Mobile Money · 3 Card · ? toggle help.

### 8d. Other branch modules
- **Transfers** — branch-side transfer tracking (request → receipt) against HQ &
  other branches (parallels HQ Transfers at branch scope).
- **Insurance** — branch insurer claims / price lists (slow to load on demo);
  pairs with POS "Insurance" payment and guides "Serve an insured patient" /
  "Download an RSSB claim form".
- **Patients** — branch patient records (find / update), prescriptions.
- **Expenses** — record an expense, supplier bills, customer invoices.
- **Reports** — left rail: **Fiscal Reports** (X / Z / PLU, print closed daily
  reports) · **Business Dashboard** (trading/stock/expiry) · **Sales Dashboard**
  (trends, top sellers, cashier performance) · **Controlled Drug Register** (filed
  format). Actions: Refresh · Save View · Schedule · CSV export.
- **Accounting** — tabs **Profit** (plain-language "did the pharmacy make money
  this month", month picker, print/save PDF) · **Cash-up** · **Money accounts** ·
  **Owner money** · **VAT**.
- **Settings** — tabs **Staff** (members with role Owner / Cashier / Pharmacist,
  status, Activity log, Invite Staff) and **Shifts**. "The team working at this
  branch, and the shifts they run."

### 8e. Why this matters for the series
The supervisor's audio (14 Nov) reframes the series around this workspace:
start with the **cores — Inventory and Point of Sale** (easiest first, not HQ
Overview), one broad "overview" video per module (e.g. the whole "Make your first
sale" flow), **then** short concept clips (reprint, receipts, refund, refund
journal). "Watch your branches" (HQ Overview) is to be **paused**, being the
hardest. See `../videos/PROPOSED-ORDER.md` for the proposed production order.
