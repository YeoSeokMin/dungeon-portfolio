"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faQuestion,
  faEnvelope,
  faScroll,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

interface BossRoomProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BossRoom = ({ isOpen, onClose }: BossRoomProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 z-40"
            style={{
              background: "radial-gradient(ellipse at center, rgba(220, 38, 38, 0.2) 0%, rgba(10, 10, 15, 0.95) 70%)",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-full max-w-lg"
              initial={{ scale: 0.5, rotateY: 180 }}
              animate={{ scale: 1, rotateY: 0 }}
              exit={{ scale: 0.5, rotateY: -180 }}
              transition={{ type: "spring", damping: 20, stiffness: 200 }}
            >
              <div
                className="
                  rounded-xl overflow-hidden
                  border-2 border-red-500/50 shadow-2xl
                  boss-room
                "
                style={{
                  background: "linear-gradient(180deg, rgba(50, 10, 10, 0.98) 0%, rgba(10, 10, 15, 0.98) 100%)",
                }}
              >
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 z-10 w-10 h-10 rounded-lg flex items-center justify-center hover:bg-red-500/20 text-red-400 transition-colors"
                >
                  <FontAwesomeIcon icon={faXmark} className="text-xl" />
                </button>

                {/* Content */}
                <div className="p-8 text-center">
                  {/* Icon */}
                  <motion.div
                    className="mb-6"
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-red-500/20 border-2 border-red-500/50">
                      <FontAwesomeIcon
                        icon={faQuestion}
                        className="text-5xl text-red-500 animate__animated animate__pulse animate__infinite"
                      />
                    </div>
                  </motion.div>

                  {/* Title */}
                  <h2 className="font-medieval text-3xl md:text-4xl text-red-500 text-shadow-red mb-4">
                    To Be Continued...
                  </h2>

                  {/* Divider */}
                  <div className="flex items-center justify-center gap-4 my-6">
                    <div className="h-px w-16 bg-gradient-to-r from-transparent to-red-500/50" />
                    <FontAwesomeIcon icon={faScroll} className="text-red-500/50" />
                    <div className="h-px w-16 bg-gradient-to-l from-transparent to-red-500/50" />
                  </div>

                  {/* Message */}
                  <div className="space-y-4 text-gray-300 mb-8">
                    <p className="text-lg">
                      지금까지의 여정을 바탕으로
                    </p>
                    <p className="text-lg">
                      앞으로의 <span className="text-red-400 font-bold">모험</span>을 함께하고 싶습니다
                    </p>
                  </div>

                  {/* Stats Summary */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="bg-black/30 rounded-lg p-3 border border-red-500/20">
                      <div className="text-2xl font-bold text-red-400">5+</div>
                      <div className="text-xs text-gray-400">회사 프로젝트</div>
                    </div>
                    <div className="bg-black/30 rounded-lg p-3 border border-red-500/20">
                      <div className="text-2xl font-bold text-red-400">3+</div>
                      <div className="text-xs text-gray-400">개인 프로젝트</div>
                    </div>
                    <div className="bg-black/30 rounded-lg p-3 border border-red-500/20">
                      <div className="text-2xl font-bold text-red-400">5년</div>
                      <div className="text-xs text-gray-400">개발 경력</div>
                    </div>
                  </div>

                  {/* Contact Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                      href="https://github.com/YeoSeokMin"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="github-btn inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gray-800 hover:bg-gray-700 border border-gray-600 text-white font-semibold transition-all duration-300"
                    >
                      <FontAwesomeIcon icon={faGithub} />
                      GitHub
                    </a>
                    <a
                      href="mailto:contact@example.com"
                      className="contact-btn inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-red-600 hover:bg-red-500 text-white font-semibold transition-all duration-300"
                    >
                      <FontAwesomeIcon icon={faEnvelope} />
                      Contact
                    </a>
                  </div>
                </div>

                {/* Decorative corners */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-red-500/50" />
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-red-500/50" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-red-500/50" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-red-500/50" />
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
