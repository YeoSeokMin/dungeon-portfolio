"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { Position, DungeonNode } from "@/types/project";
import { AnimationState } from "./useSpriteAnimation";

interface UseCharacterMovementProps {
  initialNodeId: string;
  nodes: DungeonNode[];
  onArrival?: (nodeId: string) => void;
}

export const useCharacterMovement = ({
  initialNodeId,
  nodes,
  onArrival,
}: UseCharacterMovementProps) => {
  const getNodePosition = useCallback((nodeId: string): Position => {
    const node = nodes.find((n) => n.id === nodeId);
    return node?.position ?? { x: 10, y: 20 };
  }, [nodes]);

  const [currentNodeId, setCurrentNodeId] = useState(initialNodeId);
  const [position, setPosition] = useState<Position>(() => getNodePosition(initialNodeId));
  const [isMoving, setIsMoving] = useState(false);
  const [animationState, setAnimationState] = useState<AnimationState>("idle");
  const [facingDirection, setFacingDirection] = useState<"left" | "right">("right");

  const isMovingRef = useRef(false);
  const currentNodeRef = useRef(initialNodeId);

  // 노드 레이아웃 변경 시 캐릭터 위치 업데이트
  useEffect(() => {
    if (!isMovingRef.current) {
      const newPos = getNodePosition(currentNodeRef.current);
      setPosition(newPos);
    }
  }, [nodes, getNodePosition]);

  // BFS to find path between nodes
  const findPath = useCallback((fromId: string, toId: string): string[] => {
    if (fromId === toId) return [fromId];

    const visited = new Set<string>();
    const queue: { id: string; path: string[] }[] = [{ id: fromId, path: [fromId] }];

    while (queue.length > 0) {
      const { id, path } = queue.shift()!;
      if (id === toId) return path;
      if (visited.has(id)) continue;
      visited.add(id);

      const node = nodes.find((n) => n.id === id);
      if (!node) continue;

      for (const connectionId of node.connections) {
        if (!visited.has(connectionId)) {
          queue.push({ id: connectionId, path: [...path, connectionId] });
        }
      }
    }
    return [fromId];
  }, [nodes]);

  const moveToNode = useCallback((targetNodeId: string) => {
    // Prevent multiple moves
    if (isMovingRef.current) return;
    if (currentNodeRef.current === targetNodeId) {
      // Already at target, just trigger arrival
      onArrival?.(targetNodeId);
      return;
    }

    const path = findPath(currentNodeRef.current, targetNodeId);
    if (path.length <= 1) return;

    isMovingRef.current = true;
    setIsMoving(true);
    setAnimationState("walk");

    let stepIndex = 1;

    const moveStep = () => {
      if (stepIndex >= path.length) {
        // Arrived at destination
        isMovingRef.current = false;
        setIsMoving(false);
        setAnimationState("idle");

        setTimeout(() => {
          onArrival?.(targetNodeId);
        }, 300);
        return;
      }

      const targetNode = nodes.find((n) => n.id === path[stepIndex]);
      if (!targetNode) {
        isMovingRef.current = false;
        setIsMoving(false);
        setAnimationState("idle");
        return;
      }

      const currentPos = getNodePosition(currentNodeRef.current);
      const targetPos = targetNode.position;

      // Update facing direction
      if (targetPos.x > currentPos.x) {
        setFacingDirection("right");
      } else if (targetPos.x < currentPos.x) {
        setFacingDirection("left");
      }

      // Move to next node
      setPosition(targetPos);
      currentNodeRef.current = path[stepIndex];
      setCurrentNodeId(path[stepIndex]);

      stepIndex++;

      // Wait for CSS transition, then move to next step
      setTimeout(moveStep, 800);
    };

    // Start moving
    moveStep();
  }, [findPath, nodes, onArrival]);

  return {
    currentNodeId,
    position,
    isMoving,
    animationState,
    facingDirection,
    moveToNode,
  };
};
