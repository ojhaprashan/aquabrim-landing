/**
 * Marketing-attribution capture for Google Ads / UTM tracking.
 *
 * Google Ads appends tracking params to the LANDING page URL only. As the user
 * navigates the site those params disappear from the URL, so we capture them on
 * arrival and persist them in sessionStorage for the whole visit. The contact
 * form then merges this object into its submission payload.
 *
 * Canonical keys (what contact.php expects): utm_campaign, utm_adgroup,
 * utm_keyword, gclid, device. Because real ad URLs sometimes use different param
 * names, each canonical key also accepts a list of aliases — adjust ALIASES below
 * to match your actual ad final URLs if they differ.
 */

export interface Tracking {
  utm_campaign: string;
  utm_adgroup: string;
  utm_keyword: string;
  gclid: string;
  device: string;
}

const STORAGE_KEY = "aqb_tracking";

const EMPTY: Tracking = {
  utm_campaign: "",
  utm_adgroup: "",
  utm_keyword: "",
  gclid: "",
  device: "",
};

// First matching, non-empty URL param wins. Canonical name is listed first.
// NOTE: confirm these against your real Google Ads final URLs — some accounts
// send `utm_term` instead of `utm_keyword`, or `campaignid`/`adgroupid` (IDs)
// instead of names. Add/remove aliases here to match.
const ALIASES: Record<keyof Tracking, string[]> = {
  utm_campaign: ["utm_campaign", "campaignid", "campaign"],
  utm_adgroup: ["utm_adgroup", "adgroupid", "adgroup"],
  utm_keyword: ["utm_keyword", "utm_term", "keyword"],
  gclid: ["gclid"],
  device: ["device"],
};

function readStored(): Tracking {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...EMPTY };
    const parsed = JSON.parse(raw);
    return { ...EMPTY, ...parsed };
  } catch {
    return { ...EMPTY };
  }
}

/** First non-empty value among the given param aliases. */
function firstParam(params: URLSearchParams, keys: string[]): string {
  for (const key of keys) {
    const value = params.get(key);
    if (value && value.trim() !== "") return value.trim();
  }
  return "";
}

/**
 * Detect device as Google ValueTrack-style codes:
 *   'm' = mobile, 't' = tablet, 'c' = computer.
 */
function detectDevice(): string {
  const ua = (navigator.userAgent || "").toLowerCase();
  // Tablets first: iPad, Android without "mobile", and common tablet UAs.
  if (/ipad|tablet|playbook|silk|(android(?!.*mobile))/i.test(ua)) return "t";
  if (/mobile|iphone|ipod|android|blackberry|iemobile|opera mini|windows phone/i.test(ua)) return "m";
  return "c";
}

/**
 * Capture tracking params from the current URL and persist them for the visit.
 * Call once on every page load. Existing stored values are only overwritten when
 * the URL carries a NON-empty value for that key, so navigating to a param-less
 * page never wipes data captured on the landing page.
 */
export function captureTracking(): void {
  if (typeof window === "undefined") return;

  const stored = readStored();
  const params = new URLSearchParams(window.location.search);

  (Object.keys(ALIASES) as (keyof Tracking)[]).forEach((key) => {
    const fromUrl = firstParam(params, ALIASES[key]);
    if (fromUrl) stored[key] = fromUrl;
  });

  // device: prefer the ad-provided value; otherwise fall back to UA detection,
  // but only when we don't already have a captured device for this visit.
  if (!stored.device) stored.device = detectDevice();

  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
  } catch {
    /* sessionStorage unavailable (private mode / disabled) — tracking is best-effort. */
  }
}

/** Read the persisted tracking object for inclusion in a form payload. */
export function getTracking(): Tracking {
  if (typeof window === "undefined") return { ...EMPTY };
  return readStored();
}
