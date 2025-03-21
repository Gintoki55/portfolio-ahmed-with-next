// app/sitemap.xml/route.ts
import { NextResponse } from 'next/server'

const locales = ['en', 'ar', 'es', 'it'];
const routes = ['', 'services', 'experience', 'projects', 'contact'];

export async function GET() {
  const baseUrl = 'https://ahmedbarkhed.vercel.app';

  const urls = locales.flatMap((locale) =>
    routes.map(
      (route) => `
    <url>
      <loc>${baseUrl}/${locale}${route ? `/${route}` : ''}</loc>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>`
    )
  );

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls.join('')}
  </urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
