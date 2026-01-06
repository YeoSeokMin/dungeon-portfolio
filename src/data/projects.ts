import { Project, DungeonNode } from "@/types/project";

export const projects: Project[] = [
  {
    id: "sanghyun",
    name: "상현컴퍼니",
    period: "2020.05 ~ 2023.05",
    duration: "3년 1개월",
    type: "company",
    summary: "소셜 매칭 웹앱 프론트엔드 개발",
    role: "IT개발팀 사원",
    techStack: ["HTML5", "CSS3", "JavaScript", "React.js", "Axios", "Figma", "REST API", "PWA", "WebView"],
    highlights: [
      "Figma 기반 UI/UX 시안 → 반응형 UI 구현",
      "React.js 기반 SPA 구축",
      "REST API 연동 (인증, 프로필, 매칭)",
      "iOS/Android PWA 배포",
      "Lighthouse 기반 성능 최적화"
    ],
    hasArchitecture: false
  },
  {
    id: "dental",
    name: "덴탈비서",
    period: "2024.01 ~ 2024.03",
    duration: "3개월",
    type: "company",
    summary: "치과 예약 관리 CRM 시스템 유지보수",
    role: "개발팀 인턴",
    techStack: ["PHP", "MySQL", "JavaScript", "jQuery"],
    highlights: [
      "치과 예약/환자 정보 CRM 유지보수",
      "기존 PHP 코드 분석 및 오류 수정",
      "프론트엔드 UI 개선 (jQuery)",
      "백엔드 개발자와 협업"
    ],
    hasArchitecture: false
  },
  {
    id: "wisecare",
    name: "와이즈케어",
    period: "2024.03 ~ 2024.06",
    duration: "4개월",
    type: "company",
    summary: "PG 결제 시스템 유지보수 및 기능 개발",
    role: "개발팀 사원",
    techStack: ["REST API", "MySQL", "JavaScript", "jQuery"],
    highlights: [
      "PG 결제 시스템 유지보수",
      "카드/간편결제 승인·취소·콜백 처리",
      "외부 PG사 API 연동 (KG이니시스, 토스페이먼츠)",
      "결제 장애 대응 및 모니터링"
    ],
    hasArchitecture: false
  },
  {
    id: "twave",
    name: "TwaveSMS",
    period: "2024.05 ~ 2025.05",
    duration: "1년 1개월",
    type: "company",
    summary: "대량 SMS 발송 플랫폼 및 관리자 콘솔 개발",
    role: "프리랜서 개발자",
    techStack: ["Next.js", "React", "Tailwind CSS", "SQLite", "NextAuth", "JWT"],
    highlights: [
      "대량 SMS 발송 및 결과 실시간 조회",
      "단축 URL 생성 및 클릭 통계",
      "NextAuth + JWT 기반 인증",
      "관리자 콘솔 (사용자, API 키, 잔액)",
      "App Router 기반 SSR/CSR 혼합"
    ],
    hasArchitecture: false
  },
  {
    id: "casebid",
    name: "CaseBid",
    period: "2024년 말",
    duration: "개인 프로젝트",
    type: "personal",
    summary: "탐정(사적 수사기관)과 의뢰인을 연결하는 실시간 사건 입찰 플랫폼",
    role: "풀스택 개발",
    techStack: {
      frontend: ["React 19", "TypeScript", "Vite 7", "Material-UI 7", "Redux Toolkit", "Socket.IO Client"],
      backend: ["Node.js 20", "Express 5", "Socket.IO 4", "Passport.js", "JWT"],
      database: ["MongoDB 8", "Mongoose ODM"],
      infra: ["토스페이먼츠 결제"]
    },
    highlights: [
      "사건 등록 → 다수 탐정 입찰 → 의뢰인 선택",
      "Socket.IO 실시간 채팅 (타이핑 표시, 읽음 상태)",
      "토스페이먼츠 결제 연동 (계약금/잔금 분할)",
      "RBAC 권한 관리 (의뢰인/탐정/관리자)",
      "15가지 실시간 알림 타입"
    ],
    hasArchitecture: true,
    architecture: {
      client: "React SPA, MUI 컴포넌트, Redux 상태관리, Vite 번들링",
      server: "Express REST API + Socket.IO 서버 (단일 포트 5001)",
      database: "MongoDB (11개 컬렉션: User, Case, Bid, Payment, ChatRoom, Message, Notification 등)",
      auth: "JWT (Access 24h + Refresh 7d), bcryptjs 해싱 (saltRounds: 12), Passport.js",
      deploy: "로컬 개발, MongoDB Atlas 지원 준비",
      special: [
        "사건 상태 머신 (draft → active → in_progress → completed/cancelled)",
        "입찰 유니크 제약 (탐정당 사건별 1회)",
        "지리적 검색 (2dsphere 인덱스)",
        "파일 업로드 (10MB, 5개 제한)"
      ]
    },
    githubUrl: "https://github.com/YeoSeokMin/CaseBid"
  },
  {
    id: "dailyapp",
    name: "DailyApp",
    period: "2024년 말 ~ 2025년 초",
    duration: "개인 프로젝트",
    type: "personal",
    summary: "iOS/Android 신규 앱을 자동 수집하고 Claude AI로 분석하여 매일 인사이트 제공",
    role: "풀스택 개발",
    techStack: {
      frontend: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Pusher.js"],
      backend: ["Next.js API Routes", "Node.js", "Anthropic SDK (Claude AI)"],
      database: ["Vercel KV (Redis)", "Vercel Blob"],
      infra: ["Vercel", "Pusher (WebSocket)", "Kakao Talk API"]
    },
    highlights: [
      "일일 자동 앱 수집 파이프라인 (iOS/Android)",
      "Claude AI 기반 8가지 지표 앱 분석",
      "Pusher 실시간 익명 채팅",
      "0.1% 확률 룰렛 광고 시스템",
      "카카오톡 일일 리포트 알림"
    ],
    hasArchitecture: true,
    architecture: {
      client: "Next.js App Router, ISR (60초 재검증), 레트로 픽셀 UI",
      server: "Next.js API Routes (Serverless), Node.js 스크립트 (수집/분석)",
      database: "Vercel KV (채팅, 룰렛 상태), Vercel Blob (광고 이미지)",
      auth: "IP 해시 기반 접근 제어 (SHA256, 익명성 보호)",
      deploy: "Vercel (프로덕션)",
      special: [
        "createPortal로 룰렛 모달 구현 (z-index 충돌 방지)",
        "채팅 이중화 (Pusher + 폴링 백업)",
        "Claude AI 프롬프트 엔지니어링 (구조화된 JSON)",
        "중복 분석 방지 (최근 7일 리포트 앱 제외)"
      ]
    },
    liveUrl: "https://web-ten-delta-23.vercel.app"
  },
  {
    id: "autokakao",
    name: "AutoKakaoTalk",
    period: "2025년 초",
    duration: "개인 프로젝트",
    type: "personal",
    summary: "로컬 LLM + LoRA 파인튜닝으로 사용자 말투를 학습하는 AI 카카오톡 자동응답 봇",
    role: "풀스택 개발 + AI/ML",
    techStack: {
      frontend: ["CustomTkinter (Python GUI)", "Electron"],
      backend: ["Python 3.12", "Win32 API", "Ollama"],
      ai: ["EXAONE 3.5 7.8B", "LoRA (PEFT, TRL)", "OpenAI API (대체)"],
      database: ["SQLite", "JSONL"],
      infra: ["PyInstaller", "Hugging Face Hub", "Windows 전용"]
    },
    highlights: [
      "Ollama + EXAONE 3.5 로컬 LLM (API 비용 제로)",
      "LoRA 파인튜닝으로 개인 말투 학습",
      "8가지 감정 분석 (70개+ 정규표현식)",
      "Win32 API 백그라운드 메시지 읽기/전송",
      "멀티스레드 다중 채팅방 동시 모니터링"
    ],
    hasArchitecture: true,
    architecture: {
      client: "CustomTkinter 다크 테마 GUI (900x550), 실시간 통계 패널",
      server: "Ollama (localhost:11434) + EXAONE 3.5 7.8B",
      database: "SQLite (대화 로그), JSON (좌표 설정)",
      auth: "로컬 실행 (인증 불필요)",
      deploy: "Windows 전용, PyInstaller EXE, Hugging Face Hub (LoRA)",
      special: [
        "로컬 LLM으로 API 비용 제로",
        "LoRA 파인튜닝으로 개인 말투 재현",
        "감정 분석기로 상황별 톤 자동 조절",
        "100개+ Few-shot 프롬프트",
        "익명/판타지/DC 모드 지원"
      ]
    }
  },
  {
    id: "ddugddag",
    name: "뚝딱",
    period: "2025.09 ~ 현재",
    duration: "진행중",
    type: "company",
    summary: "의료기관 전용 문서 관리, 전자결재, QR 점검, 근무표 관리 통합 시스템",
    role: "풀스택 개발자 (커밋 51개, 15%)",
    techStack: ["React 18", "Vite", "Material-UI", "Node.js", "Koa", "PostgreSQL", "Docker", "Nginx"],
    highlights: [
      "근무표 시스템 (D/E/N/S 집계, 자동 서명)",
      "문서 버전별 자동 수식 계산",
      "HWP → PDF 변환 (들여쓰기 보존)",
      "QR 점검 시스템 (온도/습도 소수점)",
      "전자결재 UI/UX 개선"
    ],
    hasArchitecture: false
  }
];

