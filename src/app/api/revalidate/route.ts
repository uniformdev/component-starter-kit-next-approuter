import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

// POST /api/revalidate — revalidates all Next.js caches
export async function POST(request: NextRequest) {
  try {
    // Revalidate the root layout which effectively invalidates all cached pages
    revalidatePath('/', 'layout');

    return NextResponse.json({ revalidated: true, now: Date.now() });
  } catch (error) {
    return NextResponse.json(
      { revalidated: false, error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
