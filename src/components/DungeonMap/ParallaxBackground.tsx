"use client";

export const ParallaxBackground = () => {
  return (
    <div className="absolute inset-0 z-0">
      {/* Main background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url(/assets/background/layer1.png)",
          backgroundSize: "100% auto",
          backgroundPosition: "top center",
          backgroundRepeat: "repeat-y",
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
