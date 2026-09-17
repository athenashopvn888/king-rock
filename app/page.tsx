"use client";

import { useEffect, useState, type CSSProperties } from "react";
import Link from "next/link";
import styles from "./page.module.css";
import FleetAnnouncementBanner from "./components/FleetAnnouncementBanner";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FlowerCard from "./components/FlowerCard";
import SmokePilotSpotlight from "./components/SmokePilotSpotlight";
import JsonLd from "./components/JsonLd";
import { allFlowers, type FlowerProduct } from "./lib/products";
import { HOME_FAQS, STORE_NAP, faqPageJsonLd } from "./lib/storeNap";
import Papa from "papaparse";

function pickFeaturedStrains(flowers: FlowerProduct[]) {
  const pool = flowers.filter((f) => f.image);
  const picked: FlowerProduct[] = [];
  const tierCounts: Record<string, number> = {};
  for (const f of pool) {
    if (picked.length >= 8) break;
    const tc = tierCounts[f.tier] || 0;
    if (tc >= 2) continue;
    if (picked.some((p) => p.name === f.name)) continue;
    picked.push(f);
    tierCounts[f.tier] = tc + 1;
  }
  return picked;
}

/* -- Bento Mosaic Config -- */
const BENTO_TIERS = [
  {
    name: "EXOTIC WEED",
    slug: "exotic-weed",
    price: "$10-$12/g",
    banner: "/banners/exotics_banner.webp",
    className: styles.bentoExotic,
  },
  {
    name: "PREMIUM WEED",
    slug: "premium-weed",
    price: "$7-$10/g",
    banner: "/banners/premium_banner.webp",
    className: styles.bentoPremium,
  },
  {
    name: "AAA+ WEED",
    slug: "aaa-weed",
    price: "$5-$6/g",
    banner: "/banners/aaa_plus_banner.webp",
    className: styles.bentoTile,
  },
  {
    name: "AA WEED",
    slug: "aa-weed",
    price: "$4/g",
    banner: "/banners/aa_banner.webp",
    className: styles.bentoTile,
  },
  {
    name: "BUDGET WEED",
    slug: "budget-weed",
    price: "$3/g",
    banner: "/banners/budget_banner.webp",
    className: styles.bentoTile,
  },
  {
    name: "EDIBLES - PREROLLS - MORE",
    slug: "items/edibles",
    price: "Shop Tiers",
    banner: "/banners/edibles_prerolls_more_banner.webp",
    className: styles.bentoEdibles,
  },
];

/* -- Explore Categories Config (New Banners) -- */
const EXPLORE_CATEGORIES = [
  { name: "Nicotine Vapes", slug: "items/vapes", banner: "/banners/01_Vape_Pens.webp" },
  { name: "THC Vapes", slug: "items/vape-disposables", banner: "/banners/02_Vape_Disposable.webp" },
  { name: "Concentrates", slug: "items/concentrates", banner: "/banners/03_Concentrates.webp" },
  { name: "Pre-Rolls", slug: "items/prerolls", banner: "/banners/04_Pre_Rolls.webp" },
  { name: "Accessories", slug: "items/add-ons", banner: "/banners/05_Accessories.webp" },
  { name: "Magic Stuff", slug: "items/magic", banner: "/banners/09_Magic_Stuff.webp" },
];

const LOCAL_FAQS = HOME_FAQS;

interface Review {
  name: string;
  comment: string;
  date: string;
}

interface ReviewStats {
  total: number;
  avg: number;
}

