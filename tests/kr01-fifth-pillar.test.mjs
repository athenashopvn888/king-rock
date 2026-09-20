import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

const pillarLib = fs.readFileSync("app/lib/pillarPages.ts", "utf8");
const ownerPage = fs.readFileSync("app/weed-dispensary-king-west/page.tsx", "utf8");
const home = fs.readFileSync("app/page.tsx", "utf8");
const footer = fs.readFileSync("app/components/Footer.tsx", "utf8");
const sitemap = fs.readFileSync("app/sitemap.ts", "utf8");
const landing = fs.readFileSync("app/components/PillarLanding.tsx", "utf8");

test("King West owner pillar has a unique H1, FAQ, and indexed root URL", () => {
  assert.match(pillarLib, /h1: "Weed Dispensary at King & Dufferin"/);
  assert.match(pillarLib, /path: `\/\$\{PILLAR_SLUGS\.weedDispensary\}`/);
  assert.match(pillarLib, /Is King Rock a weed dispensary on King West\?/);
  assert.match(pillarLib, /Is this a city-wide Toronto dispensary listing\?/);
  assert.match(pillarLib, /Does this page confirm a specific strain or price\?/);
  assert.match(ownerPage, /PILLAR_OWNER/);
  assert.match(ownerPage, /index: true/);
  assert.match(ownerPage, /pillarCanonical\(PILLAR_OWNER\)/);
  assert.match(landing, /faqPageJsonLd\(page\.faqs\)/);
  assert.match(landing, /Frequently Asked Questions/);
});

test("homepage hub and sitemap expose the King West owner card", () => {
  assert.match(pillarLib, /slug: PILLAR_SLUGS\.weedDispensary/);
  assert.match(pillarLib, /href: `\/\$\{PILLAR_SLUGS\.weedDispensary\}`/);
  assert.match(home, /Five neighbourhood pages/);
  assert.match(home, /King West weed dispensary/);
  assert.match(home, /PILLAR_HUB_CARDS/);
  assert.match(footer, /href="\/weed-dispensary-king-west"/);
  assert.match(sitemap, /\$\{BASE\}\/weed-dispensary-king-west/);
});

test("owner pillar stays neighbourhood-only, 19+, and inventory-neutral", () => {
  const ownerBlockStart = pillarLib.indexOf("export const PILLAR_OWNER");
  const ownerBlockEnd = pillarLib.indexOf("export const PILLAR_24H");
  const owner = pillarLib.slice(ownerBlockStart, ownerBlockEnd);
  assert.match(owner, /Adults 19\+/);
  assert.match(owner, /King \/ Parkdale \/ Queen West/);
  assert.match(owner, /not a city-wide Toronto dispensary directory/);
  assert.match(owner, /does not invent inventory or prices/);
  assert.match(owner, /not a medical clinic/);
  assert.doesNotMatch(owner, /treats anxiety|medical marijuana|prescrib|cures|therapeutic/i);
  assert.doesNotMatch(owner, /guaranteed availability|in stock now|live inventory feed of/i);
  assert.doesNotMatch(owner, /weed-dispensary-toronto/);
});
