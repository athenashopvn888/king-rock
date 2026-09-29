import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import { HOME_DELIVERY_CARDS, HOME_DELIVERY_FAQS } from "../app/lib/homeDelivery.ts";
import { HOME_TITLE } from "../app/lib/storeNap.ts";

const page = fs.readFileSync("app/page.tsx", "utf8");
const globals = fs.readFileSync("app/globals.css", "utf8");

test("uses the locked dispensary-first title", () => {
  assert.equal(HOME_TITLE, "King Rock Cannabis Dispensary - Weed Delivery in King West");
  assert.match(page, /<h1 className=\{styles\.brandTitle\}>\{HOME_TITLE\}<\/h1>/);
});
test("keeps the exact menu and delivery paths", () => {
  assert.match(page, /href="\/exotic-weed"[\s\S]*>STORE MENU<\/Link>/);
  assert.match(page, /href="\/delivery"[\s\S]*>Delivery<\/Link>/);
});
test("has local delivery FAQs and existing-route cards", () => {
  assert.ok(HOME_DELIVERY_FAQS.length >= 5 && HOME_DELIVERY_FAQS.length <= 8);
  assert.ok(HOME_DELIVERY_CARDS.length >= 3 && HOME_DELIVERY_CARDS.length <= 6);
  for (const card of HOME_DELIVERY_CARDS) assert.match(card.href, /^\/(delivery|faq|visit|info\/weed-delivery-king-west)$/);
});
test("places promo banners below the fixed navigation", () => {
  assert.ok(page.indexOf("<FleetAnnouncementBanner />") > page.indexOf("<Navbar />"));
  assert.match(globals, /margin-top:\s*var\(--homepage-nav-clearance\)/);
  assert.doesNotMatch(globals, /#main-nav\s*\{[^}]*fleet-homepage-announcement-height/s);
});
