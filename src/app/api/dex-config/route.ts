import { NextRequest, NextResponse } from 'next/server';
import dexConfigNP from '../../../../dex.config.np.json';
import dexConfigSU from '../../../../dex.config.su.json';

const getFile = (type?: string | null) => {
  switch (type) {
    case 'np':
      return { config: dexConfigNP, filename: 'dex.config.np.json' };
    case 'su':
      return { config: dexConfigSU, filename: 'dex.config.su.json' };
    default:
      return { config: {}, filename: 'dex.config.json' };
  }
};

export const GET = (request: NextRequest) => {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get('type');

  const { config, filename } = getFile(type);

  const jsonString = JSON.stringify(config, null, 2);

  return new NextResponse(jsonString, {
    headers: {
      'Content-Type': 'application/json',
      'Content-Disposition': `attachment; filename="${filename}"`,
    },
  });
};
