# BiDi Homecare: website

A one-page marketing site for BiDi Homecare (home care for older people in Hanoi).
Warm "hospitality" design. The hero mark is a 3D brown heart inside a ring (Three.js),
built like the PSI site's logo: an extruded slab with a gradient, which sits big on the
right and turns as you scroll, with outline echoes that fan out between sections.
Floating 3D leaves, little hearts and friendly icons drift in the background.
Vietnamese by default, with an EN switch.

## Run

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # static site in dist/ (works on Vercel, Netlify, GitHub Pages)
```

## Where things are

| Path | What |
|---|---|
| `src/content.js` | All text (VI + EN), prices, contact details. Edit copy here. |
| `src/heart3d.js` | The 3D heart and ring, scroll poses (`BASE`), floating leaves/hearts/icons (`ICONS`). |
| `src/main.js` | Section templates, language switch, tabs, counters, form → Zalo. |
| `src/icons.js` | Line icons and the illustrated avatars (same style as the logo). |
| `src/styles.css` | Theme tokens and layout. |
| `public/img`, `public/brand` | WebP versions of `photo/` and `brand-identity/`. |

Prices come from the BiDi-Homecare catalog (`src/catalog.js` there) and exclude 8% VAT.

## Placeholders to replace before launch

Search `SAMPLE` in `src/content.js`:

- the whole shop (`SHOP`): product names, prices, specs and the SVG illustrations in `productArt()`
- testimonials, nurse team cards, health articles
- email `lienhe@bidihomecare.vn`, advice hours, the 4.8/5 rating, the "within 24 hours" FAQ answer

The nursing licence image in `public/img/nursing-licence.webp` has the name, photo,
date of birth, ID number and licence number blurred.
