module.exports = {
  path: "/contact/",
  title: "Contact",
  description: "How to contact Dial54 with corrections, questions or suggestions.",
  body: ({ cfg, esc }) => `
<h1>Contact</h1>
<p>Questions, corrections or a guide you'd like to see? We'd love to hear from you.</p>
${cfg.contactEmail ? `<p>Email: <a href="mailto:${esc(cfg.contactEmail)}">${esc(cfg.contactEmail)}</a></p>` : `<div class="callout"><strong>Email coming soon.</strong> A dedicated contact address for Dial54 is being set up. The form below will be switched on at the same time.</div>`}
<form class="contact" onsubmit="return false" aria-describedby="form-note">
  <div><label for="name">Name</label><input id="name" name="name" autocomplete="name" disabled></div>
  <div><label for="email">Email</label><input id="email" name="email" type="email" autocomplete="email" disabled></div>
  <div><label for="msg">Message</label><textarea id="msg" name="message" rows="5" disabled></textarea></div>
  <button type="submit" disabled>Send (coming soon)</button>
  <p id="form-note" class="muted">This form is not active yet and does not collect or send any information.</p>
</form>
<p>We read every message but can't offer one-on-one repair support. For warranty or repair questions about your machine, contact the manufacturer directly.</p>
`,
};
