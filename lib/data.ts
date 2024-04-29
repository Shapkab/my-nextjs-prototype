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
    responsibilities: ["Work in AutoCad"],
  },
  { title: "Quality assurance engineer", responsibilities: ["Work with Java"] },
  {
    title: "Lead Quality assurance engineer",
    responsibilities: ["Work with Typescript"],
  },
  {
    title: "Junior Frontend engineer",
    responsibilities: ["Work with Next.js", "Work with Vercel"],
  },
] as JobPosition;
