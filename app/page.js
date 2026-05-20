// app/page.js
import HomeClient from "./HomeClient";

// 🎯 구글 로봇은 여기서 메타데이터를 안전하게 읽어갑니다 (서버 컴포넌트)
export const metadata = {
  title: '루피머니 | 정보이용료 및 소액결제 안전 정산 센터',
  description: '연체·미납·정책 거절 상황도 3분 내 신속 해결. 업계 최적화된 조건으로 24시간 안전 정산을 지원하는 루피머니 공식 가이드 센터입니다.',
  alternates: {
    canonical: 'https://rupicash.com',
  },
};

export default function HomePage() {
  // 🎯 실제 화면과 실시간 계산기 기능은 방금 만든 HomeClient에 넘겨줍니다
  return <HomeClient />;
}