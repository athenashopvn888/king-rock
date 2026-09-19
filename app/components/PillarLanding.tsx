import Link from "next/link";
import Navbar from "./Navbar";
import Footer from "./Footer";
import JsonLd from "./JsonLd";
import { STORE_NAP, faqPageJsonLd } from "../lib/storeNap";
import {
  PILLAR_HUB_CARDS,
  type PillarPage,
  pillarCanonical,
} from "../lib/pillarPages";
import styles from "./PillarLanding.module.css";

export default function PillarLanding({ page }: { page: PillarPage }) {
  const nap = STORE_NAP;
  const related = PILLAR_HUB_CARDS.filter((card) => card.slug !== page.slug);

  return (
    <main className={styles.main}>
      <JsonLd data={faqPageJsonLd(page.faqs)} />
      <Navbar />

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>{page.h1}</span>
          </nav>
          <p className={styles.eyebrow}>{page.eyebrow}</p>
          <h1 className={styles.heroTitle}>{page.h1}</h1>
          <p className={styles.heroLead}>{page.intro}</p>
          <div className={styles.napCard}>
            <strong>King Rock Cannabis</strong>
            <p>
              {nap.streetAddress}
              <br />
              {nap.addressLocality}, {nap.addressRegion} {nap.postalCode}
            </p>
            <p>
              <a href={`tel:${nap.phoneIntl}`}>{nap.phoneDisplay}</a>
            </p>
            <p>{page.hoursLine}</p>
            <p>
              {nap.intersection}. {nap.unitNote}. {nap.ageLine}.
            </p>
          </div>
          <div className={styles.ctaRow}>
            <Link href={page.primaryCta.href} className={`${styles.cta} ${styles.ctaPrimary}`}>
              {page.primaryCta.label}
            </Link>
            <Link href={page.secondaryCta.href} className={`${styles.cta} ${styles.ctaSecondary}`}>
              {page.secondaryCta.label}
            </Link>
          </div>
        </div>
      </section>

      <div className={styles.content}>
        {page.sections.map((section) => (
          <section key={section.heading} className={styles.section}>
            <h2>{section.heading}</h2>
            <p>{section.body}</p>
          </section>
        ))}

        {page.showMap && (
          <section className={styles.section}>
            <h2>Map</h2>
            <p>
              Search {nap.addressLine}. The embed uses that same NAP string.
            </p>
            <div className={styles.mapWrap}>
              <iframe
                title={`Map of King Rock Cannabis at ${nap.streetAddress}`}
                src={nap.mapEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </section>
        )}

        <section className={styles.section} aria-labelledby="pillar-related-heading">
          <h2 id="pillar-related-heading">Other King Rock corridor pages</h2>
          <p>
            Neighbourhood-scoped pages for the King / Parkdale / Queen West
            pinch — not city-wide Toronto clones.
          </p>
          <div className={styles.relatedGrid}>
            {related.map((card) => (
              <Link key={card.slug} href={card.href} className={styles.relatedCard}>
                <span>{card.code}</span>
                <strong>{card.title}</strong>
                <small>{card.blurb}</small>
              </Link>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2>Frequently Asked Questions</h2>
          {page.faqs.map((faq) => (
            <details key={faq.q} className={styles.faqItem}>
              <summary className={styles.faqQuestion}>{faq.q}</summary>
              <p className={styles.faqAnswer}>{faq.a}</p>
            </details>
          ))}
        </section>

        <p className={styles.ageNote}>
          {nap.ageLine}. No medical claims. Selection varies. Canonical:{" "}
          {pillarCanonical(page.slug).replace("https://", "")}
        </p>
      </div>

      <Footer />
    </main>
  );
}
