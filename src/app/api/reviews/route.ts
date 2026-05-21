import { NextResponse } from 'next/server';

export const revalidate = 3600;

type Review = {
  id: number;
  name: string;
  designation: string;
  review: string;
  avatar: string;
  rating: number;
};

const SOURCE_URL = 'https://aquabrim.com/';

const decodeEntities = (s: string) =>
  s
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&nbsp;/g, ' ');

const stripTags = (s: string) => s.replace(/<br\s*\/?>/gi, ' ').replace(/<[^>]+>/g, '').trim();

const formatDesignation = (unixSeconds: number) => {
  if (!unixSeconds) return 'Verified Google Review';
  const d = new Date(unixSeconds * 1000);
  const month = d.toLocaleString('en-US', { month: 'short' });
  return `Google Review · ${month} ${d.getFullYear()}`;
};

const parseReviews = (html: string): Review[] => {
  const blocks = html.match(/<div class="grw-review">[\s\S]*?<svg height="18" width="18" role="none"><use href="#grw-google"\/><\/svg><\/div><\/div>/g);
  if (!blocks) return [];

  const reviews: Review[] = [];
  blocks.forEach((block, idx) => {
    const nameMatch = block.match(/class="wp-google-name"[^>]*>([^<]+)<\/a>/);
    const timeMatch = block.match(/class="wp-google-time"\s+data-time="(\d+)"/);
    const textMatch = block.match(/class="wp-google-text">([\s\S]*?)<\/span>/);
    const avatarMatch =
      block.match(/data-lazy-src="(https:\/\/lh3\.googleusercontent\.com[^"]+)"/) ||
      block.match(/<noscript>[\s\S]*?src="(https:\/\/lh3\.googleusercontent\.com[^"]+)"/);
    const stars = (block.match(/class="wp-star"/g) || []).length;

    if (!nameMatch || !textMatch) return;
    if (stars !== 5) return;

    reviews.push({
      id: idx + 1,
      name: decodeEntities(nameMatch[1].trim()),
      designation: formatDesignation(timeMatch ? Number(timeMatch[1]) : 0),
      review: decodeEntities(stripTags(textMatch[1])),
      avatar: avatarMatch ? avatarMatch[1] : '/assets/images/testimonials/ramesh.png',
      rating: stars,
    });
  });

  return reviews;
};

export async function GET() {
  try {
    const res = await fetch(SOURCE_URL, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36',
      },
      next: { revalidate: 3600 },
    });
    if (!res.ok) {
      return NextResponse.json({ reviews: [], error: `Upstream ${res.status}` }, { status: 200 });
    }
    const html = await res.text();
    const reviews = parseReviews(html);
    return NextResponse.json({ reviews }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { reviews: [], error: err instanceof Error ? err.message : 'fetch failed' },
      { status: 200 },
    );
  }
}
