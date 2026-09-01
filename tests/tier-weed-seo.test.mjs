import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const tierPage = readFileSync("app/[tier]/page.tsx", "utf8");
const tierCopy = readFileSync("app/lib/tierSeoContent.ts", "utf8");
const footer = readFileSync("app/components/Footer.tsx", "utf8");

test("all five verified King Rock tier keys have reviewed copy", () => {
  for (const key of ["EXOTIC", "PREMIUM", '"AAA+"', "AA", "BUDGET"]) assert.ok(tierCopy.includes(`${key}:`), `missing ${key}`);
  assert.match(tierPage, /TIER_META_DESCRIPTION\[tierInfo\.key\]/);
  assert.match(tierPage, /TIER_H1\[tierInfo\.key\]/);
  assert.match(tierPage, /absolute: seo\?\.seoTitle/);
});

test("tier canonicals and protected broad Weed owner stay in place", () => {
  assert.match(tierPage, /canonical: `https:\/\/www\.kingrockcannabis\.com\/\$\{tierSlug\}`/);
  assert.match(footer, /href="\/weed-dispensary-toronto\/"/);
});

test("new tier copy respects KR01 Hours Lock and omits commercial claims", () => {
  assert.doesNotMatch(tierCopy, /24 hours|10:00|23:59|open daily|437[- )]|1220b/i);
  assert.doesNotMatch(tierCopy, /now in stock|available today|delivery|current menu|posted prices|same-day/i);
});
