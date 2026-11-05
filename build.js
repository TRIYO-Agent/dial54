// Zero-dependency static site builder. Run: node build.js  -> outputs ./dist
const fs = require("fs");
const path = require("path");
const cfg = require("./site.config.js");
const products = require("./products.js");
const extras = require("./product-extras.js");
for (const k of Object.keys(products)) { if (!extras[k]) throw new Error("No card data for product " + k); }

const OUT = path.join(__dirname, "dist");
fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(OUT, { recursive: true });

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const REL = "sponsored nofollow noopener";
function productLink(id) {
  const p = products[id], x = extras[id];
  if (!p) throw new Error(`Unknown product id in content: ${id}`);
  if (p.asin && cfg.amazonTag) return { href: `${cfg.amazonDomain}/dp/${encodeURIComponent(p.asin)}?tag=${encodeURIComponent(cfg.amazonTag)}`, rel: REL, label: "Check price on Amazon", type: "Amazon product (ASIN)" };
  if (x.url) return { href: x.url, rel: "noopener", label: x.linkLabel || "View at maker", type: "Official maker page" };
  return { href: `${cfg.amazonDomain}/s?k=${encodeURIComponent(x.q)}&tag=${encodeURIComponent(cfg.amazonTag)}`, rel: REL, label: "Shop options on Amazon", type: "Amazon search (tagged)" };
}
function productHtml(id) {
  const l = productLink(id);
  return `<a class="product" href="${esc(l.href)}" rel="${l.rel}" target="_blank">${esc(products[id].name)}</a>`;
}
const imgTag = (key, alt, cls = "", eager = false) => `<img class="${cls}" src="/img/${key}.webp" srcset="/img/${key}-sm.webp 640w, /img/${key}.webp 1200w" sizes="(max-width: 700px) 100vw, 860px" width="1200" height="675" alt="${esc(alt)}"${eager ? ' fetchpriority="high"' : ' loading="lazy"'} decoding="async">`;
function productCard(id) {
  const p = products[id], x = extras[id], l = productLink(id);
  return `<li class="pcard">${imgTag(x.img, `Illustrative photo for ${p.name} (generic, not the exact product)`, "pimg")}<div class="pbody"><h3>${esc(p.name)}</h3><p>${esc(x.note)}</p><a class="btn buy" href="${esc(l.href)}" rel="${l.rel}" target="_blank">${esc(l.label)}</a><p class="imgnote">Illustrative image, not the exact model.</p></div></li>`;
}
const productGrid = (ids) => `<ul class="pgrid">${ids.map(productCard).join("")}</ul>`;
const usedIn = {};
const IMG_ALT = { hero: "A compact stainless espresso machine pulling a shot into a glass on a sunny kitchen counter", grinder: "A burr grinder dispensing fine espresso grounds into a dosing cup", accessories: "Flat lay of a portafilter basket, tamper, dosing funnel, WDT tool and puck screen", bottomless: "Espresso pouring from a bottomless portafilter into a glass", puckprep: "Stirring espresso grounds in a portafilter basket with a WDT needle tool", latteart: "Pouring a rosetta latte art pattern from a milk pitcher", scale: "An espresso shot pulling into a glass on a small coffee scale", maintenance: "Espresso machine cleaning gear: brush, cloth, portafilter and descaling bottle", water: "Pouring filtered water into an espresso machine water tank", tamping: "Tamping coffee grounds in a portafilter on a silicone mat", handgrinder: "A manual hand coffee grinder next to a knock box" };
const render = (html) => html.replace(/\[\[p:([A-Za-z0-9_]+)\]\]/g, (_, id) => productHtml(id));

function loadDir(dir) {
  return fs.readdirSync(dir).filter((f) => f.endsWith(".js")).map((f) => require(path.join(dir, f)));
}
const articles = loadDir(path.join(__dirname, "content/articles")).sort((a, b) => (a.order || 99) - (b.order || 99));
const pages = loadDir(path.join(__dirname, "content/pages"));

