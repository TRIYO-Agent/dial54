module.exports = {
  order: 5,
  slug: "breville-descaling-and-maintenance-schedule",
  title: "Breville Bambino & Barista Descaling and Maintenance Schedule (Daily, Weekly, Monthly)",
  category: "Maintenance",
  description: "A simple, printable care routine for Breville 54mm machines: what to do after every drink, weekly, and when the machine asks for a cleaning or descale cycle — based on Breville's own manuals.",
  related: ["water-for-espresso", "milk-steaming-tips-bambino-plus", "dialing-in-espresso-on-a-bambino"],
  sources: [
    { label: "Breville — Bambino (BES450) instruction book: Clean & Descale cycle (PDF)", url: "https://www.breville.com/content/dam/breville/us/en/assets/miscellaneous/instruction-manual/espresso/BES450-instruction-manual.pdf" },
    { label: "Breville — Bambino Plus (BES500) instruction book: cleaning cycle and descaling (PDF)", url: "https://www.breville.com/content/dam/breville/us/en/assets/miscellaneous/instruction-manual/espresso/BES500-instruction-manual.pdf" },
    { label: "Breville — Barista Express (BES870) instruction book: water filter, cleaning cycle, descaling (PDF)", url: "https://www.breville.com/content/dam/breville/us/en/assets/miscellaneous/instruction-manual/espresso/BES870-instruction-manual.pdf" },
    { label: "Breville — Barista Pro (BES878) instruction book (PDF)", url: "https://www.breville.com/content/dam/breville/au/en/assets/miscellaneous/instruction-manual/espresso/BES878-instruction-manual.pdf" },
  ],
  body: `
<p>Breville machines tell you when they need a cleaning or descaling cycle, but a few small habits between those alerts keep shots tasting right and the machine working longer. Below is a schedule you can follow, with the machine-specific details pulled from Breville's instruction books. <strong>Your manual always wins</strong> — button combinations differ between models and revisions.</p>

<h2>Two different jobs: cleaning vs descaling</h2>
<ul>
  <li><strong>Cleaning cycle (back-flush)</strong> removes coffee oils from the group head using the supplied cleaning disc and a cleaning tablet in the basket. On the Barista Express, Breville calls this "a back-flushing cycle and … separate from descaling."</li>
  <li><strong>Descaling</strong> removes mineral scale from inside the water path. Breville warns that hard-water buildup can reduce "brewing flow, brewing temperature, power of the machine, and the taste of the espresso."</li>
</ul>

<h2>After every drink (under a minute)</h2>
<ul>
  <li><strong>Purge and wipe the steam wand</strong> immediately after steaming. Breville says the wand "should always be cleaned after texturing milk." The Bambino Plus purges automatically when you lower the wand; on the Bambino, Barista Express and Barista Pro, run a short burst of steam yourself.</li>
  <li><strong>Knock out the puck and rinse the basket.</strong> A [[p:knockBox]] helps.</li>
  <li><strong>Run a short flush of water through the group head</strong> to rinse grounds off the shower screen. Breville also recommends a short flush before locking in the portafilter to stabilize temperature.</li>
</ul>

<h2>Daily</h2>
<ul>
  <li>Empty and rinse the drip tray (the Bambino Plus and Barista Pro, for example, have a "tray full" indicator).</li>
  <li>Refill the tank with fresh water rather than topping up water that's sat for days.</li>
  <li>Wipe the group head gasket area with a damp cloth or brush.</li>
</ul>

<h2>Weekly</h2>
<ul>
  <li>Wash the portafilter, baskets and milk jug in warm soapy water and rinse well.</li>
  <li>Check the steam tip holes. If any are blocked, use the supplied cleaning tool (the Bambino Plus stores it under the water tank) or unscrew and soak the tip per your manual.</li>
  <li>Wipe the machine exterior with a soft damp cloth; Breville advises against abrasive cleaners and pads.</li>
</ul>

<h2>When the machine asks: cleaning cycle</h2>
<ul>
  <li><strong>Bambino Plus:</strong> after 200 extractions since the last cleaning, the 1 CUP and 2 CUP buttons flash alternately. Insert the cleaning disc with a cleaning tablet and run the cycle described in the manual.</li>
  <li><strong>Barista Express:</strong> the CLEAN/DESCALE light <em>flashes</em> when a cleaning cycle is due. Breville says the cycle takes about five minutes; check the tablet dissolved afterwards and repeat if not.</li>
  <li><strong>Barista Pro:</strong> the display prompts for a flush cleaning cycle, which is separate from descaling.</li>
  <li><strong>Bambino:</strong> the base model combines its alert into a single "clean & descale" prompt — the 2 Cup button flashes continuously.</li>
</ul>

<h2>When the machine asks: descaling</h2>
<ul>
  <li><strong>Bambino Plus:</strong> 1 CUP + STEAM and 2 CUP flash alternately for 15 seconds.</li>
  <li><strong>Barista Express:</strong> the CLEAN/DESCALE light is <em>solid on</em>.</li>
  <li><strong>All models:</strong> you fill the tank to the DESCALE line (or the stated volume) with descaler solution, place a roughly 2 L / 68 oz container under the group and wand, run the descale mode, then rinse with a full tank. Breville warns not to remove or fully empty the tank mid-cycle.</li>
</ul>
<p>Don't ignore the prompt. The Bambino manual specifically says it's "NOT recommended to ignore the clean cycle warning." Use Breville's descaling powder or a [[p:descaler]] intended for espresso machines, and follow the dilution on the package.</p>

<h2>Every two months (Barista Express / Barista Pro)</h2>
<p>Both include a water filter in the tank. Breville says replacing it every two months "will reduce the need to descale," and to replace it more often in hard-water areas. The dial on the holder lets you set the next change date. The Bambino and Bambino Plus don't ship with this filter, which makes <a href="/articles/water-for-espresso/">your water choice</a> even more important.</p>

<h2>Printable checklist</h2>
<div class="table-scroll"><table>
<thead><tr><th>When</th><th>Task</th></tr></thead>
<tbody>
<tr><td>Every drink</td><td>Purge + wipe steam wand · knock out puck · rinse basket · flush group</td></tr>
<tr><td>Daily</td><td>Empty drip tray · fresh water · wipe group head</td></tr>
<tr><td>Weekly</td><td>Wash portafilter, baskets, jug · check steam tip holes · wipe exterior</td></tr>
<tr><td>On prompt</td><td>Cleaning cycle with disc + tablet</td></tr>
<tr><td>On prompt</td><td>Descale cycle, then full-tank rinse</td></tr>
<tr><td>Every 2 months</td><td>Replace tank water filter (Express / Pro), sooner with hard water</td></tr>
</tbody></table></div>
`,
};
