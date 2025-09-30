import { createBackendInsightsProxyHandler } from '@uniformdev/insights/proxy';
import { NextRequest, NextResponse } from 'next/server';

if (!process.env.NEXT_PUBLIC_INSIGHTS_API_URL || !process.env.NEXT_PUBLIC_UNIFORM_INSIGHTS_KEY) {
  throw new Error('NEXT_PUBLIC_INSIGHTS_API_URL and NEXT_PUBLIC_UNIFORM_INSIGHTS_KEY must be set for Uniform Insights to work.');
}

const proxyHandler = createBackendInsightsProxyHandler({
  apiHost: process.env.NEXT_PUBLIC_INSIGHTS_API_URL!,
  apiKey: process.env.NEXT_PUBLIC_UNIFORM_INSIGHTS_KEY!,
});

export async function POST(request: NextRequest) {
  try {
    return proxyHandler.handleRequest(await request.text());
  } catch (error) {
    console.error('Analytics proxy error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
