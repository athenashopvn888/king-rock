import type { Metadata } from "next";
import "./globals.css";
import AgeGate from "./components/AgeGate";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kingrockcannabis.com"),
  title: {
    default: "King Rock Cannabis | Toronto Dispensary",
    template: "%s | King Rock",
  },
  description:
    "King Rock is a Toronto cannabis dispensary on King St W with adult 19+ store info and category browsing for flower, pre-rolls, vapes, edibles, concentrates, and accessories. Open Daily: 10:00 AM - 01:00 AM.",
  keywords: [
    "cannabis dispensary Toronto",
    "weed store Toronto",
    "exotic flower Toronto",
    "premium cannabis",
    "King Rock",
    "cheap weed Toronto",
    "dispensary near me",
    "THC flower",
    "indica sativa hybrid",
    "edibles Toronto",
    "vapes",
    "pre-rolls",
    "native cigarettes Toronto",
    "weed store west Toronto",
  ],
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://www.kingrockcannabis.com",
    siteName: "King Rock",
    title: "King Rock Premium Toronto Cannabis Dispensary",
    description:
      "Browse flower tiers and menu categories for King Rock at 1220b King St W. Open Daily: 10:00 AM - 01:00 AM.",
    images: [
      {
        url: "https://www.kingrockcannabis.com/wp-content/uploads/2026/04/46Oi5.jpg",
        width: 1200,
        height: 630,
        alt: "King Rock Premium Cannabis Dispensary Toronto",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "King Rock Toronto's Uplifting Dispensary",
    description:
      "Browse current menu categories. Open Daily: 10:00 AM - 01:00 AM at 1220b King St W, Toronto.",
    images: [
      "https://www.kingrockcannabis.com/wp-content/uploads/2026/04/46Oi5.jpg",
    ],
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
  alternates: {
    canonical: "https://www.kingrockcannabis.com",
  },
  verification: {
    // google: "your-google-verification-code",
  },
};

/* JSON-LD Structured Data */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Store",
  additionalType: "https://schema.org/Store",
  "@id": "https://www.kingrockcannabis.com",
  name: "King Rock",
  description:
    "Cannabis dispensary at 1220b King St W in Toronto, ON. Shop exotic, premium, AAA+, AA, and budget flower tiers plus edibles, prerolls, and vapes. Open Daily: 10:00 AM - 01:00 AM.",
  url: "https://www.kingrockcannabis.com",
  telephone: "+14372363469",
  image: "https://www.kingrockcannabis.com/wp-content/uploads/2026/04/7Clmh.jpg",
  priceRange: "$3 - $12/g",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1220b King St W",
    addressLocality: "Toronto",
    addressRegion: "ON",
    postalCode: "M6K 1G4",
    addressCountry: "CA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 43.6395857,
    longitude: -79.4241844,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "10:00",
      closes: "01:00",
    },
  ],
  areaServed: {
    "@type": "City",
    name: "Toronto",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="geo.region" content="CA-ON" />
        <meta name="geo.placename" content="Toronto" />
        <meta name="geo.position" content="43.6395857;-79.4241844" />
        <meta name="ICBM" content="43.6395857, -79.4241844" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-Z0S71M8ZV8"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
 window.dataLayer = window.dataLayer || [];
 function gtag(){dataLayer.push(arguments);}
 gtag('js', new Date());
 gtag('config', 'G-Z0S71M8ZV8');
 `,
          }}
        />
      </head>
      <body>
        {children}
        <AgeGate />
      </body>
    </html>
  );
}
