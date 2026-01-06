"use client";

import React from "react";
import { DungeonNode } from "@/types/project";

interface PathProps {
  nodes: DungeonNode[];
}

export const Path = ({ nodes }: PathProps) => {
  const getNodeCenter = (node: DungeonNode) => ({
    x: node.position.x,
    y: node.position.y,
  });

  const renderPath = (from: DungeonNode, to: DungeonNode, index: number) => {
    const start = getNodeCenter(from);
    const end = getNodeCenter(to);

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
