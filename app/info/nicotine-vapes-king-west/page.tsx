import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { SmokePilotLanding } from "../../components/SmokePilot";
import { getItemsByCategory } from "../../lib/products";

export const metadata: Metadata = {
  title: { absolute: "Nicotine Vapes King West | King Rock" },
  description: "Browse nicotine vape devices, flavours, formats, and listed prices at King Rock, 1220b King St W, Toronto. Open Daily 10:00 AM–1:00 AM.",
  alternates: { canonical: "https://www.kingrockcannabis.com/info/nicotine-vapes-king-west" },
};

export default function NicotineVapesPage() {
  const items = getItemsByCategory("VAPE PENS");
  return (
    <>
      <Navbar />
      <SmokePilotLanding
        canonicalUrl="https://www.kingrockcannabis.com/info/nicotine-vapes-king-west"
        storeName="King Rock"
        locationLabel="King West"
        eyebrow="Nicotine Vapes · King Street West"
        title="Nicotine Vapes in King West"
        intro="Shop nicotine vape devices at King Rock on King Street West. Compare the current formats, flavours, puff counts and listed prices before visiting."
        items={items}
        menuHref="/items/vapes"
        menuLabel="Shop the nicotine vape menu"
        menuHeading="Nicotine Vape Devices & Prices"
        menuIntro="Compare nicotine vape devices, formats and listed prices from King Rock in King West."
        crossLink={{ href: "/info/native-cigarettes-king-west", eyebrow: "Also at King Rock", title: "Need Native cigarettes instead?", body: "Shop full, light and menthol cigarette styles alongside Backwoods, grabba and other smoke-shop essentials at King Rock.", label: "Shop Native cigarettes" }}
        sections={[
          { heading: "Nicotine Vapes on King Street West", body: "King Rock lists disposable nicotine vapes, pods and devices at 1220b King St W near King West and Liberty Village." },
          { heading: "Devices for a King West Stop", body: "Compare the current device selection by format, flavour, puff count and listed price near Liberty Village." },
          { heading: "Late-Night Shopping in King West", body: "King Rock lists daily hours from 10:00 AM to 1:00 AM for cigarettes, nicotine vapes and other smoke-shop essentials." },
        ]}
        faqs={[
          { q: "Does King Rock sell nicotine vapes?", a: "Yes. King Rock lists nicotine vape devices with formats, flavours, puff counts and prices." },
          { q: "What nicotine vape details can I compare?", a: "Listings may include the device format, flavour, puff count and price. Selection can change, so check the current details before visiting." },
          { q: "Where is King Rock?", a: "King Rock is at 1220b King St W, Toronto, ON M6K 1G4 and lists open daily 10:00 am–1:00 am." },
        ]}
        address="1220b King St W, Toronto"
        hours="Open Daily 10:00 AM–1:00 AM"
        theme="nicotine"
      />
      <Footer />
    </>
  );
}
