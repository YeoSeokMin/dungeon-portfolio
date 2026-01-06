"use client";

import { useEffect } from "react";
import AOS from "aos";
import { DungeonMap } from "@/components/DungeonMap";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <main className="min-h-screen overflow-hidden">
      <DungeonMap />
    </main>
  );
}
