# Video series roadmap

*Rebuilt 17 Nov 2026. The original `videos/PROPOSED-ORDER.md` was not in the
repo import, so this roadmap is reconstructed from the supervisor direction
recorded in [../product/SYSTEM-STUDY.md §8e](../product/SYSTEM-STUDY.md) and the
existing plans. Treat the order as a **proposal** until confirmed.*

## What we're filling

Every guide in the app's two Learning Centers has a **"Video lesson — Video
coming soon"** slot (re-checked 17 Nov: still empty). That's **35 slots**:
13 Head Office + 22 Branch.

Supervisor direction (14 Nov):
1. Start with the **cores — Inventory and Point of Sale** (branch workspace).
2. One broad "overview" video per module first (e.g. the whole *Make your first
   sale* flow), **then** short concept clips (reprint, receipts, refund, refund
   journal).
3. **Pause** "Watch your branches" (HQ Overview) — hardest one.
4. How-to style, not ads: simple English, slow voice, step banners — see
   [howto-add-product/PLAN.md](howto-add-product/PLAN.md).

The exact step text of all 35 guides (what each video must teach) is in
[GUIDE-STEPS.md](GUIDE-STEPS.md), with a table of guide-vs-UI label mismatches.

## Projects in this repo

| Project | Type | Status | Plan |
|---|---|---|---|
| 42 s ad "Your pharmacy isn't a museum" + 15 s / 6 s cut-downs | Ad | Locked (per brief); awaiting Emmanuel's pick | [../marketing/CAMPAIGN-BRIEF.md](../marketing/CAMPAIGN-BRIEF.md) (ad PLAN.md not in repo) |
| Inventory explainer (Add · Scan · Import · Export), Jane / Paul voices | Explainer | v1 built, v2 planned — **superseded** by the how-to direction | [inventory-explainer/](inventory-explainer/) |
| How to add a product to your stock | How-to | Plan v3, open [DECIDE] items | [howto-add-product/PLAN.md](howto-add-product/PLAN.md) |

## Proposed production order (branch Learning Center first)

**Phase 1 — cores (Inventory + POS)**

| # | Guide (exact title in app) | Category | Notes |
|---|---|---|---|
| 1 | Make your first sale | Sales & POS | Module overview video for POS. Needs a seeded shift; recording completes a sale → needs MalFour OK |
| 2 | Check stock and expiry | Inventory | Module overview for Inventory; needs clean expiry data (see DEMO-ACCOUNT) |
| 3 | Import and receive stock | Inventory | The "Add a product" how-to belongs here / alongside |
| 4 | Review a refund or void | Sales & POS | Concept clips: Refund, Refund Journal, Reprint |
| 5 | Close and review a till | Sales & POS | End Shift / cash-up |
| 6 | Count stock on the shelf | Inventory | Cycle counts + approvals |
| 7 | Move stock between branches | Inventory | Transfers |

**Phase 2 — rest of the branch library**
Serve an insured patient · Find and update a patient · Download an RSSB claim
form · Review sales reports · Review VAT and fiscal records · Set up your
pharmacy · Manage staff access · Record an expense · Track supplier bills ·
Create a customer invoice · Review money and banking · Find your way around the
dashboard · Manage your profile and security · Stay on top of updates · Get help
with a problem.

**Phase 3 — Head Office library (13)**
Check fiscal and stock issues · Work through exceptions · Compare branch
performance · Review stock across branches · Coordinate branch transfers ·
Review insurance across branches · Find patients across the organisation ·
Manage staff and branch access · Set up branches and policies · Review
organisation finances · Get help with a problem · Follow head office updates ·
**Watch your branches (paused)**.

## Shared production rules

- Fictional demo data only; follow [../product/DEMO-ACCOUNT.md](../product/DEMO-ACCOUNT.md).
- No new records on the live account without explicit OK.
- Brand per [../brand/BRAND.md](../brand/BRAND.md) (Inter, `#BA000C`, white).
- Licensed audio only; log sources (the `LIBRARY.md` referenced in older plans
  is not in this repo — recreate it here when assets are added).
- Voice consent: John's cloned voice is approved for **the ad only**.
- Never post or upload; deliverables go to the client for approval.
