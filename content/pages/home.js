module.exports = {
  path: "/",
  title: "Home",
  description: "Independent guides to Breville Bambino, Bambino Plus, Barista Express and Barista Pro espresso machines: starter setups, grinders, 54mm accessories, maintenance and technique.",
  body: ({ articles, card, esc, cfg, imgTag, productGrid }) => {
    const pick = (slugs) => slugs.map((s) => articles.find((a) => a.slug === s)).filter(Boolean).map(card).join("");
    return `
<section class="hero">
  <figure class="heroimg">${imgTag("hero", "A compact stainless espresso machine pulling a shot into a glass on a sunny kitchen counter", "", true)}</figure>
  <h1>Better espresso from your Breville 54mm machine</h1>
  <p>Plain-English guides for Bambino, Bambino Plus, Barista Express and Barista Pro owners: what to buy first, what actually fits, and how to pull a great shot.</p>
  <a class="btn" href="/articles/home-espresso-setups-500-1000-2000/">See starter setups</a>
  <a class="btn alt" href="/tools/54mm-checker/">Check accessory fit</a>
  <a class="btn alt" href="/gear/">See gear picks</a>
</section>
<p class="disclosure inline">${esc(cfg.disclosure)}</p>

<h2>Start here</h2>
<ul class="cards">${pick(["bambino-vs-bambino-plus-vs-barista-express", "best-grinder-for-breville-bambino", "home-espresso-setups-500-1000-2000"])}</ul>

<h2>Popular gear picks</h2>
${productGrid(["bambino", "encoreEsp", "espressoScale"])}<p><a class="btn" href="/gear/">See all gear picks</a></p>
<h2>Upgrades and accessories</h2>
<ul class="cards">${pick(["breville-54mm-accessory-fit-guide", "bottomless-portafilter-guide", "wdt-tools-and-puck-screens-explained", "choosing-an-espresso-scale"])}</ul>

<h2>Technique and care</h2>
<ul class="cards">${pick(["dialing-in-espresso-on-a-bambino", "milk-steaming-tips-bambino-plus", "breville-descaling-and-maintenance-schedule", "water-for-espresso"])}</ul>

<h2>How we write these guides</h2>
<p>Every guide is built from manufacturer manuals and product pages plus reputable independent reviews, and each one lists its sources. We don't publish made-up test results or invented specs, and we don't list retailer prices because they change daily, where we mention a price, it's the manufacturer's list price with the date we checked it. <a href="/about/">More about Dial54</a>.</p>
`;
  },
};
