// app/robots.js
export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',            // 모든 로봇의 출입을 허용합니다.
      disallow: '/private/', // 혹시 나중에 만들지 모를 보안 페이지는 차단합니다.
    },
    sitemap: 'https://rupicash.com/sitemap.xml', // 우리 사이트맵 주소를 등록합니다.
  };
}