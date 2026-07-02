import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiMongoose,
  SiPrisma,
  SiRedux,
  SiGit,
  SiUbuntu,
  SiVercel,
  SiReactquery,
} from "react-icons/si";

export const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
    ],
  },
  {
    title: "Frontend",
    skills: [
      {
        name: "React",
        icon: <SiReact className="text-[#61DAFB] animate-spin-slow" />,
      },
      { name: "Next.js", icon: <SiNextdotjs className="text-current" /> },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-[#06B6D4]" />,
      },
    ],
  },
  {
    title: "Backend & ORMs",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
      { name: "Express.js", icon: <SiExpress className="text-current" /> },
      { name: "Mongoose", icon: <SiMongoose className="text-[#880000]" /> },
      { name: "Prisma", icon: <SiPrisma className="text-[#2D3748]" /> },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" /> },
    ],
  },
  {
    title: "State Management & Data",
    skills: [
      { name: "Redux / RTK", icon: <SiRedux className="text-[#764ABC]" /> },
      {
        name: "TanStack Query",
        icon: <SiReactquery className="text-[#FF4154]" />,
      },
    ],
  },
  {
    title: "Tools & OS",
    skills: [
      { name: "Git", icon: <SiGit className="text-[#F05032]" /> },
      { name: "Ubuntu", icon: <SiUbuntu className="text-[#E95420]" /> },
      { name: "Vercel", icon: <SiVercel className="text-current" /> },
    ],
  },
];
