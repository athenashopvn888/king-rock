import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./faq.module.css";

export const metadata: Metadata = {
  title: { absolute: "FAQ | King West & Liberty Village — King Rock" },
  description:
    "Hours, parking, 504 King, 19+ ID, and walk-in questions for King Rock Cannabis at 1220b King St W. Adults 19+. Open 24 Hours Daily.",
  alternates: {
    canonical: "https://www.kingrockcannabis.com/faq",
  },
};

const FAQ_CATEGORIES = [
  {
    title: " Location & Hours",
    faqs: [
      {
        q: "Where is King Rock located?",
        a: "King Rock Cannabis is at 1220b King St W, Toronto, ON M6K 1G4, on the King West / Liberty Village corridor at Dufferin / Atlantic. Look for unit B on the 1220 King frontage. It is a walk-in pin for this stretch of King — not a downtown core shop further east.",
      },
      {
        q: "What are your hours?",
        a: "We are open 24 hours daily. Walk in anytime — no appointment needed. Adults 19+ with government-issued photo ID.",
      },
      {
        q: "Is there parking nearby?",
        a: "Paid street parking on King Street West is the usual curb pattern. Follow posted signs; restrictions change by block and hour. When King West nightlife fills the frontage, loop Liberty Village Green P around Atlantic, Hanna, East Liberty, or Jefferson. The visit page has the parking notes.",
      },
      {
        q: "How far are you from Liberty Village?",
        a: "Liberty Village sits north of the rail corridor. Walk Atlantic Avenue south across the pedestrian bridge, then a short hop to King Street West. How-to-reach detail is on /visit.",
      },
      {
        q: "What's the best way to get to King Rock?",
        a: "Use the 504 King streetcar along King Street West, the 29 / 929 Dufferin buses at King & Dufferin, or walk down from Liberty Village via the Atlantic Avenue bridge. Exhibition GO and Dufferin Gate Loop are transfer landmarks south of the tracks. Full transit and parking notes are on the visit page.",
      },
    ],
  },
  {
    title: " Products & Menu",
    faqs: [
      {
        q: "What products do you carry?",
        a: "Our menu includes cannabis flower across five price tiers (Exotic, Premium, AAA+, AA, and Budget), plus edibles, vapes, concentrates, pre-rolls, native cigarettes, and accessories. Check the current menu for today’s selection.",
      },
      {
        q: "Do you have a current menu?",
        a: "Yes. Our online menu at kingrockcannabis.com lists current menu items and prices. Check it before visiting because the selection can change.",
      },
      {
        q: "What are your flower tiers?",
        a: "The menu groups flower into Exotic, Premium, AAA+, AA, and Budget tiers. Each tier page shows its current prices and menu items.",
      },
      {
        q: "Do you sell edibles?",
        a: "Yes! We carry a variety of edibles including gummies, chocolates, baked goods, and more. THC content varies. Check our current menu for current listings.",
      },
      {
        q: "Do you sell vapes?",
        a: "Yes both disposable vapes and refillable vape pens. We carry both nicotine vapes and THC vapes from top brands.",
      },
      {
        q: "Do you sell native cigarettes?",
        a: "Yes! We carry native cigarette options in Toronto, including premium and value brands in multiple varieties.",
      },
    ],
  },
  {
    title: " Pricing & Bundle Offers",
    faqs: [
      {
        q: "What is the cheapest weed you sell?",
        a: "Our Budget tier starts at $3/g with value ounces from $40. Our AA tier is $4/g. These are the most competitive prices you'll find in Toronto.",
      },
      {
        q: "What bundle pricing do you offer?",
        a: "Flower bundle pricing includes a 3g total option the 3g total is shown clearly before purchase. Our Exotic, Premium, and AAA+ tiers also offer 6g bundle pricing, with 6g total pricing.",
      },
      {
        q: "Do you have ounce deals?",
        a: "The menu lists ounce options and prices when offered. Check the relevant flower tier for current details.",
      },
      {
        q: "How does bundle pricing work?",
        a: "The 3g bundle pricing applies to every tier automatically. The 6g bundle pricing applies to Exotic, Premium, and AAA+ tiers. These are our standard everyday bundle offers.",
      },
      {
        q: "How does the tier pricing work?",
        a: "Each flower strain is graded into one of five quality tiers. The tier determines the per-gram price. This transparent system means you always know exactly what you're paying no confusing markups or inconsistent pricing.",
      },
    ],
  },
  {
    title: " Shopping & Experience",
    faqs: [
      {
        q: "Do I need an appointment?",
        a: "No! King Rock is walk-in only. Just show up anytime — we are open 24 hours daily.",
      },
      {
        q: "Can I order online?",
        a: "Currently, King Rock is an in-store shopping experience only. You can browse the current menu online before visiting.",
      },
      {
        q: "Do you offer delivery?",
        a: "Delivery is a separate neighbourhood-scoped service, not city-wide Toronto coverage. Use the delivery URL for King West / Liberty Village / Exhibition / Dufferin Gate range. The dispatcher confirms whether an address is in range. Walk-in remains 24/7 at 1220b King St W.",
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept cash and debit. No credit cards at this time.",
      },
      {
        q: "Can your staff help me choose a strain?",
        a: "Our budtenders can help you compare the menu based on your preferences and budget.",
      },
      {
        q: "Is there a minimum purchase?",
        a: "No minimum purchase required. You can buy as little as 1 gram.",
      },
    ],
  },
];

export default function FAQPage() {
  // JSON-LD for FAQ page
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_CATEGORIES.flatMap((cat) =>
      cat.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.a,
        },
      })),
    ),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className={styles.main}>
        <Navbar />

        {/* FAQ Banner */}
        <section
          style={{ width: "100%", overflow: "hidden", marginTop: "92px" }}
        >
          <img
            src="/banners/07_FAQ.webp"
            alt="King Rock FAQ Your Questions Answered"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              objectFit: "contain",
            }}
          />
        </section>

        <div className={styles.content}>
          <h1 className={styles.pageTitle}>Frequently Asked Questions</h1>
          <p className={styles.pageSubtitle}>
            Walk-in questions for King Rock Cannabis at 1220b King St W on
            King West / Liberty Village. Adults 19+. Open 24 Hours Daily.
          </p>

          {FAQ_CATEGORIES.map((cat) => (
            <div key={cat.title} className={styles.category}>
              <h2 className={styles.categoryTitle}>{cat.title}</h2>
              {cat.faqs.map((faq) => (
                <details key={faq.q} className={styles.faqItem}>
                  <summary className={styles.faqQuestion}>{faq.q}</summary>
                  <p className={styles.faqAnswer}>{faq.a}</p>
                </details>
              ))}
            </div>
          ))}

          <div className={styles.ctaSection}>
            <h2 className={styles.ctaTitle}>Still have questions?</h2>
            <p className={styles.ctaText}>
              Call us at <strong>+1 (437) 780-9691</strong> or visit us at 1220b
              King St W, Toronto, ON M6K 1G4. Look for unit B. Open 24 Hours Daily.
            </p>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
