import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";

const home = fs.readFileSync("app/page.tsx", "utf8");
const sitemap = fs.readFileSync("app/sitemap.ts", "utf8");
const pillars = fs.readFileSync("app/lib/pillarPages.ts", "utf8");
const nap = fs.readFileSync("app/lib/storeNap.ts", "utf8");

test("King Rock retains all five neighbourhood parity owners", () => {
  for (const slug of [
    "weed-dispensary-king-west",
    "24-hour-dispensary-king-west",
    "weed-delivery-king-west",
    "native-cigarettes-king-west",
    "nicotine-vapes-king-west",
  ]) assert.ok(`${home}\n${sitemap}\n${pillars}`.includes(slug), `missing ${slug}`);
});

test("KR01 keeps the verified 24-hour NAP and unique King West scope", () => {
  assert.match(nap, /streetAddress: "1220b King St W"/);
  assert.match(nap, /phoneIntl: "\+14377809691"/);
  assert.match(nap, /hoursLabel: "Open 24 Hours Daily"/);
  assert.match(pillars, /King West \/ Liberty Village/);
  assert.doesNotMatch(`${home}\n${pillars}`, /Ottawa|Gatineau|ByWard|sister store/i);
});
