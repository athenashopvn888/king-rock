import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

const layout = fs.readFileSync("app/layout.tsx", "utf8");
const nap = fs.readFileSync("app/lib/storeNap.ts", "utf8");
const home = fs.readFileSync("app/page.tsx", "utf8");
const visit = fs.readFileSync("app/visit/page.tsx", "utf8");
const navbar = fs.readFileSync("app/components/Navbar.tsx", "utf8");
const footer = fs.readFileSync("app/components/Footer.tsx", "utf8");
const ownerPage = fs.readFileSync("app/weed-dispensary-toronto/page.tsx", "utf8");
const deliveryPage = fs.readFileSync("app/delivery/page.tsx", "utf8");
const deliveryCatalog = fs.readFileSync("app/delivery/DeliveryCatalog.tsx", "utf8");
const sitemap = fs.readFileSync("app/sitemap.ts", "utf8");
const nextConfig = fs.readFileSync("next.config.ts", "utf8");
const proxy = fs.readFileSync("proxy.ts", "utf8");
const faq = fs.readFileSync("app/faq/page.tsx", "utf8");
const contact = fs.readFileSync("app/contact/page.tsx", "utf8");
const domainDoc = fs.readFileSync("docs/kr01-primary-domain.md", "utf8");

const catchUp = [layout, nap, home, visit, navbar, footer, ownerPage, faq, contact].join("\n");

test("CannabisStore schema uses the locked NAP and www.com host", () => {
  assert.match(layout, /cannabisStoreJsonLd/);
  assert.match(nap, /"@type": "CannabisStore"/);
  assert.match(nap, /telephone: nap\.phoneIntl/);
  assert.match(nap, /phoneIntl: "\+14377809691"/);
  assert.match(nap, /streetAddress: "1220b King St W"/);
  assert.match(nap, /postalCode: "M6K 1G4"/);
  assert.match(nap, /origin: "https:\/\/www\.kingrockcannabis\.com"/);
  assert.match(nap, /hoursOpens: "00:00"/);
  assert.match(nap, /hoursCloses: "23:59"/);
  assert.match(nap, /hoursLabel: "Open 24 Hours Daily"/);
  assert.doesNotMatch(nap, /additionalType/);
  assert.doesNotMatch(nap, /10:00/);
  assert.doesNotMatch(nap, /01:00/);
});

test("homepage FAQPage JSON-LD mirrors visible FAQs and corridor copy", () => {
  assert.match(home, /faqPageJsonLd\(HOME_FAQS\)/);
  assert.match(nap, /What are the hours for King Rock on King West\?/);
  assert.match(home, /LOCAL_FAQS = HOME_FAQS/);
  assert.match(home, /King Rock \| King West &amp; Liberty Village Cannabis/);
  assert.doesNotMatch(home, /electrifying menu|Toronto's local cannabis stop/i);
  assert.match(home, /pickFeaturedStrains/);
  assert.match(home, /STORE_NAP\.hoursLabel/);
  assert.match(home, /24-hour storefront|24 hours daily|24\/7/i);
  assert.doesNotMatch(home, /10:00 AM - 01:00 AM/);
});

test("homepage is the visit hub and GBP website target", () => {
  assert.match(home, /id="visit"/);
  assert.match(home, /Visit King Rock at 1220b King St W/);
  assert.match(home, /mapEmbedUrl/);
  assert.match(home, /mapSearchUrl/);
  assert.match(home, /504 King/);
  assert.match(home, /Open 24 Hours Daily|hoursLabel/);
  assert.match(home, /This homepage is the store listing/);
  assert.match(nap, /GBP_WEBSITE = STORE_NAP\.origin/);
  assert.match(layout, /url: STORE_NAP\.origin|url: nap\.origin|canonical: STORE_NAP\.origin/);
  assert.doesNotMatch(nap, /GBP_WEBSITE[^\n]*\/visit/);
});

test("/visit is a supporting how-to-reach page with transit, parking, unit B, and full NAP", () => {
  assert.match(visit, /How to Get to King Rock on King West/);
  assert.match(visit, /supporting how-to-reach page/);
  assert.match(visit, /504 King/);
  assert.match(visit, /Atlantic Avenue/);
  assert.match(visit, /unit B/);
  assert.match(visit, /1220b King St W/);
  assert.match(visit, /M6K 1G4/);
  assert.match(visit, /\+1 \(437\) 780-9691/);
  assert.match(visit, /Adults 19\+/);
  assert.match(visit, /mapEmbedUrl/);
  assert.match(visit, /faqPageJsonLd\(VISIT_FAQS\)/);
  assert.match(navbar, /href: "\/visit"/);
  assert.match(footer, /href="\/visit"/);
});

test("/location aliases to /visit", () => {
  assert.match(nextConfig, /source: "\/location", destination: "\/visit", permanent: true/);
});

test("city owner URL is noindexed and canonicalized to the homepage", () => {
  assert.match(ownerPage, /index: false/);
  assert.match(ownerPage, /canonical: STORE_NAP\.origin/);
  assert.doesNotMatch(ownerPage, /origin\}\/visit/);
  assert.match(sitemap, /\$\{BASE\}\/visit/);
  assert.match(sitemap, /priority: 0\.2/);
});

test("delivery is neighbourhood-scoped and does not use chain framing", () => {
  assert.match(deliveryPage, /King West Cannabis Delivery Menu/);
  assert.match(deliveryCatalog, /Cannabis Delivery for King West/);
  assert.match(deliveryCatalog, /Liberty Village/);
  assert.doesNotMatch(deliveryCatalog, /POD 3 DELIVERY/);
  assert.match(deliveryCatalog, /<noscript>/);
});

test("header, footer, schema, and visit share the same phone and address", () => {
  assert.match(navbar, /STORE_NAP\.streetAddress/);
  assert.match(navbar, /STORE_NAP\.phoneIntl/);
  assert.match(footer, /nap\.streetAddress/);
  assert.match(footer, /nap\.phoneDisplay/);
  assert.match(layout, /nap\.phoneDisplay/);
  assert.match(contact, /Open 24 Hours/);
});

test("primary host is www.kingrockcannabis.com with loser-host 308s", () => {
  assert.match(domainDoc, /www\.kingrockcannabis\.com/);
  assert.match(proxy, /www\.kingrockcannabis\.com/);
  assert.match(proxy, /kingrockcannabis\.ca/);
  assert.match(proxy, /308/);
  assert.match(domainDoc, /GBP website/);
  assert.match(domainDoc, /homepage/);
  assert.match(domainDoc, /Do not point Google Business Profile at `\/visit`/);
});

test("standalone King Rock copy never names sister shops or old hours lock", () => {
  assert.doesNotMatch(
    catchUp,
    /Kensington Green|Gas Junction|Green Pentagon|sister store|sister shops/i,
  );
  assert.doesNotMatch(catchUp, /10:00 AM - 01:00 AM/);
  assert.match(visit, /Adults 19\+/);
  assert.match(home, /adults 19\+/i);
  assert.doesNotMatch([visit, home, faq].join("\n"), /treats anxiety|medical marijuana|prescrib/i);
});
