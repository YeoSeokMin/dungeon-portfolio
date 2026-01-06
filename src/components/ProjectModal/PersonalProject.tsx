"use client";

import { Project, TechStack } from "@/types/project";
import { TechBadge } from "@/components/ui/TechBadge";
import { ArchitectureDiagram } from "./ArchitectureDiagram";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faUser,
  faWrench,
  faStar,
  faLink,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

interface PersonalProjectProps {
  project: Project;
}

type TechCategory = keyof TechStack;

const categoryLabels: Record<TechCategory, { label: string; variant: "frontend" | "backend" | "database" | "infra" | "ai" }> = {
  frontend: { label: "Frontend", variant: "frontend" },
  backend: { label: "Backend", variant: "backend" },
  database: { label: "Database", variant: "database" },
  infra: { label: "Infra", variant: "infra" },
  ai: { label: "AI/ML", variant: "ai" },
};

export const PersonalProject = ({ project }: PersonalProjectProps) => {
  const techStack = project.techStack as TechStack;
  const categories = Object.keys(techStack) as TechCategory[];

  return (
    <div className="space-y-6">
      {/* Period and Role */}
      <div className="flex flex-wrap gap-4 text-sm">
        <div className="flex items-center gap-2 text-gray-300">
          <FontAwesomeIcon icon={faCalendarDays} className="text-purple-400" />
          <span>{project.period}</span>
          <span className="text-gray-500">({project.duration})</span>
        </div>
        <div className="flex items-center gap-2 text-gray-300">
          <FontAwesomeIcon icon={faUser} className="text-purple-400" />
          <span>{project.role}</span>
        </div>
      </div>

      {/* Summary */}
      <div className="bg-black/30 rounded-lg p-4 border-l-4 border-purple-500">
        <p className="text-gray-200">{project.summary}</p>
      </div>

      {/* Links */}
      {(project.liveUrl || project.githubUrl) && (
        <div className="flex flex-wrap gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-lg transition-colors"
            >
              <FontAwesomeIcon icon={faLink} />
              Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
            >
              <FontAwesomeIcon icon={faGithub} />
              GitHub
            </a>
          )}
        </div>
      )}

      {/* Tech Stack by Category */}
      <div>
        <h3 className="text-lg font-bold text-purple-400 mb-3 flex items-center gap-2">
          <FontAwesomeIcon icon={faWrench} />
          기술 스택
        </h3>
        <div className="space-y-3">
          {categories.map((category) => {
            const techs = techStack[category];
            if (!techs || techs.length === 0) return null;

            const { label, variant } = categoryLabels[category];

            return (
              <div key={category} className="flex flex-wrap items-center gap-2">
                <span className="text-sm font-semibold text-gray-400 w-20">
                  {label}:
                </span>
                {techs.map((tech, index) => (
                  <TechBadge key={tech} tech={tech} variant={variant} index={index} />
                ))}
              </div>
            );
          })}
        </div>
      </div>

      {/* Highlights */}
      <div>
        <h3 className="text-lg font-bold text-purple-400 mb-3 flex items-center gap-2">
          <FontAwesomeIcon icon={faStar} />
          주요 기능
        </h3>
        <ul className="space-y-2">
          {project.highlights.map((highlight, index) => (
            <li
              key={index}
              className="flex items-start gap-3 text-gray-300"
            >
              <span className="text-purple-400 mt-1 text-sm">▸</span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Architecture Diagram */}
      {project.hasArchitecture && project.architecture && (
        <ArchitectureDiagram
          projectId={project.id}
          architecture={project.architecture}
        />
      )}
    </div>
  );
};
