# malfour-ads

Marketing and training-video workspace for **MalFour Limited**'s
**MalFour Pharmacy System** (`pharmacy.malfour.com`) — research, briefs, video
plans, recording tools and the brand pack. The product's own source code is
**not** in this repo.

## The system in one paragraph

MalFour Pharmacy System is a cloud **ERP + POS for pharmacies and pharmacy
chains** in East Africa, built around Rwanda's rules: **RRA EBM/VSDC fiscal
receipts**, **RSSB / CBHI insurance claims**, Rwanda FDA licences, VAT bands,
controlled-drug register. It has two workspaces — **Head Office** (watch every
branch, chain prices, transfers, compliance, ~61 reports, plain-language
accounting) and **Branch** (Dashboard, batch-level Inventory, Point of Sale with
Cash / Mobile Money / Card / Insurance, patients, expenses). Tills **keep selling
offline** and upload later. Each workspace has a Learning Center (13 + 22
guides) whose "Video coming soon" slots our videos are meant to fill.

## Where things are

```
README.md                       ← you are here
docs/
  company/MALFOUR-COMPANY.md    who MalFour is: founders, products, pricing, markets, contacts
  brand/BRAND.md                colours, Inter, logo rules, tone, photography (from the official pack)
  product/
    SYSTEM-STUDY.md             full product study — every module, POS, inventory, reports (§9 = 17 Nov re-check)
    DEMO-ACCOUNT.md             current demo data + what must stay off camera + seeding asks
    STUDY-LOG.md                original 10–11 Nov study log (historical)
    screenshots/                reference screenshots of key screens (planning only)
  marketing/
    CAMPAIGN-BRIEF.md           Rwanda ad campaign: pains, hooks, 45 s script, distribution
  videos/
    SERIES-ROADMAP.md           the 35 Learning Center slots + proposed production order
    GUIDE-STEPS.md              exact step text of all 35 in-app guides (script source)
    howto-add-product/PLAN.md   current how-to plan (v3, simple English, ElevenLabs)
    inventory-explainer/        earlier explainer plans (v1, v2) — superseded
assets/
  brand-identity/               official MalFour brand pack (logos SVG/PNG, guidelines PDF/AI, Inter fonts)
tools/
  README.md                     how to run the scripts + caveats
  recording/                    Puppeteer + ffmpeg rehearsal/recording scripts
  rehearsal-kit/                fictional barcode + sample CSV generator
```

## Start here

1. New to the product → [docs/product/SYSTEM-STUDY.md](docs/product/SYSTEM-STUDY.md)
2. About to record → [docs/product/DEMO-ACCOUNT.md](docs/product/DEMO-ACCOUNT.md) and [tools/README.md](tools/README.md)
3. Making a video → [docs/videos/SERIES-ROADMAP.md](docs/videos/SERIES-ROADMAP.md) and [docs/brand/BRAND.md](docs/brand/BRAND.md)
4. Ads / campaign → [docs/marketing/CAMPAIGN-BRIEF.md](docs/marketing/CAMPAIGN-BRIEF.md) and [docs/company/MALFOUR-COMPANY.md](docs/company/MALFOUR-COMPANY.md)

## Ground rules

- **The app is live.** Browse read-only; never save, sell, refund, close a
  shift or import on the demo account without the client's OK.
- **No real personal data on screen** — staff emails, patient names and phones
  must be cropped or blurred; use seeded fictional data.
- **Unverified claims** (marked ⚠ in the brief) stay out of paid copy until
  sourced. No AI claims — MalFour itself avoids them.
- Licensed audio/footage only; voice clones only within written consent.
- Never post or upload; commit locally, push only when asked.

## Open questions

- Market: malfour.com has a **Rwanda** product page with public pricing
  (Starter 35,000 RWF/month, Pro 100,000 RWF/month), matching how the product
  is built — Rwanda looks right for the campaign; confirm with MalFour.
- Seeding the demo account before any recording (list in DEMO-ACCOUNT.md).
- Missing from the import: the ad's `PLAN.md`, `LIBRARY.md`, `videos/PROPOSED-ORDER.md`,
  `screenshots/`, voice takes and Remotion projects — ask Noah where they live.
