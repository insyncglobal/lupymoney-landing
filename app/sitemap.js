// app/sitemap.js
import { GUIDE_POSTS } from './data/posts';

export default async function sitemap() {
  const baseUrl = 'https://rupicash.com';

  // 1. 메인 페이지 주소 설정
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: 'daily',
      priority: 1.0,
    },
  ];

  // 2. posts.js에 적힌 가이드 글들의 주소를 자동으로 추출해서 결합
  const guideRoutes = GUIDE_POSTS.map((post) => ({
    url: `${baseUrl}/guide/${post.slug}`,
    lastModified: post.date,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  return [...routes, ...guideRoutes];
}