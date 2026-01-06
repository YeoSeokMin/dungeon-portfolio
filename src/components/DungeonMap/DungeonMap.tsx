"use client";

import { useState, useCallback } from "react";
import { dungeonNodes } from "@/data/projects";
import { DungeonNode } from "@/types/project";
import { useCharacterMovement } from "@/hooks/useCharacterMovement";
import { Character } from "./Character";
import { Node } from "./Node";
import { Path } from "./Path";
import { ParallaxBackground } from "./ParallaxBackground";
import { ProjectModal } from "@/components/ProjectModal";
import { BossRoom } from "@/components/BossRoom";

export const DungeonMap = () => {
  const [selectedNode, setSelectedNode] = useState<DungeonNode | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBossModalOpen, setIsBossModalOpen] = useState(false);
  const [visitedNodes, setVisitedNodes] = useState<Set<string>>(new Set(["entrance"]));

  const handleArrival = useCallback((nodeId: string) => {
    setVisitedNodes((prev) => new Set([...prev, nodeId]));

    const node = dungeonNodes.find((n) => n.id === nodeId);
    if (node) {
      setSelectedNode(node);
      if (node.type === "boss") {
        setIsBossModalOpen(true);
      } else if (node.project) {
        setIsModalOpen(true);
      }
    }
  }, []);

  const { currentNodeId, position, isMoving, animationState, facingDirection, moveToNode } =
    useCharacterMovement({
      initialNodeId: "entrance",
      nodes: dungeonNodes,
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
    <div className="relative w-full h-screen overflow-hidden">
      {/* Parallax Background */}
      <ParallaxBackground />

      {/* Map Container */}
      <div className="relative w-full h-full z-20">
        {/* Title */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 z-30 text-center">
          <h1 className="font-medieval text-3xl md:text-4xl lg:text-5xl text-yellow-500 text-shadow-gold">
            DUNGEON PORTFOLIO
          </h1>
          <p className="text-gray-400 text-sm md:text-base mt-2">
            방을 클릭하여 탐험하세요
          </p>
        </div>

        {/* Paths */}
        <Path nodes={dungeonNodes} />

        {/* Nodes */}
        {dungeonNodes.map((node, index) => (
          <Node
            key={node.id}
            node={node}
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
        <div className="absolute bottom-6 left-6 z-30 bg-black/60 p-4 rounded-lg border border-yellow-600/30">
          <h3 className="text-yellow-500 font-bold mb-2 text-sm">범례</h3>
          <div className="space-y-1 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded bg-green-500/50 border border-green-500" />
              <span className="text-gray-300">입구</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded bg-yellow-500/50 border border-yellow-600" />
              <span className="text-gray-300">회사 프로젝트</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded bg-purple-500/50 border border-purple-500" />
              <span className="text-gray-300">개인 프로젝트</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded bg-red-500/50 border border-red-500" />
              <span className="text-gray-300">보스방</span>
            </div>
          </div>
        </div>

        {/* Progress indicator */}
        <div className="absolute bottom-6 right-6 z-30 bg-black/60 p-4 rounded-lg border border-yellow-600/30">
          <div className="text-yellow-500 font-bold text-sm mb-1">탐험 진행도</div>
          <div className="w-32 h-2 bg-gray-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-yellow-600 to-yellow-400 transition-all duration-500"
              style={{ width: `${(visitedNodes.size / dungeonNodes.length) * 100}%` }}
            />
          </div>
          <div className="text-xs text-gray-400 mt-1">
            {visitedNodes.size} / {dungeonNodes.length} 방 탐험
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
