/**
 * Site-wide cigarette switch. Default off.
 * Set NEXT_PUBLIC_SHOW_CIGARETTES=true (or flip SHOW_CIGARETTES_SWITCH) to restore every gated surface.
 */
const SHOW_CIGARETTES_SWITCH = false;

function readShowCigarettes(fallback: boolean): boolean {
  const raw = process.env.NEXT_PUBLIC_SHOW_CIGARETTES;
  if (typeof raw !== "string" || raw.trim() === "") return fallback;
  if (raw === "true" || raw === "1") return true;
  if (raw === "false" || raw === "0") return false;
  return fallback;
}

export const SHOW_CIGARETTES = readShowCigarettes(SHOW_CIGARETTES_SWITCH);
