import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./resources.module.css";
import type { ResourceCard, ResourcePage } from "./resourceData";

type ResourceViewProps = {
  page: ResourcePage;
};

function RelatedLinks({ heading, id, items }: { heading: string; id: string; items: ResourceCard[] }) {
  if (items.length === 0) return null;
  return (
    <section className={styles.cardsSection} aria-labelledby={id}>
      <div className={styles.latest}>
        <h2 id={id}>{heading}</h2>
        <ul className={styles.relatedList}>
          {items.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className={styles.card}>
                <span>{item.title}</span>
                <p>{item.text}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default function ResourceView({ page }: ResourceViewProps) {
  return (
    <main className={styles.main}>
      <Navbar />
      <section className={styles.hero}>
        <div className={styles.wrap}>
          <p className={styles.eyebrow}>{page.eyebrow}</p>
          <h1>{page.title}</h1>
          <p className={styles.intro}>{page.intro}</p>
        </div>
      </section>

      {page.cards.length > 0 && (
        <section className={styles.cardsSection}>
          <div className={styles.grid}>
            {page.cards.map((card) => (
              <Link key={card.href} href={card.href} className={styles.card}>
                <span>{card.title}</span>
                <p>{card.text}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      <RelatedLinks
        heading={page.slug ? "Related" : "Latest articles"}
        id={page.slug ? "related-heading" : "latest-articles-heading"}
        items={page.related ?? []}
      />

      <section className={styles.body}>
        {page.sections.map((section) => (
          <article key={section.heading} className={styles.section}>
            <h2>{section.heading}</h2>
            {Array.isArray(section.body) ? section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>) : <p>{section.body}</p>}
            {section.link && (
              <p>
                <Link href={section.link.href} aria-label={section.link.text}>{section.link.title}</Link>
              </p>
            )}
            {section.bullets && (
              <ul>
                {section.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </article>
        ))}
        {page.faqs && (
          <article className={styles.section}>
            <h2>{page.faqHeading || "King Rock Weed & Flower Questions"}</h2>
            {page.faqs.map((faq) => (
              <div key={faq.question}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </article>
        )}
      </section>
      <Footer />
    </main>
  );
}

