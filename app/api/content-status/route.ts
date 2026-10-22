import { NextResponse } from "next/server";
import { getFleetContent } from "../../lib/fleetContent";
import { contentStatusPayload } from "../../lib/fleet/status";
import { SHOW_CIGARETTES } from "../../lib/siteConfig";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/** Diagnostic only. Publish verification reads the page marker, not this route. */
export async function GET() {
  const fleet = await getFleetContent();
  const show = SHOW_CIGARETTES;
  return NextResponse.json(contentStatusPayload(fleet, {
    web: show,
    tv: show,
    guides: show,
  }), { headers: { "Cache-Control": "no-store" } });
}
