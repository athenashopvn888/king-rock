import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

const source = fs.readFileSync(new URL("../app/info/nicotine-vapes-king-west/page.tsx", import.meta.url), "utf8");
const categorySource = fs.readFileSync(new URL("../app/items/[category]/page.tsx", import.meta.url), "utf8");
const slugs = ["1092-Envi-Dripn-28K.webp","GEEK-PROMAX.jpg","geek_universe_pulse_x_25k.webp","nexa_showcase_600x600.webp","1081OVNS10000.jpg","OVNS500x500HQ.webp"];

test("King Rock nicotine page keeps evergreen nicotine copy and safe routes", () => {
  for (const slug of slugs) assert.match(source, new RegExp(slug.replaceAll(".", "\\.")));
  assert.equal((source.match(/image: /g) ?? []).length, 6);
  assert.match(source, /menuHref="\/items\/vapes"/);
  assert.match(source, /showMenuGrid=\{false\}/);
  assert.match(source, /Adults 19\+\. Nicotine is addictive\./);
  assert.match(source, /title="Nicotine Vape"/);
  assert.match(source, /kept separate from THC Vape products/);
  assert.doesNotMatch(source, /six live-checked|Six Live-Checked|six featured|current stock|guaranteed availability/i);
  assert.doesNotMatch(source, /address=/);
  assert.doesNotMatch(source, /hours=/);
});

test("Nicotine Vape category renders the approved exact H1 and absolute title", () => {
  assert.match(categorySource, /catInfo\.key === "VAPE PENS"/);
  assert.match(categorySource, /\{ absolute: catInfo\.config\.seoTitle \}/);
  assert.match(categorySource, />Nicotine Vape<\/span>/);
});
