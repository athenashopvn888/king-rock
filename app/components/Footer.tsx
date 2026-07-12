import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          {/* Column 1 — Store Description */}
          <div className={styles.col}>
            <div className={styles.brand}>
              KING ROCK
            </div>
            <p className={styles.desc}>
              Your Local Cannabis Dispensary At 1220b King St W, Toronto. Visit
              King Rock For Premium Flower, Edibles, Vapes &amp; More.
              Open: Open Daily: 10:00 AM - 01:00 AM.
            </p>
            <div className={styles.buttons}>
              <a
                href="tel:+14372363469"
                className={styles.btnPrimary}
              >
                Call Now
              </a>
            </div>
          </div>

          {/* Column 2 — Contact Info */}
          <div className={styles.col}>
            <h3 className={styles.colTitle}>Contact Info</h3>
            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>Address:</span>
              <span>1220b King St W</span>
              <span>Toronto, ON M6K 1G4</span>
              <span>Canada</span>
            </div>
            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>Phone:</span>
              <span><a href="tel:+14372363469" style={{color: "inherit"}}>(437) 236-3469</a></span>
            </div>
            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>Hours:</span>
              <span className={styles.highlight}>Open Daily: 10:00 AM - 01:00 AM</span>
            </div>
          </div>

          {/* Column 3 — Quick Links */}
          <div className={styles.col}>
            <h3 className={styles.colTitle}>Quick Links</h3>
            <nav className={styles.links}>
              <Link href="/">Home</Link>
              <Link href="/exotic">Exotic Flower</Link>
              <Link href="/premium">Premium Flower</Link>
              <Link href="/aaa">AAA+ Flower</Link>
              <Link href="/aa">AA Flower</Link>
              <Link href="/budget">Budget Flower</Link>
              <Link href="/items/edibles">Edibles</Link>
              <Link href="/items/cigarettes">Cigarettes</Link>
              <Link href="/items/vapes">Vape Pens</Link>
              <Link href="/faq">FAQ</Link>
              <Link href="/delivery">Delivery (Coming Soon)</Link>
              <Link href="/games">Games Arcade</Link>
              <Link href="/info/york-weed-dispensary">Toronto Dispensary</Link>
              <Link href="/info/cheap-weed-york">Cheap Weed Toronto</Link>
              <Link href="/info/native-cigarettes-york">Native Cigarettes</Link>
              <Link href="/info/weed-store-near-mississauga">Weed Store Near Mississauga</Link>
              <Link href="/weed-dispensary-toronto/">King Rock Weed Dispensary in Toronto</Link>
              <Link href="/contact">Contact Us</Link>
                          <Link href="/resources">Resources</Link>
            </nav>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>
            © {new Date().getFullYear()} King Rock. Must be 19+ to
            enter. Please consume responsibly.
          </p>
        </div>
      </div>
    </footer>
  );
}
