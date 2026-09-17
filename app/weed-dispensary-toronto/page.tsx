import { Metadata } from "next";
import { GBPLandingPage } from "@/app/components/GBPLandingPage";
import { STORE_NAP } from "@/app/lib/storeNap";

export const metadata: Metadata = {
  title: { absolute: "King Rock store notes" },
  description:
    "Archived city landing notes for King Rock Cannabis. The store listing is the homepage at 1220b King St W on King West / Liberty Village.",
  alternates: {
    canonical: STORE_NAP.origin,
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function Page() {
  return <GBPLandingPage />;
}
