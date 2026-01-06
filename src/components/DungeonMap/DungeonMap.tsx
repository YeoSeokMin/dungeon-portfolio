"use client";

import { useState, useCallback, useEffect } from "react";
import { dungeonNodes } from "@/data/projects";
import { DungeonNode } from "@/types/project";
import { useCharacterMovement } from "@/hooks/useCharacterMovement";
import { Character } from "./Character";
import { Node } from "./Node";
import { Path } from "./Path";
import { ParallaxBackground } from "./ParallaxBackground";
import { ProjectModal } from "@/components/ProjectModal";
import { BossRoom } from "@/components/BossRoom";

// 모바일용 세로 배치 위치 생성
const getMobileNodes = (nodes: DungeonNode[]): DungeonNode[] => {
  const startY = 6; // 시작 위치
  const spacing = 11; // 노드 간격 (더 넓게)
  return nodes.map((node, index) => ({
    ...node,
    position: {
      x: 50, // 가운데 정렬
      y: startY + index * spacing, // 세로로 여유있게 배치
    },
  }));
};

export const DungeonMap = () => {
  const [selectedNode, setSelectedNode] = useState<DungeonNode | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBossModalOpen, setIsBossModalOpen] = useState(false);
  const [visitedNodes, setVisitedNodes] = useState<Set<string>>(new Set(["entrance"]));
  const [isMobile, setIsMobile] = useState(false);

  // 화면 크기 감지
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // 현재 레이아웃에 맞는 노드
  const currentNodes = isMobile ? getMobileNodes(dungeonNodes) : dungeonNodes;

  const handleArrival = useCallback((nodeId: string) => {
    setVisitedNodes((prev) => new Set([...prev, nodeId]));

    const node = currentNodes.find((n) => n.id === nodeId);
    if (node) {
      setSelectedNode(node);
      if (node.type === "boss") {
        setIsBossModalOpen(true);
      } else if (node.project) {
        setIsModalOpen(true);
      }
    }
  }, [currentNodes]);

  const { currentNodeId, position, isMoving, animationState, facingDirection, moveToNode } =
    useCharacterMovement({
      initialNodeId: "entrance",
      nodes: currentNodes,
      onArrival: handleArrival,
    });

  const handleNodeClick = useCallback(
    (node: DungeonNode) => {
      if (isMoving) return;
      moveToNode(node.id);
    },
    [isMoving, moveToNode]
  );

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setIsBossModalOpen(false);
    setSelectedNode(null);
  }, []);

  return (
    <div className={`relative w-full ${isMobile ? 'min-h-screen overflow-y-auto' : 'h-screen overflow-hidden'}`}>
      {/* Parallax Background */}
      <ParallaxBackground />

      {/* Map Container */}
      <div className={`relative w-full z-20 ${isMobile ? 'h-[1600px]' : 'h-full'}`}>
        {/* Title */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 z-30 text-center">
          <h1 className="font-pixel text-lg md:text-xl lg:text-2xl text-yellow-500 text-shadow-gold">
            DUNGEON PORTFOLIO
          </h1>
          <p className="font-pixel text-gray-400 text-[8px] md:text-[10px] mt-3">
            CLICK ROOM TO EXPLORE
          </p>
        </div>

        {/* Paths */}
        {isMobile ? (
          // 모바일: 세로 직선 (박스 중앙에 맞춤, 애니메이션)
          <div
            className="absolute pointer-events-none z-0"
            style={{
              left: "41%",
              top: `${6}%`,
              height: `${99}%`,
              transform: "translateX(-50%)",
            }}
          >
            <svg width="6" height="100%" style={{ overflow: "visible" }}>
              <line
                x1="3"
                y1="0"
                x2="3"
                y2="100%"
                stroke="rgba(234, 179, 8, 0.4)"
                strokeWidth="3"
                strokeDasharray="8 4"
                className="dungeon-path"
              />
            </svg>
          </div>
        ) : (
          <Path nodes={currentNodes} />
        )}

        {/* Nodes */}
        {currentNodes.map((node, index) => (
          <Node
            key={node.id}
            node={isMobile ? { ...node, position: { ...node.position, x: 41 } } : node}
            isActive={currentNodeId === node.id}
            isVisited={visitedNodes.has(node.id)}
            onClick={() => handleNodeClick(node)}
            index={index}
          />
        ))}

        {/* Character */}
        <Character
          position={position}
          animationState={animationState}
          facingDirection={facingDirection}
          scale={3}
        />

        {/* Legend */}
        <div className={`${isMobile ? 'fixed' : 'absolute'} bottom-6 left-6 z-30 pixel-box p-4`}>
          <h3 className="text-yellow-500 font-pixel mb-3 text-[8px]">LEGEND</h3>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500/50 border-2 border-green-500" />
              <span className="text-gray-300 font-pixel-kr text-sm">입구</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-yellow-500/50 border-2 border-yellow-600" />
              <span className="text-gray-300 font-pixel-kr text-sm">회사</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-purple-500/50 border-2 border-purple-500" />
              <span className="text-gray-300 font-pixel-kr text-sm">개인</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500/50 border-2 border-red-500" />
              <span className="text-gray-300 font-pixel text-[8px]">BOSS</span>
            </div>
          </div>
        </div>

        {/* Progress indicator */}
        <div className={`${isMobile ? 'fixed' : 'absolute'} bottom-6 right-6 z-30 pixel-box p-4`}>
          <div className="text-yellow-500 font-pixel text-[8px] mb-2">PROGRESS</div>
          <div className="w-32 h-3 bg-gray-900 border-2 border-gray-700">
            <div
              className="h-full bg-yellow-500 transition-all duration-500"
              style={{ width: `${(visitedNodes.size / currentNodes.length) * 100}%` }}
            />
          </div>
          <div className="text-[8px] font-pixel text-gray-400 mt-2">
            {visitedNodes.size}/{currentNodes.length} ROOM
          </div>
        </div>
      </div>

      {/* Project Modal */}
      {selectedNode?.project && (
        <ProjectModal
          isOpen={isModalOpen}
          onClose={closeModal}
          project={selectedNode.project}
        />
      )}

      {/* Boss Room Modal */}
      <BossRoom isOpen={isBossModalOpen} onClose={closeModal} />
    </div>
  );
};
