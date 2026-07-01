import { NextResponse } from 'next/server';
import { getReviews } from '@/lib/reviews';

export const revalidate = 3600;

export async function GET() {
  const reviews = await getReviews();
  return NextResponse.json({ reviews }, { status: 200 });
}
