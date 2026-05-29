// app/robots.js
export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/private/', '/_next/', '/api/'], // 보안 페이지 및 시스템 내부 폴더 차단 추가
      },
    ],
    sitemap: 'https://rupicash.com/sitemap.xml',
  };
}