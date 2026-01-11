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
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

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

      {/* Visual Diagram - DailyApp은 전용 다이어그램, 나머지는 기본 */}
      {projectId === "dailyapp" ? (
        <DailyAppArchitecture />
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
