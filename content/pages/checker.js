module.exports = {
  path: "/tools/54mm-checker/",
  title: "54mm Accessory Compatibility Checker",
  description: "Pick your espresso machine and an accessory type to see whether 'Breville 54mm' accessories fit, and what to check in the listing.",
  body: `
<h1>54mm Accessory Compatibility Checker</h1>
<p>Pick your machine and the type of accessory you're considering. The checker runs in your browser and doesn't store anything. It tells you whether accessories sold as <strong>"Breville 54mm"</strong> are the right system for your machine — always confirm the exact model in the product listing.</p>
<form class="checker" id="checker" onsubmit="return false">
  <div><label for="machine">Your machine</label><select id="machine"></select></div>
  <div><label for="accessory">Accessory type</label><select id="accessory"></select></div>
</form>
<div id="result" class="result" aria-live="polite"><p>Select a machine and an accessory.</p></div>
<h2>How this works</h2>
<p>Machine portafilter sizes come from Breville and Ninja documentation and the model table at Espresso Manual — see our <a href="/articles/breville-54mm-accessory-fit-guide/">54mm fit guide</a> for sources. Accessories are grouped by whether they depend on the portafilter or basket size.</p>
<script src="/checker.js" defer></script>
`,
};
