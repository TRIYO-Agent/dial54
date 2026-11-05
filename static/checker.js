(function () {
  var machines = [
    { id: "bes450", name: "Breville Bambino (BES450)", sys: "b54" },
    { id: "bes500", name: "Breville Bambino Plus (BES500)", sys: "b54", autoMilk: true },
    { id: "bes810", name: "Breville Duo-Temp Pro", sys: "b54" },
    { id: "bes870", name: "Breville Barista Express (BES870)", sys: "b54", funnel: true },
    { id: "bes876", name: "Breville Barista Express Impress", sys: "b54" },
    { id: "bes878", name: "Breville Barista Pro (BES878)", sys: "b54", funnel: true },
    { id: "bes880", name: "Breville Barista Touch", sys: "b54" },
    { id: "bes881", name: "Breville Barista Touch Impress", sys: "b54" },
    { id: "dual", name: "Breville Dual Boiler", sys: "b58" },
    { id: "oraclejet", name: "Breville Oracle Jet / Oracle Dual Boiler", sys: "b58" },
    { id: "ninja", name: "Ninja Luxe Café (ES501 / ES601 / ES701)", sys: "n53" },
  ];
  var accessories = [
    { id: "portafilter", name: "Portafilter (incl. bottomless)", sized: true, tip: "Must match the group head's diameter and locking ears. Look for your exact model name in the listing." },
    { id: "basket", name: "Filter basket", sized: true, tip: "Must seat in your portafilter; rim shape and depth matter, not just diameter." },
    { id: "tamper", name: "Tamper", sized: true, tip: "Fits inside the basket, so Breville 54mm tampers are slightly under 54mm (often about 53–53.3mm)." },
    { id: "funnel", name: "Dosing funnel", sized: true, tip: "Sits on the portafilter rim, so it must match the portafilter's outer size." },
    { id: "screen", name: "Puck screen", sized: true, tip: "Fits inside the basket (often listed around 53.3mm for Breville 54mm). Thicker screens reduce headspace." },
    { id: "distributor", name: "Distributor / leveler (spinning type)", sized: true, tip: "Sits in or on the basket, so it's size-specific." },
    { id: "wdt", name: "WDT needle tool", sized: false, tip: "Needles work inside any basket." },
    { id: "scale", name: "Espresso scale", sized: false, tip: "Size-independent, but measure your drip tray and cup clearance." },
    { id: "pitcher", name: "Milk pitcher", sized: false, tip: "Size-independent for manual steaming." },
    { id: "knock", name: "Knock box / tamping mat / brush", sized: false, tip: "Size-independent." },
  ];
  var sysLabel = { b54: "Breville 54mm", b58: "Breville 58mm", n53: "Ninja 53mm" };
  var m = document.getElementById("machine"), a = document.getElementById("accessory"), out = document.getElementById("result");
  function opt(sel, list, ph) {
    sel.innerHTML = '<option value="">' + ph + "</option>" + list.map(function (x) { return '<option value="' + x.id + '">' + x.name + "</option>"; }).join("");
  }
  opt(m, machines, "Choose a machine…");
  opt(a, accessories, "Choose an accessory…");
  function show() {
    var mm = machines.filter(function (x) { return x.id === m.value; })[0];
    var aa = accessories.filter(function (x) { return x.id === a.value; })[0];
    if (!mm || !aa) { out.className = "result"; out.innerHTML = "<p>Select a machine and an accessory.</p>"; return; }
    var cls, verdict, detail;
    if (!aa.sized) {
      cls = "ok"; verdict = "Fits: size doesn't matter";
      detail = aa.tip;
      if (aa.id === "pitcher" && mm.autoMilk) { cls = "warn"; verdict = "Fine for manual steaming only"; detail = "The Bambino Plus's automatic milk mode reads temperature through its supplied jug, and Breville's manual says to use only that jug. A separate pitcher is fine for manual steaming and pouring."; }
      if (aa.id === "scale" && mm.autoMilk) { detail += " On the Bambino Plus, move the scale off the drip tray before auto steaming so it doesn't cover the milk temperature sensor."; }
    } else if (mm.sys === "b54") {
      cls = "ok"; verdict = "Yes: buy accessories made for Breville 54mm";
      detail = aa.tip;
      if (aa.id === "funnel" && mm.funnel) detail += " Note: your machine already ships with Breville's own Dosing Funnel.";
    } else {
      cls = "no"; verdict = "No: your machine uses the " + sysLabel[mm.sys] + " system";
      detail = "Breville 54mm " + aa.name.toLowerCase() + "s won't fit. Look for accessories that are specifically listed for " + sysLabel[mm.sys] + (mm.sys === "n53" ? " and name your Ninja model code (Ninja sells its own parts by part number)." : " machines.");
    }
    out.className = "result " + cls;
    out.innerHTML = '<p><strong class="' + cls + '">' + verdict + "</strong></p><p>" + detail + '</p><p class="muted">Machine system: ' + sysLabel[mm.sys] + ". Always confirm your exact model in the product listing.</p>";
  }
  m.addEventListener("change", show); a.addEventListener("change", show);
})();
