export interface TierSeoData {
  seoTitle: string;
  seoIntro: string;
  sections: { heading: string; body: string }[];
  faqs: { q: string; a: string }[];
}

export const TIER_SEO: Record<string, TierSeoData> = {
  EXOTIC: {
    seoTitle: "Exotic Weed & Cannabis Flower Toronto | King Rock",
    seoIntro: "King Rock brings Exotic Weed together as one of its Cannabis Flower collections for shoppers exploring the broader Weed selection. Browse the products presented within this collection and compare Exotic Weed with other King Rock flower collections that interest you.",
    sections: [
      { heading: "Explore Exotic Weed at King Rock", body: "Exotic Weed gives shoppers a focused Cannabis Flower collection to explore at King Rock. Browse the products presented within the collection and use the information shown with individual items as you explore." },
      { heading: "Compare Exotic Weed with Other Flower Collections", body: "King Rock also organizes flower into Premium Weed, AAA+ Weed, AA Weed and Budget Weed. Exploring more than one collection gives shoppers different parts of the flower selection to consider without suggesting that one tier is automatically preferable." },
    ],
    faqs: [
      { q: "What is Exotic Weed at King Rock?", a: "Exotic Weed is one of King Rock's Cannabis Flower collections." },
      { q: "Can I compare Exotic Weed with other King Rock flower collections?", a: "Yes. You can also explore Premium Weed, AAA+ Weed, AA Weed and Budget Weed." },
      { q: "Where can I start for broader Weed browsing?", a: "King Rock's established Toronto Weed selection provides a broader starting point before you narrow your browsing to one flower collection." },
    ],
  },
  PREMIUM: {
    seoTitle: "Premium Weed & Cannabis Flower Toronto | King Rock",
    seoIntro: "Premium Weed is a King Rock Cannabis Flower collection for shoppers who want to explore this part of the wider Weed selection. Browse the collection and compare Premium Weed with other King Rock flower selections as you explore.",
    sections: [
      { heading: "Browse Premium Weed at King Rock", body: "Premium Weed brings together one part of the King Rock Cannabis Flower selection. Shoppers can explore the products presented within the collection and review the information shown with individual items." },
      { heading: "Explore Premium Weed Alongside Other Collections", body: "Premium Weed can be explored alongside Exotic Weed, AAA+ Weed, AA Weed and Budget Weed. Each collection offers another part of the King Rock flower selection to browse." },
    ],
    faqs: [
      { q: "What can I explore in Premium Weed?", a: "Premium Weed contains the Cannabis Flower products presented within King Rock's Premium collection." },
      { q: "What other flower collections can I browse?", a: "You can also explore Exotic Weed, AAA+ Weed, AA Weed and Budget Weed." },
      { q: "Can I browse King Rock Weed more broadly first?", a: "Yes. King Rock's broader Toronto Weed selection gives shoppers a wider starting point before exploring a particular flower collection." },
    ],
  },
  "AAA+": {
    seoTitle: "AAA+ Weed & Cannabis Flower Toronto | King Rock",
    seoIntro: "King Rock AAA+ Weed gives shoppers a focused Cannabis Flower collection to explore within the broader Weed selection. Browse the products presented within this collection and compare AAA+ Weed with other King Rock flower selections that catch your interest.",
    sections: [
      { heading: "Explore AAA+ Weed at King Rock", body: "AAA+ Weed brings together a distinct part of the King Rock Cannabis Flower selection. Explore the products presented within the collection and review the information shown with individual items." },
      { heading: "Compare AAA+ Weed with Other King Rock Collections", body: "AAA+ Weed can be explored alongside Exotic Weed, Premium Weed, AA Weed and Budget Weed. Moving between collections gives shoppers more of the King Rock flower selection to consider." },
    ],
    faqs: [
      { q: "What is AAA+ Weed at King Rock?", a: "AAA+ Weed is one of King Rock's Cannabis Flower collections." },
      { q: "Can I compare AAA+ Weed with other flower collections?", a: "Yes. You can also explore Exotic Weed, Premium Weed, AA Weed and Budget Weed." },
      { q: "Where can I browse King Rock Weed beyond one flower collection?", a: "Use King Rock's broader Toronto Weed selection when you want to explore beyond one specific flower collection." },
    ],
  },
  AA: {
    seoTitle: "AA Weed & Cannabis Flower Toronto | King Rock",
    seoIntro: "AA Weed is one of King Rock's Cannabis Flower collections, giving shoppers a focused way to explore this part of the Weed selection. Browse the collection and compare AA Weed with other flower collections that interest you.",
    sections: [
      { heading: "Explore AA Weed Cannabis Flower", body: "King Rock presents AA Weed as one part of its broader Cannabis Flower selection. Shoppers can explore the products shown within the collection and continue comparing other flower selections as they browse." },
      { heading: "Compare AA Weed with Other Flower Collections", body: "AA Weed can be explored alongside Budget Weed, AAA+ Weed, Premium Weed and Exotic Weed. The different collections give shoppers several parts of the King Rock Cannabis Flower selection to explore." },
    ],
    faqs: [
      { q: "What is AA Weed at King Rock?", a: "AA Weed is one of King Rock's Cannabis Flower collections." },
      { q: "What other flower collections can I compare with AA Weed?", a: "You can also explore Budget Weed, AAA+ Weed, Premium Weed and Exotic Weed." },
      { q: "Can I start with broader Weed browsing first?", a: "Yes. King Rock's broader Toronto Weed selection provides a wider starting point before exploring one flower collection." },
    ],
  },
  BUDGET: {
    seoTitle: "Budget Weed & Cannabis Flower Toronto | King Rock",
    seoIntro: "King Rock Budget Weed is a Cannabis Flower collection for shoppers who want to explore this part of the wider Weed selection. Browse the collection and compare Budget Weed with other King Rock flower selections as you explore.",
    sections: [
      { heading: "Explore Budget Weed at King Rock", body: "Budget Weed brings together a focused part of the King Rock Cannabis Flower selection. Explore the products presented within the collection and use the information shown with individual items as you browse." },
      { heading: "Compare Budget Weed with Other Weed Flower Collections", body: "King Rock also organizes flower into AA Weed, AAA+ Weed, Premium Weed and Exotic Weed. Shoppers can explore more than one collection and compare the sections that interest them." },
    ],
    faqs: [
      { q: "What is Budget Weed at King Rock?", a: "Budget Weed is one of King Rock's Cannabis Flower collections." },
      { q: "Can I compare Budget Weed with other King Rock flower collections?", a: "Yes. Budget Weed can be explored alongside AA Weed, AAA+ Weed, Premium Weed and Exotic Weed." },
      { q: "Where can I explore more of King Rock's Weed selection?", a: "Use King Rock's broader Toronto Weed selection when you want a wider starting point before choosing a flower collection." },
    ],
  },
};

export const TIER_META_DESCRIPTION: Record<string, string> = {
  EXOTIC: "Explore Exotic Weed as a King Rock Cannabis Flower collection and compare it with other Weed flower collections.",
  PREMIUM: "Explore Premium Weed as a King Rock Cannabis Flower collection and compare it with other Weed flower collections.",
  "AAA+": "Explore AAA+ Weed as a King Rock Cannabis Flower collection and compare it with other Weed flower collections.",
  AA: "Explore AA Weed as a King Rock Cannabis Flower collection and compare it with other Weed flower collections.",
  BUDGET: "Explore Budget Weed as a King Rock Cannabis Flower collection and compare it with other Weed flower collections.",
};

export const TIER_H1: Record<string, string> = {
  EXOTIC: "Exotic Weed & Cannabis Flower in Toronto",
  PREMIUM: "Premium Weed & Cannabis Flower in Toronto",
  "AAA+": "AAA+ Weed & Cannabis Flower in Toronto",
  AA: "AA Weed & Cannabis Flower in Toronto",
  BUDGET: "Budget Weed & Cannabis Flower in Toronto",
};
