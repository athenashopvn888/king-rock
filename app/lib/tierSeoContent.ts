export interface TierSeoData {
  seoTitle: string;
  seoIntro: string;
  sections: { heading: string; body: string }[];
  faqs: { q: string; a: string }[];
}

export const TIER_SEO: Record<string, TierSeoData> = {
  EXOTIC: {
    seoTitle: "Weed Exotic & Cannabis Flower Toronto | King Rock",
    seoIntro: "King Rock brings Weed Exotic together as one of its Cannabis Flower collections for shoppers exploring the broader Weed selection. Browse the products presented within this collection and compare Weed Exotic with other King Rock flower collections that interest you.",
    sections: [
      { heading: "Explore Weed Exotic at King Rock", body: "Weed Exotic gives shoppers a focused Cannabis Flower collection to explore at King Rock. Browse the products presented within the collection and use the information shown with individual items as you explore." },
      { heading: "Compare Weed Exotic with Other Flower Collections", body: "King Rock also organizes flower into Weed Premium, Weed AAA+, Weed AA and Weed Budget. Exploring more than one collection gives shoppers different parts of the flower selection to consider without suggesting that one tier is automatically preferable." },
    ],
    faqs: [
      { q: "What is Weed Exotic at King Rock?", a: "Weed Exotic is one of King Rock's Cannabis Flower collections." },
      { q: "Can I compare Weed Exotic with other King Rock flower collections?", a: "Yes. You can also explore Weed Premium, Weed AAA+, Weed AA and Weed Budget." },
      { q: "Where can I start for broader Weed browsing?", a: "King Rock's established Toronto Weed selection provides a broader starting point before you narrow your browsing to one flower collection." },
    ],
  },
  PREMIUM: {
    seoTitle: "Weed Premium & Cannabis Flower Toronto | King Rock",
    seoIntro: "Weed Premium is a King Rock Cannabis Flower collection for shoppers who want to explore this part of the wider Weed selection. Browse the collection and compare Weed Premium with other King Rock flower selections as you explore.",
    sections: [
      { heading: "Browse Weed Premium at King Rock", body: "Weed Premium brings together one part of the King Rock Cannabis Flower selection. Shoppers can explore the products presented within the collection and review the information shown with individual items." },
      { heading: "Explore Weed Premium Alongside Other Collections", body: "Weed Premium can be explored alongside Weed Exotic, Weed AAA+, Weed AA and Weed Budget. Each collection offers another part of the King Rock flower selection to browse." },
    ],
    faqs: [
      { q: "What can I explore in Weed Premium?", a: "Weed Premium contains the Cannabis Flower products presented within King Rock's Premium collection." },
      { q: "What other flower collections can I browse?", a: "You can also explore Weed Exotic, Weed AAA+, Weed AA and Weed Budget." },
      { q: "Can I browse King Rock Weed more broadly first?", a: "Yes. King Rock's broader Toronto Weed selection gives shoppers a wider starting point before exploring a particular flower collection." },
    ],
  },
  "AAA+": {
    seoTitle: "Weed AAA+ & Cannabis Flower Toronto | King Rock",
    seoIntro: "King Rock Weed AAA+ gives shoppers a focused Cannabis Flower collection to explore within the broader Weed selection. Browse the products presented within this collection and compare Weed AAA+ with other King Rock flower selections that catch your interest.",
    sections: [
      { heading: "Explore Weed AAA+ at King Rock", body: "Weed AAA+ brings together a distinct part of the King Rock Cannabis Flower selection. Explore the products presented within the collection and review the information shown with individual items." },
      { heading: "Compare Weed AAA+ with Other King Rock Collections", body: "Weed AAA+ can be explored alongside Weed Exotic, Weed Premium, Weed AA and Weed Budget. Moving between collections gives shoppers more of the King Rock flower selection to consider." },
    ],
    faqs: [
      { q: "What is Weed AAA+ at King Rock?", a: "Weed AAA+ is one of King Rock's Cannabis Flower collections." },
      { q: "Can I compare Weed AAA+ with other flower collections?", a: "Yes. You can also explore Weed Exotic, Weed Premium, Weed AA and Weed Budget." },
      { q: "Where can I browse King Rock Weed beyond one flower collection?", a: "Use King Rock's broader Toronto Weed selection when you want to explore beyond one specific flower collection." },
    ],
  },
  AA: {
    seoTitle: "Weed AA & Cannabis Flower Toronto | King Rock",
    seoIntro: "Weed AA is one of King Rock's Cannabis Flower collections, giving shoppers a focused way to explore this part of the Weed selection. Browse the collection and compare Weed AA with other flower collections that interest you.",
    sections: [
      { heading: "Explore Weed AA Cannabis Flower", body: "King Rock presents Weed AA as one part of its broader Cannabis Flower selection. Shoppers can explore the products shown within the collection and continue comparing other flower selections as they browse." },
      { heading: "Compare Weed AA with Other Flower Collections", body: "Weed AA can be explored alongside Weed Budget, Weed AAA+, Weed Premium and Weed Exotic. The different collections give shoppers several parts of the King Rock Cannabis Flower selection to explore." },
    ],
    faqs: [
      { q: "What is Weed AA at King Rock?", a: "Weed AA is one of King Rock's Cannabis Flower collections." },
      { q: "What other flower collections can I compare with Weed AA?", a: "You can also explore Weed Budget, Weed AAA+, Weed Premium and Weed Exotic." },
      { q: "Can I start with broader Weed browsing first?", a: "Yes. King Rock's broader Toronto Weed selection provides a wider starting point before exploring one flower collection." },
    ],
  },
  BUDGET: {
    seoTitle: "Weed Budget & Cannabis Flower Toronto | King Rock",
    seoIntro: "King Rock Weed Budget is a Cannabis Flower collection for shoppers who want to explore this part of the wider Weed selection. Browse the collection and compare Weed Budget with other King Rock flower selections as you explore.",
    sections: [
      { heading: "Explore Weed Budget at King Rock", body: "Weed Budget brings together a focused part of the King Rock Cannabis Flower selection. Explore the products presented within the collection and use the information shown with individual items as you browse." },
      { heading: "Compare Weed Budget with Other Weed Flower Collections", body: "King Rock also organizes flower into Weed AA, Weed AAA+, Weed Premium and Weed Exotic. Shoppers can explore more than one collection and compare the sections that interest them." },
    ],
    faqs: [
      { q: "What is Weed Budget at King Rock?", a: "Weed Budget is one of King Rock's Cannabis Flower collections." },
      { q: "Can I compare Weed Budget with other King Rock flower collections?", a: "Yes. Weed Budget can be explored alongside Weed AA, Weed AAA+, Weed Premium and Weed Exotic." },
      { q: "Where can I explore more of King Rock's Weed selection?", a: "Use King Rock's broader Toronto Weed selection when you want a wider starting point before choosing a flower collection." },
    ],
  },
};

export const TIER_META_DESCRIPTION: Record<string, string> = {
  EXOTIC: "Explore Weed Exotic as a King Rock Cannabis Flower collection and compare it with other Weed flower collections.",
  PREMIUM: "Explore Weed Premium as a King Rock Cannabis Flower collection and compare it with other Weed flower collections.",
  "AAA+": "Explore Weed AAA+ as a King Rock Cannabis Flower collection and compare it with other Weed flower collections.",
  AA: "Explore Weed AA as a King Rock Cannabis Flower collection and compare it with other Weed flower collections.",
  BUDGET: "Explore Weed Budget as a King Rock Cannabis Flower collection and compare it with other Weed flower collections.",
};

export const TIER_H1: Record<string, string> = {
  EXOTIC: "Weed Exotic & Cannabis Flower in Toronto",
  PREMIUM: "Weed Premium & Cannabis Flower in Toronto",
  "AAA+": "Weed AAA+ & Cannabis Flower in Toronto",
  AA: "Weed AA & Cannabis Flower in Toronto",
  BUDGET: "Weed Budget & Cannabis Flower in Toronto",
};
