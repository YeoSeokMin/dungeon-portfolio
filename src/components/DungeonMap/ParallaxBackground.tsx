"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const PARALLAX_CONFIG = {
  layers: 8,
  speeds: [0.05, 0.1, 0.15, 0.2, 0.3, 0.4, 0.6, 0.8],
};

export const ParallaxBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      const x = (clientX / innerWidth - 0.5) * 2;
      const y = (clientY / innerHeight - 0.5) * 2;

      setMousePosition({ x, y });
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      {Array.from({ length: PARALLAX_CONFIG.layers }).map((_, index) => {
        const speed = PARALLAX_CONFIG.speeds[index];
        const layerNum = index + 1;

        return (
          <motion.div
            key={`layer-${layerNum}`}
            className="parallax-layer"
            style={{
              backgroundImage: `url(/assets/background/layer${layerNum}.png)`,
              zIndex: index,
            }}
            animate={{
              x: mousePosition.x * speed * -30,
              y: mousePosition.y * speed * -15,
            }}
            transition={{
              type: "tween",
              ease: "linear",
              duration: 0.1,
            }}
          />
        );
      })}

      {/* Vignette - subtle edge darkening only */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, transparent 50%, rgba(0, 0, 0, 0.4) 100%)",
          zIndex: 10,
        }}
      />
    </div>
  );
};
