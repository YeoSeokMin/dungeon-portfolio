"use client";

import { Architecture } from "@/types/project";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDesktop,
  faServer,
  faDatabase,
  faCloud,
  faArrowRight,
  faArrowDown,
  faExchangeAlt,
  faCogs,
  faRobot,
  faComments,
  faMobileAlt,
  faGears,
  faNewspaper,
  faFilter,
  faChartLine,
  faPenFancy,
  faClock,
  faBell,
  faRss,
  faCode,
  faGavel,
  faUsers,
  faCreditCard,
  faShieldAlt,
  faFileAlt,
  faSearch,
  faBrain,
  faKeyboard,
  faMessage,
  faHeart,
  faWandMagicSparkles,
  faWindowMaximize,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faReddit, faTwitter, faDiscord, faPython, faWindows } from "@fortawesome/free-brands-svg-icons";

interface ArchitectureDiagramProps {
  projectId: string;
  architecture: Architecture;
}

// DailyApp 전용 아키텍처 다이어그램
const DailyAppArchitecture = () => {
  return (
    <div className="bg-black/40 rounded-lg p-4 mb-4 overflow-x-auto">
      <div className="min-w-[600px]">
        {/* 1층: Client - Server - Database */}
        <div className="flex items-center justify-center gap-3 mb-4">
          {/* Client */}
          <div className="bg-blue-900/50 border border-blue-500 rounded-lg p-3 w-[140px]">
            <FontAwesomeIcon icon={faDesktop} className="text-xl text-blue-400 mb-1" />
            <div className="text-blue-400 font-bold text-xs">Client</div>
            <div className="text-gray-400 text-[10px] mt-1">Next.js App Router</div>
            <div className="text-gray-500 text-[10px]">(ISR 60초)</div>
          </div>

          <FontAwesomeIcon icon={faExchangeAlt} className="text-yellow-500" />

          {/* Server */}
          <div className="bg-green-900/50 border border-green-500 rounded-lg p-3 w-[140px]">
            <FontAwesomeIcon icon={faServer} className="text-xl text-green-400 mb-1" />
            <div className="text-green-400 font-bold text-xs">Server</div>
            <div className="text-gray-400 text-[10px] mt-1">API Routes</div>
            <div className="text-gray-500 text-[10px]">Node.js Scripts</div>
          </div>

          <FontAwesomeIcon icon={faArrowRight} className="text-yellow-500" />

          {/* Database */}
          <div className="bg-purple-900/50 border border-purple-500 rounded-lg p-3 w-[140px]">
            <FontAwesomeIcon icon={faDatabase} className="text-xl text-purple-400 mb-1" />
            <div className="text-purple-400 font-bold text-xs">Database</div>
            <div className="text-gray-400 text-[10px] mt-1">Vercel KV (Redis)</div>
            <div className="text-gray-500 text-[10px]">Vercel Blob</div>
          </div>
        </div>

        {/* 연결선 */}
        <div className="flex justify-center mb-3">
          <FontAwesomeIcon icon={faArrowDown} className="text-yellow-500" />
        </div>

        {/* 2층: Dynamic Prompt System */}
        <div className="flex justify-center mb-4">
          <div className="bg-cyan-900/50 border border-cyan-500 rounded-lg p-3 w-[90%]">
            <div className="flex items-center justify-center gap-2 mb-2">
              <FontAwesomeIcon icon={faCogs} className="text-cyan-400" />
              <span className="text-cyan-400 font-bold text-xs">Dynamic Prompt System (14개 모듈)</span>
            </div>
            <div className="grid grid-cols-4 gap-2 text-[10px]">
              <div className="bg-black/30 rounded p-1.5 text-center">
                <div className="text-gray-300 font-semibold">기반</div>
                <div className="text-gray-500">base, core</div>
              </div>
              <div className="bg-black/30 rounded p-1.5 text-center">
                <div className="text-gray-300 font-semibold">분석</div>
                <div className="text-gray-500">biz, user, market</div>
              </div>
              <div className="bg-black/30 rounded p-1.5 text-center">
                <div className="text-gray-300 font-semibold">특화</div>
                <div className="text-gray-500">game, fintech...</div>
              </div>
              <div className="bg-black/30 rounded p-1.5 text-center">
                <div className="text-gray-300 font-semibold">출력</div>
                <div className="text-gray-500">korea, output</div>
              </div>
            </div>
          </div>
        </div>

        {/* 연결선 */}
        <div className="flex justify-center mb-3">
          <FontAwesomeIcon icon={faArrowDown} className="text-yellow-500" />
        </div>

        {/* 3층: External APIs + Automation */}
        <div className="flex justify-center gap-3">
          {/* External APIs */}
          <div className="bg-red-900/50 border border-red-500 rounded-lg p-3 flex-1">
            <div className="text-red-400 font-bold text-xs mb-2 text-center">External APIs</div>
            <div className="flex flex-wrap justify-center gap-2 text-[10px]">
              <div className="bg-black/30 rounded px-2 py-1 flex items-center gap-1">
                <FontAwesomeIcon icon={faRobot} className="text-gray-400" />
                <span className="text-gray-300">Claude API</span>
              </div>
              <div className="bg-black/30 rounded px-2 py-1 flex items-center gap-1">
                <FontAwesomeIcon icon={faComments} className="text-yellow-400" />
                <span className="text-gray-300">카카오톡</span>
              </div>
              <div className="bg-black/30 rounded px-2 py-1 flex items-center gap-1">
                <FontAwesomeIcon icon={faMobileAlt} className="text-gray-400" />
                <span className="text-gray-300">App/Play Store</span>
              </div>
            </div>
          </div>

          {/* Automation */}
          <div className="bg-orange-900/50 border border-orange-500 rounded-lg p-3 w-[130px]">
            <div className="text-orange-400 font-bold text-xs mb-2 text-center">Automation</div>
            <div className="flex justify-center">
              <div className="bg-black/30 rounded px-2 py-1 flex items-center gap-1 text-[10px]">
                <FontAwesomeIcon icon={faGithub} className="text-gray-400" />
                <span className="text-gray-300">GitHub Actions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// CaseBid 전용 아키텍처 다이어그램
const CaseBidArchitecture = () => {
  return (
    <div className="bg-black/40 rounded-lg p-4 mb-4 overflow-x-auto">
      <div className="min-w-[620px]">
        {/* 1층: Client - Server - Database */}
        <div className="flex items-center justify-center gap-3 mb-4">
          {/* Client */}
          <div className="bg-blue-900/50 border border-blue-500 rounded-lg p-3 w-[160px]">
            <FontAwesomeIcon icon={faDesktop} className="text-xl text-blue-400 mb-1" />
            <div className="text-blue-400 font-bold text-xs">Client (React SPA)</div>
            <div className="text-[9px] text-gray-400 mt-1 space-y-0.5">
              <div>Material-UI 7</div>
              <div>Redux Toolkit</div>
              <div>Socket.IO Client</div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-1">
            <FontAwesomeIcon icon={faExchangeAlt} className="text-yellow-500" />
            <span className="text-[8px] text-gray-500">REST + WS</span>
          </div>

          {/* Server */}
          <div className="bg-green-900/50 border border-green-500 rounded-lg p-3 w-[160px]">
            <FontAwesomeIcon icon={faServer} className="text-xl text-green-400 mb-1" />
            <div className="text-green-400 font-bold text-xs">Server (Express 5)</div>
            <div className="text-[9px] text-gray-400 mt-1 space-y-0.5">
              <div>REST API + Socket.IO</div>
              <div>단일 포트 5001</div>
              <div>Passport.js</div>
            </div>
          </div>

          <FontAwesomeIcon icon={faArrowRight} className="text-yellow-500" />

          {/* Database */}
          <div className="bg-purple-900/50 border border-purple-500 rounded-lg p-3 w-[160px]">
            <FontAwesomeIcon icon={faDatabase} className="text-xl text-purple-400 mb-1" />
            <div className="text-purple-400 font-bold text-xs">MongoDB 8</div>
            <div className="text-[9px] text-gray-400 mt-1 space-y-0.5">
              <div>11개 컬렉션</div>
              <div>Mongoose ODM</div>
              <div>2dsphere 인덱스</div>
            </div>
          </div>
        </div>

        {/* 연결선 */}
        <div className="flex justify-center mb-3">
          <FontAwesomeIcon icon={faArrowDown} className="text-yellow-500" />
        </div>

        {/* 2층: 핵심 기능 4개 */}
        <div className="flex justify-center gap-2 mb-4">
          <div className="bg-cyan-900/50 border border-cyan-500 rounded-lg p-2.5 flex-1">
            <div className="flex items-center justify-center gap-1 mb-1">
              <FontAwesomeIcon icon={faGavel} className="text-cyan-400 text-sm" />
              <span className="text-cyan-400 font-bold text-[10px]">입찰 시스템</span>
            </div>
            <div className="text-[9px] text-gray-500 text-center">
              <div>사건당 1회 입찰</div>
              <div>유니크 제약</div>
            </div>
          </div>
          <div className="bg-yellow-900/50 border border-yellow-500 rounded-lg p-2.5 flex-1">
            <div className="flex items-center justify-center gap-1 mb-1">
              <FontAwesomeIcon icon={faComments} className="text-yellow-400 text-sm" />
              <span className="text-yellow-400 font-bold text-[10px]">실시간 채팅</span>
            </div>
            <div className="text-[9px] text-gray-500 text-center">
              <div>타이핑 표시</div>
              <div>읽음 상태</div>
            </div>
          </div>
          <div className="bg-red-900/50 border border-red-500 rounded-lg p-2.5 flex-1">
            <div className="flex items-center justify-center gap-1 mb-1">
              <FontAwesomeIcon icon={faBell} className="text-red-400 text-sm" />
              <span className="text-red-400 font-bold text-[10px]">알림 시스템</span>
            </div>
            <div className="text-[9px] text-gray-500 text-center">
              <div>15가지 타입</div>
              <div>실시간 푸시</div>
            </div>
          </div>
          <div className="bg-orange-900/50 border border-orange-500 rounded-lg p-2.5 flex-1">
            <div className="flex items-center justify-center gap-1 mb-1">
              <FontAwesomeIcon icon={faFileAlt} className="text-orange-400 text-sm" />
              <span className="text-orange-400 font-bold text-[10px]">파일 업로드</span>
            </div>
            <div className="text-[9px] text-gray-500 text-center">
              <div>10MB / 5개</div>
              <div>이미지 압축</div>
            </div>
          </div>
        </div>

        {/* 연결선 */}
        <div className="flex justify-center mb-3">
          <FontAwesomeIcon icon={faArrowDown} className="text-yellow-500" />
        </div>

        {/* 3층: 사건 상태 머신 + 외부 연동 */}
        <div className="flex justify-center gap-3">
          {/* 사건 상태 머신 */}
          <div className="bg-indigo-900/50 border border-indigo-500 rounded-lg p-3 flex-1">
            <div className="flex items-center justify-center gap-2 mb-2">
              <FontAwesomeIcon icon={faCogs} className="text-indigo-400" />
              <span className="text-indigo-400 font-bold text-xs">사건 상태 머신</span>
            </div>
            <div className="flex items-center justify-center gap-1 text-[9px]">
              <span className="bg-gray-700 px-1.5 py-0.5 rounded text-gray-300">draft</span>
              <FontAwesomeIcon icon={faArrowRight} className="text-gray-500 text-[8px]" />
              <span className="bg-blue-700 px-1.5 py-0.5 rounded text-blue-200">active</span>
              <FontAwesomeIcon icon={faArrowRight} className="text-gray-500 text-[8px]" />
              <span className="bg-yellow-700 px-1.5 py-0.5 rounded text-yellow-200">progress</span>
              <FontAwesomeIcon icon={faArrowRight} className="text-gray-500 text-[8px]" />
              <span className="bg-green-700 px-1.5 py-0.5 rounded text-green-200">done</span>
            </div>
          </div>

          {/* 결제 & 인증 */}
          <div className="bg-pink-900/50 border border-pink-500 rounded-lg p-3 w-[180px]">
            <div className="text-pink-400 font-bold text-xs mb-2 text-center">결제 & 인증</div>
            <div className="flex flex-col gap-1 text-[9px]">
              <div className="bg-black/40 rounded px-2 py-1 flex items-center gap-1">
                <FontAwesomeIcon icon={faCreditCard} className="text-blue-400" />
                <span className="text-gray-300">토스페이먼츠</span>
              </div>
              <div className="bg-black/40 rounded px-2 py-1 flex items-center gap-1">
                <FontAwesomeIcon icon={faShieldAlt} className="text-green-400" />
                <span className="text-gray-300">JWT + Refresh</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// AutoKakaoTalk 전용 아키텍처 다이어그램
const AutoKakaoArchitecture = () => {
  return (
    <div className="bg-black/40 rounded-lg p-4 mb-4 overflow-x-auto">
      <div className="min-w-[600px]">
        {/* 1층: GUI - Win32 API - KakaoTalk */}
        <div className="flex items-center justify-center gap-3 mb-4">
          {/* GUI */}
          <div className="bg-blue-900/50 border border-blue-500 rounded-lg p-3 w-[150px]">
            <FontAwesomeIcon icon={faWindowMaximize} className="text-xl text-blue-400 mb-1" />
            <div className="text-blue-400 font-bold text-xs">CustomTkinter GUI</div>
            <div className="text-[9px] text-gray-400 mt-1 space-y-0.5">
              <div>다크 테마 (900x550)</div>
              <div>실시간 통계 패널</div>
            </div>
          </div>

          <FontAwesomeIcon icon={faExchangeAlt} className="text-yellow-500" />

          {/* Win32 API */}
          <div className="bg-cyan-900/50 border border-cyan-500 rounded-lg p-3 w-[150px]">
            <FontAwesomeIcon icon={faWindows} className="text-xl text-cyan-400 mb-1" />
            <div className="text-cyan-400 font-bold text-xs">Win32 API</div>
            <div className="text-[9px] text-gray-400 mt-1 space-y-0.5">
              <div>백그라운드 읽기</div>
              <div>자동 메시지 전송</div>
            </div>
          </div>

          <FontAwesomeIcon icon={faExchangeAlt} className="text-yellow-500" />

          {/* KakaoTalk */}
          <div className="bg-yellow-900/50 border border-yellow-500 rounded-lg p-3 w-[150px]">
            <FontAwesomeIcon icon={faComments} className="text-xl text-yellow-400 mb-1" />
            <div className="text-yellow-400 font-bold text-xs">PC 카카오톡</div>
            <div className="text-[9px] text-gray-400 mt-1 space-y-0.5">
              <div>멀티스레드 모니터링</div>
              <div>다중 채팅방 지원</div>
            </div>
          </div>
        </div>

        {/* 연결선 */}
        <div className="flex justify-center mb-3">
          <FontAwesomeIcon icon={faArrowDown} className="text-yellow-500" />
        </div>

        {/* 2층: 감정 분석 + LLM 처리 */}
        <div className="flex justify-center gap-3 mb-4">
          {/* 감정 분석기 */}
          <div className="bg-pink-900/50 border border-pink-500 rounded-lg p-3 flex-1">
            <div className="flex items-center justify-center gap-2 mb-2">
              <FontAwesomeIcon icon={faHeart} className="text-pink-400" />
              <span className="text-pink-400 font-bold text-xs">감정 분석기</span>
            </div>
            <div className="grid grid-cols-4 gap-1 text-[9px]">
              <div className="bg-black/40 rounded p-1 text-center text-gray-400">기쁨</div>
              <div className="bg-black/40 rounded p-1 text-center text-gray-400">슬픔</div>
              <div className="bg-black/40 rounded p-1 text-center text-gray-400">분노</div>
              <div className="bg-black/40 rounded p-1 text-center text-gray-400">놀람</div>
            </div>
            <div className="text-[9px] text-gray-500 text-center mt-1">8가지 감정 / 70개+ 정규식</div>
          </div>

          {/* 프롬프트 시스템 */}
          <div className="bg-purple-900/50 border border-purple-500 rounded-lg p-3 w-[180px]">
            <div className="flex items-center justify-center gap-2 mb-2">
              <FontAwesomeIcon icon={faWandMagicSparkles} className="text-purple-400" />
              <span className="text-purple-400 font-bold text-xs">프롬프트</span>
            </div>
            <div className="text-[9px] text-gray-400 text-center space-y-0.5">
              <div>100개+ Few-shot</div>
              <div>상황별 톤 자동 조절</div>
            </div>
          </div>
        </div>

        {/* 연결선 */}
        <div className="flex justify-center mb-3">
          <FontAwesomeIcon icon={faArrowDown} className="text-yellow-500" />
        </div>

        {/* 3층: LLM 엔진 */}
        <div className="flex justify-center mb-4">
          <div className="bg-green-900/50 border border-green-500 rounded-lg p-3 w-[90%]">
            <div className="flex items-center justify-center gap-2 mb-2">
              <FontAwesomeIcon icon={faBrain} className="text-green-400" />
              <span className="text-green-400 font-bold text-xs">로컬 LLM 엔진 (API 비용 제로)</span>
            </div>
            <div className="grid grid-cols-3 gap-2 text-[9px]">
              <div className="bg-black/40 rounded p-2 text-center">
                <div className="text-green-300 font-semibold">Ollama</div>
                <div className="text-gray-500">localhost:11434</div>
              </div>
              <div className="bg-black/40 rounded p-2 text-center">
                <div className="text-blue-300 font-semibold">EXAONE 3.5</div>
                <div className="text-gray-500">7.8B 파라미터</div>
              </div>
              <div className="bg-black/40 rounded p-2 text-center">
                <div className="text-purple-300 font-semibold">LoRA 어댑터</div>
                <div className="text-gray-500">개인 말투 학습</div>
              </div>
            </div>
          </div>
        </div>

        {/* 연결선 */}
        <div className="flex justify-center mb-3">
          <FontAwesomeIcon icon={faArrowDown} className="text-yellow-500" />
        </div>

        {/* 4층: 저장소 + 배포 */}
        <div className="flex justify-center gap-3">
          {/* Database */}
          <div className="bg-purple-900/50 border border-purple-500 rounded-lg p-3 flex-1">
            <div className="text-purple-400 font-bold text-xs mb-2 text-center">저장소</div>
            <div className="flex justify-center gap-2 text-[9px]">
              <div className="bg-black/40 rounded px-2 py-1 flex items-center gap-1">
                <FontAwesomeIcon icon={faDatabase} className="text-purple-400" />
                <span className="text-gray-300">SQLite (로그)</span>
              </div>
              <div className="bg-black/40 rounded px-2 py-1 flex items-center gap-1">
                <FontAwesomeIcon icon={faFileAlt} className="text-gray-400" />
                <span className="text-gray-300">JSON (설정)</span>
              </div>
            </div>
          </div>

          {/* 배포 */}
          <div className="bg-orange-900/50 border border-orange-500 rounded-lg p-3 w-[200px]">
            <div className="text-orange-400 font-bold text-xs mb-2 text-center">배포</div>
            <div className="flex flex-col gap-1 text-[9px]">
              <div className="bg-black/40 rounded px-2 py-1 flex items-center gap-1">
                <FontAwesomeIcon icon={faWindows} className="text-blue-400" />
                <span className="text-gray-300">PyInstaller EXE</span>
              </div>
              <div className="bg-black/40 rounded px-2 py-1 flex items-center gap-1">
                <span className="text-yellow-400">🤗</span>
                <span className="text-gray-300">Hugging Face (LoRA)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// aiFeed 전용 아키텍처 다이어그램
const AiFeedArchitecture = () => {
  return (
    <div className="bg-black/40 rounded-lg p-4 mb-4 overflow-x-auto">
      <div className="min-w-[650px]">
        {/* 1층: 7개 수집 모듈 */}
        <div className="flex justify-center mb-3">
          <div className="bg-blue-900/50 border border-blue-500 rounded-lg p-3 w-[95%]">
            <div className="flex items-center justify-center gap-2 mb-2">
              <FontAwesomeIcon icon={faNewspaper} className="text-blue-400" />
              <span className="text-blue-400 font-bold text-xs">7개 뉴스 소스 수집</span>
            </div>
            <div className="grid grid-cols-7 gap-1 text-[9px]">
              <div className="bg-black/40 rounded p-1.5 text-center">
                <FontAwesomeIcon icon={faRss} className="text-orange-400 text-sm mb-0.5" />
                <div className="text-gray-300">RSS</div>
                <div className="text-gray-500">OpenAI/Vercel</div>
              </div>
              <div className="bg-black/40 rounded p-1.5 text-center">
                <FontAwesomeIcon icon={faRobot} className="text-purple-400 text-sm mb-0.5" />
                <div className="text-gray-300">블로그</div>
                <div className="text-gray-500">AI 5곳</div>
              </div>
              <div className="bg-black/40 rounded p-1.5 text-center">
                <FontAwesomeIcon icon={faReddit} className="text-orange-500 text-sm mb-0.5" />
                <div className="text-gray-300">Reddit</div>
                <div className="text-gray-500">5개 서브</div>
              </div>
              <div className="bg-black/40 rounded p-1.5 text-center">
                <FontAwesomeIcon icon={faTwitter} className="text-sky-400 text-sm mb-0.5" />
                <div className="text-gray-300">Twitter</div>
                <div className="text-gray-500">Nitter</div>
              </div>
              <div className="bg-black/40 rounded p-1.5 text-center">
                <FontAwesomeIcon icon={faGithub} className="text-gray-300 text-sm mb-0.5" />
                <div className="text-gray-300">GitHub</div>
                <div className="text-gray-500">Trending</div>
              </div>
              <div className="bg-black/40 rounded p-1.5 text-center">
                <FontAwesomeIcon icon={faCode} className="text-orange-400 text-sm mb-0.5" />
                <div className="text-gray-300">HN</div>
                <div className="text-gray-500">200점+</div>
              </div>
              <div className="bg-black/40 rounded p-1.5 text-center">
                <FontAwesomeIcon icon={faComments} className="text-blue-400 text-sm mb-0.5" />
                <div className="text-gray-300">커뮤니티</div>
                <div className="text-gray-500">개발자</div>
              </div>
            </div>
          </div>
        </div>

        {/* 연결선 */}
        <div className="flex justify-center mb-2">
          <FontAwesomeIcon icon={faArrowDown} className="text-yellow-500" />
        </div>

        {/* 2층: 처리 파이프라인 */}
        <div className="flex justify-center gap-2 mb-3">
          <div className="bg-cyan-900/50 border border-cyan-500 rounded-lg p-2 flex-1">
            <div className="flex items-center justify-center gap-1 mb-1">
              <FontAwesomeIcon icon={faFilter} className="text-cyan-400 text-xs" />
              <span className="text-cyan-400 font-bold text-[10px]">중복 필터</span>
            </div>
            <div className="text-gray-500 text-[9px] text-center">3단계 검사</div>
          </div>
          <FontAwesomeIcon icon={faArrowRight} className="text-yellow-500 self-center text-xs" />
          <div className="bg-green-900/50 border border-green-500 rounded-lg p-2 flex-1">
            <div className="flex items-center justify-center gap-1 mb-1">
              <FontAwesomeIcon icon={faChartLine} className="text-green-400 text-xs" />
              <span className="text-green-400 font-bold text-[10px]">가치 평가</span>
            </div>
            <div className="text-gray-500 text-[9px] text-center">0-100점</div>
          </div>
          <FontAwesomeIcon icon={faArrowRight} className="text-yellow-500 self-center text-xs" />
          <div className="bg-purple-900/50 border border-purple-500 rounded-lg p-2 flex-1">
            <div className="flex items-center justify-center gap-1 mb-1">
              <FontAwesomeIcon icon={faPenFancy} className="text-purple-400 text-xs" />
              <span className="text-purple-400 font-bold text-[10px]">콘텐츠 생성</span>
            </div>
            <div className="text-gray-500 text-[9px] text-center">5가지 포맷</div>
          </div>
          <FontAwesomeIcon icon={faArrowRight} className="text-yellow-500 self-center text-xs" />
          <div className="bg-red-900/50 border border-red-500 rounded-lg p-2 flex-1">
            <div className="flex items-center justify-center gap-1 mb-1">
              <FontAwesomeIcon icon={faCogs} className="text-red-400 text-xs" />
              <span className="text-red-400 font-bold text-[10px]">팩트체크</span>
            </div>
            <div className="text-gray-500 text-[9px] text-center">검증</div>
          </div>
        </div>

        {/* 연결선 */}
        <div className="flex justify-center mb-2">
          <FontAwesomeIcon icon={faArrowDown} className="text-yellow-500" />
        </div>

        {/* 3층: 큐 시스템 + 저장소 */}
        <div className="flex justify-center gap-3 mb-3">
          <div className="bg-yellow-900/50 border border-yellow-500 rounded-lg p-3 flex-1">
            <div className="flex items-center justify-center gap-2 mb-2">
              <FontAwesomeIcon icon={faClock} className="text-yellow-400" />
              <span className="text-yellow-400 font-bold text-xs">큐 시스템</span>
            </div>
            <div className="grid grid-cols-4 gap-1 text-[9px]">
              <div className="bg-black/40 rounded p-1 text-center">
                <div className="text-red-400 font-bold">90+</div>
                <div className="text-gray-500">즉시</div>
              </div>
              <div className="bg-black/40 rounded p-1 text-center">
                <div className="text-orange-400 font-bold">70-89</div>
                <div className="text-gray-500">최우선</div>
              </div>
              <div className="bg-black/40 rounded p-1 text-center">
                <div className="text-yellow-400 font-bold">40-69</div>
                <div className="text-gray-500">일반</div>
              </div>
              <div className="bg-black/40 rounded p-1 text-center">
                <div className="text-gray-400 font-bold">20-39</div>
                <div className="text-gray-500">저우선</div>
              </div>
            </div>
            <div className="text-gray-500 text-[9px] text-center mt-1">최적 시간대: 9시/12시/18시/21시</div>
          </div>

          <div className="bg-purple-900/50 border border-purple-500 rounded-lg p-3 w-[150px]">
            <FontAwesomeIcon icon={faDatabase} className="text-purple-400 mb-1" />
            <div className="text-purple-400 font-bold text-[10px] text-center">File-based Storage</div>
            <div className="text-[9px] text-gray-500 mt-1 text-center">
              <div>posts.json</div>
              <div>queue.json</div>
              <div>stats.json</div>
            </div>
          </div>
        </div>

        {/* 연결선 */}
        <div className="flex justify-center mb-2">
          <FontAwesomeIcon icon={faArrowDown} className="text-yellow-500" />
        </div>

        {/* 4층: 외부 API + 자동화 */}
        <div className="flex justify-center gap-3">
          <div className="bg-pink-900/50 border border-pink-500 rounded-lg p-3 flex-1">
            <div className="text-pink-400 font-bold text-xs mb-2 text-center">게시 & 알림</div>
            <div className="flex justify-center gap-2 text-[10px]">
              <div className="bg-black/40 rounded px-2 py-1 flex items-center gap-1">
                <span className="text-pink-400">@</span>
                <span className="text-gray-300">Threads</span>
              </div>
              <div className="bg-black/40 rounded px-2 py-1 flex items-center gap-1">
                <FontAwesomeIcon icon={faDiscord} className="text-indigo-400" />
                <span className="text-gray-300">Discord</span>
              </div>
              <div className="bg-black/40 rounded px-2 py-1 flex items-center gap-1">
                <FontAwesomeIcon icon={faComments} className="text-yellow-400" />
                <span className="text-gray-300">카카오톡</span>
              </div>
            </div>
          </div>

          <div className="bg-green-900/50 border border-green-500 rounded-lg p-3 w-[160px]">
            <div className="text-green-400 font-bold text-xs mb-2 text-center">24/7 자동화</div>
            <div className="flex flex-col items-center gap-1 text-[9px]">
              <div className="bg-black/40 rounded px-2 py-1 flex items-center gap-1">
                <FontAwesomeIcon icon={faClock} className="text-green-400" />
                <span className="text-gray-300">node-cron 6작업</span>
              </div>
              <div className="text-gray-500">수집 30분 / 게시 4회</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// 기본 아키텍처 다이어그램
const DefaultArchitecture = ({ architecture }: { architecture: Architecture }) => {
  return (
    <div className="bg-black/40 rounded-lg p-6 mb-4">
      <div className="flex flex-wrap items-center justify-center gap-4 text-center">
        {/* Client */}
        <div className="bg-blue-900/50 border border-blue-500 rounded-lg p-4 min-w-[120px]">
          <FontAwesomeIcon icon={faDesktop} className="text-2xl text-blue-400 mb-2" />
          <div className="text-blue-400 font-bold text-sm">Client</div>
          <div className="text-gray-400 text-xs mt-1">{architecture.client.split(',')[0]}</div>
        </div>

        {/* Arrow */}
        <FontAwesomeIcon icon={faExchangeAlt} className="text-yellow-500 text-xl" />

        {/* Server */}
        <div className="bg-green-900/50 border border-green-500 rounded-lg p-4 min-w-[120px]">
          <FontAwesomeIcon icon={faServer} className="text-2xl text-green-400 mb-2" />
          <div className="text-green-400 font-bold text-sm">Server</div>
          <div className="text-gray-400 text-xs mt-1">{architecture.server.split(',')[0]}</div>
        </div>

        {/* Arrow */}
        <FontAwesomeIcon icon={faArrowRight} className="text-yellow-500 text-xl" />

        {/* Database */}
        <div className="bg-purple-900/50 border border-purple-500 rounded-lg p-4 min-w-[120px]">
          <FontAwesomeIcon icon={faDatabase} className="text-2xl text-purple-400 mb-2" />
          <div className="text-purple-400 font-bold text-sm">Database</div>
          <div className="text-gray-400 text-xs mt-1">{architecture.database.split(',')[0]}</div>
        </div>
      </div>

      {/* Deploy info */}
      <div className="mt-4 flex justify-center">
        <div className="bg-orange-900/50 border border-orange-500 rounded-lg p-3 inline-flex items-center gap-2">
          <FontAwesomeIcon icon={faCloud} className="text-orange-400" />
          <span className="text-orange-400 text-sm">{architecture.deploy}</span>
        </div>
      </div>
    </div>
  );
};

export const ArchitectureDiagram = ({ projectId, architecture }: ArchitectureDiagramProps) => {
  return (
    <div className="mt-6">
      <h3 className="text-lg font-bold text-yellow-500 mb-4 flex items-center gap-2">
        <span className="text-xl">🏗</span> 아키텍처
      </h3>

      {/* Visual Diagram - 프로젝트별 전용 다이어그램 */}
      {projectId === "dailyapp" ? (
        <DailyAppArchitecture />
      ) : projectId === "aifeed" ? (
        <AiFeedArchitecture />
      ) : projectId === "casebid" ? (
        <CaseBidArchitecture />
      ) : projectId === "autokakao" ? (
        <AutoKakaoArchitecture />
      ) : (
        <DefaultArchitecture architecture={architecture} />
      )}

      {/* Architecture Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
        <div className="bg-black/30 p-3 rounded-lg border border-gray-700">
          <span className="text-blue-400 font-semibold">Client:</span>
          <p className="text-gray-300 mt-1">{architecture.client}</p>
        </div>
        <div className="bg-black/30 p-3 rounded-lg border border-gray-700">
          <span className="text-green-400 font-semibold">Server:</span>
          <p className="text-gray-300 mt-1">{architecture.server}</p>
        </div>
        <div className="bg-black/30 p-3 rounded-lg border border-gray-700">
          <span className="text-purple-400 font-semibold">Database:</span>
          <p className="text-gray-300 mt-1">{architecture.database}</p>
        </div>
        <div className="bg-black/30 p-3 rounded-lg border border-gray-700">
          <span className="text-orange-400 font-semibold">Auth:</span>
          <p className="text-gray-300 mt-1">{architecture.auth}</p>
        </div>
      </div>

      {/* Special Features */}
      {architecture.special.length > 0 && (
        <div className="mt-4">
          <h4 className="text-sm font-semibold text-yellow-400 mb-2">핵심 특징</h4>
          <ul className="space-y-1">
            {architecture.special.map((item, index) => (
              <li key={index} className="text-gray-300 text-sm flex items-start gap-2">
                <span className="text-yellow-500 mt-1">▸</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
