import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import JsonLd from "../components/JsonLd";
import {
  STORE_NAP,
  VISIT_FAQS,
  faqPageJsonLd,
} from "../lib/storeNap";
import styles from "./visit.module.css";

export const metadata: Metadata = {
  title: {
    absolute: "How to Get to King Rock | King West & Liberty Village",
  },
  description:
    "Walk-in directions for King Rock Cannabis at 1220b King St W: 504 King streetcar, Liberty Village walk, unit B, parking, and 19+ ID. Open 24 Hours Daily.",
  alternates: {
    canonical: `${STORE_NAP.origin}/visit`,
  },
  openGraph: {
    title: "How to Get to King Rock on King West",
    description:
      "Reach the 24/7 walk-in shop at 1220b King St W (unit B) from Liberty Village, Dufferin, and Exhibition. Adults 19+.",
    url: `${STORE_NAP.origin}/visit`,
  },
};

export default function VisitPage() {
  const nap = STORE_NAP;

  return (
    <main className={styles.main}>
      <JsonLd data={faqPageJsonLd(VISIT_FAQS)} />
      <Navbar />

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>
            {nap.neighborhood} · {nap.ageLine} · Walk-in · {nap.hoursShort}
          </p>
          <h1 className={styles.heroTitle}>
            How to Get to King Rock on King West
          </h1>
          <p className={styles.heroLead}>
            This is a supporting how-to-reach page for King Rock Cannabis at{" "}
            {nap.addressLine}. The store listing — NAP, 24/7 hours, and map —
            lives on the{" "}
            <Link href="/">King Rock homepage</Link>. Use this page when you
            already know the pin and need street-level notes: unit B, 504 King,
            the Liberty Village walk, parking, and 19+ ID. It is not a
            city-wide Toronto delivery search. Hours stay {nap.hoursLabel}.
            Menu pages do not confirm live stock.
          </p>
          <div className={styles.napCard}>
            <strong>Address, phone, hours</strong>
            <p>
              King Rock Cannabis
              <br />
              1220b King St W
              <br />
              Toronto, ON M6K 1G4
            </p>
            <p>
              Phone:{" "}
              <a href={`tel:${nap.phoneIntl}`}>+1 (437) 780-9691</a>
            </p>
            <p>Open 24 Hours Daily</p>
            <p>
              Nearest intersection: {nap.intersection}. {nap.unitNote}.{" "}
              {nap.ageLine}.
            </p>
          </div>
        </div>
      </section>

      <div className={styles.content}>
        <section className={styles.section}>
          <h2>Transit: 504 King, Dufferin, and the Liberty Village walk</h2>
          <p>
            King Street West is the spine. The 504 King streetcar travels the
            same street as the shop, which is the most literal transit answer if
            you are already on King. Ask for Dufferin or Atlantic rather than
            riding all the way into the Fashion District. The 29 and 929 Dufferin
            buses drop you at King &amp; Dufferin; from there the door is a short
            eastbound walk along King to the 1220 block.
          </p>
          <p>
            Liberty Village sits north of the GO / Lakeshore rail cut. The usual
            walk is Atlantic Avenue south across the pedestrian bridge, then
            continue to King Street West — a neighbourhood hop, not a crosstown
            trip. Do not hunt a subway entrance at the door; this pin is a
            streetcar and walk corridor.
          </p>
          <p>
            Exhibition GO (Lakeshore West) and Dufferin Gate Loop are planning
            landmarks south of the tracks, useful if you are coming from the
            Exhibition grounds or a GO train. After you leave those nodes you
            still need King Street West and unit B. Always check current TTC and
            GO service, construction, and event-day substitutions before you
            travel — this page is a planning sketch, not a live vehicle feed.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Parking on King West and in Liberty Village</h2>
          <p>
            Paid street parking on King Street West is the curb pattern. Signs
            rotate by block and by hour. Read the post when you stop. Do not
            park on streetcar tracks, in bike lanes, or in rush-hour clearways
            just because a previous visit was easy.
          </p>
          <p>
            When the strip is busy — Friday and Saturday nights, concert or CNE
            spill from Exhibition Place — the King frontage fills fast. Loop
            Liberty Village Green P and the laterals around Atlantic Avenue,
            Hanna Avenue, East Liberty Street, and Jefferson Avenue rather than
            circling the same 1220 block. There is no dedicated King Rock lot
            claimed on this page. If an exact stall matters, allow extra time or
            take the 504.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Landmarks on the King &amp; Dufferin / Atlantic pinch</h2>
          <p>
            Think of the pin as the seam between the King West condo-and-nightlife
            strip, Liberty Village north of the tracks, and Exhibition Place to
            the south — a King Street West storefront, not a downtown core
            address further east.
          </p>
          <ul>
            <li>King Street West meeting Dufferin Street and Atlantic Avenue</li>
            <li>Unit B on the 1220 King frontage — look for the B unit</li>
            <li>Atlantic Avenue pedestrian bridge into Liberty Village</li>
            <li>Exhibition Place, Dufferin Gate Loop, and Exhibition GO</li>
            <li>Lamport Stadium a few blocks west along King</li>
            <li>
              Gardiner Expressway exits at Dufferin or Jameson, then north to King
            </li>
          </ul>
          <p>
            Independent King West kitchens and Liberty Village grocery runs sit
            close enough that a combined errand is normal. This page only
            describes how to reach 1220b King St W.
          </p>
        </section>

        <section className={styles.section}>
          <h2>What to bring (adults 19+)</h2>
          <p>
            Government-issued photo ID proving you are 19 or older is required.
            Walk-in only — no appointment. Listed in-store payments are debit
            and cash. The counter is open 24 hours daily. If one exact product
            is the whole reason for the trip, call {nap.phoneDisplay} instead of
            treating a category page as a reservation.
          </p>
          <p>
            Delivery is a different URL with its own neighbourhood radius and a
            listed delivery window. Use{" "}
            <Link href="/delivery">the delivery page</Link> when you want an
            order brought to an address in range. Use this visit page when you
            are coming to 1220b King St W yourself.
          </p>
          <div className={styles.ctaRow}>
            <Link href="/exotic-weed" className={`${styles.cta} ${styles.ctaPrimary}`}>
              Browse the walk-in menu
            </Link>
            <a
              href={`tel:${nap.phoneIntl}`}
              className={`${styles.cta} ${styles.ctaSecondary}`}
            >
              Call {nap.phoneDisplay}
            </a>
          </div>
          <p className={styles.ageNote}>{nap.ageLine}. No medical claims. Selection varies.</p>
        </section>

        <section className={styles.section}>
          <h2>Map</h2>
          <p>
            Search {nap.addressLine}. The embed below uses that same NAP string.
          </p>
          <div className={styles.mapWrap}>
            <iframe
              title="Map of King Rock Cannabis at 1220b King St W"
              src={nap.mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>

        <section className={styles.section}>
          <h2>Visit FAQs</h2>
          {VISIT_FAQS.map((faq) => (
            <details key={faq.q} className={styles.faqItem}>
              <summary className={styles.faqQuestion}>{faq.q}</summary>
              <p className={styles.faqAnswer}>{faq.a}</p>
            </details>
          ))}
        </section>
      </div>

      <Footer />
    </main>
  );
}
