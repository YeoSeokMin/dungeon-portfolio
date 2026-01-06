"use client";

import { useState } from "react";

export type AnimationState = "idle" | "walk" | "run";

// CSS handles the animation now, this hook just tracks state
export const useSpriteAnimation = (initialState: AnimationState = "idle") => {
  const [animationState, setAnimationState] = useState<AnimationState>(initialState);

  return {
    animationState,
    setAnimationState,
  };
};
