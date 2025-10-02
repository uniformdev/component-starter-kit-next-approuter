import { NextRequest, NextResponse } from 'next/server';
import tokensConfigNP from '../../../../np.json';
import tokensConfigSU from '../../../../su.json';

export const GET = (request: NextRequest) => {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get('type');
  if (type === 'np') {
    return NextResponse.json(tokensConfigNP);
  }
  if (type === 'su') {
    return NextResponse.json(tokensConfigSU);
  }
  return NextResponse.json({});
};
