export interface ResourceCard {
  title: string;
  href: string;
  text: string;
}

export interface ResourceSection {
  heading: string;
  body: string;
  bullets?: string[];
}

export interface ResourcePage {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  eyebrow: string;
  intro: string;
  cards: ResourceCard[];
  sections: ResourceSection[];
  faqs?: { question: string; answer: string }[];
}

export const RESOURCE_PAGES: ResourcePage[] = [
  {
    slug: "",
    title: "King Rock Resources",
    seoTitle: "King Rock Resources | Liberty Village / Parkdale Menu And Visit Guides",
    description: "King Rock resource pages for Liberty Village / Parkdale shoppers, with local visit planning, menu shortcuts, flower tier pricing, value shopping, pre-roll tips, and Native smokes prices.",
    eyebrow: "King West Resource Hub",
    intro: "A practical resource hub for King West, Liberty Village, and Parkdale shoppers. Use it to find the relevant menu section for flower, pre-rolls, edibles, THC vapes, concentrates, accessories, cigarettes, Native smokes, Backwoods, and grabba.",
    cards: [
      { title: "Local Visit Guide", href: "/resources/king-west-liberty-visit-guide", text: "Plan the stop around King St W, Liberty Village, Parkdale, Dufferin, Exhibition Place, Roncesvalles, and TTC routes." },
      { title: "Menu Guide", href: "/resources/menu-guide", text: "Choose the matching menu category before opening individual product listings." },
      { title: "Weed & Flower Guide", href: "/resources/weed-flower-guide", text: "Compare Weed Exotic, Weed Premium, Weed AAA+, Weed AA and Weed Budget." },
      { title: "Value Guide", href: "/resources/value-guide", text: "A cleaner path for cheap weed, budget weed, and affordable flower searches." },
      { title: "Native Smokes Prices", href: "/resources/native-smokes", text: "Brand and price notes for cigarettes, Backwoods, grabba, and pouch listings." }
    ],
    sections: [
      {
        heading: "Local Search, Useful Next Step",
        body: "King Rock is listed at 1220b King St W, Toronto, ON M6K 1G4. These resources work with the visit guide, not replace it. Start with the local page for address and visit context, then use the resource guides for menu decisions.",
        bullets: ["visit guide: /weed-dispensary-toronto", "Local areas: King St W, Liberty Village, Parkdale, Dufferin, Exhibition Place, Roncesvalles, and TTC routes", "Store hours shown in the site data: Open Daily: 10:00 AM - 01:00 AM"]
      },
      {
        heading: "Built Around Real Menu Choices",
        body: "The pages are organized around common shopping questions shoppers often use: weed dispensary near Liberty Village / Parkdale, cannabis store Toronto, cheap weed, budget weed, pre-rolls, edibles, THC vapes, concentrates, Native cigarettes, Backwoods, and grabba."
      }
    ],
  },
  {
    slug: "king-west-liberty-visit-guide",
    title: "King West, Liberty Village, And Parkdale Cannabis Visit Guide",
    seoTitle: "King West, Liberty Village, And Parkdale Cannabis Visit Guide | King Rock",
    description: "Local visit planning for King Rock at 1220b King St W, with King St W, Liberty Village, Parkdale, Dufferin, Exhibition Place, Roncesvalles, and TTC routes context, menu shortcuts, hours, and category paths.",
    eyebrow: "Visit Guide",
    intro: "Use this page when the search starts local: weed dispensary near Liberty Village / Parkdale, cannabis store near 1220b King St W, or a quick menu check before visiting from King St W, Liberty Village, Parkdale, Dufferin, Exhibition Place, Roncesvalles, and TTC routes.",
    cards: [
      { title: "Store Visit Page", href: "/weed-dispensary-toronto", text: "Use the main visit guide for address, directions, hours, and contact details." },
      { title: "Menu Guide", href: "/resources/menu-guide", text: "Choose the product category before opening deep menu pages." },
      { title: "Value Guide", href: "/resources/value-guide", text: "Fast help for affordable flower and budget weed searches." }
    ],
    sections: [
      {
        heading: "Address Anchor",
        body: "King Rock is listed at 1220b King St W, Toronto, ON M6K 1G4. Keep that address as the local anchor, then use the resource pages to decide whether the trip is about flower, pre-rolls, edibles, THC vapes, concentrates, accessories, or cigarettes."
      },
      {
        heading: "Nearby Area Guide",
        body: "King West shoppers may be coming from Liberty Village, Parkdale, Dufferin, Exhibition Place, or Roncesvalles, so the resource pages keep fast menu choices separate from local visit planning.",
        bullets: ["King St W cannabis store area guide", "Liberty Village cannabis store area guide", "Parkdale cannabis store area guide", "Dufferin cannabis store area guide", "Exhibition Place cannabis store area guide", "TTC cannabis store area guide", "Roncesvalles cannabis store area guide"]
      },
      {
        heading: "Choose a Starting Point",
        body: "If you need store details, start with /weed-dispensary-toronto. If you are comparing product types, start with the menu guide. If the trip is about Native smokes or cigarettes, start with the Native smokes page and then confirm the current category page."
      }
    ],
  },
  {
    slug: "menu-guide",
    title: "King Rock Menu Guide",
    seoTitle: "King Rock Menu Guide | Flower, Pre-Rolls, Edibles, Vapes And Cigarettes",
    description: "A category-by-category menu guide for King Rock, covering flower tiers, pre-rolls, edibles, THC vapes, concentrates, accessories, cigarettes, and Native smokes.",
    eyebrow: "Menu Guide",
    intro: "The menu gets easier when you choose one category first. Flower has tier math. Pre-rolls have format details. Edibles, THC vapes, concentrates, and accessories need category notes. Cigarettes need brand and price checks.",
    cards: [
      { title: "Weed Flower Collections", href: "/resources/weed-flower-guide", text: "Explore all five King Rock Weed flower collections." },
      { title: "Pre-Rolls", href: "/resources/pre-roll-guide", text: "Use this for ready-to-smoke singles, packs, and quick-trip browsing." },
      { title: "Cigarettes", href: "/items/cigarettes", text: "Open the cigarette category for current Native smokes listings." },
      { title: "Store Visit Page", href: "/weed-dispensary-toronto", text: "Return to the visit guide." }
    ],
    sections: [
      {
        heading: "Pick The Shelf First",
        body: "For King West, Liberty Village, and Parkdale shoppers, a useful starting point depends on the category: flower shoppers can compare tiers, pre-roll shoppers can compare format, edible and vape shoppers can read product details, and cigarette shoppers can compare brand, style, and price.",
        bullets: ["Flower, pre-rolls, edibles, THC vapes, concentrates, accessories, and cigarettes are easier to compare one category at a time.", "Use current menu categories for live product details.", "Use resources for shopping tips and local planning."]
      },
      {
        heading: "Nearby Areas Without The Mess",
        body: "This page helps shoppers compare nearby areas and categories such as weed dispensary near Liberty Village / Parkdale, cannabis store Toronto, cheap weed near me, Native cigarettes, and THC vape menu while keeping the actual shopping plan clear."
      }
    ],
  },
  {
    slug: "weed-flower-guide",
    title: "King Rock Weed & Flower Guide",
    seoTitle: "Weed & Cannabis Flower Guide Toronto | King Rock",
    description: "Explore King Rock flower collections including Weed Exotic, Weed Premium, Weed AAA+, Weed AA and Weed Budget in one concise Toronto guide.",
    eyebrow: "King Rock · Weed & Flower",
    intro: "King Rock brings five Weed flower collections together for shoppers who want to compare different parts of the selection: Weed Exotic, Weed Premium, Weed AAA+, Weed AA and Weed Budget. Explore whichever collections interest you, or begin with King Rock's broader Toronto Weed selection.",
    cards: [
      { title: "Explore King Rock Weed in Toronto", href: "/weed-dispensary-toronto/", text: "Begin with the broader King Rock Weed selection." },
      { title: "Weed Exotic", href: "/exotic-weed", text: "Explore King Rock's Weed Exotic flower collection." },
      { title: "Weed Premium", href: "/premium-weed", text: "Browse King Rock's Weed Premium flower collection." },
      { title: "Weed AAA+", href: "/aaa-weed", text: "Explore King Rock's Weed AAA+ flower collection." },
      { title: "Weed AA", href: "/aa-weed", text: "Browse King Rock's Weed AA flower collection." },
      { title: "Weed Budget", href: "/budget-weed", text: "Explore King Rock's Weed Budget flower collection." }
    ],
    sections: [
      {
        heading: "Explore Five Weed Flower Collections",
        body: "The five collections give shoppers different parts of the King Rock Cannabis Flower selection to explore. Start with whichever collection interests you and compare others when useful.",
        bullets: ["Explore Weed Exotic, Weed Premium, Weed AAA+, Weed AA and Weed Budget.", "Use the information presented within each collection as you browse.", "For broader browsing, explore King Rock Weed in Toronto."]
      },
      {
        heading: "Weed, Cannabis and Flower at King Rock",
        body: "Weed, cannabis, bud and flower are familiar terms shoppers use while browsing dispensary selections. King Rock uses those terms naturally while keeping its flower collections easy to distinguish."
      },
      {
        heading: "Compare the Collections That Interest You",
        body: "Explore Weed Exotic, Weed Premium, Weed AAA+, Weed AA and Weed Budget individually and compare the information presented within each collection as you browse."
      }
    ],
    faqs: [
      { question: "What Weed flower collections can I explore at King Rock?", answer: "King Rock organizes flower browsing across Weed Exotic, Weed Premium, Weed AAA+, Weed AA and Weed Budget." },
      { question: "Where can I start if I do not have a specific flower collection in mind?", answer: "Start with King Rock's broader Toronto Weed selection, then explore a flower collection when one interests you." },
      { question: "Can I compare several Weed flower collections?", answer: "Yes. You can explore the five collections individually and compare the information presented within each one." }
    ],
  },
  {
    slug: "value-guide",
    title: "King Rock Value Weed Guide",
    seoTitle: "King Rock Value Weed Guide | Cheap Weed Near Liberty Village / Parkdale",
    description: "A value shopping guide for King Rock, covering cheap weed, budget weed, AA flower, AAA+ deals, 6g tier math, and affordable menu choices.",
    eyebrow: "Value Guide",
    intro: "For King West and Liberty Village value shopping, start with Budget, AA, and AAA+ before comparing higher tiers or mixed categories.",
    cards: [
      { title: "Weed Budget", href: "/budget-weed", text: "$3/g for the lowest posted flower lane." },
      { title: "Weed AA", href: "/aa-weed", text: "$4/g for a simple low-spend lane." },
      { title: "Weed AAA+", href: "/aaa-weed", text: "$10/g, 3g for $20, or 6g around $30 where listed." },
      { title: "Native Smokes Prices", href: "/resources/native-smokes", text: "Use this if cigarettes or Backwoods are part of the same stop." }
    ],
    sections: [
      {
        heading: "Start With Budget, Then Move Up",
        body: "If the search is cheap weed, budget weed, or affordable cannabis near Liberty Village / Parkdale, start with Budget and AA. If the trip can stretch a little, AAA+ gives shoppers another value lane with 3g and 6g deal logic."
      },
      {
        heading: "Compare Inside The Category",
        body: "Compare each format on its own: flower, pre-rolls, edibles, THC vapes, concentrates, accessories, and cigarettes all shop a little differently."
      }
    ],
  },
  {
    slug: "pre-roll-guide",
    title: "King Rock Pre-Roll And Quick Trip Guide",
    seoTitle: "King Rock Pre-Roll Guide | Ready-To-Smoke Menu Tips",
    description: "A pre-roll guide for King Rock, with quick-trip tips for ready-to-smoke options, flower cross-shopping, edibles, vapes, concentrates, and accessories.",
    eyebrow: "Pre-Roll Guide",
    intro: "Pre-roll shoppers usually want a faster path than loose flower shoppers. Use this page when the goal is ready-to-smoke options, a quick stop, or a small add-on beside another category.",
    cards: [
      { title: "Pre-Rolls", href: "/items/prerolls", text: "Open the current pre-roll category." },
      { title: "Weed Flower Collections", href: "/resources/weed-flower-guide", text: "Switch here if the visit turns into loose flower." },
      { title: "Menu Guide", href: "/resources/menu-guide", text: "Use this if the stop includes edibles, vapes, concentrates, or accessories." }
    ],
    sections: [
      {
        heading: "Keep Pre-Rolls In Their Own Lane",
        body: "Pre-rolls should be compared by format, pack size, posted notes, and current price. Do not force loose-flower tier logic onto pre-roll shopping unless the visit actually changes categories."
      },
      {
        heading: "Useful For Local Quick Stops",
        body: "For King West, Liberty Village, and Parkdale shoppers, pre-rolls offer a direct category to check before heading through King St W, Liberty Village, Parkdale, Dufferin, Exhibition Place, Roncesvalles, and TTC routes. Use the current category page for current details."
      }
    ],
  },
  {
    slug: "native-smokes",
    title: "King Rock Native Smokes Price Guide",
    seoTitle: "King Rock Native Smokes Prices | Cigarettes, Backwoods And Grabba",
    description: "King Rock Native smokes resource with cigarette brands and listed prices for Canadian, Putters, Canadian Goose, Nexus, Time, Backwoods, grabba, pouches, and mixed smoke items where shown.",
    eyebrow: "Native Smokes",
    intro: "This page gives cigarette shoppers a real starting point instead of a vague category page. Use it for Native cigarettes, Canadian brands, Backwoods, grabba, nicotine pouches, and mixed smoke item price checks at King Rock.",
    cards: [
      { title: "$25 Cigarette Brands", href: "/items/cigarettes", text: "The cigarette category lists CANADIAN LIGHTS, CANADIAN FULL, PUTTERS, CANADIAN GOOSE FULL, CANADIAN GOOSE LIGHTS, CANADIAN MENTHOL, CANADIAN CLASSICS ORIGINAL, CANADIAN CLASSICS SILVER, ROLLED GOLD LIGHTS, NEXUS FULL, NEXUS LIGHTS, TIME FULL at $25 where shown." },
      { title: "Backwoods And Grabba", href: "/items/cigarettes", text: "NICOTINE POUCHES , VELO, PABLO, KILLA at $20; GRABBA at $5; GRABBA SHAKER *RedRose / Red Herring* at $19; BACKWOODS ASSORTED FLAVORS $20-$25 at $20; NEW BACKWOODS FLAVORS at $25; 10 X PREMIUM MIX CIGARETTES at $3" },
      { title: "Native Cigarettes Guide", href: "/resources/native-smokes/native-cigarettes-guide", text: "A fuller brand and price breakdown for cigarette shoppers." }
    ],
    sections: [
      {
        heading: "$25 Cigarette Brand List",
        body: "The cigarette category lists CANADIAN LIGHTS, CANADIAN FULL, PUTTERS, CANADIAN GOOSE FULL, CANADIAN GOOSE LIGHTS, CANADIAN MENTHOL, CANADIAN CLASSICS ORIGINAL, CANADIAN CLASSICS SILVER, ROLLED GOLD LIGHTS, NEXUS FULL, NEXUS LIGHTS, TIME FULL at $25 where shown.",
        bullets: ["CANADIAN LIGHTS - $25", "CANADIAN FULL - $25", "PUTTERS - $25", "CANADIAN GOOSE FULL - $25", "CANADIAN GOOSE LIGHTS - $25", "CANADIAN MENTHOL - $25", "CANADIAN CLASSICS ORIGINAL - $25", "CANADIAN CLASSICS SILVER - $25", "ROLLED GOLD LIGHTS - $25", "NEXUS FULL - $25", "NEXUS LIGHTS - $25", "TIME FULL - $25"]
      },
      {
        heading: "Backwoods, Grabba, Pouches, And Mix Items",
        body: "NICOTINE POUCHES , VELO, PABLO, KILLA at $20; GRABBA at $5; GRABBA SHAKER *RedRose / Red Herring* at $19; BACKWOODS ASSORTED FLAVORS $20-$25 at $20; NEW BACKWOODS FLAVORS at $25; 10 X PREMIUM MIX CIGARETTES at $3"
      },
      {
        heading: "Confirm The Current Shelf",
        body: "Cigarette inventory, flavors, and brand mix can change. Use the cigarette category for the current public list, then confirm in store when one exact brand, full/light/menthol style, pouch, grabba, or Backwoods flavor matters."
      }
    ],
  },
  {
    slug: "native-smokes/native-cigarettes-guide",
    title: "King Rock Native Cigarettes Brand Guide",
    seoTitle: "King Rock Native Cigarettes Guide | Brand And Price List",
    description: "A detailed Native cigarettes brand guide for King Rock, including $25 cigarette listings and smoke add-on prices where shown.",
    eyebrow: "Native Cigarettes",
    intro: "If the trip includes cigarettes, start with brand and price first. This guide keeps Native cigarettes, Backwoods, grabba, pouches, and mixed smoke items separate from flower, pre-rolls, edibles, THC vapes, and concentrates.",
    cards: [
      { title: "Cigarette Category", href: "/items/cigarettes", text: "Open the current cigarette category." },
      { title: "Native Smokes Overview", href: "/resources/native-smokes", text: "Return to the shorter price guide." },
      { title: "Local Visit Guide", href: "/resources/king-west-liberty-visit-guide", text: "Plan the store stop around the local area." }
    ],
    sections: [
      {
        heading: "Brand Names To Check",
        body: "The cigarette category lists CANADIAN LIGHTS, CANADIAN FULL, PUTTERS, CANADIAN GOOSE FULL, CANADIAN GOOSE LIGHTS, CANADIAN MENTHOL, CANADIAN CLASSICS ORIGINAL, CANADIAN CLASSICS SILVER, ROLLED GOLD LIGHTS, NEXUS FULL, NEXUS LIGHTS, TIME FULL at $25 where shown.",
        bullets: ["CANADIAN LIGHTS - $25", "CANADIAN FULL - $25", "PUTTERS - $25", "CANADIAN GOOSE FULL - $25", "CANADIAN GOOSE LIGHTS - $25", "CANADIAN MENTHOL - $25", "CANADIAN CLASSICS ORIGINAL - $25", "CANADIAN CLASSICS SILVER - $25", "ROLLED GOLD LIGHTS - $25", "NEXUS FULL - $25", "NEXUS LIGHTS - $25", "TIME FULL - $25"]
      },
      {
        heading: "Smoke Category Add-Ons",
        body: "NICOTINE POUCHES , VELO, PABLO, KILLA at $20; GRABBA at $5; GRABBA SHAKER *RedRose / Red Herring* at $19; BACKWOODS ASSORTED FLAVORS $20-$25 at $20; NEW BACKWOODS FLAVORS at $25; 10 X PREMIUM MIX CIGARETTES at $3"
      },
      {
        heading: "Separate The Smoke Shelf From Cannabis Shopping",
        body: "When the same visit includes flower, pre-rolls, edibles, THC vapes, concentrates, or accessories, keep cigarettes as their own lane. It makes the category easier for both cannabis shoppers and Native smokes shoppers."
      }
    ],
  },
  {
    slug: "resource-centre-launch",
    title: "King Rock Resource Guide Update",
    seoTitle: "King Rock Resource Guide Update | Local Menu Guides",
    description: "King Rock resource guide update with local visit planning, menu guide pages, flower tier pricing, value shopping, pre-roll tips, and Native smokes prices.",
    eyebrow: "Resource Update",
    intro: "The resource section is organized around real shopping plans: local visit planning, category-by-category browsing, flower tier math, value shopping, pre-roll shortcuts, and cigarette price notes.",
    cards: [
      { title: "Resource Home", href: "/resources", text: "Start at the main resource hub." },
      { title: "Local Visit Guide", href: "/resources/king-west-liberty-visit-guide", text: "Plan around King St W, Liberty Village, Parkdale, Dufferin, Exhibition Place, Roncesvalles, and TTC routes." },
      { title: "Weed & Flower Guide", href: "/resources/weed-flower-guide", text: "Explore the five Weed flower collections." },
      { title: "Native Smokes Prices", href: "/resources/native-smokes", text: "Check brand and price notes." }
    ],
    sections: [
      {
        heading: "What Changed",
        body: "The resources are written for King Rock and Liberty Village / Parkdale, Each page helps with a specific shopping task and points back to the matching menu category or visit guide."
      },
      {
        heading: "What Stayed Protected",
        body: "The important paths stay intact across King Rock's broader Weed selection, resource hub, Weed flower guide, value guide, pre-roll guide and Native smokes guides."
      }
    ],
  }
];

export const RESOURCE_HOME = RESOURCE_PAGES[0];

export function getResourcePage(slug: string) {
  const cleanSlug = slug.replace(/^\/+|\/+$/g, "");
  return RESOURCE_PAGES.find((page) => page.slug === cleanSlug);
}
