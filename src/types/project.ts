export interface TechStack {
  frontend?: string[];
  backend?: string[];
  database?: string[];
  infra?: string[];
  ai?: string[];
}

export interface Architecture {
  client: string;
  server: string;
  database: string;
  auth: string;
  deploy: string;
  special: string[];
}

export interface Project {
  id: string;
  name: string;
  period: string;
  duration: string;
  type: "company" | "personal";
  summary: string;
  role: string;
  techStack: string[] | TechStack;
  highlights: string[];
  hasArchitecture: boolean;
  architecture?: Architecture;
  liveUrl?: string;
  githubUrl?: string;
}

export interface DungeonNode {
  id: string;
  project: Project | null;
  position: { x: number; y: number };
  icon: string;
  label: string;
  connections: string[];
  type: "entrance" | "company" | "personal" | "boss";
}

export interface Position {
  x: number;
  y: number;
}
