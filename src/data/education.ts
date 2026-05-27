export interface EducationEntry {
  title: string;
  institution: string;
  date: string;
  description: string;
}

export const education: EducationEntry[] = [
  {
    title: "Computer Science / Civil Informatics Engineer",
    institution: "Universidad Técnica Federico Santa María",
    date: "Completed Dec 2025",
    description:
      "Engineering degree with a technical focus on software engineering, AI, backend systems, cloud computing, and research-oriented software development.",
  },
  {
    title: "National Exchange Mobility",
    institution: "Pontificia Universidad Católica de Chile",
    date: "Jun 2025 - Nov 2025",
    description:
      "Academic exchange period connected to research work at Centro Astro-Ingeniería UC.",
  },
  {
    title: "Thesis: DRAFTS++ / DRAFTS-MB",
    institution: "Radio astronomy deep-learning pipeline",
    date: "Defended Jan 22, 2026 - Grade: 100/100",
    description:
      "Operational extension of a scientific software pipeline for detecting and classifying fast radio transients and Fast Radio Bursts, with work toward high-frequency and millimeter radio astronomy regimes.",
  },
];
