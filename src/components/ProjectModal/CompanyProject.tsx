"use client";

import { Project } from "@/types/project";
import { TechBadge } from "@/components/ui/TechBadge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faUser,
  faWrench,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

interface CompanyProjectProps {
  project: Project;
}

export const CompanyProject = ({ project }: CompanyProjectProps) => {
  const techStack = Array.isArray(project.techStack) ? project.techStack : [];

  return (
    <div className="space-y-6">
      {/* Period and Role */}
      <div className="flex flex-wrap gap-4 text-sm">
        <div className="flex items-center gap-2 text-gray-300">
          <FontAwesomeIcon icon={faCalendarDays} className="text-yellow-500" />
          <span>{project.period}</span>
          <span className="text-gray-500">({project.duration})</span>
        </div>
        <div className="flex items-center gap-2 text-gray-300">
          <FontAwesomeIcon icon={faUser} className="text-yellow-500" />
          <span>{project.role}</span>
        </div>
      </div>

      {/* Summary */}
      <div className="bg-black/30 rounded-lg p-4 border-l-4 border-yellow-600">
        <p className="text-gray-200">{project.summary}</p>
      </div>

      {/* Tech Stack */}
      <div>
        <h3 className="text-lg font-bold text-yellow-500 mb-3 flex items-center gap-2">
          <FontAwesomeIcon icon={faWrench} />
          기술 스택
        </h3>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech, index) => (
            <TechBadge key={tech} tech={tech} index={index} />
          ))}
        </div>
      </div>

      {/* Highlights */}
      <div>
        <h3 className="text-lg font-bold text-yellow-500 mb-3 flex items-center gap-2">
          <FontAwesomeIcon icon={faStar} />
          주요 성과
        </h3>
        <ul className="space-y-2">
          {project.highlights.map((highlight, index) => (
            <li
              key={index}
              className="flex items-start gap-3 text-gray-300"
            >
              <span className="text-yellow-500 mt-1 text-sm">▸</span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
