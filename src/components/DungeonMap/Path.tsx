"use client";

import React from "react";
import { DungeonNode } from "@/types/project";

interface PathProps {
  nodes: DungeonNode[];
}

export const Path = ({ nodes }: PathProps) => {
  // 노드 박스 중앙
  const getNodeCenter = (node: DungeonNode) => ({
    x: node.position.x,
    y: node.position.y + 5,
  });

  const renderPath = (from: DungeonNode, to: DungeonNode, index: number) => {
    const start = getNodeCenter(from);
    const end = getNodeCenter(to);

    // 수평 이동인지 수직 이동인지 확인
    const isHorizontal = Math.abs(start.y - end.y) < 10;
    const isVertical = Math.abs(start.x - end.x) < 10;

    // 직선 (수평 또는 수직)
    if (isHorizontal || isVertical) {
      return (
        <line
          key={`${from.id}-${to.id}-${index}`}
          x1={`${start.x}%`}
          y1={`${start.y}%`}
          x2={`${end.x}%`}
          y2={`${end.y}%`}
          className="dungeon-path"
          stroke="rgba(234, 179, 8, 0.4)"
          strokeWidth="3"
          strokeLinecap="round"
        />
      );
    }

    // 대각선인 경우 → ㄱ 또는 ㄴ 형태로 꺾어서 중앙 통과
    // 먼저 수직 이동 후 수평 이동 (또는 반대)
    const midY = (start.y + end.y) / 2;

    return (
      <path
        key={`${from.id}-${to.id}-${index}`}
        d={`M ${start.x}% ${start.y}%
            L ${start.x}% ${midY}%
            L ${end.x}% ${midY}%
            L ${end.x}% ${end.y}%`}
        className="dungeon-path"
        stroke="rgba(234, 179, 8, 0.4)"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
    );
  };

  const renderedPaths = new Set<string>();
  const paths: React.ReactElement[] = [];

  nodes.forEach((node) => {
    node.connections.forEach((connectionId) => {
      const connectedNode = nodes.find((n) => n.id === connectionId);
      if (!connectedNode) return;

      const pathKey = [node.id, connectionId].sort().join("-");
      if (renderedPaths.has(pathKey)) return;
      renderedPaths.add(pathKey);

      paths.push(renderPath(node, connectedNode, paths.length));
    });
  });

  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g filter="url(#glow)">{paths}</g>
    </svg>
  );
};
