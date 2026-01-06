"use client";

import { Architecture } from "@/types/project";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDesktop,
  faServer,
  faDatabase,
  faCloud,
  faArrowRight,
  faArrowLeft,
  faExchangeAlt,
} from "@fortawesome/free-solid-svg-icons";

interface ArchitectureDiagramProps {
  projectId: string;
  architecture: Architecture;
}

export const ArchitectureDiagram = ({ projectId, architecture }: ArchitectureDiagramProps) => {
  return (
    <div className="mt-6">
      <h3 className="text-lg font-bold text-yellow-500 mb-4 flex items-center gap-2">
        <span className="text-xl">🏗</span> 아키텍처
      </h3>

      {/* Visual Diagram */}
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
