const groups = [
  ["Espresso machines", ["bambino", "bambinoPlus", "baristaExpress", "baristaExpressImpress", "baristaPro", "baristaTouch", "ninjaLuxe"]],
  ["Grinders", ["encoreEsp", "encoreEspPro", "smartGrinderPro", "df54", "df64", "handGrinder", "mignon", "nicheZero"]],
  ["Puck prep and 54mm accessories", ["bottomless54", "tamper53", "funnel54", "puckScreen54", "wdtTool", "blindShaker", "tampMat", "knockBox"]],
  ["Weighing and milk", ["espressoScale", "shotGlass", "milkPitcher12"]],
  ["Cleaning and water", ["cleaningTablets", "descaler", "waterTestStrips", "waterPitcherFilter", "mineralPacks", "distilledWater"]],
];
module.exports = {
  path: "/gear/",
  title: "Gear picks for Breville 54mm espresso",
  description: "Every machine, grinder and accessory mentioned in Dial54 guides, with a short note on why it fits a Breville 54mm setup.",
  body: ({ productGrid, esc, cfg }) => `
<h1>Gear picks</h1>
<p class="lede">Everything we mention across our guides, in one place. Each card says why it fits a Breville 54mm setup. Not sure an accessory will fit? Try the <a href="/tools/54mm-checker/">54mm fit checker</a> first.</p>
<p class="disclosure inline">${esc(cfg.disclosure)}</p>
${groups.map(([h, ids]) => `<h2>${h}</h2>${productGrid(ids)}`).join("\n")}
<p class="note">Card photos are illustrative, generic images and do not show the exact product. Check the listing for current details before you buy.</p>
`,
};
