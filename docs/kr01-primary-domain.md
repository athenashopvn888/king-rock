# KR01 primary domain

**Chosen primary:** `https://www.kingrockcannabis.com`

Both `kingrockcannabis.ca` and `kingrockcannabis.com` have served the same King Rock site. Canonical tags, Open Graph `url`, schema `url` / `@id`, sitemap, and robots already pointed at **www.kingrockcannabis.com**. This catch-up keeps that host as the single primary and stops split signals.

| Host | Role |
| --- | --- |
| `www.kingrockcannabis.com` | Primary. Canonical, schema `@id` (`…/#store`), OG, sitemap. |
| `kingrockcannabis.com` (apex) | Loser. `proxy.ts` 308 → `www.kingrockcannabis.com` (same path). |
| `kingrockcannabis.ca` / `www.kingrockcannabis.ca` | Loser. Same 308 to the www `.com` primary. |

Local / preview hosts (`localhost`, `127.0.0.1`, `*.vercel.app`) are not redirected.

Ops still need DNS + the Vercel project to accept the `.ca` hosts so the 308 can fire. GBP website field should be `https://www.kingrockcannabis.com` only.
