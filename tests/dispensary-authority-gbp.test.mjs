import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

const data = fs.readFileSync("app/resources/resourceData.ts", "utf8");
const view = fs.readFileSync("app/resources/ResourceView.tsx", "utf8");
const route = fs.readFileSync("app/resources/[...slug]/page.tsx", "utf8");
const sitemap = fs.readFileSync("app/sitemap.ts", "utf8");
const slug = "cannabis-dispensary-vs-weed-dispensary";

test("KR01 publishes the approved dispensary terminology resource", () => {
  assert.match(data, new RegExp(`slug: "${slug}"`));
  assert.match(data, /Dispensary vs Weed Dispensary \| King Rock Toronto/);
  assert.match(data, /Different Words, Similar Meaning: Cannabis vs\. Weed Dispensary/);
  assert.match(data, /Frequently Asked Questions/);
});

test("resource links to the protected owner and omits workflow and commercial claims", () => {
  const start = data.indexOf(`slug: "${slug}"`);
  const end = data.indexOf('slug: "menu-guide"', start);
  const resource = data.slice(start, end);
  assert.match(resource, /href: "\/weed-dispensary-toronto\/"/);
  assert.doesNotMatch(resource, /local intent|search intent|authority page|support page|canonical|Business Profile|entity alignment|primary destination|internal link/i);
  assert.doesNotMatch(resource, /price|deal|stock|availability|order now|buy now|delivery/i);
  assert.equal(data.split(`href: "/resources/${slug}"`).length - 1, 1);
});

test("dynamic resources retain preferred www metadata and sitemap generation", () => {
  assert.match(view, /page\.faqHeading \|\| "King Rock Weed & Flower Questions"/);
  assert.match(route, /title: \{ absolute: page\.seoTitle \}/);
  assert.match(route, /https:\/\/www\.kingrockcannabis\.com\/resources\//);
  assert.match(sitemap, /RESOURCE_PAGES\.map/);
  assert.match(sitemap, /https:\/\/www\.kingrockcannabis\.com/);
});

