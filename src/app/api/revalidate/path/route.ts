import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

// POST /api/revalidate/path — revalidates a specific page path
// Body: { "path": "/some/page" }
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { path } = body;

    if (!path || typeof path !== 'string') {
      return NextResponse.json(
        { revalidated: false, error: 'Missing or invalid "path" in request body' },
        { status: 400 }
      );
    }

    revalidatePath(path);

    return NextResponse.json({ revalidated: true, path, now: Date.now() });
  } catch (error) {
    return NextResponse.json(
      { revalidated: false, error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
