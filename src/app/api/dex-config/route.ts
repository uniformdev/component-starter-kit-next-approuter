import { NextRequest, NextResponse } from 'next/server';
import dexConfigNP from '../../../../dex.config.np.json';
import dexConfigSU from '../../../../dex.config.su.json';

export const GET = (request: NextRequest) => {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get('type');
  if (type === 'np') {
    return NextResponse.json(dexConfigNP);
  }
  if (type === 'su') {
    return NextResponse.json(dexConfigSU);
  }
  return NextResponse.json({});
};
