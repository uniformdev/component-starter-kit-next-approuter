import { NextRequest, NextResponse } from 'next/server';
import tokensConfigNP from '../../../../np.json';
import tokensConfigSU from '../../../../su.json';

const getFile = (type?: string | null) => {
  switch (type) {
    case 'np':
      return { config: tokensConfigNP, filename: 'np.json' };
    case 'su':
      return { config: tokensConfigSU, filename: 'su.json' };
    default:
      return { config: {}, filename: 'tokens.json' };
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
