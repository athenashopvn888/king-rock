import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PRIMARY_HOST = "www.kingrockcannabis.com";
const LEGACY_HOSTS = new Set([
  "kingrockcannabis.ca",
  "www.kingrockcannabis.ca",
  "kingrockcannabis.com",
]);

/**
 * Collapse dual hosts onto www.kingrockcannabis.com.
 * Local / preview hosts are left alone.
 */
export function proxy(request: NextRequest) {
  const host = request.headers.get("host")?.split(":")[0]?.toLowerCase() ?? "";
  if (LEGACY_HOSTS.has(host)) {
    const url = request.nextUrl.clone();
    url.protocol = "https:";
    url.hostname = PRIMARY_HOST;
    url.port = "";
    return NextResponse.redirect(url, 308);
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|.*\\.(?:ico|png|jpg|jpeg|webp|svg|txt|xml)$).*)",
  ],
};
