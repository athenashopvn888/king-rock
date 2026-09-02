import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { SmokePilotLanding } from "../../components/SmokePilot";

export const metadata: Metadata = {
  title: { absolute: "Nicotine Vapes Toronto | King Rock" },
  description: "Explore the King Rock Nicotine Vape category in Toronto, kept clearly separate from THC Vape products. Nicotine products are for adults 19+.",
  alternates: { canonical: "https://www.kingrockcannabis.com/info/nicotine-vapes-king-west" },
};

export default function NicotineVapesPage() {
  return (
    <>
      <Navbar />
      <SmokePilotLanding
        canonicalUrl="https://www.kingrockcannabis.com/info/nicotine-vapes-king-west"
        storeName="King Rock"
        locationLabel="Liberty Village / Parkdale"
        eyebrow="KING ROCK • LIBERTY VILLAGE / PARKDALE • ADULTS 19+"
        title="Nicotine Vape"
        intro="Explore King Rock nicotine vape products in a category kept separate from THC Vape products. Nicotine products are for adults 19+ and contain nicotine, which is addictive."
        items={[]}
        menuHref="/items/vapes"
        menuLabel="Browse Nicotine Vapes"
        menuHeading="Explore the Nicotine Vape Category"
        menuIntro="King Rock keeps Nicotine Vape and THC Vape distinct so shoppers can clearly identify which type of product they are browsing. Use the product information presented with individual items to learn more while exploring the nicotine category."
        heroItems={[
          { name: "ENVI DRIP’N – 5% | 28K PUFFS", image: "https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/1092-Envi-Dripn-28K.webp" },
          { name: "GEEK PROMAX – 5% | 30K PUFFS", image: "https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/GEEK-PROMAX.jpg" },
          { name: "GEEK UNIVERSE 25k PUFFS", image: "https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/geek_universe_pulse_x_25k.webp" },
          { name: "NEXA PIX | 30K PUFFS | MANY FLAVORS", image: "https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/nexa_showcase_600x600.webp" },
          { name: "OVNS 10000 – 5% | 10K PUFFS", image: "https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/1081OVNS10000.jpg" },
          { name: "OVNS DISPOSABLE – 5% | 8ML | MANY FLAVORS", image: "https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/OVNS500x500HQ.webp" },
        ]}
        heroDisclosure="Product information is presented within the dedicated nicotine category, separate from THC Vape."
        showMenuGrid={false}
        secondaryHref="#featured-vapes"
        secondaryLabel="Explore Featured Nicotine Products"
        identityLabel="Liberty Village / Parkdale · Adults 19+ · Nicotine is addictive."
        sections={[
          { heading: "Explore Nicotine Vape at King Rock", body: "Use the product information presented with individual items to learn more while exploring the nicotine category." },
          { heading: "Keep Nicotine and Cannabis Vape Routes Separate", body: "This adult-only King Rock guide uses VAPE PENS products under /items/vapes. THC and cannabis vape products under /items/vape-disposables are excluded." },
          { heading: "Browse the King Rock Nicotine Category", body: "Open /items/vapes to explore the dedicated Nicotine Vape category and individual product information." },
        ]}
        faqs={[
          { q: "Are Nicotine Vape and THC Vape the same category at King Rock?", a: "No. King Rock keeps nicotine vape products separate from THC vape products." },
          { q: "Who is the Nicotine Vape category intended for?", a: "Nicotine products are for adults 19+. Nicotine is addictive." },
          { q: "Where are THC vape products?", a: "THC vape products remain in the separate THC Vape category." },
        ]}
        theme="nicotine"
        warning="Adults 19+. Nicotine is addictive."
      />
      <Footer />
    </>
  );
}
