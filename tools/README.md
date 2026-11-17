# Tools

Helper scripts used to rehearse and record screen takes of the live MalFour
Pharmacy System. Keep `recording/` and `rehearsal-kit/` side by side — the
scripts load `../rehearsal-kit/sample-import.csv`.

## recording/ (Node ESM + Puppeteer + ffmpeg)

| Script | What it does | Writes to live account? |
|---|---|---|
| `rehearse.mjs signin` | Opens Chrome so a person signs in once; session kept in `.chrome-profile/` (git-ignored) | No |
| `rehearse.mjs probe`, `probe-add.mjs`, `probe2.mjs`, `probe3.mjs` | Map dialogs/fields of the Add Product flow | No (read/map only) |
| `record-add.mjs` | Records the "Add product" take to `takes/add-product-take2.mp4` (+ `record-log.json`) | **Yes — saves one fictional product** |

Run from inside `tools/recording/` (paths are resolved from the current
directory).

**Won't run on this machine as-is:**
- Puppeteer is loaded from another project:
  `createRequire("C:/Users/Noah/Documents/Ads Projects/SHAMBA-DEMO/")`. Install
  `puppeteer-core` locally (or point that path at a folder that has it).
- Chrome path is hard-coded to `C:/Program Files/Google/Chrome/Application/chrome.exe`.
- `ffmpeg` must be on `PATH`.

## rehearsal-kit/ (Python + Pillow)

`python make_kit.py` regenerates `barcode-new-product.png` (fictional EAN-13)
and `sample-import.csv` (8 fictional "Demo …" products). Uses the Windows font
`C:/Windows/Fonts/ARIALNB.TTF`.

> Don't import `sample-import.csv` into the live account — "No more imports"
> was the rule after the 11 Nov rehearsal (see
> [../docs/videos/inventory-explainer/PLAN-v1.md §8b](../docs/videos/inventory-explainer/PLAN-v1.md)).
