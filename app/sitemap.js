// app/sitemap.js
import { GUIDE_POSTS } from '@/app/data/posts'; // 절대 경로 패턴으로 안전하게 지정

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
  const guideRoutes = GUIDE_POSTS.map((post) => {
    // 날짜 데이터가 안전한지 검증하고 변환
    let formattedDate;
    try {
      formattedDate = new Date(post.date).toISOString().split('T')[0];
    } catch (e) {
      formattedDate = new Date().toISOString().split('T')[0];
    }

    return {
      url: `${baseUrl}/guide/${post.slug}`,
      lastModified: formattedDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    };
  });

  return [...routes, ...guideRoutes];
}