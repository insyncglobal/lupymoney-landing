import "./globals.css";

// 🎯 구글 SEO를 위한 강력한 메타데이터 설정 (Next.js 정석 방식)
export const metadata = {
  title: "루피머니 | 안전한 정보이용료 정산 및 소액결제 정산 가이드",
  description: "안전한 정산 서비스 루피머니. SKT, KT, LGU+ 소액결제 한도 확인, 정책 미납 우회, 정보이용료 정산 서비스를 제공합니다. 24시간 실시간 가이드로 복잡한 절차 없이 즉시 정산을 보장합니다.",
  keywords: ["정보이용료", "정보이용료 정산", "소액결제", "소액결제 정산", "루피머니"],
  robots: "index, follow",
  alternates: {
    canonical: "https://www.rupicash.com/",
  },
  // 🔑 기존 구글 서치콘솔 소유권 인증 키 자동 연동
  verification: {
    google: "zrycyA6ke_pDODAi0WHYR-EknkVn7j8UEf6omtg6JZ4",
  },
  // 📱 링크 공유 시 뜰 오픈그래프(OG) 태그
  openGraph: {
    type: "website",
    title: "루피머니 | 안전한 정보이용료 및 소액결제 정산 가이드",
    description: "소액결제 및 정보이용료 정산 서비스, 24시간 실시간 가이드로 안전하고 신속하게 해결하세요.",
    url: "https://www.rupicash.com/",
    images: [
      {
        url: "https://www.rupicash.com/og-image.png",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className="bg-[#F8FAFC]">
        {children}
      </body>
    </html>
  );
}