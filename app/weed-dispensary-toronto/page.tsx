import { Metadata } from "next";
import Link from "next/link";
import { GBPLandingPage } from "@/app/components/GBPLandingPage";
import { gbpLocation } from "@/app/lib/gbp-location";
import { STORE_NAP } from "@/app/lib/storeNap";

const CITY_PATH = "/weed-dispensary-toronto";
const CITY_CANONICAL = `${STORE_NAP.origin}${CITY_PATH}`;

export const metadata: Metadata = {
  title: { absolute: "Liberty Village Cannabis Dispensary Toronto | King Rock" },
  description: gbpLocation.metaDescription,
  alternates: {
    canonical: CITY_CANONICAL,
  },
  openGraph: {
    title: "Liberty Village Cannabis Dispensary Toronto | King Rock",
    description: gbpLocation.metaDescription,
    url: CITY_CANONICAL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

/** Store-specific King West city enrichment (FLEET-CITY-UNIQUE-0925). Facts from STORE_NAP only. */
function KingWestLibertyNotes() {
  return (
    <section
      aria-labelledby="kr-city-king-west"
      style={{ maxWidth: 980, margin: "0 auto", padding: "28px 24px 72px", lineHeight: 1.55 }}
    >
      <h2 id="kr-city-king-west">The King Rock store</h2>
      <p>
        King Rock Cannabis is the unit-B walk-in at{" "}
        <strong>{STORE_NAP.addressLine}</strong>. {STORE_NAP.unitNote}. The
        intersection is {STORE_NAP.intersection}. Adults 19+. Call{" "}
        <a href={`tel:${STORE_NAP.phoneIntl}`}>{STORE_NAP.phoneDisplay}</a>.
      </p>
      <h2>Liberty Village and King West</h2>
      <p>
        This door serves {STORE_NAP.neighborhood}. Liberty Village sits north of
        the rail corridor; King Street West and the Exhibition edge sit south of
        it. {STORE_NAP.corridor}. From the Liberty Village side, Atlantic Avenue
        continues south across the pedestrian bridge to the 1220 block. The 504
        King streetcar runs King Street West itself, and the 29 / 929 Dufferin
        buses serve King &amp; Dufferin.
      </p>
      <h2>Hours</h2>
      <p>
        {STORE_NAP.hoursLabel}. The weekly board is on <Link href="/hours">/hours</Link>.
        Walk in with government-issued photo ID. No appointment.
      </p>
      <h2>Directions</h2>
      <p>
        Ride the 504 King streetcar to King and Dufferin / Atlantic, or walk
        south from Liberty Village on Atlantic Avenue across the pedestrian
        bridge, then look for unit B. Paid street parking is on King Street
        West. Loop Liberty Village Green P when the curb is full. The
        street-level notes are on <Link href="/visit">/visit</Link>. Open the
        pin in{" "}
        <a href={STORE_NAP.mapSearchUrl} target="_blank" rel="noopener noreferrer">
          Google Maps
        </a>
        .
      </p>
      <h2>Menu</h2>
      <p>
        Browse the posted flower tiers before you visit:{" "}
        <Link href="/exotic-weed">Exotic</Link>,{" "}
        <Link href="/premium-weed">Premium</Link>,{" "}
        <Link href="/aaa-weed">AAA+</Link>, <Link href="/aa-weed">AA</Link>, and{" "}
        <Link href="/budget-weed">Budget</Link>. Format boards cover{" "}
        <Link href="/items/prerolls">pre-rolls</Link>,{" "}
        <Link href="/items/edibles">edibles</Link>,{" "}
        <Link href="/items/vape-disposables">THC vapes</Link>,{" "}
        <Link href="/items/concentrates">concentrates</Link>, and{" "}
        <Link href="/items/add-ons">accessories</Link>. Those pages show posted
        details for planning a visit. Ask at the counter or call if one exact
        item is the reason for the trip.
      </p>
      <p>
        <Link href="/weed-dispensary-king-west">King West corridor</Link>
        {" · "}
        <Link href="/visit">Directions</Link>
        {" · "}
        <Link href="/hours">Hours</Link>
        {" · "}
        <Link href="/exotic-weed">Menu</Link>
        {" · "}
        <Link href="/">Homepage</Link>
      </p>
    </section>
  );
}

export default function Page() {
  return (
    <>
      <GBPLandingPage />
      <KingWestLibertyNotes />
    </>
  );
}
