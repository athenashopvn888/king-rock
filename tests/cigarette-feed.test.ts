import assert from "node:assert/strict";
import test from "node:test";
import {
  buildCigaretteSnapshot,
  CIG_WORDING_FALLBACK,
  decideCigaretteGuide,
  decideCigaretteSurface,
  publicWebsiteCigaretteFlag,
  reconcileSurfaceItems,
  resolveCigWording,
  resolveSurfaceFlag,
  tvCardsForFlag,
} from "../app/lib/cigDecision.ts";

const carton = { category: "CIGARETTES", name: "BB FULL CARTON", slug: "bb-full-carton" };
const grabba = { category: "CIGARETTES", name: "GRABBA", slug: "grabba" };
const backwoods = { category: "CIGARETTES", name: "BACKWOODS ASSORTED FLAVORS $20-$25", slug: "backwoods-assorted-flavors-20-25" };
const pouch = { category: "CIGARETTES", name: "NICOTINE POUCHES , VELO, PABLO, KILLA", slug: "nicotine-pouches-velo-pablo-killa" };
const paper = { category: "CIGARETTES", name: "RAW ROLLING PAPERS", slug: "raw-rolling-papers" };
const zyn = { category: "CIGARETTES", name: "ZYN CITRUS", slug: "zyn-citrus" };
const cigarillo = { category: "CIGARETTES", name: "GAME CIGARILLOS", slug: "game-cigarillos" };
const wrap = { category: "CIGARETTES", name: "SHOW BLUNT WRAPS", slug: "show-blunt-wraps" };
const vape = { category: "VAPE PENS", name: "Mango Ice", slug: "mango-ice" };

const wording = {
  bannerText: "FEED BANNER",
  promoBrands: "FEED BRANDS",
  tv2BoardTitle: "FEED BOARD",
  wrapsTitle: "🍂 WRAPS & POUCHES",
  tickerLine1: "FEED TICKER",
  priceTwoPack: "$5",
  priceCarton: "$25",
  priceBelmont: "$10",
  priceBB2Pack: "$5",
};

function cig(extra: Record<string, unknown> = {}) {
  return { on: false, tvOn: false, webOn: false, webFollowsTv: true, wording, ...extra };
}

const CARDS = [{ id: "VAPES" }, { id: "CIGARETTES" }, { id: "MAGIC" }];

test("website follows webOn and TV follows tvOn, with on as the fallback", () => {
  const items = [carton, backwoods];
  assert.equal(decideCigaretteSurface({ cig: cig({ webOn: true, tvOn: false }), items, surface: "web" }).show, true);
  assert.equal(decideCigaretteSurface({ cig: cig({ webOn: true, tvOn: false }), items, surface: "tv" }).show, false);
  assert.equal(decideCigaretteSurface({ cig: cig({ webOn: false, tvOn: true }), items, surface: "web" }).show, false);
  assert.equal(decideCigaretteSurface({ cig: cig({ webOn: false, tvOn: true }), items, surface: "tv" }).show, true);
  assert.equal(resolveSurfaceFlag({ on: true }, "web"), true);
  assert.equal(resolveSurfaceFlag({ on: true }, "tv"), true);
  assert.equal(resolveSurfaceFlag(cig({ on: true, webOn: false }), "web"), false);
  assert.equal(resolveSurfaceFlag(cig({ on: false, tvOn: true, webFollowsTv: true }), "tv"), true);
  assert.equal(resolveSurfaceFlag(cig({ on: true, webOn: false, webFollowsTv: true }), "web"), false);
});

test("tv on shows the cigarettes card and items while web stays hidden", () => {
  const items = [vape, carton, grabba, backwoods, pouch, paper];
  const snap = buildCigaretteSnapshot(cig({ on: true, webOn: false, tvOn: true }), items, true, false);
  assert.equal(snap.web.show, false);
  assert.equal(snap.web.reason, "off");
  assert.equal(snap.tv.show, true);
  assert.equal(snap.tv.reason, "on");
  assert.deepEqual(tvCardsForFlag(CARDS, snap.tv.show).map((card) => card.id), ["VAPES", "CIGARETTES", "MAGIC"]);
  const shown = reconcileSurfaceItems(items, items, snap.tv.show);
  assert.ok(shown.some((item) => item.slug === carton.slug));
  assert.ok(shown.some((item) => item.slug === backwoods.slug));
  assert.ok(shown.some((item) => item.slug === pouch.slug));
  assert.ok(shown.some((item) => item.slug === paper.slug));
});

