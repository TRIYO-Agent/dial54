// ONE place for every product mentioned on the site.
//
// In article text, a product is written as [[p:id]] and rendered from this file.
// - If `asin` is set AND site.config.js has an amazonTag, it becomes an Amazon
//   affiliate link: https://www.amazon.com/dp/<asin>?tag=<amazonTag>
// - Else if `url` is set, it links to that URL (rel="sponsored nofollow" if
//   `sponsored: true`).
// - Otherwise it is rendered as plain text (current state: no links at all).
module.exports = {
  bambino:            { name: "Breville Bambino (BES450)", asin: "B0B1JPPG2L", url: "" },
  bambinoPlus:        { name: "Breville Bambino Plus (BES500)", asin: "B07JVD78TT", url: "" },
  baristaExpress:     { name: "Breville Barista Express (BES870)", asin: "B00CH9QWOU", url: "" },
  baristaExpressImpress: { name: "Breville Barista Express Impress", asin: "B0BBYNPV33", url: "" },
  baristaPro:         { name: "Breville Barista Pro (BES878)", asin: "B08133HX34", url: "" },
  baristaTouch:       { name: "Breville Barista Touch", asin: "B078WMLXXG", url: "" },
  ninjaLuxe:          { name: "Ninja Luxe Café", asin: "B0D45PK5V4", url: "" },
  encoreEsp:          { name: "Baratza Encore ESP", asin: "B0BW272XCV", url: "" },
  encoreEspPro:       { name: "Baratza Encore ESP Pro", asin: "B0FN6NHYDW", url: "" },
  smartGrinderPro:    { name: "Breville Smart Grinder Pro", asin: "B0088QF7H4", url: "" },
  df54:               { name: "DF54 single-dose flat-burr grinder (sold as MiiCoffee DF54, Turin DF54 and others)", asin: "", url: "" },
  df64:               { name: "DF64-class 64mm single-dose grinder", asin: "", url: "" },
  handGrinder:        { name: "espresso-capable hand grinder (e.g. 1Zpresso J-series or Kingrinder K-series)", asin: "", url: "" },
  nicheZero:          { name: "Niche Zero", asin: "", url: "" },
  mignon:             { name: "Eureka Mignon (Specialità or similar)", asin: "", url: "" },
  bottomless54:       { name: "54mm bottomless (naked) portafilter made for Breville", asin: "", url: "" },
  tamper53:           { name: "Breville-fit tamper (about 53.3mm)", asin: "", url: "" },
  funnel54:           { name: "54mm magnetic dosing funnel", asin: "", url: "" },
  puckScreen54:       { name: "puck screen sized for Breville 54mm baskets", asin: "", url: "" },
  wdtTool:            { name: "WDT needle distribution tool", asin: "", url: "" },
  espressoScale:      { name: "compact espresso scale with timer (0.1 g)", asin: "", url: "" },
  knockBox:           { name: "knock box", asin: "", url: "" },
  tampMat:            { name: "silicone tamping mat", asin: "", url: "" },
  milkPitcher12:      { name: "12 oz stainless milk pitcher", asin: "", url: "" },
  cleaningTablets:    { name: "espresso machine cleaning tablets", asin: "", url: "" },
  descaler:           { name: "espresso machine descaler", asin: "", url: "" },
  waterTestStrips:    { name: "water hardness test strips", asin: "", url: "" },
  waterPitcherFilter: { name: "pitcher water filter", asin: "", url: "" },
  mineralPacks:       { name: "coffee water mineral packets (Third Wave Water or similar)", asin: "", url: "" },
  distilledWater:     { name: "distilled water", asin: "", url: "" },
  shotGlass:          { name: "measured espresso shot glass", asin: "", url: "" },
  blindShaker:        { name: "dosing cup / blind shaker", asin: "", url: "" },
};
