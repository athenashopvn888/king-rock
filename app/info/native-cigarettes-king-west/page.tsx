import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { SmokePilotLanding } from "../../components/SmokePilot";
import { getItemsByCategory } from "../../lib/products";

export const metadata: Metadata = {
  title: { absolute: "Native Cigarettes King West | King Rock" },
  description: "Browse Native cigarette brands, pack styles, and listed prices at King Rock, 1220b King St W, Toronto. Open Daily 10:00 AM–1:00 AM.",
  alternates: { canonical: "https://www.kingrockcannabis.com/info/native-cigarettes-king-west" },
};

export default function NativeCigarettesPage() {
  const items = getItemsByCategory("CIGARETTES");
  return (
    <>
      <Navbar />
      <SmokePilotLanding
        canonicalUrl="https://www.kingrockcannabis.com/info/native-cigarettes-king-west"
        storeName="King Rock"
        locationLabel="King West"
        eyebrow="Native Cigarettes · King Street West"
        title="Native Cigarettes in King West"
        intro="Shop Native cigarette brands, full, light and menthol styles, plus Backwoods, grabba and nicotine pouches at King Rock on King Street West."
        items={items}
        menuHref="/items/cigarettes"
        menuLabel="Shop the cigarette menu"
        menuHeading="Native Cigarette Brands & Prices"
        menuIntro="Compare cigarette brands, styles and listed prices from King Rock in King West."
        crossLink={{ href: "/info/nicotine-vapes-king-west", eyebrow: "Also at King Rock", title: "Prefer a nicotine vape?", body: "Shop nicotine vape devices with brand, flavour, puff-count and listed price details from King Rock.", label: "Shop nicotine vapes" }}
        sections={[
          { heading: "Native Cigarettes on King Street West", body: "King Rock carries Native cigarettes and smoke-shop essentials at 1220b King St W, close to King West and Liberty Village." },
          { heading: "Canadian and Putters on King West", body: "Compare listed Canadian, Canadian Goose, Canadian Classics and Putters options, including full, light and menthol styles." },
          { heading: "Backwoods and Grabba Near Liberty Village", body: "King Rock also lists Backwoods, grabba, grabba shakers and nicotine pouches for a convenient King Street West stop." },
        ]}
        faqs={[
          { q: "Does King Rock sell Native cigarettes?", a: "Yes. King Rock lists Native cigarette brands and related smoke-shop products at 1220b King St W, Toronto." },
          { q: "Can I see cigarette prices online?", a: "Yes. Listed prices appear with the cigarette selection, and staff can confirm current shelf details when you visit." },
          { q: "Where is King Rock?", a: "King Rock is at 1220b King St W, Toronto, ON M6K 1G4 and lists open daily 10:00 am–1:00 am." },
        ]}
        address="1220b King St W, Toronto"
        hours="Open Daily 10:00 AM–1:00 AM"
        theme="cigarettes"
      />
      <Footer />
    </>
  );
}
