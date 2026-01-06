"use client";

import { useState, useEffect } from "react";

export const ParallaxBackground = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Main background */}
      <div
        className="absolute"
        style={
          isMobile
            ? {
                // 모바일: 90도 회전해서 세로로 길게
                backgroundImage: "url(/assets/background/layer1.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                transform: "rotate(90deg)",
                transformOrigin: "center center",
                width: "200%",
                height: "200%",
                top: "-50%",
                left: "-50%",
              }
            : {
                // PC: 기본
                backgroundImage: "url(/assets/background/layer1.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                inset: 0,
                width: "100%",
                height: "100%",
              }
        }
      />

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, transparent 50%, rgba(0, 0, 0, 0.4) 100%)",
        }}
      />
    </div>
  );
};
