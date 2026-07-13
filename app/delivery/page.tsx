import type { Metadata } from "next";
import DeliveryContent from "./DeliveryContent";

export const metadata: Metadata = {
  title: "Delivery Coming Soon King Rock | Toronto",
  description:
    "Get notified when King Rock prepares delivery for King West, Liberty Village, Parkdale, Queen West, and nearby west Toronto.",
  alternates: {
    canonical: "https://kingrockcannabis.com/delivery",
  },
};

export default function DeliveryPage() {
  return <DeliveryContent />;
}
