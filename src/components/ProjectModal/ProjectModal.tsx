"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/types/project";
import { CompanyProject } from "./CompanyProject";
import { PersonalProject } from "./PersonalProject";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faBuilding,
  faCode,
} from "@fortawesome/free-solid-svg-icons";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project;
}

export const ProjectModal = ({ isOpen, onClose, project }: ProjectModalProps) => {
  const isPersonal = project.type === "personal";

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 z-40 modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-4 md:inset-10 lg:inset-20 z-50 overflow-hidden"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <div
              className={`
                w-full h-full rounded-xl overflow-hidden
                border-2 shadow-2xl
                ${isPersonal ? "border-purple-500/50" : "border-yellow-600/50"}
              `}
              style={{
                background: "linear-gradient(180deg, rgba(26, 26, 46, 0.98) 0%, rgba(10, 10, 15, 0.98) 100%)",
              }}
            >
              {/* Header */}
              <div
                className={`
                  relative px-6 py-4 border-b
                  ${isPersonal ? "border-purple-500/30" : "border-yellow-600/30"}
                `}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`
                      w-10 h-10 rounded-lg flex items-center justify-center
                      ${isPersonal ? "bg-purple-600/30" : "bg-yellow-600/30"}
                    `}
                  >
                    <FontAwesomeIcon
                      icon={isPersonal ? faCode : faBuilding}
                      className={isPersonal ? "text-purple-400" : "text-yellow-500"}
                    />
                  </div>
                  <div>
                    <h2
                      className={`
                        text-xl md:text-2xl font-bold
                        ${isPersonal ? "text-purple-400" : "text-yellow-500"}
                      `}
                    >
                      {project.name}
                    </h2>
                    <span
                      className={`
                        text-xs px-2 py-0.5 rounded-full
                        ${isPersonal
                          ? "bg-purple-500/20 text-purple-300"
                          : "bg-yellow-500/20 text-yellow-300"
                        }
                      `}
                    >
                      {isPersonal ? "개인 프로젝트" : "회사 프로젝트"}
                    </span>
                  </div>
                </div>

                {/* Close Button */}
                <button
                  onClick={onClose}
                  className={`
                    absolute top-4 right-4
                    w-10 h-10 rounded-lg flex items-center justify-center
                    transition-colors
                    ${isPersonal
                      ? "hover:bg-purple-500/20 text-purple-400"
                      : "hover:bg-yellow-500/20 text-yellow-500"
                    }
                  `}
                >
                  <FontAwesomeIcon icon={faXmark} className="text-xl" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 overflow-y-auto h-[calc(100%-80px)]">
                {isPersonal ? (
                  <PersonalProject project={project} />
                ) : (
                  <CompanyProject project={project} />
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
