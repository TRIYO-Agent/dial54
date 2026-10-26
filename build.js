// Zero-dependency static site builder. Run: node build.js  -> outputs ./dist
const fs = require("fs");
const path = require("path");
const cfg = require("./site.config.js");
const products = require("./products.js");

const OUT = path.join(__dirname, "dist");
fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(OUT, { recursive: true });

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

function productHtml(id) {
  const p = products[id];
  if (!p) throw new Error(`Unknown product id in content: ${id}`);
  let href = "";
  if (p.asin && cfg.amazonTag) href = `${cfg.amazonDomain}/dp/${encodeURIComponent(p.asin)}?tag=${encodeURIComponent(cfg.amazonTag)}`;
  else if (p.url) href = p.url;
  const label = esc(p.name);
  if (!href) return `<span class="product">${label}</span>`;
  const rel = (p.asin && cfg.amazonTag) || p.sponsored ? "sponsored nofollow noopener" : "noopener";
  return `<a class="product" href="${esc(href)}" rel="${rel}" target="_blank">${label}</a>`;
}
const render = (html) => html.replace(/\[\[p:([A-Za-z0-9_]+)\]\]/g, (_, id) => productHtml(id));

function loadDir(dir) {
  return fs.readdirSync(dir).filter((f) => f.endsWith(".js")).map((f) => require(path.join(dir, f)));
}
const articles = loadDir(path.join(__dirname, "content/articles")).sort((a, b) => (a.order || 99) - (b.order || 99));
const pages = loadDir(path.join(__dirname, "content/pages"));

const nav = [
  ["/", "Home"], ["/articles/", "Guides"], ["/tools/54mm-checker/", "Fit Checker"], ["/about/", "About"], ["/contact/", "Contact"],
];

function layout({ title, description, urlPath, body, isArticle, article }) {
  const fullTitle = urlPath === "/" ? `${cfg.siteName} — ${cfg.tagline}` : `${title} | ${cfg.siteName}`;
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
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="stylesheet" href="/styles.css">
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
      <li><a href="/about/">About</a></li><li><a href="/contact/">Contact</a></li><li><a href="/privacy/">Privacy Policy</a></li><li><a href="/affiliate-disclosure/">Affiliate Disclosure</a></li><li><a href="/articles/">All guides</a></li>
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
const card = (a) => `<li class="card"><a href="/articles/${a.slug}/"><span class="tag">${esc(a.category)}</span><h3>${esc(a.title)}</h3><p>${esc(a.description)}</p></a></li>`;
const urls = [];

// Articles
for (const a of articles) {
  const urlPath = `/articles/${a.slug}/`;
  const related = articles.filter((x) => x.slug !== a.slug && (a.related || []).includes(x.slug));
  const sources = (a.sources || []).length ? `<section class="sources"><h2>Sources and further reading</h2><ul>${a.sources.map((s) => `<li><a href="${esc(s.url)}" rel="noopener" target="_blank">${esc(s.label)}</a></li>`).join("")}</ul></section>` : "";
  const body = `<article class="post">
  <p class="crumbs"><a href="/">Home</a> › <a href="/articles/">Guides</a> › ${esc(a.category)}</p>
  <h1>${esc(a.title)}</h1>
  <p class="meta">By Brett · Published ${fmtDate(a.date || cfg.published)}${a.updated ? ` · Updated ${fmtDate(a.updated)}` : ""}</p>
  <p class="disclosure inline">${esc(cfg.disclosure)}</p>
  <p class="lede">${esc(a.description)}</p>
  ${render(a.body)}
  <p class="note">Prices, model numbers and included accessories change. Anything we quote from a manufacturer is dated; always confirm on the product page before you buy. We have not run lab tests on these products — this guide is built from manufacturer documentation and the reputable sources listed below.</p>
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
  const body = typeof p.body === "function" ? p.body({ articles, card, cfg, esc }) : p.body;
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
