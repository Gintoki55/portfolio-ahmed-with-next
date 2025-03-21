/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://ahmedbarkhed.vercel.app', // رابط موقعك
  generateRobotsTxt: true, // إنشاء ملف robots.txt تلقائياً
  sitemapSize: 5000, // الحد الأقصى لعدد الروابط في كل خريطة موقع
  generateIndexSitemap: false, // إذا كنت لا تريد استخدام فهرس لخريطة الموقع
};
