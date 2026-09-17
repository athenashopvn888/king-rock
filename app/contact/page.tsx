import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { STORE_NAP } from "../lib/storeNap";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: { absolute: "Contact King Rock | 1220b King St W, King West" },
  description:
    "Visit King Rock Cannabis at 1220b King St W, Toronto, ON M6K 1G4. King West / Liberty Village walk-in. Open 24 Hours Daily. Adults 19+.",
  alternates: {
    canonical: `${STORE_NAP.origin}/contact`,
  },
  openGraph: {
    title: "Contact King Rock on King West",
    description:
      "1220b King St W, Toronto, ON M6K 1G4. Open 24 Hours Daily. Walk-in for adults 19+.",
    url: `${STORE_NAP.origin}/contact`,
  },
};

const DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
] as const;

export default function ContactPage() {
  const nap = STORE_NAP;

  return (
    <main className={styles.main}>
      <Navbar />

      {/* Hero */}
      <section className={styles.hero} style={{ paddingTop: "92px" }}>
        <div
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}
        >
          <h1 className={styles.heroTitle}>Contact King Rock on King West</h1>
          <img
            src="/banners/08_Contact_Us.webp"
            alt="Contact Us"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              borderRadius: "var(--radius-lg)",
            }}
          />
        </div>
      </section>

      {/* Info Cards */}
      <section className={styles.infoSection}>
        <div className={styles.container}>
          <div className={styles.infoGrid}>
            {/* Location */}
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}></div>
              <h2 className={styles.infoTitle}>Location</h2>
              <p className={styles.infoText}>
                {nap.streetAddress}
                <br />
                {nap.addressLocality}, {nap.addressRegion} {nap.postalCode}
                <br />
                <span className={styles.infoMuted}>
                  King West and Liberty Village · unit B
                </span>
              </p>
              <p className={styles.infoText}>
                <a href={`tel:${nap.phoneIntl}`}>{nap.phoneDisplay}</a>
              </p>
            </div>

            {/* Hours */}
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}></div>
              <h2 className={styles.infoTitle}>Hours</h2>
              <div className={styles.hoursTable}>
                {DAYS.map((day) => (
                  <div className={styles.hoursRow} key={day}>
                    <span>{day}</span>
                    <span className={styles.hoursTime}>Open 24 Hours</span>
                  </div>
                ))}
              </div>
              <div className={styles.openBadge}>
                <div className={styles.openDot} />
                {nap.hoursLabel}
              </div>
            </div>

            {/* Walk-in */}
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}></div>
              <h2 className={styles.infoTitle}>Walk In</h2>
              <p className={styles.infoText}>
                No appointment needed.
                <br />
                Just walk in and our staff will
                <br />
                help you compare current menu details.
              </p>
              <div className={styles.featureList}>
                <div className={styles.featureItem}>
                  <span className={styles.featureCheck}></span>
                  Flower tiers and menu categories
                </div>
                <div className={styles.featureItem}>
                  <span className={styles.featureCheck}></span>
                  Current package details
                </div>
                <div className={styles.featureItem}>
                  <span className={styles.featureCheck}></span>
                  Knowledgeable budtenders
                </div>
                <div className={styles.featureItem}>
                  <span className={styles.featureCheck}></span>
                  Debit &amp; cash accepted
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className={styles.mapSection}>
            <iframe
              title="Map of King Rock Cannabis at 1220b King St W"
              src={nap.mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ width: "100%", height: 360, border: 0, display: "block" }}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
