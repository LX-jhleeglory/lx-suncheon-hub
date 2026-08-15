import { OSGuide, ServiceItem } from '../types';

export const TARGET_WEBSITE_URL = 'https://lx-suncheon-page.vercel.app/';
export const SUNCHEON_PHONE = '061-804-6377';
export const SUNCHEON_ADDRESS = '전라남도 순천시 팔마로 170 (조곡동) 한국국토정보공사 순천지사';

export const OS_GUIDES: Record<string, OSGuide> = {
  ios: {
    id: 'ios',
    name: 'iPhone / iPad (iOS)',
    browser: '사파리(Safari) 브라우저 권장',
    icon: 'apple',
    badge: 'Apple iOS',
    steps: [
      {
        stepNumber: 1,
        title: 'Safari 하단 중앙 [공유] 버튼 터치',
        description: '사파리(Safari) 브라우저 하단 툴바 가운데에 있는 사각형 위 화살표 아이콘(⎋)을 탭합니다.',
        iconName: 'Share',
        highlightText: '하단 [공유] 아이콘',
      },
      {
        stepNumber: 2,
        title: '메뉴에서 [홈 화면에 추가] 선택',
        description: '공유 옵션 시트를 위로 올려 [홈 화면에 추가 ➕] 항목을 찾아 선택합니다.',
        iconName: 'PlusSquare',
        highlightText: '[홈 화면에 추가]',
      },
      {
        stepNumber: 3,
        title: '우측 상단 [추가] 누르면 완료',
        description: '화면 오른쪽 상단의 [추가]를 누르면 스마트폰 바탕화면에 LX 순천지사 아이콘이 생성됩니다.',
        iconName: 'CheckCircle2',
        highlightText: '우측 상단 [추가]',
      },
    ],
    tip: '💡 카카오톡이나 네이버 앱 내에서 접속하신 경우, 우측 하단 점 세 개(...) ➔ [다른 브라우저로 열기(Safari)]를 선택하신 후 추가해주세요.',
  },
  android_chrome: {
    id: 'android_chrome',
    name: 'Android (Chrome 브라우저)',
    browser: '구글 크롬(Chrome) 브라우저',
    icon: 'chrome',
    badge: 'Android Chrome',
    steps: [
      {
        stepNumber: 1,
        title: 'Chrome 우측 상단 [더보기(⋮)] 메뉴 터치',
        description: '크롬 브라우저 오른쪽 상단에 위치한 세로 점 3개(⋮) 버튼을 누릅니다.',
        iconName: 'MoreVertical',
        highlightText: '상단 메뉴 [⋮]',
      },
      {
        stepNumber: 2,
        title: '[홈 화면에 추가] 또는 [앱 설치] 선택',
        description: '펼쳐진 메뉴에서 [홈 화면에 추가] 또는 [앱 설치 / 바로가기 만들기]를 탭합니다.',
        iconName: 'DownloadCloud',
        highlightText: '[홈 화면에 추가]',
      },
      {
        stepNumber: 3,
        title: '팝업에서 [추가 / 설치] 확인',
        description: '확인 창에서 [추가]를 누르면 스마트폰 홈 화면에 전용 바로가기 아이콘이 등록됩니다.',
        iconName: 'CheckCircle2',
        highlightText: '[설치/추가]',
      },
    ],
    tip: '💡 홈 화면 아이콘을 누르면 주소창 없이 앱처럼 시원하고 넓은 전체화면으로 이용하실 수 있습니다.',
  },
  android_samsung: {
    id: 'android_samsung',
    name: '삼성 갤럭시 (Samsung Internet)',
    browser: '삼성 인터넷 브라우저',
    icon: 'smartphone',
    badge: 'Samsung Galaxy',
    steps: [
      {
        stepNumber: 1,
        title: '브라우저 하단 우측 [메뉴(≡)] 터치',
        description: '삼성 인터넷 화면 하단 우측의 가로줄 3개(≡) 아이콘을 탭합니다.',
        iconName: 'Menu',
        highlightText: '하단 메뉴 [≡]',
      },
      {
        stepNumber: 2,
        title: '[현재 페이지 추가] ➔ [홈 화면] 선택',
        description: '메뉴 중 [현재 페이지 추가]를 누른 뒤 나오는 목록에서 [홈 화면]을 선택합니다.',
        iconName: 'PlusCircle',
        highlightText: '[현재 페이지 추가 ➔ 홈 화면]',
      },
      {
        stepNumber: 3,
        title: '우측 상단 [추가] 누르면 완료',
        description: '팝업에서 [추가]를 누르면 갤럭시 스마트폰 홈 화면에 바로가기가 생성됩니다.',
        iconName: 'CheckCircle2',
        highlightText: '[추가]',
      },
    ],
    tip: '💡 바탕화면에 생성된 아이콘을 길게 누르면 원하는 위치로 자유롭게 이동시킬 수 있습니다.',
  },
  desktop: {
    id: 'desktop',
    name: 'PC / 데스크톱 브라우저',
    browser: 'Chrome / Edge / Safari',
    icon: 'monitor',
    badge: 'Desktop PC',
    steps: [
      {
        stepNumber: 1,
        title: '주소창 우측 [설치 ⊕] 아이콘 클릭',
        description: 'Chrome 또는 Edge 브라우저 주소창 우측의 [앱 설치] 또는 [바로가기 만들기] 아이콘을 누릅니다.',
        iconName: 'Computer',
        highlightText: '주소창 우측 [⊕]',
      },
      {
        stepNumber: 2,
        title: '또는 즐겨찾기(북마크) 등록 [Ctrl + D]',
        description: '키보드에서 Ctrl + D (Mac은 Cmd + D)를 눌러 북마크바에 등록해두시면 언제든 빠르게 접속 가능합니다.',
        iconName: 'Bookmark',
        highlightText: '단축키 [Ctrl + D]',
      },
      {
        stepNumber: 3,
        title: '스마트폰으로 이용하려면 QR코드 스캔',
        description: '화면 상단의 [QR코드] 버튼을 눌러 스마트폰 카메라로 비추면 모바일로 바로 이동합니다.',
        iconName: 'QrCode',
        highlightText: '스마트폰 카메라 스캔',
      },
    ],
    tip: '💡 모바일 환경에서 가장 최적화된 화면을 제공하므로 스마트폰으로 접속하시는 것을 권장합니다.',
  },
};

export const QUICK_SERVICES: ServiceItem[] = [
  {
    id: 'boundary',
    title: '경계복원측량',
    category: '가장 많이 찾는 민원',
    description: '내 땅의 정확한 경계를 확인하고 담장 설치, 토지 매매, 건축 시 분쟁을 방지합니다.',
    icon: 'MapPin',
  },
  {
    id: 'division',
    title: '분할 / 등록전환',
    category: '토지 형질변경·매매',
    description: '1필지 토지를 2필지 이상으로 나누거나 임야대장에서 토지대장으로 등록을 전환합니다.',
    icon: 'Layers',
  },
  {
    id: 'status',
    title: '지적현황측량',
    category: '건축물 및 시설물',
    description: '지상 구조물이나 건축물의 위치가 지적도면 상 어느 위치에 점유하고 있는지 확인합니다.',
    icon: 'Building2',
  },
  {
    id: 'consult',
    title: '지사 방문 및 유선 상담',
    category: '전문 상담원 연결',
    description: '순천지사 공인 측량 전문가와 지적민원 사전 상담 및 수수료 견적을 안내받으실 수 있습니다.',
    icon: 'PhoneCall',
  },
];
