export interface Experience {
  id: number;
  title: string;
  company: string;
  type: string;
  duration: string;
  location: string;
  description: string[];
  skills: string[];
  isLeft: boolean;
}

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Junior Programmer",
    company: "PT. NOCOLA IoT SOLUTION",
    type: "Internship",
    duration: "Dec 2020 - May 2021 · 6 mos",
    location: "Cilacap, Central Java, Indonesia · On-site",
    description: [
      "Assisted in creating a company product profile website using WordPress, focusing on designing a user-friendly interface and ensuring smooth navigation",
      "Wordpress Development, Web Development and +2 skills"
    ],
    skills: ["WordPress Development", "Web Development"],
    isLeft: true
  },
  {
    id: 2,
    title: "Web Developer",
    company: "Dinas Kominfo Kota Semarang",
    type: "Internship",
    duration: "Jul 2025 - Present · 4 mos",
    location: "Semarang, Central Java, Indonesia · On-site",
    description: [
      "Project Management, Web Development and +1 skill"
    ],
    skills: ["Project Management", "Web Development"],
    isLeft: false
  },
  {
    id: 3,
    title: "Web Developer",
    company: "Cazh",
    type: "Internship",
    duration: "Jul 2025 - Present · 4 mos",
    location: "Banyumas, Central Java, Indonesia · Remote",
    description: [
      "Visual Web Developer, PHP and +2 skills"
    ],
    skills: ["Visual Web Developer", "PHP"],
    isLeft: true
  }
];