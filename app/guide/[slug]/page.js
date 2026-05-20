import { GUIDE_POSTS } from '../../data/posts';
import { notFound } from 'next/navigation';

// 🎯 1. 상단 타이틀용 SEO 설정 (최신 규격에 맞게 await params 추가)
export async function generateMetadata({ params }) {
  const { slug } = await params; // 👈 주소창 읽을 때까지 기다려주는 코드 추가
  const post = GUIDE_POSTS.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: `${post.title} | 루피머니 가이드`,
    description: post.description,
    alternates: {
      canonical: `https://rupicash.com/guide/${post.slug}`,
    }
  };
}

// 🎯 2. 빌드 시 정적 HTML 미리 굽는 함수 (그대로 유지)
export async function generateStaticParams() {
  return GUIDE_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

// 🎯 3. 본문 화면 그리기 (최신 규격에 맞게 async / await params 추가)
export default async function GuideDetailPage({ params }) {
  const { slug } = await params; // 👈 여기서도 기다려(await) 줍니다!
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
          <a href="https://open.kakao.com/o/sl5pstvi" target="_blank" rel="noopener noreferrer" className="bg-amber-400 text-slate-900 font-black text-xs px-4 py-2 rounded-full">
            1:1 실시간 상담
          </a>
        </div>
      </header>

      {/* 본문 내용 */}
      <main className="max-w-3xl mx-auto px-4 py-12">
        <article className="bg-white p-6 md:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-6">
          <span className="text-xs font-bold text-violet-600 uppercase bg-violet-50 px-2.5 py-1 rounded-md">{post.date}</span>
          <h1 className="text-2xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight">{post.title}</h1>
          <p className="text-slate-500 font-medium text-sm border-l-4 border-violet-500 pl-4 py-1">{post.description}</p>
          
          <hr className="border-slate-100" />

          {/* 원고 내용 꽂아넣기 */}
          <div 
            className="prose prose-slate max-w-none font-medium leading-relaxed text-slate-800 space-y-4"
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />

          <div className="pt-8">
            <a href="https://open.kakao.com/o/sl5pstvi" target="_blank" rel="noopener noreferrer" className="block w-full bg-slate-950 text-amber-400 font-black py-4 rounded-xl text-center text-base hover:bg-slate-800 shadow-md">
              💬 가이드 읽고 1:1 안전 정산 상담하기
            </a>
          </div>
        </article>
      </main>
    </div>
  );
}