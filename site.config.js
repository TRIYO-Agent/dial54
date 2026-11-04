// Site-wide settings. Edit here; every page picks these up on the next build.
module.exports = {
  siteName: "Dial54",
  tagline: "Espresso gear and guides for Breville 54mm machines",
  // Set to the live URL (no trailing slash). Used for canonical links and sitemap.
  baseUrl: process.env.SITE_URL || "https://dial54.onrender.com",
  // Amazon Associates tracking ID, e.g. "dial54-20". Leave empty until the
  // Associates account is approved. While empty, NO Amazon links are generated.
  amazonTag: "dial54-20",
  amazonDomain: "https://www.amazon.com",
  disclosure: "As an Amazon Associate I earn from qualifying purchases.",
  contactEmail: "", // leave empty to show "email coming soon"
  published: "2026-10-26",
};
