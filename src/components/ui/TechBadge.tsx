"use client";

import { motion } from "framer-motion";

interface TechBadgeProps {
  tech: string;
  variant?: "default" | "frontend" | "backend" | "database" | "infra" | "ai";
  index?: number;
}

const variantColors = {
  default: "border-yellow-600/50 text-yellow-500 bg-yellow-950/30",
  frontend: "border-blue-500/50 text-blue-400 bg-blue-950/30",
  backend: "border-green-500/50 text-green-400 bg-green-950/30",
  database: "border-purple-500/50 text-purple-400 bg-purple-950/30",
  infra: "border-orange-500/50 text-orange-400 bg-orange-950/30",
  ai: "border-pink-500/50 text-pink-400 bg-pink-950/30",
};

export const TechBadge = ({ tech, variant = "default", index = 0 }: TechBadgeProps) => {
  return (
    <motion.span
      className={`
        inline-block px-3 py-1 text-sm rounded-full border
        transition-all duration-200 hover:scale-105
        ${variantColors[variant]}
      `}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{
        boxShadow: "0 0 15px rgba(234, 179, 8, 0.3)",
      }}
    >
      {tech}
    </motion.span>
  );
};
