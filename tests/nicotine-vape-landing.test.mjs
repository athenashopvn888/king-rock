import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

const source = fs.readFileSync(new URL("../app/info/nicotine-vapes-king-west/page.tsx", import.meta.url), "utf8");
const slugs = ["1092-Envi-Dripn-28K.webp","GEEK-PROMAX.jpg","geek_universe_pulse_x_25k.webp","nexa_showcase_600x600.webp","1081OVNS10000.jpg","OVNS500x500HQ.webp"];

test("King Rock nicotine page uses six live-checked VAPE PENS images and safe routes", () => {
  for (const slug of slugs) assert.match(source, new RegExp(slug.replaceAll(".", "\\.")));
  assert.equal((source.match(/image: /g) ?? []).length, 6);
  assert.match(source, /menuHref="\/items\/vapes"/);
  assert.match(source, /showMenuGrid=\{false\}/);
  assert.match(source, /Adults 19\+\. Nicotine is addictive\./);
  assert.doesNotMatch(source, /address=/);
  assert.doesNotMatch(source, /hours=/);
});
