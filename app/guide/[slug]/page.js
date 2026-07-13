import { GUIDE_POSTS } from '../../data/posts';
import { notFound } from 'next/navigation';

// 🎯 1. 상단 타이틀 및 SEO 메타데이터 설정 (키워드 및 OpenGraph 보강)
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = GUIDE_POSTS.find((p) => p.slug === slug);
  if (!post) return {};

  const url = `https://rupicash.com/guide/${post.slug}`;

  return {
    title: `${post.title} | 루피머니 가이드`,
    description: post.description,
    keywords: post.keywords ? post.keywords.join(', ') : '소액결제, 정보이용료, 루피머니',
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: url,
      siteName: '루피머니',
      locale: 'ko_KR',
      type: 'article',
      publishedTime: post.date,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

// 🎯 2. 빌드 시 정적 HTML 미리 굽는 함수
export async function generateStaticParams() {
  return GUIDE_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

// 🎯 3. 본문 화면 그리기
export default async function GuideDetailPage({ params }) {
  const { slug } = await params;
  const post = GUIDE_POSTS.find((p) => p.slug === slug);

  // 일치하는 원고(slug)가 없으면 404 페이지로 이동
  if (!post) {
    notFound();
  }

  // 💡 구글 SEO용 구조화 데이터 (JSON-LD Article Schema)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      '@type': 'Organization',
      name: '루피머니',
      url: 'https://rupicash.com',
    },
    publisher: {
      '@type': 'Organization',
      name: '루피머니',
      url: 'https://rupicash.com',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://rupicash.com/guide/${post.slug}`,
    },
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-950 font-sans antialiased">
      {/* 구글 검색 로봇 전용 구조화 데이터 주입 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 가이드 상단 네비게이션 */}
      <header className="bg-white border-b border-slate-200 py-6 shadow-sm sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 flex justify-between items-center">
          <a href="https://rupicash.com" className="font-black text-xl text-violet-600">
            루피머니
          </a>
          <a
            href="https://open.kakao.com/o/sl5pstvi"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-amber-400 text-slate-900 font-black text-xs px-4 py-2 rounded-full hover:bg-amber-500 transition-colors"
          >
            1:1 실시간 상담
          </a>
        </div>
      </header>

      {/* 본문 내용 */}
      <main className="max-w-3xl mx-auto px-4 py-12">
        <article className="bg-white p-6 md:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-violet-600 uppercase bg-violet-50 px-2.5 py-1 rounded-md">
              {post.date}
            </span>
            <span className="text-xs text-slate-400">· 2026 공식 가이드</span>
          </div>

          <h1 className="text-2xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            {post.title}
          </h1>

          <p className="text-slate-500 font-medium text-sm border-l-4 border-violet-500 pl-4 py-1 bg-slate-50 rounded-r-md">
            {post.description}
          </p>

          <hr className="border-slate-100" />

          {/* 원고 내용 꽂아넣기 */}
          <div
            className="prose prose-slate max-w-none font-medium leading-relaxed text-slate-800 space-y-4"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="pt-8">
            <a
              href="https://open.kakao.com/o/sl5pstvi"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-slate-950 text-amber-400 font-black py-4 rounded-xl text-center text-base hover:bg-slate-800 shadow-md transition-colors"
            >
              💬 가이드 읽고 1:1 안전 정산 상담하기
            </a>
          </div>
        </article>
      </main>
    </div>
  );
}