export default function HomePage() {
  const featuredStrains = pickFeaturedStrains(allFlowers);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [reviewsStats, setReviewsStats] = useState<ReviewStats | null>(null);
  const [reviewsLoading, setReviewsLoading] = useState(true);
  const [welcomeBannerError, setWelcomeBannerError] = useState(false);
  const welcomeBannerSrc: string = "/banners/welcome_banner.webp";
  const hasWelcomeBanner =
    welcomeBannerSrc &&
    welcomeBannerSrc !== "/banners/" &&
    !welcomeBannerSrc.includes("HERO_BANNER") &&
    !welcomeBannerSrc.includes("WELCOME_BANNER") &&
    welcomeBannerSrc !== "";

  /* -- 1. Fetch Client-Side Google Reviews -- */
  useEffect(() => {
    const STORE_KEY = "KR01";
    const url =
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vSu6iy9W3YKRzBYo_r96rXcbJsAOzlkzn5Rw9QMFnE0NbYSBgPxKX8kPRZNC9QcffZYj57155esmnqH/pub?gid=1555782756&single=true&output=csv";

    fetch(url)
      .then((r) => {
        if (!r.ok) throw new Error(`Review feed returned ${r.status}`);
        return r.text();
      })
      .then((raw) => {
        const rows = Papa.parse<Record<string, string>>(raw, {
          header: true,
          skipEmptyLines: true,
        }).data;

        const reviewsPool: Review[] = [];
        let totalVal: number | null = null;
        let avgVal: number | null = null;
        let hasStats = false;

        rows.forEach((row) => {
          if (row.StoreKey !== STORE_KEY) return;

          const rn = row.ReviewerName || "";
          if (rn === "__STATS__") {
            const parsedTotal = parseInt(row.Comment || "", 10);
            const parsedAvg = parseFloat(row.CreateTime || "");
            if (Number.isFinite(parsedTotal) && Number.isFinite(parsedAvg)) {
              totalVal = parsedTotal;
              avgVal = parsedAvg;
              hasStats = true;
            }
            return;
          }

          const comment = row.Comment || "";
          if (!comment || comment.length < 10) return;
          const name = rn || "Customer";
          const dateStr = row.CreateTime || "";
          reviewsPool.push({ name, comment, date: dateStr });
        });

        setReviews(reviewsPool.slice(0, 6));
        if (hasStats && totalVal !== null && avgVal !== null) {
          setReviewsStats({ total: totalVal, avg: avgVal });
        }
        setReviewsLoading(false);
      })
      .catch((err) => {
        console.warn("Reviews fetch failed:", err);
        setReviewsLoading(false);
      });
  }, []);

  /* Featured cards start from static JSON so crawlers see product names under the grid. */

  return (
    <main className={styles.main}>
      <JsonLd data={faqPageJsonLd(HOME_FAQS)} />
      <FleetAnnouncementBanner />
      {/* -- NAVBAR -- */}
      <Navbar />

      {/* -- WELCOME BANNER -- */}
      {hasWelcomeBanner && !welcomeBannerError && (
        <section className={styles.welcomeBannerSection}>
          <div className={styles.welcomeBannerContainer}>
            <img
              src={welcomeBannerSrc}
              alt="Welcome to King Rock on King West"
              className={styles.welcomeBannerImg}
              onError={() => setWelcomeBannerError(true)}
            />
            <p className={styles.welcomeBannerNap}>
              {STORE_NAP.addressLine} ·{" "}
              <a href={`tel:${STORE_NAP.phoneIntl}`}>{STORE_NAP.phoneDisplay}</a>{" "}
              · {STORE_NAP.hoursLabel} · {STORE_NAP.ageLine}
            </p>
          </div>
        </section>
      )}

      {/* -- BENTO MOSAIC HERO -- */}
      <section className={styles.hiringCallout} aria-label="Hiring at King Rock" style={{ "--hire-accent": "#f97316", "--hire-accent-soft": "rgba(249, 115, 22, 0.14)", "--hire-accent-border": "rgba(249, 115, 22, 0.32)" } as CSSProperties}>
        <div className={styles.hiringCalloutInner}>
          <div>
            <span className={styles.hiringEyebrow}>Budtenders / Managers Wanted</span>
            <h2>Join King Rock</h2>
            <p>King West needs motivated, reliable people who can bring good energy, learn quickly, and keep the counter moving smooth. Online applications only. Please do not call the store about hiring.</p>
          </div>
          <Link href="/careers/budtender" className={styles.hiringButton}>Apply Online</Link>
        </div>
      </section>

      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroOverlay} />
        <div className={styles.heroStars} />

        <div className={styles.heroContent}>
          {/* Brand branding */}
          <div className={styles.brandBlock}>
            <img
              src="/storeFavicon.webp"
              alt="King Rock Icon"
              style={{
                height: "60px",
                width: "60px",
                objectFit: "contain",
                borderRadius: "8px",
                marginBottom: "8px",
              }}
            />
            <h1 className={styles.brandTitle}>
              King Rock | King West &amp; Liberty Village Cannabis
            </h1>
            <p className={styles.brandSub}>
              Walk-in on King West / Liberty Village · {STORE_NAP.ageLine}
            </p>
            <div className={styles.brandBadge}>
              {STORE_NAP.hoursLabel}
            </div>
            <div className={styles.homeMenuActions} aria-label="Choose a King Rock menu">
              <Link href="/exotic-weed" className={styles.homeMenuCta}>STORE MENU</Link>
              <Link href="/delivery" className={`${styles.homeMenuCta} ${styles.homeDeliveryCta}`}>DELIVERY MENU</Link>
              <Link href="#visit" className={`${styles.homeMenuCta} ${styles.homeVisitCta}`}>Find us · 24/7</Link>
            </div>
          </div>

          {/* Bento Grid */}
          <div className={styles.bentoGrid}>
            {BENTO_TIERS.map((tier) => (
              <Link
                key={tier.slug}
                href={`/${tier.slug}`}
                className={`${styles.bentoTile} ${tier.className}`}
              >
                <div
                  className={styles.bentoTileBg}
                  style={{ backgroundImage: `url('${tier.banner}')` }}
                />
                <div className={styles.bentoTileOverlay} />
                <div className={styles.bentoTileContent}>
                  <span className={styles.bentoLabel}>{tier.name}</span>
                  <span className={styles.bentoPrice}>{tier.price}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* -- HOMEPAGE VISIT HUB (GBP website target lives here, not /visit) -- */}
      <section className={styles.visitHub} id="visit" aria-labelledby="visit-hub-heading">
        <div className={styles.container}>
          <p className={styles.visitHubEyebrow}>
            {STORE_NAP.neighborhood} · {STORE_NAP.ageLine} · Walk-in
          </p>
          <h2 className={styles.visitHubTitle} id="visit-hub-heading">
            Visit King Rock at 1220b King St W
          </h2>
          <p className={styles.visitHubLead}>
            King Rock Cannabis is the 24/7 walk-in on King West at the Dufferin
            / Atlantic pinch, south of Liberty Village. Look for unit B on the
            1220 King frontage. This homepage is the store listing.
          </p>

          <div className={styles.storeGrid}>
            <div className={styles.storeCard}>
              <h3 className={styles.storeCardTitle}>Address</h3>
              <p className={styles.storeCardText}>
                King Rock Cannabis
                <br />
                1220b King St W
                <br />
                Toronto, ON M6K 1G4
                <br />
                <a href={`tel:${STORE_NAP.phoneIntl}`}>{STORE_NAP.phoneDisplay}</a>
              </p>
            </div>
            <div className={styles.storeCard}>
              <h3 className={styles.storeCardTitle}>Hours</h3>
              <p className={styles.storeCardText}>
                Open 7 Days a Week
                <br />
                <span className={styles.storeHighlight}>
                  {STORE_NAP.hoursLabel}
                </span>
                <br />
                No appointment · {STORE_NAP.ageLine}
              </p>
            </div>
            <div className={styles.storeCard}>
              <h3 className={styles.storeCardTitle}>Directions</h3>
              <p className={styles.storeCardText}>
                King &amp; Dufferin / Atlantic
                <br />
                <span className={styles.storeHighlight}>
                  504 King · Liberty Village walk
                </span>
                <br />
                <a href={STORE_NAP.mapSearchUrl} target="_blank" rel="noopener noreferrer">
                  Open in Google Maps
                </a>
              </p>
            </div>
          </div>

          <p className={styles.visitHubNotes}>
            Transit: 504 King streetcar on King Street West; 29 / 929 Dufferin
            at King &amp; Dufferin; from Liberty Village walk Atlantic Avenue
            south across the pedestrian bridge. Parking: paid King Street West
            curb — never on the tracks; loop Liberty Village Green P when the
            strip is busy. Extra street-level notes:{" "}
            <Link href="/visit">how to get here</Link>.
          </p>

          <div className={styles.mapWrap}>
            <iframe
              title="Map of King Rock Cannabis at 1220b King St W"
              src={STORE_NAP.mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ width: "100%", height: 320, border: 0, display: "block" }}
            />
          </div>
        </div>
      </section>

      {/* -- EXPLORE CATEGORIES -- */}
      <section className={styles.categoriesSection} id="menu">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Explore Categories</h2>
            <p className={styles.sectionSubtitle}>
              From custom disposable vapes and concentrates to accessories and
              cigarettes.
            </p>
          </div>

          <div className={styles.categoriesGrid}>
            {EXPLORE_CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                href={`/${cat.slug}`}
                className={styles.categoryCard}
              >
                <div
                  className={styles.categoryCardBg}
                  style={{ backgroundImage: `url('${cat.banner}')` }}
                />
                <div className={styles.categoryCardOverlay} />
                <div className={styles.categoryCardContent}>
                  <h3 className={styles.categoryCardName}>{cat.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SmokePilotSpotlight
        storeName="King Rock"
        locationLabel="King West"
        cigaretteHref="/info/native-cigarettes-king-west"
        nicotineHref="/info/nicotine-vapes-king-west"
      />

      {/* -- FEATURED PRODUCTS -- */}
      <section className={styles.featuredSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Featured Strains</h2>
            <p className={styles.sectionSubtitle}>
              Featured menu listings from the current product source. Names
              below are crawlable starting points, not a live stock promise.
            </p>
          </div>

          <noscript>
            <ul>
              {featuredStrains.map((strain) => (
                <li key={strain.sku}>
                  {strain.name} — {strain.tier}
                </li>
              ))}
            </ul>
          </noscript>

          <div className={styles.featuredScroll}>
            {featuredStrains.map((strain, i) => (
              <div key={`${strain.sku}-${i}`} className={styles.scrollItem}>
                <FlowerCard flower={strain} tierKey={strain.tier} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- SEO PANEL WRITE-UP -- */}
      <section className={styles.seoSection}>
        <div className={styles.container}>
          <div className={styles.seoPanel}>
            <h2 className={styles.seoPanelTitle}>
              A King West / Liberty Village walk-in — {STORE_NAP.hoursLabel}
            </h2>
            <p className={styles.seoPanelText}>
              King Rock Cannabis is the walk-in shop at{" "}
              <strong>{STORE_NAP.addressLine}</strong>, on the King Street West
              frontage where Dufferin Street and Atlantic Avenue pinch toward
              Liberty Village and Exhibition Place. This is not a generic
              downtown counter and it is not a city-wide delivery warehouse. It
              is a 24-hour storefront for adults 19+ already moving along King
              West, walking down from the Liberty Village lofts, or cutting over
              after a show at the Exhibition grounds.
            </p>
            <p className={styles.seoPanelText}>
              The civic address is unit B — 1220b. On the sidewalk, look for the
              B unit on the 1220 King block rather than assuming the first lobby
              you see is the shop. The nearest named intersection is King Street
              West and Dufferin Street / Atlantic Avenue. From Liberty Village,
              take Atlantic Avenue south across the pedestrian bridge over the
              rail corridor, then a short hop to King. The 504 King streetcar
              runs the street itself. The 29 / 929 Dufferin buses serve King
              &amp; Dufferin. Exhibition GO and Dufferin Gate Loop sit south of
              the tracks as transfer landmarks, not as the door. Check current
              TTC and GO service before you travel. Address, 24/7 hours, and
              the map sit on this homepage. Extra parking and unit-B notes are
              on the supporting{" "}
              <Link href="/visit">how-to-reach page</Link>.
            </p>
            <p className={styles.seoPanelText}>
              Paid street parking on King Street West is the usual curb pattern.
              Signs and restrictions change by block and by hour, so read the
              post, not a screenshot. Never idle on the streetcar tracks. When
              King West nightlife or an Exhibition event fills the frontage,
              loop Liberty Village Green P and the laterals around Atlantic,
              Hanna, East Liberty, or Jefferson instead of circling 1220 again.
            </p>
            <p className={styles.seoPanelText}>
              Walk-ins do not need an appointment. Bring government-issued photo
              ID that proves you are 19 or older. The counter accepts debit and
              cash. Store hours are 24 hours daily — a King West pin fact, not a
              city-wide slogan. The public menu is split into flower tiers and
              format categories (pre-rolls, edibles, vapes, concentrates,
              accessories, cigarettes). Those pages are for browsing names and
              posted details before you visit. They are not a live inventory
              feed. If one exact item is the reason for the trip, call{" "}
              <a href={`tel:${STORE_NAP.phoneIntl}`}>{STORE_NAP.phoneDisplay}</a>{" "}
              first.
            </p>
            <p className={styles.seoPanelText}>
              Delivery, when you use it, is a{" "}
              <Link href="/delivery">separate URL</Link> with King West /
              Liberty Village / Exhibition / Dufferin Gate scope and its own
              listed delivery window. The walk-in job at 1220b King St W stays
              24/7.
            </p>
          </div>
        </div>
      </section>

      {/* -- CLIENT-SIDE GOOGLE REVIEWS SHOWCASE -- */}
      <section className={styles.reviewsSection}>
        <div className={styles.container}>
          <div className={styles.reviewsHeader}>
            <h2 className={styles.sectionTitle}>Customer Feedback</h2>
            {reviewsStats && (
              <div className={styles.reviewsStarsSummary}>
                <span className={styles.reviewsStars}>
                  {"\u2605\u2605\u2605\u2605\u2605"}
                </span>
                <span className={styles.reviewsAvg}>
                  {reviewsStats.avg.toFixed(1)}
                </span>
                <span className={styles.reviewsCount}>
                  ({reviewsStats.total} reviews)
                </span>
              </div>
            )}
          </div>

          <div className={styles.reviewsGrid}>
            {reviewsLoading ? (
              <div className={styles.reviewsLoading}>
                Loading customer feedback...
              </div>
            ) : reviews.length === 0 ? (
              <div className={styles.reviewsLoading}>
                Customer feedback is unavailable right now.
              </div>
            ) : (
              reviews.map((rv, idx) => (
                <div key={idx} className={styles.rvCard}>
                  <div className={styles.rvTop}>
                    <div className={styles.rvAvatar}>
                      {rv.name.charAt(0).toUpperCase()}
                    </div>
                    <div className={styles.rvMeta}>
                      <span className={styles.rvName}>{rv.name}</span>
                      {rv.date && (
                        <span className={styles.rvDate}>
                          {new Date(rv.date).toLocaleDateString("en-CA", {
                            year: "numeric",
                            month: "short",
                          })}
                        </span>
                      )}
                    </div>
                    <span className={styles.rvStars}>*****</span>
                  </div>
                  <p className={styles.rvText}>
                    {rv.comment.length > 180
                      ? `${rv.comment.substring(0, 177)}...`
                      : rv.comment}
                  </p>
                </div>
              ))
            )}
          </div>

          <div className={styles.reviewCtaRow}></div>
        </div>
      </section>

      {/* -- FAQS SECTION -- */}
      <section className={styles.faqSection}>
        <div className={styles.faqContainer}>
          <h2
            className={styles.sectionTitle}
            style={{ textAlign: "center", marginBottom: "32px" }}
          >
            Frequently Asked Questions
          </h2>
          {LOCAL_FAQS.map((faq, i) => (
            <details key={i} className={styles.faqItem}>
              <summary className={styles.faqQuestion}>{faq.q}</summary>
              <p className={styles.faqAnswer}>{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* -- FOOTER -- */}
      <Footer />
    </main>
  );
}
