"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDoorOpen,
  faBuilding,
  faTooth,
  faCreditCard,
  faCommentSms,
  faGavel,
  faMobileScreen,
  faRobot,
  faHospital,
  faQuestion,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { DungeonNode } from "@/types/project";

interface NodeProps {
  node: DungeonNode;
  isActive: boolean;
  isVisited: boolean;
  onClick: () => void;
  index: number;
}

const iconMap: Record<string, IconDefinition> = {
  "fa-door-open": faDoorOpen,
  "fa-building": faBuilding,
  "fa-tooth": faTooth,
  "fa-credit-card": faCreditCard,
  "fa-comment-sms": faCommentSms,
  "fa-gavel": faGavel,
  "fa-mobile-screen": faMobileScreen,
  "fa-robot": faRobot,
  "fa-hospital": faHospital,
  "fa-question": faQuestion,
};

export const Node = ({ node, isActive, isVisited, onClick, index }: NodeProps) => {
  const isBoss = node.type === "boss";
  const isPersonal = node.type === "personal";
  const isEntrance = node.type === "entrance";

  return (
    <motion.div
      className={`absolute cursor-pointer z-10 ${isBoss ? "boss-room" : ""}`}
      style={{
        left: `${node.position.x}%`,
        top: `${node.position.y}%`,
        transform: "translate(-50%, -50%)",
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        type: "spring",
        stiffness: 200,
      }}
      whileHover={{
        scale: 1.15,
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      data-aos="zoom-in"
      data-aos-delay={index * 100}
    >
      <div
        className={`
          relative flex flex-col items-center justify-center
          w-24 h-24 md:w-20 md:h-20 lg:w-24 lg:h-24
          border-4
          transition-all duration-300
          ${isBoss
            ? "border-red-500 bg-red-950/80"
            : isPersonal
              ? "border-purple-500 bg-purple-950/80"
              : isEntrance
                ? "border-green-500 bg-green-950/80"
                : "border-yellow-600 bg-yellow-950/80"
          }
          ${isActive ? "glow-gold-strong" : ""}
          ${isVisited && !isActive ? "opacity-80" : ""}
        `}
        style={{
          boxShadow: isActive
            ? `0 0 20px ${isBoss ? 'rgba(239,68,68,0.6)' : 'rgba(234,179,8,0.6)'}`
            : '4px 4px 0 rgba(0,0,0,0.5)',
        }}
      >
        <FontAwesomeIcon
          icon={iconMap[node.icon] || faQuestion}
          className={`
            text-3xl md:text-2xl lg:text-3xl mb-1
            ${isBoss
              ? "text-red-500"
              : isPersonal
                ? "text-purple-400"
                : isEntrance
                  ? "text-green-400"
                  : "text-yellow-500"
            }
          `}
        />
        <span
          className={`
            font-pixel-kr text-[10px] md:text-[10px] lg:text-xs text-center px-1 leading-tight
            ${isBoss ? "text-red-400" : "text-gray-200"}
          `}
        >
          {node.label}
        </span>

        {/* Glow ring effect */}
        <div
          className={`
            absolute inset-0
            ${isActive ? "animate-ping opacity-20" : "opacity-0"}
            ${isBoss ? "bg-red-500" : "bg-yellow-500"}
          `}
          style={{ animationDuration: "2s" }}
        />
      </div>
    </motion.div>
  );
};