test("tv off hides the cigarettes card and real packs, and keeps wraps and pouches", () => {
  const items = [vape, carton, grabba, backwoods, pouch, paper];
  const snap = buildCigaretteSnapshot(cig({ on: true, webOn: false, tvOn: false }), items, true, false);
  assert.equal(snap.tv.show, false);
  assert.equal(snap.web.show, false);
  assert.deepEqual(tvCardsForFlag(CARDS, snap.tv.show).map((card) => card.id), ["VAPES", "MAGIC"]);
  const hidden = reconcileSurfaceItems(items, items, snap.tv.show);
  assert.deepEqual(hidden.map((item) => item.slug), [vape.slug, backwoods.slug, pouch.slug, paper.slug]);
});

test("a website env hard-off hides web and still lets the TV flag through", () => {
  const previous = process.env.NEXT_PUBLIC_SHOW_CIGARETTES;
  process.env.NEXT_PUBLIC_SHOW_CIGARETTES = "false";
  try {
    const snap = buildCigaretteSnapshot(cig({ on: true, webOn: true, tvOn: true }), [carton, backwoods], true, false);
    assert.equal(snap.web.show, false);
    assert.equal(snap.web.reason, "env");
    assert.equal(snap.tv.show, true);
    assert.equal(snap.tv.reason, "on");
  } finally {
    if (previous === undefined) delete process.env.NEXT_PUBLIC_SHOW_CIGARETTES;
    else process.env.NEXT_PUBLIC_SHOW_CIGARETTES = previous;
  }
});

test("a feed error or a missing block hides TV and the website feed", () => {
  const items = [carton, grabba, backwoods, pouch];
  const missing = decideCigaretteSurface({ cig: null, items, surface: "tv" });
  assert.equal(missing.reason, "missing");
  assert.equal(missing.show, false);
  assert.equal(decideCigaretteSurface({ cig: null, items, surface: "web" }).show, false);
  const errored = decideCigaretteSurface({
    cig: cig({ on: true, webOn: true, tvOn: true }),
    items,
    surface: "tv",
    errored: true,
  });
  assert.equal(errored.reason, "error");
  assert.equal(errored.show, false);
  assert.equal(decideCigaretteSurface({ cig: cig({ on: true, webOn: true, tvOn: true }), items, surface: "web", errored: true }).show, false);
  assert.equal(decideCigaretteSurface({ cig: cig({ tvOn: true, webOn: false }), items, surface: "tv" }).show, true);
  assert.equal(decideCigaretteSurface({ cig: cig({ tvOn: false, webOn: true }), items, surface: "tv" }).show, false);
  assert.equal(decideCigaretteSurface({ cig: cig(), items, surface: "tv" }).show, false);
  assert.equal(decideCigaretteSurface({ cig: cig({ on: true, webOn: true, tvOn: true }), items: [backwoods, pouch], surface: "web" }).reason, "no-items");
  assert.equal(decideCigaretteSurface({ cig: cig({ on: true, webOn: true, tvOn: true }), items, surface: "tv", envRaw: "false" }).reason, "env");
  assert.equal(decideCigaretteSurface({ cig: cig({ on: true, webOn: true, tvOn: true }), items, surface: "web", envRaw: "true" }).show, true);
});

test("a saved cig block still follows tvOn, and a miss with nothing saved stays hidden", () => {
  const items = [carton, backwoods, pouch];
  const savedOn = buildCigaretteSnapshot(cig({ on: false, webOn: false, tvOn: true }), items, false, false);
  assert.equal(savedOn.tv.show, true);
  assert.equal(savedOn.tv.reason, "on");
  const savedOff = buildCigaretteSnapshot(cig({ on: true, webOn: true, tvOn: false }), items, false, false);
  assert.equal(savedOff.tv.show, false);
  assert.equal(savedOff.tv.reason, "off");
  const miss = buildCigaretteSnapshot(null, items, false, true);
  assert.equal(miss.tv.show, false);
  assert.equal(miss.tv.reason, "error");
  assert.equal(miss.web.show, false);
  const missingBlock = buildCigaretteSnapshot(null, items, true, false);
  assert.equal(missingBlock.tv.show, false);
  assert.equal(missingBlock.tv.reason, "missing");
  assert.equal(missingBlock.web.show, false);
  assert.ok(reconcileSurfaceItems(items, items, miss.tv.show).some((item) => item.slug === backwoods.slug));
  assert.ok(reconcileSurfaceItems(items, items, miss.tv.show).every((item) => item.slug !== carton.slug));
});

