# Image Assets — Maalmo Steels Website

This folder holds every image referenced across the static site. Filenames must match exactly (case-sensitive on Linux hosts).

**Recommended specs**
- Format: JPG (photos) / SVG (icons & logos) / PNG (diagrams with transparency)
- Hero / page-hero images: 1920 × 1080 px (16:9), <250 KB after compression
- Card / thumbnail images: 800 × 600 px (4:3), <120 KB
- Product main images: 1200 × 1200 px (1:1 square), <180 KB
- Product thumbnails: 400 × 400 px, <60 KB
- Compress with TinyPNG, Squoosh, or ImageOptim before upload
- Add descriptive alt text in HTML where missing

---

## Branding & Layout

| Filename | Used in | Purpose | Suggested size |
|---|---|---|---|
| `logo.svg` | header brand | Maalmo wordmark | 200 × 60 |
| `favicon.ico` | head | Browser favicon | 32 × 32 |
| `og-image.jpg` | OG/Twitter meta | Social share preview | 1200 × 630 |

---

## Homepage (`index.html`)

| Filename | Section |
|---|---|
| `hero.jpg` | Main hero background |
| `intro-side.jpg` | Intro split section |

---

## About (`about.html`)

| Filename | Section |
|---|---|
| `page-hero.jpg` | About page-hero background (shared) |
| `about-intro.jpg` | About story split |
| `about-main.jpg` | Mission / vision visual |

---

## Services

| Filename | Page |
|---|---|
| `service-engineering.jpg` | services.html + services/engineering.html hero |
| `service-laser.jpg` | services.html + services/laser.html hero |
| `service-electroplating.jpg` | services.html + services/electroplating.html hero |
| `service-blasting.jpg` | services.html + services/blasting.html hero |
| `service-painting.jpg` | services.html + services/painting.html hero |

---

## Sectors (`sectors.html` + homepage cards)

| Filename | Sector |
|---|---|
| `sector-construction.jpg` | Construction |
| `sector-industrial.jpg` | Industrial |
| `sector-ongc.jpg` | ONGC / Oil & Gas |
| `sector-railway.jpg` | Railway |
| `sector-marine.jpg` | Marine |
| `sector-defense.jpg` | Defense |

---

## Products (listing + detail pages)

Each product needs a primary image plus three gallery views (`-2`, `-3`, `-4`).

| Product | Filenames |
|---|---|
| Cup Lock | `product-cuplock.jpg`, `product-cuplock-2.jpg`, `product-cuplock-3.jpg`, `product-cuplock-4.jpg` |
| Ring Lock | `product-ringlock.jpg`, `product-ringlock-2.jpg`, `product-ringlock-3.jpg`, `product-ringlock-4.jpg` |
| Mast Climber | `product-mastclimber.jpg`, `product-mastclimber-2.jpg`, `product-mastclimber-3.jpg`, `product-mastclimber-4.jpg` |
| Trestle | `product-trestle.jpg`, `product-trestle-2.jpg`, `product-trestle-3.jpg`, `product-trestle-4.jpg` |
| BNM | `product-bnm.jpg`, `product-bnm-2.jpg`, `product-bnm-3.jpg`, `product-bnm-4.jpg` |
| Adjustable Post | `product-adjustablepost.jpg`, `product-adjustablepost-2.jpg`, `product-adjustablepost-3.jpg`, `product-adjustablepost-4.jpg` |
| Guard Rail | `product-guardrail.jpg`, `product-guardrail-2.jpg`, `product-guardrail-3.jpg`, `product-guardrail-4.jpg` |
| Ready Lock | `product-readylock.jpg`, `product-readylock-2.jpg`, `product-readylock-3.jpg`, `product-readylock-4.jpg` |
| Wedge Transom | `product-wedgetransom.jpg`, `product-wedgetransom-2.jpg`, `product-wedgetransom-3.jpg`, `product-wedgetransom-4.jpg` |
| Single End Transom | `product-singleendtransom.jpg`, `product-singleendtransom-2.jpg`, `product-singleendtransom-3.jpg`, `product-singleendtransom-4.jpg` |

---

## Export (`export.html`)

| Filename | Section |
|---|---|
| `export-hero.jpg` | Export intro split |

---

## Blog (`blog.html` + `blog-detail.html`)

| Filename | Article |
|---|---|
| `blog-featured.jpg` | Featured: Cup Lock vs Ring Lock |
| `blog-1.jpg` | Hot-Dip Galvanizing in Marine |
| `blog-2.jpg` | Container Stuffing for Scaffolding |
| `blog-3.jpg` | When to Choose a Mast Climber |
| `blog-4.jpg` | Fiber Laser Cutting & Tolerance |
| `blog-5.jpg` | EN 12810 Explained |
| `blog-6.jpg` | Slab-Edge Fall Protection |
| `blog-7.jpg` | PEB 360 |
| `blog-8.jpg` | Refinery Shutdown Scaffolding |
| `blog-9.jpg` | Procurement Checklist |

---

## Optional / Placeholder Strategy

If real photography isn't available at launch, use one of:

1. **Brand-toned placeholders** — flat navy (#0A2540) or steel-gray rectangles with white wordmark
2. **Stock photography** — Unsplash / Pexels (industrial, scaffolding, steel mill keywords)
3. **Render placeholders** — CAD or 3D renders of products until photo shoot is done

To keep the site functional during development, drop a single `placeholder.jpg` (1200×800, neutral grey with logo watermark) and copy/rename it to all required filenames listed above.

---

## SEO image checklist

- [ ] All images under 250 KB
- [ ] Use descriptive filenames (no `IMG_1234.jpg`)
- [ ] Add meaningful `alt` text in HTML (already present in templates)
- [ ] Provide OG image (1200×630) for social sharing
- [ ] Generate WebP variants for next-gen browser support (optional)
