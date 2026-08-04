# Website Asset Inventory

Verified: 2026-08-04

## Existing website assets

| App | Icon | Screenshots | Dimensions | Phase 1 selection |
|---|---|---:|---|---|
| HKBUS | `images/HKBUS/icon/icon.png` | 1–8 | 1242×2688 | 1 routes, 2 nearby/map, 3 live arrival, 5 favourites |
| 台北倒垃圾 | `images/TPEGARBAGE/icon/icon.png` | 1–8 | 1242×2688 | 1 truck map, 3 arrival list, 4 litter bins, 7 favourites |
| TPEBUS | `images/TPEBUS/icon/icon.png` | 1–7 | 1320×2868 | 1 routes, 2 nearby/map, 5 live arrival, 4 favourites |
| SGBUS | `images/SGBUS/icon/icon.png` | 1–6 | 1320×2868 | 1 routes, 2 nearby/map, 5 live arrival, 4 favourites |
| LONDONBUS | `images/LONDONBUS/icon/icon.png` | 1–7 | 1320×2868 | 1 routes, 2 nearby/map, 5 live arrival, 4 favourites |

All icons are 1024×1024 PNG. There are 36 product screenshots in total.

## Other assets

- `images/COVER.jpg` — existing social cover; valid OG/Twitter fallback.
- `images/TPEGARBAGE_COVER.jpg` — product cover available for waste-collection context.
- `/Users/bct-barney/Documents/hkbus/images/` — newer HKBUS atmospheric images and product hero material; not copied in Phase 1 because real product screenshots already cover the requirement.
- `/Users/bct-barney/Documents/tpegarbage/AppMockUp Screenshots/` — older multi-device marketing screenshots.
- `/Users/bct-barney/Documents/tpebus/fastlane/screenshots/review/` — newer functional review captures, useful for a later screenshot refresh.

## Phase 1 usage rules

- Use the explicit selected paths above; do not probe filenames or extensions at runtime.
- Keep source PNG files unchanged and provide intrinsic `width`/`height` in HTML.
- Use `loading="lazy"` and `decoding="async"` below the first viewport.
- Use App icons for favicon/brand marks instead of the missing `images/Icon-App-60x603x.png`.
- Alt text must name the visible task, not “Screenshot 1”.

## Phase 2 decision

No Xcode build is required for this redesign. The existing set already provides current-looking, consistent product evidence for all five Apps. A future release can replace individual images from App Store/fastlane when an App UI materially changes; this is tracked in Task 08 rather than blocking launch.
