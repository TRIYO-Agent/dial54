module.exports = {
  order: 6,
  slug: "dialing-in-espresso-on-a-bambino",
  title: "How to Dial In Espresso on a Breville Bambino (Step by Step)",
  category: "Technique",
  description: "A repeatable method for dialing in a Bambino or Bambino Plus with the single-wall basket: a starting recipe, how to read a shot, and which single variable to change next.",
  related: ["best-grinder-for-breville-bambino", "choosing-an-espresso-scale", "wdt-tools-and-puck-screens-explained"],
  sources: [
    { label: "Breville — Bambino instruction book: dose, tamping, extraction guide (PDF)", url: "https://www.breville.com/content/dam/breville/us/en/assets/miscellaneous/instruction-manual/espresso/BES450-instruction-manual.pdf" },
    { label: "Breville — Bambino Plus instruction book: extraction troubleshooting (PDF)", url: "https://www.breville.com/content/dam/breville/us/en/assets/miscellaneous/instruction-manual/espresso/BES500-instruction-manual.pdf" },
    { label: "Baratza — Dialing in Espresso", url: "https://www.baratza.com/en-us/blog/product-guides/dialing-in-espresso" },
  ],
  body: `
<p>"Dialing in" means adjusting your recipe until a coffee tastes balanced on your machine. It sounds fussy, but with a scale and a method it usually takes a handful of shots per new bag. This guide assumes a Bambino or Bambino Plus with the <strong>single-wall</strong> double basket and freshly ground beans. (With pre-ground coffee, use the dual-wall basket; it's designed to compensate and there's much less to dial in.)</p>

<h2>What you need</h2>
<ul>
  <li>An <a href="/articles/best-grinder-for-breville-bambino/">espresso-capable grinder</a></li>
  <li>An [[p:espressoScale]] (or any 0.1 g scale plus your phone's timer)</li>
  <li>Fresh beans. Breville's manual suggests beans with a "Roasted On" date and recommends using them roughly 5–20 days after roasting.</li>
  <li>Optional but helpful: a [[p:wdtTool]] and a [[p:funnel54]]</li>
</ul>

<h2>Step 1: Pick a starting recipe</h2>
<p>Start with three numbers: <strong>dose</strong> (dry coffee in), <strong>yield</strong> (liquid espresso out) and <strong>time</strong>.</p>
<ul>
  <li><strong>Dose:</strong> 18 g. Breville designs the Bambino around an 18 g dose, and the manual lists the double basket's range as 16–19 g.</li>
  <li><strong>Yield:</strong> about 36 g — a 1:2 ratio is a widely used starting point in specialty coffee.</li>
  <li><strong>Time:</strong> roughly 25–35 seconds from pressing the button is a common target range. It's a guide, not a rule; taste decides.</li>
</ul>

<h2>Step 2: Prep the puck the same way every time</h2>
<ol>
  <li>Weigh 18 g of beans and grind into the basket (or a cup, then pour in).</li>
  <li>Stir with a WDT tool to break up clumps, then level.</li>
  <li>Tamp level and firmly. Breville suggests roughly 30–40 lb (15–20 kg), but notes that consistent pressure matters more than the exact amount.</li>
  <li>Check headspace: Breville's guide is that the top of the tamper's cap should sit level with the basket rim after tamping. If you're well below, increase the dose slightly; if the puck touches the shower screen, reduce it.</li>
  <li>Flush the group head for a second or two, then lock in.</li>
</ol>

<h2>Step 3: Pull the shot and watch the start</h2>
<p>The Bambino manual says that, as a guide, espresso should start to flow after about <strong>8–12 seconds</strong> (the pre-infusion/"infusion time") and look like "dripping honey." Flow starting in under about 7 seconds suggests the grind is too coarse or the basket is under-dosed. Drips that never really become a stream after 12 seconds suggest the grind is too fine.</p>
<p>The preset 2-cup button aims for roughly 60 ml by volume. When dialing in by weight, it's easier to watch the scale and press the button again to stop the shot when you hit your target — Breville notes that pressing the button during extraction stops it immediately.</p>

<h2>Step 4: Taste, then change one thing</h2>
<div class="table-scroll"><table>
<thead><tr><th>Tastes…</th><th>Likely</th><th>Try</th></tr></thead>
<tbody>
<tr><td>Sour, sharp, thin, fast shot</td><td>Under-extracted</td><td>Grind finer (one or two steps)</td></tr>
<tr><td>Bitter, harsh, drying, slow shot</td><td>Over-extracted</td><td>Grind coarser</td></tr>
<tr><td>Both sour and bitter, or spurting</td><td>Uneven extraction (channeling)</td><td>Improve puck prep: WDT, level tamp</td></tr>
<tr><td>Balanced but weak</td><td>Ratio too long</td><td>Stop earlier (e.g. 1:1.8)</td></tr>
<tr><td>Balanced but too intense</td><td>Ratio too short</td><td>Run longer (e.g. 1:2.3)</td></tr>
</tbody></table></div>
<p><strong>Change only one variable per shot</strong>, and write it down. Grind is the main lever; leave dose alone unless headspace is off.</p>

<h2>Step 5: Expect these Bambino-specific quirks</h2>
<ul>
  <li><strong>Small grinder steps matter.</strong> On fine-adjustment grinders, a single click can move shot time several seconds.</li>
  <li><strong>Lighter roasts often want finer grinds</strong> and sometimes longer ratios; darker roasts generally flow faster and can taste bitter if pushed.</li>
  <li><strong>The 1-cup basket is harder to dial in.</strong> Smaller beds are less forgiving; most people get better results with the double basket and split or drink a double.</li>
</ul>

<h2>A dialing-in log you can copy</h2>
<p><code>Bean / roast date · Dose (g) · Grind setting · Yield (g) · Time (s) · First drip (s) · Taste notes · Next change</code></p>
`,
};
