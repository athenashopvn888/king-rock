import type { Metadata } from "next";
import DeliveryContent from "./DeliveryContent";

export const metadata: Metadata = {
  title: "Delivery Coming Soon — King Rock | Toronto",
  description: "Get notified when King Rock launches same-day weed delivery across Toronto and surrounding areas.",
  alternates: {
    canonical: "https://kingrockcannabis.com/delivery",
  },
};

export default function DeliveryPage() {
  return <DeliveryContent />;
}
