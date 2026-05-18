describe('robots', () => {
  const originalBaseUrl = process.env.BASE_URL;

  beforeEach(() => {
    jest.resetModules();
  });

  afterEach(() => {
    if (originalBaseUrl === undefined) {
      delete process.env.BASE_URL;
    } else {
      process.env.BASE_URL = originalBaseUrl;
    }
  });

  it('should return robots config with BASE_URL set', () => {
    process.env.BASE_URL = 'example.com';
    const robots = require('./robots').default;
    const result = robots();

    expect(result).toEqual({
      rules: {
        userAgent: '*',
        disallow: '/',
      },
      sitemap: 'https://example.com/sitemap.xml',
    });
  });

  it('should return robots config with localhost when BASE_URL is not set', () => {
    delete process.env.BASE_URL;
    const robots = require('./robots').default;
    const result = robots();

    expect(result).toEqual({
      rules: {
        userAgent: '*',
        disallow: '/',
      },
      sitemap: 'http://localhost:3000/sitemap.xml',
    });
  });

  it('should return correct rules structure', () => {
    process.env.BASE_URL = 'test.com';
    const robots = require('./robots').default;
    const result = robots();

    expect(result.rules).toEqual({
      userAgent: '*',
      disallow: '/',
    });
  });

  it('should return correct sitemap URL with BASE_URL', () => {
    process.env.BASE_URL = 'mydomain.com';
    const robots = require('./robots').default;
    const result = robots();

    expect(result.sitemap).toBe('https://mydomain.com/sitemap.xml');
  });
});
