"use client";

export const ParallaxBackground = () => {
  return (
    <div className="absolute inset-0 z-0 w-full h-full">
      {/* Main background */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: "url(/assets/background/layer1.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "repeat-y",
          minHeight: "100%",
        }}
      />
      {/* 아래쪽 배경 연장 */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[200px]"
        style={{
          background: "linear-gradient(to bottom, transparent, #0a0a0f)",
        }}
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
