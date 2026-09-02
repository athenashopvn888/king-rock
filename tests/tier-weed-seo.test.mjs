import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const tierPage = readFileSync("app/[tier]/page.tsx", "utf8");
const tierCopy = readFileSync("app/lib/tierSeoContent.ts", "utf8");
const footer = readFileSync("app/components/Footer.tsx", "utf8");
const products = readFileSync("app/lib/products.ts", "utf8");
const navbar = readFileSync("app/components/Navbar.tsx", "utf8");
const resources = readFileSync("app/resources/resourceData.ts", "utf8");
const redirects = readFileSync("next.config.ts", "utf8");

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

test("V2 tier and guide routes are Weed-bearing canonical owners", () => {
  for (const slug of ["exotic-weed", "premium-weed", "aaa-weed", "aa-weed", "budget-weed"]) {
    assert.match(products, new RegExp(`slug: "${slug}"`));
    assert.match(navbar, new RegExp(`href: "/${slug}"`));
  }
  assert.match(resources, /slug: "weed-flower-guide"/);
  assert.doesNotMatch(resources, /href: "\/(exotic|premium|aaa|aa|budget)"/);
  assert.doesNotMatch(resources, /href: "\/resources\/flower-guide"/);
});

test("legacy Weed campaign routes redirect directly to V2 owners", () => {
  for (const [source, destination] of [
    ["exotic", "exotic-weed"], ["premium", "premium-weed"], ["aaa", "aaa-weed"],
    ["aa", "aa-weed"], ["budget", "budget-weed"],
  ]) {
    assert.match(redirects, new RegExp(`source: "/${source}", destination: "/${destination}", permanent: true`));
  }
  assert.match(redirects, /source: "\/resources\/flower-guide"[\s\S]*destination: "\/resources\/weed-flower-guide"[\s\S]*permanent: true/);
});

test("every tier title and H1 uses Weed naming", () => {
  for (const label of ["Exotic Weed", "Premium Weed", "AAA+ Weed", "AA Weed", "Budget Weed"]) {
    assert.ok(tierCopy.includes(label), `missing ${label}`);
  }
  assert.doesNotMatch(tierCopy, /Weed (Exotic|Premium|AAA\+?|AA|Budget)/);
  assert.doesNotMatch(products, /name: "Weed (Exotic|Premium|AAA\+?|AA|Budget)"/);
  assert.doesNotMatch(navbar, /label: "Weed (Exotic|Premium|AAA\+?|AA|Budget)"/);
});

test("new tier copy respects KR01 Hours Lock and omits commercial claims", () => {
  assert.doesNotMatch(tierCopy, /24 hours|10:00|23:59|open daily|437[- )]|1220b/i);
  assert.doesNotMatch(tierCopy, /now in stock|available today|delivery|current menu|posted prices|same-day/i);
});
