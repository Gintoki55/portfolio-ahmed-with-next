const baseUrl = 'https://ahmedbarkhed.vercel.app';
const locales = ['en', 'ar', 'es', 'it'];
const staticRoutes = ['', '/services', '/experience', '/projects', '/contact'];

export async function GET() {
  const urls = locales.flatMap((locale) =>
    staticRoutes.map((path) => {
      const fullPath = path === '' ? `/${locale}` : `/${locale}${path}`;
      return `
        <url>
          <loc>${baseUrl}${fullPath}</loc>
          <changefreq>weekly</changefreq>
          <priority>0.8</priority>
        </url>
      `;
    })
  );

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
