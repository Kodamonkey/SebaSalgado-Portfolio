export interface ExperienceEntry {
  date: string;
  title: string;
  company: string;
  location?: string;
  description: string;
  details?: string[];
  keywords: string[];
}

export const experience: ExperienceEntry[] = [
  {
    date: "Feb 2026 - Present",
    title: "Associate Research Software Engineer",
    company: "Centro Astro-Ingeniería UC",
    location: "Remote",
    description:
      "Building GenAI agents, MCP tools, and scientific software for radio astronomy workflows.",
    keywords: [
      "Research Software Engineering",
      "Scientific Computing",
      "GenAI",
      "Radio Astronomy",
      "Astroinformatics",
      "Scientific Workflows",
    ],
  },
  {
    date: "Mar 2026 - Present",
    title: "AI Engineer",
    company: "Itaú Chile",
    location: "Hybrid - Las Condes, Santiago, Chile",
    description:
      "Developing enterprise GenAI systems with AWS Bedrock AgentCore and cloud-native AI architectures.",
    keywords: [
      "GenAI",
      "AWS Bedrock AgentCore",
      "Agents",
      "Cloud AI",
      "Enterprise AI Systems",
    ],
  },
  {
    date: "Apr 2025 - Jan 2026",
    title: "Bachelor's Thesis Research Intern",
    company: "Centro Astro-Ingeniería UC",
    location: "Hybrid",
    description:
      "Extended and operationalized the DRAFTS deep-learning pipeline for fast radio transient and FRB detection.",
    details: [
      "Thesis: DRAFTS++ / DRAFTS-MB, an operational extension of the DRAFTS radio astronomy pipeline for detection and classification of fast radio transients in high-frequency / millimeter regimes.",
      "Defended Jan 22, 2026. Grade: 100/100.",
    ],
    keywords: [
      "Fast Radio Bursts",
      "Deep Learning",
      "Scientific Pipelines",
      "Radio Transients",
      "DRAFTS",
      "PyTorch",
      "Scientific Computing",
    ],
  },
  {
    date: "Oct 2025 - Jan 2026",
    title: "Machine Learning Engineer Intern",
    company: "Centro Nacional de Inteligencia Artificial, CENIA",
    location: "Hybrid",
    description:
      "Applied ML, SQL, BigQuery, RAG applications, and GenAI-oriented development.",
    keywords: ["Machine Learning", "Data Science", "RAG", "BigQuery", "SQL"],
  },
  {
    date: "Aug 2025 - Dec 2025",
    title: "Teaching Assistant Coordinator - Software Engineering",
    company: "Universidad Técnica Federico Santa María",
    location: "Part-time",
    description:
      "Coordinated teaching assistant work for Software Engineering coursework.",
    keywords: [
      "Software Engineering",
      "Teaching Coordination",
      "Course Operations",
    ],
  },
  {
    date: "Mar 2025 - Sep 2025",
    title: "Teaching Assistant - Software Engineering",
    company: "Universidad Técnica Federico Santa María",
    location: "Part-time",
    description:
      "Supported software design, development practices, and project execution coursework.",
    keywords: [
      "Software Design",
      "Development Practices",
      "Project Guidance",
    ],
  },
  {
    date: "Sep 2024 - Jul 2025",
    title: "Software Engineer",
    company: "TwinViz",
    location: "Part-time - Remote",
    description:
      "Built embedded and full-stack systems using PERN stack, Python, AWS, and GitHub Actions CI/CD.",
    keywords: [
      "Python",
      "TypeScript",
      "PERN",
      "PostgreSQL",
      "Express",
      "React",
      "Node.js",
      "CI/CD",
      "GitHub Actions",
      "AWS",
    ],
  },
  {
    date: "Mar 2025 - Jun 2025",
    title: "AI Software Engineer Intern",
    company: "COPEC S.A.",
    location: "Part-time / Hybrid",
    description:
      "Supported a serverless AI workflow for vehicle document classification, extraction, and validation.",
    keywords: [
      "Amazon Bedrock",
      "AWS",
      "Serverless",
      "IaC",
      "Document AI",
      "CloudFormation",
      "Step Functions",
    ],
  },
  {
    date: "Jan 2025 - Feb 2025",
    title: "Internship II",
    company: "Observatorio ALMA",
    location: "On-site",
    description:
      "Built a Python prototype integrating Excel and GLPI for automated IT asset management.",
    keywords: ["ALMA", "Python", "GLPI", "Automation", "Datacenter Support"],
  },
  {
    date: "Jan 2024 - Apr 2024",
    title: "Internship I",
    company: "Agrosuper",
    location: "On-site",
    description:
      "Configured Power Platform, Azure DevOps, GitHub Enterprise Cloud, and CI/CD automations.",
    keywords: [
      "Azure DevOps",
      "GitHub Enterprise Cloud",
      "GitHub Actions",
      "Azure Pipelines",
      "Power Platform",
    ],
  },
];
