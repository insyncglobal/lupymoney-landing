import React, { useState, useEffect } from 'react';
import Calculator from './components/Calculator';
import { FAQS } from './constants/data';

// 🌐 [중요] 여기에 실제 연결하실 주소와 전화번호를 입력하세요!
const LINK_CONFIG = {
  kakaoTalk: 'https://open.kakao.com/o/sl5pstvi', // 카카오톡 채널 또는 오픈채팅 주소
  phoneNumber: 'tel:010-2156-9337',       // 실제 전화번호 (tel: 프로토콜 유지)
  domainHome: 'https://rupicash.com',    // 연결할 메인 홈페이지 도메인 주소
};

export default function App() {
  // 📱 실시간 라이브 피드 데이터 관리용 State
  const [feeds, setFeeds] = useState([
    { id: 1, name: '강*기', type: '소액결제', amount: '530000원', time: '방금 전' },
    { id: 2, name: '최*준', type: '소액결제', amount: '680000원', time: '5분 전' },
    { id: 3, name: '최*아', type: '정보이용료', amount: '450000원', time: '9분 전' },
    { id: 4, name: '임*윤', type: '소액결제', amount: '720000원', time: '13분 전' },
  ]);

  useEffect(() => {
    const familyNames = ['김', '이', '박', '최', '정', '강', '조', '윤', '장', '임'];
    const lastNames = ['우', '현', '성', '아', '준', '윤', '훈', '기', '호', '진'];
    const types = ['소액결제', '정보이용료'];
    
    const getRandomAmount = () => {
      const min = 10; const max = 90;
      const randomValue = Math.floor(Math.random() * (max - min + 1) + min) * 10000;
      return `${randomValue}원`;
    };

    let timerId;

    const runRollingFeed = () => {
      const randomName = `${familyNames[Math.floor(Math.random() * familyNames.length)]}*${lastNames[Math.floor(Math.random() * lastNames.length)]}`;
      const randomType = types[Math.floor(Math.random() * types.length)];
      const randomAmount = getRandomAmount();

      setFeeds((prevFeeds) => {
        const updatedPrev = prevFeeds.map((feed, index) => {
          if (index === 0) return { ...feed, time: `${Math.floor(Math.random() * 3) + 5}분 전` };
          if (index === 1) return { ...feed, time: `${Math.floor(Math.random() * 3) + 8}분 전` };
          if (index === 2) return { ...feed, time: `${Math.floor(Math.random() * 4) + 11}분 전` };
          return { ...feed, time: '15분 전' };
        });

        return [{ id: Date.now(), name: randomName, type: randomType, amount: randomAmount, time: '방금 전' }, ...updatedPrev].slice(0, 4);
      });

      const nextInterval = Math.floor(Math.random() * (180000 - 60000 + 1) + 60000);
      timerId = setTimeout(runRollingFeed, nextInterval);
    };

    const firstInterval = Math.floor(Math.random() * (180000 - 60000 + 1) + 60000);
    timerId = setTimeout(runRollingFeed, firstInterval);

    return () => clearTimeout(timerId);
  }, []);

  return (
    <div className="min-h-screen bg-[#F3F4F6] text-slate-900 font-sans antialiased flex flex-col">

      {/* 📱 헤더 */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto flex justify-between items-center h-16 px-4 md:px-8">
          {/* 도메인 연결: 로고 클릭 시 메인 홈으로 이동 */}
          <a 
            href={LINK_CONFIG.domainHome} 
            className="font-black text-xl md:text-2xl text-violet-600 tracking-tight hover:opacity-80 transition-opacity"
          >
            루피머니
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm font-bold text-slate-600">
            <a href="#calculator" className="hover:text-violet-600">수수료 안내</a>
            <a href="#features" className="hover:text-violet-600">진행절차</a>
            <a href="#proof" className="hover:text-violet-600">진행후기</a>
            <a href="#faq" className="hover:text-violet-600">자주묻는질문</a>
          </nav>
          {/* 카카오톡 연결: 헤더 우측 바로연결 버튼 */}
          <a 
            href={LINK_CONFIG.kakaoTalk}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-amber-400 text-slate-900 font-black text-xs md:text-sm px-5 py-2.5 rounded-full hover:bg-amber-300 transition-all shadow-md transform hover:scale-105"
          >
            상담원 바로연결
          </a>
        </div>
      </header>

      <main className="flex-grow">

        {/* 🔥 히어로 섹션 */}
        <section className="bg-gradient-to-br from-violet-600 via-indigo-700 to-slate-900 text-white py-12 md:py-20 px-4 md:px-8 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-violet-500 rounded-full blur-3xl opacity-20 pointer-events-none -mr-40 -mt-20" />
          
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* 좌측 카피 */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
              <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-sm">
                ⚡ 24시간 실시간 상담 운영중
              </span>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-[1.25] tracking-tight">
                급한 자금, 안전하게 해결<br />
                <span className="bg-gradient-to-r from-yellow-300 to-amber-400 bg-clip-text text-transparent underline decoration-amber-400 decoration-wavy underline-offset-8">
                  소액결제 정산 서비스
                </span>
              </h1>

              <p className="text-sm md:text-base text-violet-100 font-medium leading-relaxed max-w-lg mx-auto lg:mx-0">
                서류 없이, 한 번에 확인하실 건 본인 계좌에 입금되는 금액뿐.
              </p>

              <ul className="space-y-3 text-sm font-semibold max-w-sm mx-auto lg:mx-0 text-left bg-white/5 p-4 rounded-xl border border-white/10 backdrop-blur-sm">
                {[
                  '미납·연체·정책 상황도 바로 해결 지원',
                  '입금까지 전과정 안전하게 완료',
                  '업계 최적화된 조건으로 신속 정산',
                  '개인정보 100% 비밀 보장 및 기록 즉시 삭제'
                ].map(item => (
                  <li key={item} className="flex gap-2.5 items-center">
                    <span className="bg-amber-400 text-slate-900 w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* 메인 비주얼 내 실시간 상담 연동 링크 스팟 */}
              <div className="grid grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0 pt-2">
                {/* 메인 카카오톡 채팅상담 */}
                <a
                  href={LINK_CONFIG.kakaoTalk}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-amber-400 text-slate-900 font-black py-4 px-4 rounded-xl text-center text-sm md:text-base shadow-lg hover:bg-amber-300 transition-all transform hover:-translate-y-0.5"
                >
                  💬 채팅상담 바로가기
                </a>
                {/* 메인 전화상담 걸기 */}
                <a
                  href={LINK_CONFIG.phoneNumber}
                  className="bg-slate-900 text-white font-black py-4 px-4 rounded-xl text-center text-sm md:text-base shadow-lg border border-slate-800 hover:bg-slate-800 transition-all transform hover:-translate-y-0.5"
                >
                  📞 전화상담 바로가기
                </a>
              </div>
              <p className="text-xs text-violet-200/70 text-center lg:text-left">* 신용등급에 영향 없음</p>
            </div>

            {/* 우측 계산기 */}
            <div id="calculator" className="lg:col-span-6 w-full max-w-md mx-auto">
              <div className="bg-white text-slate-900 p-6 md:p-8 rounded-3xl shadow-2xl border border-slate-100 relative">
                <div className="absolute -top-3 -right-3 bg-emerald-500 text-white text-xs font-bold px-3 py-1.5 rounded-xl shadow-md animate-bounce">
                  ✓ 즉시 승인 성공!
                </div>
                
                <div className="border-b border-slate-100 pb-4 mb-6">
                  <span className="text-xs font-bold text-violet-600 block mb-1">PRODUCT GUIDE</span>
                  <h3 className="text-lg font-black text-slate-900">한도별 실시간 예측 계산기</h3>
                </div>

                <Calculator />
              </div>
            </div>

          </div>
        </section>

        {/* ✨ 서비스 특징 */}
        <section id="features" className="max-w-4xl mx-auto px-4 md:px-8 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { icon: '🕒', title: '24시 연중무휴 실시간 상담', desc: '늦은 밤, 새벽, 주말, 공휴일 언제나 <br />지연 없이 즉시 전문 상담원이 배정되어 <br />맞춤형 가이드를 제공합니다.' },
              { icon: '⚡', title: '접수 후 3분 신속 정산', desc: '불필요한 서류나 복잡한 대기 단계 없이 <br />상담 및 접수 완료 즉시 <br />본인 명의 계좌로 즉시 입금됩니다.' },
              { icon: '🛡️', title: '한도 정책 및 미납 우회 해결', desc: '통신사 거절 코드나 결제 정책 제한 등 <br />개인별 차단 상황을 분석하여 <br />가장 안전하고 신속한 우회 루트를 제안합니다.' },
              { icon: '🔒', title: '개인정보 100% 즉시 파기', desc: '상담 시 접수된 모든 민감 정보와 <br />기록은 정산 완료 즉시 시스템에서 <br />안전하게 자동 영구 삭제됩니다.' }
            ].map(item => (
              <div key={item.title} className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm flex flex-col justify-between text-left gap-4 transition-all hover:shadow-md hover:border-violet-200">
                <div className="w-14 h-14 bg-violet-50 rounded-2xl flex items-center justify-center text-3xl border border-violet-100/50 shadow-sm">
                  {item.icon}
                </div>
                <div className="space-y-2">
                  <h4 className="font-black text-lg md:text-xl text-slate-900 tracking-tight whitespace-nowrap">
                    {item.title}
                  </h4>
                  <p 
                    className="text-sm text-slate-500 font-bold leading-relaxed whitespace-pre-line" 
                    dangerouslySetInnerHTML={{ __html: item.desc }} 
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 📸 실제 처리 예시 내역 */}
        <section id="proof" className="bg-slate-100 py-20 px-4 md:px-8 text-center space-y-8">
          <div className="max-w-3xl mx-auto space-y-3">
            <span className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-xs font-black px-3 py-1.5 rounded-md tracking-wider uppercase">
              Real-Time Settlement Proof
            </span>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              실시간 계좌 입금 및 처리 내역
            </h2>
            <p className="text-sm text-slate-500 font-bold max-w-md mx-auto leading-relaxed">
              고객 만족도 1위, 투명하게 공개되는 <br />
              실제 은행 정산 완료 스크린샷입니다.
            </p>
          </div>

          <div className="max-w-md mx-auto bg-slate-950 p-2 sm:p-3 rounded-[2.5rem] shadow-2xl border-4 border-slate-800 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-4 bg-slate-800 rounded-b-xl z-10 hidden sm:block" />
            <img
              src="/images/proof.jpg"
              alt="실제 은행 입금 완료 및 카카오톡 상담 캡처 증빙"
              className="rounded-[2rem] w-full object-cover shadow-inner bg-white min-h-[400px]"
            />
          </div>

          {/* 🔥 라이브 피드 */}
          <div className="max-w-2xl mx-auto bg-white border-2 border-slate-200 rounded-3xl p-6 md:p-8 shadow-md space-y-4 text-left">
            <div className="flex justify-between items-center px-1 border-b border-slate-100 pb-3">
              <div className="text-sm font-black text-slate-400 uppercase tracking-wider">Live Feed</div>
              <span className="inline-flex items-center gap-2 text-sm text-emerald-600 font-black">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                실시간 정상 작동중
              </span>
            </div>

            <div className="divide-y divide-slate-100 font-black text-slate-700">
              {feeds.map((feed) => (
                <div key={feed.id} className="py-5 flex flex-row justify-between items-center px-2 transition-all duration-300">
                  
                  {/* 왼쪽 칸: 고객명 및 타입 정보 */}
                  <div className="flex-grow text-slate-900 text-base md:text-lg font-black tracking-tight truncate pr-2">
                    {feed.name} 고객님 <span className="text-xs md:text-sm text-slate-400 font-bold ml-1.5">({feed.type})</span>
                  </div>
                  
                  {/* 오른쪽 칸: 우측 고정 영역 확보 */}
                  <div className="flex items-center justify-end gap-5 min-w-[220px] sm:min-w-[270px] shrink-0">
                    
                    {/* 금액 노출 */}
                    <span className="text-rose-600 text-xl md:text-2xl font-black tracking-tight text-right flex-grow pr-1">
                      {feed.amount}
                    </span>
                    
                    {/* 입금 완료 박스 */}
                    <span className="text-emerald-600 bg-emerald-50 text-xs md:text-sm px-3.5 py-1.5 rounded-xl font-black text-center leading-tight min-w-[95px] sm:min-w-[105px] shrink-0 block">
                      입금완료
                      <span className="block text-[10px] md:text-xs font-bold text-emerald-500/90 mt-0.5">
                        ({feed.time})
                      </span>
                    </span>

                  </div>

                </div>
              ))}
            </div>
          </div>

          <div className="pt-2">
            <p className="text-sm font-black text-violet-600 bg-white inline-block px-6 py-2.5 rounded-xl border border-slate-200 shadow-sm">
              ⚡ 모든 정보는 철저한 모자이크 처리 후 안전하게 예시로만 활용됩니다.
            </p>
          </div>
        </section>

        {/* ❓ 자주 묻는 질문 (FAQ) */}
        <section id="faq" className="max-w-4xl mx-auto px-4 md:px-8 py-16">
          <div className="bg-white p-6 md:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-xl font-black text-slate-900 border-b border-slate-100 pb-4">자주 묻는 질문 (FAQ)</h2>

            <div className="divide-y divide-slate-100">
              {FAQS.map((faq, i) => (
                <div key={i} className="py-4 first:pt-0 last:pb-0 space-y-1.5">
                  <p className="font-black text-slate-900 text-sm md:text-base flex gap-2">
                    <span className="text-violet-600">Q.</span> {faq.q}
                  </p>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-5">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 🚀 하단 대형 카카오톡 플로팅 배너 CTA */}
        <section className="max-w-5xl mx-auto px-4 md:px-8 pb-16">
          <a
            href={LINK_CONFIG.kakaoTalk}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-slate-900 text-amber-400 font-black py-5 rounded-2xl text-center text-base md:text-lg hover:bg-slate-800 shadow-xl transition-all"
          >
            💬 지금 즉시 1:1 맞춤 상담 연결하기
          </a>
        </section>

      </main>

      {/* 🏢 푸터 */}
      <footer className="bg-white border-t border-slate-200 py-10 px-4 md:px-8 text-xs text-slate-500">
        <div className="max-w-5xl mx-auto space-y-4">
          <p className="font-bold text-slate-800 text-center">[이용자 권익 보호 조항]</p>
          <p className="font-semibold text-center">서비스명: 루피머니 정산 가이드 센터 | 24시간 정상 운영</p>
          
          <p className="leading-relaxed text-slate-400 text-justify md:text-center pt-2">
            본 서비스는 이용자의 자산 확인 및 정산 가이드 절차를 돕는 안내 채널입니다. 불법 금융 유도 및 명의 도용 거래는 필터링 시스템에 의해 차단 및 관계기관에 즉시 통보됩니다.
          </p>
          {/* 도메인 연결: 카피라이트 영역 클릭 시 메인 홈 연결 */}
          <p className="text-slate-300 border-t pt-4 text-center">
            © <a href={LINK_CONFIG.domainHome} className="hover:underline">{new URL(LINK_CONFIG.domainHome).hostname}</a>. All rights reserved.
          </p>
        </div>
      </footer>

    </div>
  );
}