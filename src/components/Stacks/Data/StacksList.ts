import csharpLogo from "@/public/assets/images/stacks/backend/csharp.svg";
import javaLogo from "@/public/assets/images/stacks/backend/java.svg";
import nodejsLogo from "@/public/assets/images/stacks/backend/nodejs.svg";
import mongodbLogo from "@/public/assets/images/stacks/database/mongodb.svg";
import mysqlLogo from "@/public/assets/images/stacks/database/mysql.svg";
import postgresLogo from "@/public/assets/images/stacks/database/postgresql.svg";
import awsLogo from "@/public/assets/images/stacks/devops/aws.svg";
import dockerLogo from "@/public/assets/images/stacks/devops/docker.svg";
import kubernetesLogo from "@/public/assets/images/stacks/devops/kubernetes.svg";
import nextLogo from "@/public/assets/images/stacks/frontend/nextjs.svg";
import reactLogo from "@/public/assets/images/stacks/frontend/react.png";
import typescriptLogo from "@/public/assets/images/stacks/frontend/typescript.png";

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
      { name: "Typescript", icon: typescriptLogo },
      { name: "React", icon: reactLogo },
      { name: "Next.js", icon: nextLogo },
    ],
  },
  {
    area: "Backend",
    techs: [
      { name: "Node.js", icon: nodejsLogo },
      { name: "Java", icon: javaLogo },
      { name: "C#", icon: csharpLogo },
    ],
  },
  {
    area: "Database",
    techs: [
      { name: "MongoDB", icon: mongodbLogo },
      { name: "PostgreSQL", icon: postgresLogo },
      { name: "MySQL", icon: mysqlLogo },
    ],
  },
  {
    area: "DevOps",
    techs: [
      { name: "Docker", icon: dockerLogo },
      { name: "Kubernetes", icon: kubernetesLogo },
      { name: "AWS", icon: awsLogo },
    ],
  },
];
