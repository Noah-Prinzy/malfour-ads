# MalFour Pharmacy System: live study log

*Read-only walk through `pharmacy.malfour.com`, demo account **URUMURI Pharmacy, "Demo Pharma"** (Emmanuel Muhindo, Admin), signed in by Noah. Nothing was changed. Started 10 Nov 2026. The campaign brief built from this is [`../marketing/CAMPAIGN-BRIEF.md`](../marketing/CAMPAIGN-BRIEF.md).*

> **Historical log (10–11 Nov 2026).** The demo account has since changed (it is
> now the 3-branch "MalFour Pharmacy" chain) and most "not opened yet" items
> below were covered later. Current, verified facts live in
> [SYSTEM-STUDY.md](SYSTEM-STUDY.md) and [DEMO-ACCOUNT.md](DEMO-ACCOUNT.md).

## Coverage

| Page | Status | Notes |
|---|---|---|
| Dashboard `/` | ✅ | Revenue, transactions, stock alerts, expiring < 30 days, sales-goal bar (RWF 500,000), tomorrow's forecast (RWF 11,249), 7-day top sellers, recent transactions, expiring list |
| Inventory `/inventory` → Batches | ✅ | 100 batches, 5,010 units; columns: product, category, VAT band, quantity, cost, selling price, expiry, supplier, status |
| Inventory → **Stock Forecast** | ✅ | See below |
| Inventory → Categories, Operations, Purchases & imports, Valuation, Compliance, Settings | ⬜ | Tabs exist; not opened yet |
| POS `/pos` | ◐ | Layout read; shift not started (would change data), so the live sale flow is unseen |
| Insurance `/insurance` | ◐ | Claims / Tariffs / Batches / Providers tabs; no claims in the demo |
| Reports `/reports` | ◐ | X/Z/PLU fiscal reports, Business and Sales dashboards, Controlled Drug Register; not opened |
| Patients, Expenses, Accounting | ⬜ | Not opened |
| Settings `/settings` | ⚠ | Loaded blank on first visit: retry |
| Offline mode, allergy warning, RSSB/CBHI check, MoMo prompt | ❌ | Can't be shown without a live sale |

## Stock Forecast (observed)

- **Report title:** "Projected stock levels based on current inventory, incoming orders, and sales forecasts."
- **Columns:** current, reserved, available, incoming, forecast out, projected, avg daily sales, months of stock, status.
- **Statuses seen:** Out of Stock · Normal · Overstocked (for example 55 units at 0.17/day = 11 months → Overstocked).
- 200 rows across 4 pages (each product appears twice: an empty batch and a stocked one; likely demo-data structure, to confirm).
- **Ad angle:** "months of stock" and the Overstocked flag speak directly to capital tied up in slow movers.

## POS facts (observed)

- Payments: Cash · Mobile Money · Card · Insurance. VAT 18% (incl.). Discounts.
- Fields: client TIN, client ID, client phone. Rule shown on screen: no TIN → phone required; the phone minus its first digit is sent to RRA as the client ID and isn't printed (note dated "RRA, 17 Oct").
- Shift-based till; drawer: cash movements, transaction log, close shift, audit trail. Shortcuts: ↑ ↓ PgUp PgDn, Enter to add, F4 to pay.

## Things to avoid in footage

- The subscription banner ("ends 21 Nov 2026").
- Any real customer or patient data (the demo shows "Walk-in" only).

## Still to do

1. Open the unseen tabs and pages above (read-only).
2. Ask Emmanuel to seed the demo (a day of sales, three batches under 30 days, one RSSB claim, one MoMo sale), then record.
3. Save reference screenshots into `screenshots/` (none saved yet).
