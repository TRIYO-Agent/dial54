module.exports = {
  order: 11,
  slug: "water-for-espresso",
  title: "Water for Espresso: What to Use in a Bambino or Barista Express",
  category: "Maintenance",
  description: "How water hardness and alkalinity affect both taste and scale, what the SCA recommends, and practical options from filtered tap to remineralized distilled water.",
  related: ["breville-descaling-and-maintenance-schedule", "dialing-in-espresso-on-a-bambino", "home-espresso-setups-500-1000-2000"],
  sources: [
    { label: "SCA 25 Magazine — Water and Coffee Acidity: How to Adapt Your Water", url: "https://sca.coffee/sca-news/25/issue-9/english/water-and-coffee-acidity-how-to-adapt-your-water-for-different-extraction-methods-25-magazine-issue-9-pxjby" },
    { label: "Coffearium — Water for coffee (summary of SCAA 2009 standard and SCA 2018 handbook)", url: "https://coffearium.org/entries/water-for-coffee/" },
    { label: "Clive Coffee — Water composition and espresso flavor", url: "https://clivecoffee.com/blogs/learn/the-science-of-water-composition-in-espresso" },
    { label: "Breville — Barista Express instruction book: water filter guidance (PDF)", url: "https://www.breville.com/content/dam/breville/us/en/assets/miscellaneous/instruction-manual/espresso/BES870-instruction-manual.pdf" },
  ],
  body: `
<p>Espresso is mostly water, and the minerals in that water affect two things: <strong>how your coffee tastes</strong> and <strong>how fast scale builds up</strong> inside the machine. You don't need a chemistry lab — just a basic idea of where your water stands and a simple fix if it's far off.</p>

<h2>The two numbers that matter</h2>
<ul>
  <li><strong>Hardness</strong> (mainly calcium and magnesium): helps extract flavor, but it's also what forms scale.</li>
  <li><strong>Alkalinity</strong> (mainly bicarbonate): buffers acidity. Too much makes coffee taste flat and chalky; too little can make water corrosive to metal parts.</li>
</ul>
<p>The SCA's 2018 Water Quality Handbook, as summarized by Coffearium, recommends total hardness of <strong>50–175 ppm</strong> and alkalinity of <strong>40–75 ppm</strong> (as CaCO₃), with pH 6–8, and warns that alkalinity below 40 ppm increases corrosion risk. The older 2009 SCAA standard targeted about 150 mg/L total dissolved solids, 68 mg/L calcium hardness and 40 mg/L alkalinity. Both point the same way: moderate minerals, modest alkalinity, no chlorine.</p>
<p>For context, an SCA 25 Magazine article estimates that average US tap water has around 150 ppm alkalinity and around 170 ppm total hardness — "medium hard." The same article explains espresso tolerates more alkalinity than filter coffee because so little water is used per gram of coffee.</p>

<h2>Step 1: Find out what you have</h2>
<ul>
  <li>Check your water utility's annual quality report (search your city or utility name plus "water quality report").</li>
  <li>Or use inexpensive [[p:waterTestStrips]] for total hardness and alkalinity. They're approximate, but good enough to choose a strategy.</li>
</ul>

<h2>Step 2: Pick a strategy</h2>
<div class="table-scroll"><table>
<thead><tr><th>Your water</th><th>Suggested approach</th></tr></thead>
<tbody>
<tr><td>Soft-to-moderate, tastes clean</td><td>A carbon [[p:waterPitcherFilter]] to remove chlorine taste is often all you need</td></tr>
<tr><td>Hard (lots of scale on kettles)</td><td>Blend filtered tap with distilled water, or use remineralized water; descale on schedule</td></tr>
<tr><td>Very hard or unknown, want best taste</td><td>[[p:distilledWater]] or RO water plus [[p:mineralPacks]] made for espresso</td></tr>
<tr><td>Barista Express / Barista Pro</td><td>Use the supplied tank filter and replace it every two months (sooner in hard-water areas), per Breville</td></tr>
</tbody></table></div>

<h2>What to avoid</h2>
<ul>
  <li><strong>Pure distilled or RO water with nothing added.</strong> With almost no minerals or alkalinity it extracts poorly and can be aggressive toward metal over time. Remineralize it.</li>
  <li><strong>Water from a salt-based home softener.</strong> It swaps hardness for sodium; Clive Coffee notes sodium-softened water doesn't improve taste.</li>
  <li><strong>Very high-alkalinity mineral waters.</strong> Some bottled waters are high in bicarbonate and can flatten flavor.</li>
</ul>

<h2>How water affects your descaling schedule</h2>
<p>Harder water means more frequent descale prompts. Better water means fewer — but don't skip the machine's prompts either way. See the <a href="/articles/breville-descaling-and-maintenance-schedule/">maintenance schedule</a>.</p>

<div class="callout"><strong>Quick start:</strong> if you do nothing else, use filtered water for taste, follow your machine's descale prompts, and avoid softened water. If you're chasing the last bit of flavor, try remineralized distilled water for a week and compare.</div>
`,
};
