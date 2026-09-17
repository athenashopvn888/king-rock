import type { Metadata } from "next";
import DeliveryContent from "./DeliveryContent";
import menu from "./delivery-menu.json";

export const metadata: Metadata = {
  title: "King West Cannabis Delivery Menu — King Rock",
  description:
    "Neighbourhood-scoped cannabis delivery from King Rock for King West, Liberty Village, Exhibition Place, and the Dufferin Gate area. Adults 19+. Walk-in is 24/7 at 1220b King St W.",
  alternates: { canonical: "https://www.kingrockcannabis.com/delivery" },
};

export default function DeliveryPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "King Rock King West delivery menu",
      mainEntity: {
        "@type": "ItemList",
        numberOfItems: menu.products.length,
        itemListElement: menu.products.map((product, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: product.name,
        })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "King Rock neighbourhood cannabis delivery",
      serviceType: "Cannabis delivery",
      areaServed: [
        { "@type": "Place", name: "King West" },
        { "@type": "Place", name: "Liberty Village" },
        { "@type": "Place", name: "Exhibition Place" },
      ],
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "10:00",
        closes: "22:00",
      },
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
      <DeliveryContent />
    </>
  );
}
