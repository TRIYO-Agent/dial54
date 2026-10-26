# Dial54

Static content site for owners of Breville 54mm espresso machines (Bambino, Bambino Plus,
Barista Express, Barista Pro). Built for an Amazon Associates application.

## Build

No dependencies. Requires Node 18+.

    node build.js      # outputs ./dist

## Structure

- `site.config.js` — site name, base URL, **amazonTag** (empty = no affiliate links), disclosure text, contact email.
- `products.js` — every product mentioned on the site. Articles reference products as `[[p:id]]`.
  - Add an `asin` per product and set `amazonTag` in `site.config.js` to turn every mention into an
    Amazon affiliate link (`rel="sponsored nofollow"`). Nothing else needs editing.
- `content/articles/*.js` — guides (title, description, sources, HTML body).
- `content/pages/*.js` — home, about, contact, privacy, affiliate disclosure, 404, fit checker.
- `static/` — CSS, favicon, checker script.

## Deploy (Render static site)

Build command `node build.js`, publish directory `dist` (see `render.yaml`).

## After Amazon Associates approval

1. Set `amazonTag` in `site.config.js` (e.g. `yourtag-20`).
2. Fill `asin` for products in `products.js`.
3. Commit — Render redeploys automatically.
Do not display Amazon prices on the site (Associates policy).
