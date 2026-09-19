import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

const pillarLib = fs.readFileSync("app/lib/pillarPages.ts", "utf8");
const nap = fs.readFileSync("app/lib/storeNap.ts", "utf8");
const home = fs.readFileSync("app/page.tsx", "utf8");
const footer = fs.readFileSync("app/components/Footer.tsx", "utf8");
const seoPages = fs.readFileSync("app/lib/seoPages.ts", "utf8");
const landing = fs.readFileSync("app/components/PillarLanding.tsx", "utf8");
const dispensaryPage = fs.readFileSync("app/info/24-hour-dispensary-king-west/page.tsx", "utf8");
const deliveryLp = fs.readFileSync("app/info/weed-delivery-king-west/page.tsx", "utf8");
const cigarettes = fs.readFileSync("app/info/native-cigarettes-king-west/page.tsx", "utf8");
const nicotine = fs.readFileSync("app/info/nicotine-vapes-king-west/page.tsx", "utf8");
const sitemap = fs.readFileSync("app/sitemap.ts", "utf8");

const stack = [pillarLib, home, footer, landing, dispensaryPage, deliveryLp, cigarettes, nicotine].join("\n");

test("four neighbourhood pillar URLs are registered and hub-linked", () => {
  for (const slug of [
    "24-hour-dispensary-king-west",
    "weed-delivery-king-west",
    "native-cigarettes-king-west",
    "nicotine-vapes-king-west",
  ]) {
    assert.match(pillarLib, new RegExp(slug));
    assert.match(home, new RegExp(`/info/${slug}`));
    assert.match(footer, new RegExp(`/info/${slug}`));
    assert.match(seoPages, new RegExp(`slug: "${slug}"`));
  }
  assert.match(home, /PILLAR_HUB_CARDS/);
  assert.match(home, /Four neighbourhood pages/);
  assert.match(dispensaryPage, /PILLAR_24H/);
  assert.match(deliveryLp, /PILLAR_DELIVERY/);
  assert.match(sitemap, /SEO_PAGES/);
});

test("hours lock: walk-in stays 24/7 and delivery keeps its own window", () => {
  assert.match(nap, /hoursLabel: "Open 24 Hours Daily"/);
  assert.match(nap, /hoursOpens: "00:00"/);
  assert.match(nap, /hoursCloses: "23:59"/);
  assert.match(pillarLib, /DELIVERY_HOURS_LABEL = "10:00 a\.m\.–10:00 p\.m\."/);
  assert.match(pillarLib, /Open 24 Hours Daily/);
  assert.match(pillarLib, /10:00 a\.m\.–10:00 p\.m\./);
  assert.match(pillarLib, /Delivery hours are not the walk-in hours/);
  assert.doesNotMatch(pillarLib, /10:00 AM - 01:00 AM/);
  assert.doesNotMatch(dispensaryPage + deliveryLp, /10:00 AM - 01:00 AM/);
});

test("pillar pages stay neighbourhood-scoped, 19+, and claim-safe", () => {
  assert.match(pillarLib, /King \/ Parkdale \/ Queen West/);
  assert.match(pillarLib, /Adults 19\+/);
  assert.match(pillarLib, /not a city-wide/);
  assert.match(landing, /faqPageJsonLd\(page\.faqs\)/);
  assert.match(landing, /Frequently Asked Questions/);
  assert.match(cigarettes, /faqs=\{/);
  assert.match(nicotine, /Adults 19\+\. Nicotine is addictive\./);
  assert.doesNotMatch(stack, /treats anxiety|medical marijuana|prescrib|cures|therapeutic/i);
  assert.doesNotMatch(pillarLib, /\$3\/g|\$10-\$12\/g|guaranteed availability|live stock feed of/i);
  assert.doesNotMatch(stack, /info\/24-hour-dispensary-toronto|info\/weed-delivery-toronto/);
});
