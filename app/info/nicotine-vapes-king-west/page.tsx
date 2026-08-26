import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { SmokePilotLanding } from "../../components/SmokePilot";

export const metadata: Metadata = {
  title: { absolute: "Nicotine Vapes in King West | King Rock" },
  description: "Adults 19+: review six nicotine vape product pages from King Rock near Liberty Village and Parkdale, then check /items/vapes. Nicotine is addictive.",
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
        title="Nicotine Vapes at King Rock near Liberty Village"
        intro="Searching for nicotine vapes near me around Liberty Village or Parkdale? This adult-only King Rock guide features six live-checked VAPE PENS product pages. Compare their supported names, then use /items/vapes for the current nicotine category. Product details can change. Nicotine is addictive."
        items={[]}
        menuHref="/items/vapes"
        menuLabel="Browse Nicotine Vapes"
        menuHeading="Six Live-Checked King Rock Vape Cards"
        menuIntro="This shortlist contains six live-checked ENVI, Geek, NEXA and OVNS VAPE PENS product pages. Use each card for its supported display name, then rely on /items/vapes for the current King Rock category listing."
        heroItems={[
          { name: "ENVI DRIP’N – 5% | 28K PUFFS", image: "https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/1092-Envi-Dripn-28K.webp" },
          { name: "GEEK PROMAX – 5% | 30K PUFFS", image: "https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/GEEK-PROMAX.jpg" },
          { name: "GEEK UNIVERSE 25k PUFFS", image: "https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/geek_universe_pulse_x_25k.webp" },
          { name: "NEXA PIX | 30K PUFFS | MANY FLAVORS", image: "https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/nexa_showcase_600x600.webp" },
          { name: "OVNS 10000 – 5% | 10K PUFFS", image: "https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/1081OVNS10000.jpg" },
          { name: "OVNS DISPOSABLE – 5% | 8ML | MANY FLAVORS", image: "https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/OVNS500x500HQ.webp" },
        ]}
        heroDisclosure="Featured cards are live-checked starting points, not guarantees of current stock, price or availability."
        showMenuGrid={false}
        secondaryHref="#featured-vapes"
        secondaryLabel="Compare the Six Featured Items"
        identityLabel="Liberty Village / Parkdale · Adults 19+ · Nicotine is addictive."
        sections={[
          { heading: "Read Each Product Format Carefully", body: "One featured page explicitly identifies an OVNS disposable. Keep that description attached only to that product and do not apply the disposable label to another featured item by assumption." },
          { heading: "Puff Counts Identify Listings", body: "Several featured names include puff counts. Use those numbers to distinguish the listings, not as guarantees of duration, performance or superiority." },
          { heading: "Keep Nicotine and Cannabis Vape Routes Separate", body: "This adult-only King Rock guide uses VAPE PENS products under /items/vapes. THC and cannabis vape products under /items/vape-disposables are excluded." },
          { heading: "Review the Current King Rock Category", body: "Before choosing, open /items/vapes and the individual product page for current supported details. This guide does not claim prices, stock or guaranteed availability." },
        ]}
        faqs={[
          { q: "Where should I check King Rock’s current nicotine selection?", a: "Use /items/vapes. The six featured cards are live-checked starting points while the current category listing controls selection information." },
          { q: "Does every featured item use the same format?", a: "No format should be assumed. One featured page explicitly identifies an OVNS disposable. Read each current product page for its supported format and details." },
          { q: "Does this page include cannabis vapes?", a: "No. It covers nicotine products from the VAPE PENS category for adults 19+. THC and cannabis vape products under /items/vape-disposables are excluded." },
        ]}
        theme="nicotine"
        warning="Adults 19+. Nicotine is addictive."
      />
      <Footer />
    </>
  );
}