export const dungeonNodes: DungeonNode[] = [
  {
    id: "entrance",
    project: null,
    position: { x: 10, y: 20 },
    icon: "fa-door-open",
    label: "입구",
    connections: ["sanghyun"],
    type: "entrance"
  },
  {
    id: "sanghyun",
    project: projects.find(p => p.id === "sanghyun")!,
    position: { x: 25, y: 20 },
    icon: "fa-building",
    label: "상현컴퍼니",
    connections: ["entrance", "dental"],
    type: "company"
  },
  {
    id: "dental",
    project: projects.find(p => p.id === "dental")!,
    position: { x: 40, y: 20 },
    icon: "fa-tooth",
    label: "덴탈비서",
    connections: ["sanghyun", "wisecare"],
    type: "company"
  },
  {
    id: "wisecare",
    project: projects.find(p => p.id === "wisecare")!,
    position: { x: 55, y: 20 },
    icon: "fa-credit-card",
    label: "와이즈케어",
    connections: ["dental", "twave"],
    type: "company"
  },
  {
    id: "twave",
    project: projects.find(p => p.id === "twave")!,
    position: { x: 70, y: 35 },
    icon: "fa-comment-sms",
    label: "TwaveSMS",
    connections: ["wisecare", "casebid"],
    type: "company"
  },
  {
    id: "casebid",
    project: projects.find(p => p.id === "casebid")!,
    position: { x: 55, y: 50 },
    icon: "fa-gavel",
    label: "CaseBid",
    connections: ["twave", "dailyapp"],
    type: "personal"
  },
  {
    id: "dailyapp",
    project: projects.find(p => p.id === "dailyapp")!,
    position: { x: 40, y: 65 },
    icon: "fa-mobile-screen",
    label: "DailyApp",
    connections: ["casebid", "autokakao"],
    type: "personal"
  },
  {
    id: "autokakao",
    project: projects.find(p => p.id === "autokakao")!,
    position: { x: 25, y: 65 },
    icon: "fa-robot",
    label: "AutoKakao",
    connections: ["dailyapp", "ddugddag"],
    type: "personal"
  },
  {
    id: "ddugddag",
    project: projects.find(p => p.id === "ddugddag")!,
    position: { x: 10, y: 50 },
    icon: "fa-hospital",
    label: "뚝딱",
    connections: ["autokakao", "boss"],
    type: "company"
  },
  {
    id: "boss",
    project: null,
    position: { x: 10, y: 80 },
    icon: "fa-question",
    label: "???",
    connections: ["ddugddag"],
    type: "boss"
  }
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(p => p.id === id);
};

export const getNodeById = (id: string): DungeonNode | undefined => {
  return dungeonNodes.find(n => n.id === id);
};
