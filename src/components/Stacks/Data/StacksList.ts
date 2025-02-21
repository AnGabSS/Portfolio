interface TechInterface {
  name: string;
  icon: string;
}

export interface StacksInterface {
  area: string;
  techs: TechInterface[];
}

export const StacksList: StacksInterface[] = [
  {
    area: "Frontend",
    techs: [
      { name: "Typescript", icon: "typescript" },
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
    ],
  },
  {
    area: "Backend",
    techs: [
      { name: "Node.js", icon: "nodejs" },
      { name: "Express", icon: "express" },
      { name: "Java", icon: "Java" },
    ],
  },
  {
    area: "Database",
    techs: [
      { name: "MongoDB", icon: "mongodb" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "MySQL", icon: "mysql" },
    ],
  },
  {
    area: "DevOps",
    techs: [
      { name: "Docker", icon: "docker" },
      { name: "Kubernetes", icon: "kubernetes" },
      { name: "AWS", icon: "aws" },
    ],
  },
];
