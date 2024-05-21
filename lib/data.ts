import { ContactsLinks, ImgData, JobPosition, Links } from " /lib/defenitions";

export const links = [
  { name: "Home", href: "/" },
  { name: "About my work experience", href: "/about" },
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
      "Configuring CI/CD",
      "Create from 0 to 1 Automation testing project",
    ],
  },
  {
    title: "Junior Frontend engineer",
    skills: ["Next.js", "Vercel", "Tailwind", "Git"],
    responsibilities: ["Planning sprint"],
  },
] as JobPosition;

export const imgCarousel: ImgData = [
  {
    image: "https://picsum.photos/seed/random101/500/500",
  },
  {
    image: "https://picsum.photos/seed/random105/500/500",
  },
  {
    image: "https://picsum.photos/seed/random106/500/500",
  },
] as ImgData;

export const contactRef: ContactsLinks = {
  email: "+++",
  wa: "++++++",
  inst: "++++++++",
  github: "https://github.com/Shapkab?tab=repositories",
} as ContactsLinks;
