"use client";

import { AnimationState } from "@/hooks/useSpriteAnimation";

interface CharacterProps {
  position: { x: number; y: number };
  animationState: AnimationState;
  facingDirection: "left" | "right";
  scale?: number;
}

export const Character = ({
  position,
  animationState,
  facingDirection,
  scale = 3,
}: CharacterProps) => {
  const frameWidth = 32;
  const frameHeight = 32;
  const totalFrames = 6;

  const isWalking = animationState === "walk";
  const spriteUrl = isWalking ? "/assets/character/walk.png" : "/assets/character/idle.png";

  return (
    <div
      className="absolute z-20 pointer-events-none"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        transform: "translate(-50%, -50%)",
        transition: "left 0.7s ease-in-out, top 0.7s ease-in-out",
      }}
    >
      <div
        className={`character-sprite ${isWalking ? "walking" : ""}`}
        style={{
          width: frameWidth * scale,
          height: frameHeight * scale,
          backgroundImage: `url(${spriteUrl})`,
          backgroundSize: `${frameWidth * totalFrames * scale}px ${frameHeight * scale}px`,
          ...(isWalking ? {} : { backgroundPosition: "0 0" }),
          transform: facingDirection === "left" ? "scaleX(-1)" : "scaleX(1)",
          filter: "drop-shadow(0 0 10px rgba(234, 179, 8, 0.5))",
          imageRendering: "pixelated",
        }}
      />
    </div>
  );
};
