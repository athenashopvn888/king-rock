import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import styles from "./article.module.css";

const TITLE = "What Is a Landrace Strain? The Old-School Cannabis Word, Decoded";
const CANONICAL = "https://www.kingrockcannabis.com/resources/what-is-a-landrace-strain";
const DESCRIPTION =
  "Landrace is one of the most misused words in cannabis, and King Rock explains what a landrace strain really means.";
const PUBLISHED = "2026-10-28";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: CANONICAL },
  robots: { index: true, follow: true },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: CANONICAL,
    type: "article",
    publishedTime: PUBLISHED,
    modifiedTime: PUBLISHED,
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description: DESCRIPTION,
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": CANONICAL,
    url: CANONICAL,
  },
  url: CANONICAL,
  author: { "@type": "Organization", name: "King Rock" },
  publisher: { "@type": "Organization", name: "King Rock" },
};

export default function WhatIsALandraceStrainPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c") }}
      />
      <Navbar />
      <article className={styles.article}>
        <h1>{TITLE}</h1>
        <p>Last checked: October 27, 2026</p>
        <p>
          Somebody at the counter says &quot;that&apos;s a landrace,&quot; and half the room nods like they know what it means. Most don&apos;t. &quot;Landrace&quot; is one of the most misused words in cannabis, slapped on everything from seed packs to menu blurbs. So what is a landrace strain, really? King Rock, at 1220 King St W by King &amp; Dufferin, cuts through it for adults 19+. Quick corrections included, as always.
        </p>

        <h2>What is a landrace strain? The plant-science answer</h2>
        <p>&quot;Landrace&quot; isn&apos;t a cannabis invention. It&apos;s a farming term that applies to every crop, from wheat to beans to tomatoes.</p>
        <p>
          A widely cited definition, quoted in a 2017 <em>Frontiers in Plant Science</em>{" "}paper on the concept, describes a landrace as &quot;a cultivated, genetically heterogeneous variety that has evolved in a certain ecogeographical area and is therefore adapted to the edaphic and climatic conditions and to its traditional management and uses.&quot;
        </p>
        <p>Unpack that:</p>
        <ul>
          <li><strong>Cultivated:</strong> people grow it. It&apos;s not purely wild.</li>
          <li><strong>Genetically heterogeneous:</strong> the plants aren&apos;t clones of each other. There&apos;s natural variation in the population.</li>
          <li><strong>Evolved in one area:</strong> it&apos;s shaped by a specific place over a long time.</li>
          <li><strong>Adapted:</strong> to the local soil (that&apos;s &quot;edaphic&quot;), the climate and the way local farmers grow and use it.</li>
        </ul>
        <p>So a landrace is a <strong>population</strong>, not a single plant.</p>

        <h2>Landrace cannabis specifically</h2>
        <p>
          For cannabis, a 2017 review in <em>Critical Reviews in Plant Sciences</em>{" "}on cannabis domestication and breeding history describes traditional landrace varieties as cultivars that came from &quot;a combination of natural and farmer selection,&quot; formed as people spread cannabis across the world and local climate and culture shaped it.
        </p>
        <p>
          Then modern breeding happened. The same review explains that breeders combined populations from very different regions and gene pools, and that heavy use of single-plant selection, inbreeding and cloning narrowed genetic diversity in many present-day cultivars. That&apos;s the backstory behind most of what&apos;s sold today: hybrids built from crossed lines, not untouched regional populations.
        </p>

        <h2>Why &quot;landrace strain&quot; is a bit of a contradiction</h2>
        <p>
          Here&apos;s the twist. A 2022 paper in <em>GeoJournal</em>{" "}on cannabis terroir points out that &quot;strain&quot; has no official meaning in botany, and argues that landraces can&apos;t really be considered varieties, cultivars, &quot;much less strains.&quot; The same author notes that much amateur cannabis writing gets landraces wrong, describing them as strains, wild varieties or &quot;purebreds,&quot; when a landrace population is actually full of plant-to-plant variation.
        </p>
        <p>Translation for the King West crowd: when a product calls itself a &quot;landrace strain,&quot; treat it as a story, not a certificate.</p>

        <h2>Landrace vs heirloom vs hybrid</h2>
        <div className={styles.tableWrap}>
          <table>
            <thead>
              <tr>
                <th>Term</th>
                <th>What it usually means</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Landrace</td>
                <td>A local, genetically varied population shaped by one region and its farmers over a long time</td>
              </tr>
              <tr>
                <td>Heirloom</td>
                <td>Loose term for older lines kept going outside their original region; definitions vary</td>
              </tr>
              <tr>
                <td>Hybrid (in breeding)</td>
                <td>Offspring of two different parent lines crossed on purpose</td>
              </tr>
              <tr>
                <td>Cultivar</td>
                <td>A named cultivated variety with a stable, recognisable form</td>
              </tr>
              <tr>
                <td>Strain</td>
                <td>Industry word with no formal botanical meaning</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>Watch the last row. Labels use product names. Breeders use cultivar language. &quot;Strain&quot; is what everyone actually says.</p>

        <h2>What is a landrace strain NOT?</h2>
        <ul>
          <li><strong>Not a THC promise.</strong> The only reliable numbers are Total THC and Total CBD on a legal label.</li>
          <li><strong>Not a guarantee of origin.</strong> Nothing on a standard Canadian label proves a flower descends from a regional population.</li>
          <li><strong>Not one single plant.</strong> A real landrace is a population with built-in variation.</li>
          <li><strong>Not automatically &quot;pure.&quot;</strong> Most modern cannabis has crossed ancestry somewhere.</li>
        </ul>

        <h2>How to read the word on a menu</h2>
        <p>When you see &quot;landrace&quot; in a product description:</p>
        <ol>
          <li><strong>Treat it as the producer&apos;s description.</strong> It&apos;s not a regulated term.</li>
          <li><strong>Read the label anyway.</strong> Product class, Total THC, Total CBD, net weight, packaging date.</li>
          <li><strong>Look at the flower</strong> if the package lets you. Your eyes beat a buzzword.</li>
          <li><strong>Ask questions.</strong> Good staff will tell you what&apos;s on the label and what isn&apos;t.</li>
        </ol>

        <h2>Questions people ask at King &amp; Dufferin</h2>
        <p><strong>Are landraces wild cannabis?</strong> No. Landraces are cultivated by people. Wild or feral populations are a separate conversation.</p>
        <p><strong>Why do people chase landrace genetics?</strong> Partly history, partly diversity. The domestication review notes modern breeding narrowed genetic diversity, so older regional populations carry variety breeders find interesting.</p>
        <p><strong>Is there a &quot;best&quot; landrace?</strong> Not a ranking we&apos;ll make. Read the label and decide for yourself.</p>

        <h2>The bottom line</h2>
        <p>So, what is a landrace strain? Strictly, it&apos;s a contradiction: a landrace is a locally adapted, genetically varied crop population, and &quot;strain&quot; isn&apos;t a botanical term at all. In shop talk, it&apos;s a nod to old regional cannabis lines. Respect the history, skip the hype, read the label.</p>
        <p>
          Passing through King West? The <Link href="/visit">King Rock visit page</Link> has the trip details, and the <Link href="/weed-dispensary-king-west">King West weed dispensary page</Link> covers the stretch. King Rock is for adults 19 and over. Bring government-issued photo ID.
        </p>
      </article>
      <Footer />
    </main>
  );
}
