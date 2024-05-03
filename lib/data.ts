import { JobPosition, Links } from " /lib/defenitions";

export const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Additional info", href: "/additional" },
] as Links;

export const jobExperiences: JobPosition = [
  {
    title: "Industrial civil engineering",
    skills: ["AutoCad", "Scad", "Excel"],
    responsibilities: ["Planning"],
  },
  {
    title: "Quality assurance engineer",
    skills: ["Java"],
    responsibilities: ["Create test script"],
  },
  {
    title: "Lead Quality assurance engineer",
    skills: ["Typescript"],
    responsibilities: [
      "Planning sprint",
      "Managing tasks",
      "Create test script",
      "Check pull request",
    ],
  },
  {
    title: "Junior Frontend engineer",
    skills: ["Next.js", "Vercel", "Tailwind", "Git"],
    responsibilities: ["Planning sprint"],
  },
] as JobPosition;
