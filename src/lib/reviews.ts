// Server-side Google Places reviews fetch. Runs at build time (static export),
// so the API key is never shipped to the browser — only the resulting review
// data is baked into the page. Both values can be overridden via env vars.

export type Review = {
  id: number;
  name: string;
  designation: string;
  review: string;
  avatar: string;
  rating: number;
};

const API_KEY = process.env.GOOGLE_PLACES_API_KEY || 'AIzaSyCketJqbsiPOz_kLY-Zv9iSbS2V33f6SNM';
const PLACE_ID = process.env.GOOGLE_PLACES_PLACE_ID || 'ChIJzz4A8Uv9DDkRh4Bs1AMwOB0';

const formatDesignation = (relativeTime?: string) =>
  relativeTime ? `Google Review · ${relativeTime}` : 'Verified Google Review';

export async function getReviews(): Promise<Review[]> {
  try {
    const url =
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}` +
      `&reviews_no_translations=true&fields=reviews&key=${API_KEY}`;

    const res = await fetch(url, { next: { revalidate: 3600 } });
    if (!res.ok) return [];

    const data = await res.json();
    if (data.status && data.status !== 'OK') return [];

    const raw = (data?.result?.reviews || []) as Array<{
      author_name?: string;
      profile_photo_url?: string;
      rating?: number;
      text?: string;
      relative_time_description?: string;
    }>;

    // Only show 5-star reviews that have text.
    return raw
      .filter((r) => (r.rating || 0) === 5 && (r.text || '').trim().length > 0)
      .map((r, idx) => ({
        id: idx + 1,
        name: (r.author_name || 'Google User').trim(),
        designation: formatDesignation(r.relative_time_description),
        review: (r.text || '').trim(),
        avatar: r.profile_photo_url || '/assets/images/testimonials/ramesh.webp',
        rating: r.rating || 5,
      }));
  } catch {
    return [];
  }
}