test("the website flag stays off whenever the static gate is off", () => {
  const items = [carton, backwoods];
  const on = decideCigaretteSurface({ cig: cig({ webOn: true, tvOn: true }), items, surface: "web" });
  const off = decideCigaretteSurface({ cig: cig({ webOn: false, tvOn: true }), items, surface: "web" });
  const errored = decideCigaretteSurface({ cig: cig({ webOn: true, tvOn: true }), items, surface: "web", errored: true });
  const missing = decideCigaretteSurface({ cig: null, items, surface: "web" });
  assert.equal(on.show, true);
  assert.equal(publicWebsiteCigaretteFlag(on, false), false);
  assert.equal(publicWebsiteCigaretteFlag(off, false), false);
  assert.equal(publicWebsiteCigaretteFlag(errored, false), false);
  assert.equal(publicWebsiteCigaretteFlag(missing, false), false);
  assert.equal(publicWebsiteCigaretteFlag(errored, true), false);
  assert.equal(publicWebsiteCigaretteFlag(missing, true), false);
  assert.equal(publicWebsiteCigaretteFlag(off, true), false);
  assert.equal(publicWebsiteCigaretteFlag(on, true), true);
});

test("wording uses the feed and falls back to the current copy field by field", () => {
  assert.equal(resolveCigWording({ bannerText: "  FEED BANNER  ", wrapsTitle: "" }).bannerText, "FEED BANNER");
  assert.equal(resolveCigWording({ bannerText: "  FEED BANNER  " }).wrapsTitle, CIG_WORDING_FALLBACK.wrapsTitle);
  assert.equal(resolveCigWording(undefined).tickerLine1, CIG_WORDING_FALLBACK.tickerLine1);
  assert.equal(decideCigaretteSurface({ cig: cig({ webOn: false }), items: [backwoods], surface: "web" }).wording.wrapsTitle, "🍂 WRAPS & POUCHES");
  assert.equal(decideCigaretteSurface({ cig: null, items: [], surface: "tv" }).wording.bannerText, CIG_WORDING_FALLBACK.bannerText);
});

test("null flags with real cigarettes stay open and an explicit false still hides", () => {
  const open = decideCigaretteSurface({ cig: { on: null, webOn: null, tvOn: null, wording }, items: [carton], surface: "web" });
  assert.equal(open.show, true);
  assert.equal(open.reason, "on");
  assert.equal(decideCigaretteSurface({ cig: { on: false }, items: [carton], surface: "tv" }).reason, "off");
  assert.equal(decideCigaretteGuide({ cig: { master: null, on: null }, items: [carton] }).show, true);
});

test("guide pages follow the master switch and a feed error stays open", () => {
  const items = [carton];
  assert.equal(decideCigaretteGuide({ cig: cig({ on: false, master: false, webOn: true }), items }).show, false);
  assert.equal(decideCigaretteGuide({ cig: cig({ on: true, master: true, webOn: false }), items }).show, true);
  assert.equal(decideCigaretteGuide({ cig: null, items, errored: true }).show, true);
  assert.equal(decideCigaretteGuide({ cig: cig({ on: true, master: true }), items, envRaw: "off" }).reason, "env");
});

test("each surface hides real cigarettes itself and always keeps wraps and pouches", () => {
  const menu = [vape, carton, grabba, backwoods, pouch, paper, zyn, cigarillo, wrap];
  const hidden = reconcileSurfaceItems(menu, menu, false);
  assert.deepEqual(hidden.map((item) => item.slug), [vape.slug, backwoods.slug, pouch.slug, paper.slug, zyn.slug, cigarillo.slug, wrap.slug]);
  const shown = reconcileSurfaceItems([vape, backwoods], [carton, backwoods], true);
  assert.deepEqual(shown.map((item) => item.slug), [vape.slug, backwoods.slug, carton.slug]);
});
