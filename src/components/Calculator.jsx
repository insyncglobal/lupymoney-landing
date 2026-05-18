import React from 'react';

export default function Calculator() {
  return (
    <div className="space-y-6">
      
      {/* 💳 1. 상품 안내 섹션 (상하 적층 구조로 변경) */}
      <div className="space-y-4">
        
        {/* 상품 1: 소액결제 */}
        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col gap-3 transition-all hover:border-violet-200 shadow-sm">
          <div className="space-y-2 text-left">
            <div className="flex items-center gap-2">
              {/* whitespace-nowrap으로 '소액결제' 단어가 절대 쪼개지지 않게 고정 */}
              <span className="text-2xl font-black text-slate-900 tracking-tight whitespace-nowrap">소액결제</span>
              <span className="text-xs text-emerald-600 font-black px-2 py-0.5 rounded-md bg-emerald-50 border border-emerald-100 whitespace-nowrap">
                실시간 승인 ✓
              </span>
            </div>
            
            <p className="text-sm text-slate-500 font-bold leading-snug">
              SKT · KT · LGU+ · 알뜰폰 <br /> 
              전 통신사 정책 대응 가능
            </p>
          </div>
          
          {/* 한도 금액을 대응 가능 안내 하단으로 이동 및 강조 */}
          <div className="pt-3 border-t border-slate-200/60 flex justify-between items-end">
            <span className="text-xs text-slate-400 font-bold">최대 정산 한도</span>
            <span className="text-2xl font-black text-indigo-600 tracking-tight">
              1,000,000원
            </span>
          </div>
        </div>

        {/* 상품 2: 정보이용료 */}
        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col gap-3 transition-all hover:border-violet-200 shadow-sm">
          <div className="space-y-2 text-left">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-black text-slate-900 tracking-tight whitespace-nowrap">정보이용료</span>
              <span className="text-xs text-emerald-600 font-black px-2 py-0.5 rounded-md bg-emerald-50 border border-emerald-100 whitespace-nowrap">
                즉시 지급 ✓
              </span>
            </div>
            <p className="text-sm text-slate-500 font-bold leading-snug">
              구글 플레이 스토어 · 앱스토어 <br />
              콘텐츠 결제 전문 상담
            </p>
          </div>
          
          <div className="pt-3 border-t border-slate-200/60 flex justify-between items-end">
            <span className="text-xs text-slate-400 font-bold">최대 정산 한도</span>
            <span className="text-2xl font-black text-indigo-600 tracking-tight">
              1,000,000원
            </span>
          </div>
        </div>

      </div>

      <hr className="border-slate-100" />

      {/* 💰 2. 최종 안내 박스 (줄별 색상 다르게 적용) */}
      <div className="bg-linear-to-br from-slate-900 to-indigo-900 text-white p-7 md:p-9 rounded-3xl space-y-5 relative overflow-hidden shadow-2xl shadow-indigo-900/20 text-center sm:text-left">
        <div className="absolute right-0 bottom-0 w-32 h-32 bg-indigo-500 rounded-full blur-3xl opacity-20 pointer-events-none" />
        
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 relative z-10 border-b border-white/10 pb-3">
          <span className="text-xs font-bold text-indigo-200 uppercase tracking-widest">Processing Guide</span>
          <span className="bg-amber-400 text-slate-900 text-[10px] font-black px-2 py-0.5 rounded animate-pulse">
            24H LIVE
          </span>
        </div>

        <div className="relative z-10 space-y-1">
          {/* 각 줄별 색상 및 크기 차별화 */}
          <h4 className="text-2xl sm:text-3xl font-black tracking-tighter leading-tight italic">
            <span className="block text-white/90 text-xl sm:text-2xl not-italic mb-1">접수 완료 후</span>
            <span className="block text-amber-400 drop-shadow-sm">평균 10분 내</span>
            <span className="block text-indigo-300 font-extrabold">계좌 정산 완료</span>
          </h4>
          
          <p className="pt-3 text-[11px] sm:text-xs text-indigo-100/70 font-medium leading-relaxed">
            최적의 수수료 매칭 시스템을 통해 <br />
            막힘없이 신속한 입금을 보장해 드립니다.
          </p>
        </div>
      </div>

      {/* ⚠️ 3. 하단 캡션 */}
      <div className="bg-slate-100 rounded-xl p-4 border border-slate-200 text-[11px] text-slate-500 leading-relaxed font-bold">
        * 개별 한도는 통신사 정책에 따라 상이할 수 있으며, <br />
        실시간 상담을 통해 가장 정확한 정보를 확인하실 수 있습니다.
      </div>

    </div>
  );
}