const nav = [
  ["/", "Home"], ["/articles/", "Guides"], ["/gear/", "Gear Picks"], ["/tools/54mm-checker/", "Fit Checker"], ["/about/", "About"], ["/contact/", "Contact"],
];

function layout({ title, description, urlPath, body, isArticle, article }) {
  const fullTitle = urlPath === "/" ? `${cfg.siteName}: ${cfg.tagline}` : `${title} | ${cfg.siteName}`;
  const canonical = cfg.baseUrl + urlPath;
  const ld = isArticle ? `<script type="application/ld+json">${JSON.stringify({
    "@context": "https://schema.org", "@type": "Article", headline: title, description,
    datePublished: article.date || cfg.published, dateModified: article.updated || article.date || cfg.published,
    author: { "@type": "Person", name: "Brett" }, publisher: { "@type": "Organization", name: cfg.siteName },
    mainEntityOfPage: canonical,
  })}</script>` : "";
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(fullTitle)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${esc(canonical)}">
<meta property="og:title" content="${esc(fullTitle)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:type" content="${isArticle ? "article" : "website"}">
<meta property="og:url" content="${esc(canonical)}">
<meta property="og:image" content="${cfg.baseUrl}/img/${(article && article.hero) || "hero"}.webp">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="stylesheet" href="/styles.css?v=2">
${ld}
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
<header class="site-header">
  <div class="wrap header-inner">
    <a class="brand" href="/"><span class="logo" aria-hidden="true">54</span><span>${esc(cfg.siteName)}</span></a>
    <nav aria-label="Main"><ul>${nav.map(([h, l]) => `<li><a href="${h}"${h === urlPath ? ' aria-current="page"' : ""}>${l}</a></li>`).join("")}</ul></nav>
  </div>
</header>
<div class="disclosure-bar" role="note"><div class="wrap">${esc(cfg.disclosure)} <a href="/affiliate-disclosure/">Learn more</a>.</div></div>
<main id="main" class="wrap">
${body}
</main>
<footer class="site-footer">
  <div class="wrap">
    <p class="disclosure"><strong>Affiliate disclosure:</strong> ${esc(cfg.disclosure)} Product mentions may become affiliate links; this never changes what we recommend. See our <a href="/affiliate-disclosure/">full disclosure</a>.</p>
    <p class="muted">${esc(cfg.siteName)} is an independent site and is not affiliated with, endorsed by, or sponsored by Breville, Sage, Ninja, or Amazon. Brand names are trademarks of their owners.</p>
    <ul class="footer-links">
      <li><a href="/about/">About</a></li><li><a href="/contact/">Contact</a></li><li><a href="/privacy/">Privacy Policy</a></li><li><a href="/affiliate-disclosure/">Affiliate Disclosure</a></li><li><a href="/articles/">All guides</a></li><li><a href="/gear/">Gear picks</a></li><li><a href="https://www.instagram.com/coffeetalk_daily/" rel="noopener me" target="_blank">Instagram @coffeetalk_daily</a></li>
    </ul>
    <p class="muted">© ${new Date(cfg.published).getFullYear()} ${esc(cfg.siteName)}</p>
  </div>
</footer>
</body>
</html>`;
}

function write(urlPath, html) {
  const file = urlPath.endsWith("/") ? path.join(OUT, urlPath, "index.html") : path.join(OUT, urlPath);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html);
}

const fmtDate = (d) => new Date(d + "T12:00:00Z").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
const card = (a) => `<li class="card"><a href="/articles/${a.slug}/">${a.hero ? imgTag(a.hero, "", "cimg") : ""}<span class="tag">${esc(a.category)}</span><h3>${esc(a.title)}</h3><p>${esc(a.description)}</p></a></li>`;
const urls = [];

// Articles
for (const a of articles) {
  const urlPath = `/articles/${a.slug}/`;
  const related = articles.filter((x) => x.slug !== a.slug && (a.related || []).includes(x.slug));
  const sources = (a.sources || []).length ? `<section class="sources"><h2>Sources and further reading</h2><ul>${a.sources.map((s) => `<li><a href="${esc(s.url)}" rel="noopener" target="_blank">${esc(s.label)}</a></li>`).join("")}</ul></section>` : "";
  const ids = [...new Set([...a.body.matchAll(/\[\[p:([A-Za-z0-9_]+)\]\]/g)].map((m) => m[1]))];
  ids.forEach((id) => (usedIn[id] = usedIn[id] || []).push(a.title));
  const picks = (a.picks || []).filter((id) => products[id]);
  let bodyHtml = render(a.body);
  if (a.inline) { let n = 0; bodyHtml = bodyHtml.replace(/<h2>/g, (m) => (++n === 2 ? `<figure class="inimg">${imgTag(a.inline, IMG_ALT[a.inline])}<figcaption>${esc(IMG_ALT[a.inline])}.</figcaption></figure>` + m : m)); }
  const body = `<article class="post">
  <p class="crumbs"><a href="/">Home</a> › <a href="/articles/">Guides</a> › ${esc(a.category)}</p>
  <h1>${esc(a.title)}</h1>
  <p class="meta">By Brett · Published ${fmtDate(a.date || cfg.published)}${a.updated ? ` · Updated ${fmtDate(a.updated)}` : ""}</p>
  <p class="disclosure inline">${esc(cfg.disclosure)}</p>
  <p class="lede">${esc(a.description)}</p>
  ${a.hero ? `<figure class="headimg">${imgTag(a.hero, IMG_ALT[a.hero], "", true)}</figure>` : ""}
  ${picks.length ? `<aside class="toppicks"><h2>Top picks from this guide</h2><p class="disclosure inline">${esc(cfg.disclosure)}</p>${productGrid(picks.slice(0, 3))}</aside>` : ""}
  ${bodyHtml}
  ${ids.length ? `<section class="gear"><h2>Gear mentioned in this guide</h2><p class="disclosure inline">${esc(cfg.disclosure)}</p>${productGrid(ids)}</section>` : ""}
  <p class="note">Prices, model numbers and included accessories change. Anything we quote from a manufacturer is dated; always confirm on the product page before you buy. We have not run lab tests on these products. This guide is built from manufacturer documentation and the reputable sources listed below.</p>
  ${sources}
  ${related.length ? `<section><h2>Related guides</h2><ul class="cards">${related.map(card).join("")}</ul></section>` : ""}
</article>`;
  write(urlPath, layout({ title: a.title, description: a.description, urlPath, body, isArticle: true, article: a }));
  urls.push(urlPath);
}

// Guides index
write("/articles/", layout({
  title: "All guides", description: "Every Dial54 guide to Breville 54mm espresso machines: buying, grinders, accessories, maintenance and technique.", urlPath: "/articles/",
  body: `<h1>All guides</h1><p class="disclosure inline">${esc(cfg.disclosure)}</p><ul class="cards">${articles.map(card).join("")}</ul>`,
}));
urls.push("/articles/");

// Static pages (home, about, etc.)
for (const p of pages) {
  const body = typeof p.body === "function" ? p.body({ articles, card, cfg, esc, productGrid, products, imgTag, usedIn }) : p.body;
  write(p.path, layout({ title: p.title, description: p.description, urlPath: p.path, body: render(body) }));
  if (p.path !== "/404.html") urls.push(p.path);
}

// Copy static assets
for (const f of fs.readdirSync(path.join(__dirname, "static"))) {
  const src = path.join(__dirname, "static", f);
  if (fs.statSync(src).isDirectory()) fs.cpSync(src, path.join(OUT, f), { recursive: true });
  else fs.copyFileSync(src, path.join(OUT, f));
}

// sitemap + robots
fs.writeFileSync(path.join(OUT, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((u) => `  <url><loc>${cfg.baseUrl}${u}</loc></url>`).join("\n")}\n</urlset>\n`);
fs.writeFileSync(path.join(OUT, "robots.txt"), `User-agent: *\nAllow: /\nSitemap: ${cfg.baseUrl}/sitemap.xml\n`);
console.log(`Built ${urls.length} pages (${articles.length} articles) into dist/`);
