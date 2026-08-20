module.exports = {
  siteUrl: 'https://portfolio-victor-potenciano.vercel.app',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: ['/icon'],
  transform: async (config: { autoLastmod: boolean }, path: string) => ({
    loc: path,
    lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
  }),
};
