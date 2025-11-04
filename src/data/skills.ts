export interface Skill {
  id: number;
  title: string;
  description: string;
  icon: string;
  iconColor: string;
  tags: string[];
}

export const skills: Skill[] = [
  {
    id: 1,
    title: "Backend Development",
    description: "Proficient in PHP (Laravel, CodeIgniter) and MySQL databases. Capable of designing RESTful APIs and management systems.",
    icon: "fas fa-laptop-code",
    iconColor: "text-accent-purple",
    tags: ["Laravel", "PHP", "MySQL", "REST API"]
  },
  {
    id: 2,
    title: "UI/UX Design",
    description: "Expert in Figma for prototyping and wireframing. Understanding of user-centered design principles for digital products.",
    icon: "fas fa-paint-brush",
    iconColor: "text-accent-blue",
    tags: ["Figma", "Wireframing", "Prototyping", "Research"]
  },
  {
    id: 3,
    title: "Technical Documentation",
    description: "Skilled in creating technical and non-technical documentation, along with analyzing system requirements.",
    icon: "fas fa-file-alt",
    iconColor: "text-accent-cyan",
    tags: ["Notion", "Swagger", "Flowcharts", "Analysis"]
  },
  {
    id: 4,
    title: "Project & Team Management",
    description: "Proven ability as a Team Lead, ensuring efficient task division, coordination, and on-time project completion.",
    icon: "fas fa-users-cog",
    iconColor: "text-accent-blue",
    tags: ["Team Leadership", "Task Allocation", "Coordination", "Gantt Chart"]
  }
];

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  color: string;
}

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/rifkihariyanto25",
    icon: "fab fa-github",
    color: "accent-purple"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/rifki-aditya-hariyanto-2662821a7/",
    icon: "fab fa-linkedin-in",
    color: "accent-blue"
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@rifkiadityahariyanto6958",
    icon: "fab fa-youtube",
    color: "red-500"
  },
  {
    name: "Instagram",
    url: "#",
    icon: "fab fa-instagram",
    color: "accent-cyan"
  }
];