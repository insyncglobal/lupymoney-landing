// app/guide/[slug]/page.js
import { GUIDE_POSTS } from '@/app/data/posts'; // 👈 절대 경로(@/) 설정으로 경로 에러 원천 차단!
import { notFound } from 'next/navigation';

// 🎯 1. 상단 타이틀용 SEO 설정 (최신 규격에 맞게 await params 추가)
export async function generateMetadata({ params }) {
  const { slug } = await params; // 주소창 읽을 때까지 기다려주는 코드
  const post = GUIDE_POSTS.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: `${post.title} | 루피머니 가이드`,
    description: post.description,
    alternates: {
      canonical: `https://rupicash.com/guide/${post.slug}`, // 구글이 좋아하는 표준 URL 수집 차단 방지
    }
  };
}

// 🎯 2. 빌드 시 정적 HTML 미리 굽는 함수 (서버 부하 감소 및 로딩 속도 최적화)
export async function generateStaticParams() {
  return GUIDE_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

// 🎯 3. 본문 화면 그리기 (최신 규격에 맞게 async / await params 추가)
export default async function GuideDetailPage({ params }) {
  const { slug } = await params; // 비동기 params 처리 완벽
  const post = GUIDE_POSTS.find((p) => p.slug === slug);

  // 일치하는 원고(slug)가 없으면 404 페이지로 보냅니다.
  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-950 font-sans antialiased">
      {/* 가이드 상단 네비게이션 */}
      <header className="bg-white border-b border-slate-200 py-6 shadow-sm sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 flex justify-between items-center">
          <a href="https://rupicash.com" className="font-black text-xl text-violet-600">루피머니</a>
          <a href="https://open.kakao.com/o/sl5pstvi" target="_blank" rel="noopener noreferrer" className="bg-amber-400 text-slate-900 font-black text-xs px-4 py-2 rounded-full hover:bg-amber-300 transition-colors">
            1:1 실시간 상담
          </a>
        </div>
      </header>

      {/* 본문 내용 */}
      <main className="max-w-3xl mx-auto px-4 py-12">
        <header className="mb-6 space-y-4">
          <span className="text-xs font-bold text-violet-600 uppercase bg-violet-50 px-2.5 py-1 rounded-md">{post.date}</span>
          <h1 className="text-2xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight">{post.title}</h1>
          <p className="text-slate-500 font-medium text-sm border-l-4 border-violet-500 pl-4 py-1">{post.description}</p>
        </header>

        <article className="bg-white p-6 md:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-6">
          {/* 원고 내용 꽂아넣기 (h2, h3 등의 간격을 위해 prose 패딩 가독성 확보) */}
          <div 
            className="prose prose-slate max-w-none font-medium leading-relaxed text-slate-800 
                       prose-headings:font-black prose-headings:text-slate-900
                       prose-h2:text-xl prose-h2:border-b prose-h2:pb-2 prose-h2:mt-8
                       prose-h3:text-lg prose-h3:mt-6
                       prose-a:text-violet-600 prose-a:font-bold hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />

          <div className="pt-8 border-t border-slate-100">
            <a href="https://open.kakao.com/o/sl5pstvi" target="_blank" rel="noopener noreferrer" className="block w-full bg-slate-950 text-amber-400 font-black py-4 rounded-xl text-center text-base hover:bg-slate-800 shadow-md transition-all transform hover:-translate-y-0.5">
              💬 가이드 읽고 1:1 안전 정산 상담하기
            </a>
          </div>
        </article>
      </main>
    </div>
  );
}