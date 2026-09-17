import { Metadata } from "next";
import { GBPLandingPage } from "@/app/components/GBPLandingPage";
import { STORE_NAP } from "@/app/lib/storeNap";

export const metadata: Metadata = {
  title: { absolute: "King Rock store notes" },
  description:
    "Archived city landing notes for King Rock Cannabis. Use the King West / Liberty Village visit guide for how to reach 1220b King St W.",
  alternates: {
    canonical: `${STORE_NAP.origin}/visit`,
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function Page() {
  return <GBPLandingPage />;
}
