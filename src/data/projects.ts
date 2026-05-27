export interface ProjectEntry {
  title: string;
  type: string;
  description: string;
  technologies: string[];
  github?: string;
  link?: string;
  image?: string;
  imageAlt?: string;
  featured?: boolean;
}

export const projects: ProjectEntry[] = [
  {
    title: "DRAFTS-UC / DRAFTS++ / DRAFTS-MB",
    type: "Research software / scientific computing / deep learning pipeline",
    description:
      "Deep-learning pipeline for fast radio transient and FRB detection. Work focused on robustness, deployment, reproducibility, and high-frequency / millimeter radio astronomy regimes.",
    technologies: [
      "Python",
      "PyTorch",
      "Deep Learning",
      "Scientific Computing",
      "Radio Astronomy",
      "FRBs",
      "FITS/PSRFITS",
      "Docker",
      "GPU/CPU Workflows",
    ],
    github: "https://github.com/Kodamonkey/DRAFTS-UC",
    featured: true,
  },
  {
    title: "MCP-Server-PRESTO",
    type: "AI agents / MCP / radio astronomy tooling",
    description:
      "MCP server for PRESTO-oriented radio astronomy workflows, enabling controlled LLM access to scientific tools with reproducible execution patterns.",
    technologies: [
      "Python",
      "MCP",
      "PRESTO",
      "Docker",
      "Scientific Workflows",
      "Radio Astronomy",
      "LLM Tools",
      "Agentic Systems",
    ],
    github: "https://github.com/Kodamonkey/MCP-Server-PRESTO",
    featured: true,
  },
  {
    title: "Smart Canchas USM",
    type: "Production university system / automation",
    description:
      "UTFSM sports court booking workflow focused on cleaner reservations and operational efficiency.",
    technologies: ["Microsoft Power Automate", "Excel", "Process Automation"],
    image: "/projects/smartCanchas.webp",
    imageAlt: "Power Automate workflow used for the Smart Canchas USM system",
    featured: true,
  },
  {
    title: "Serverless AI Document Processing System",
    type: "Enterprise AI / serverless system",
    description:
      "Serverless AI workflow for vehicle document classification, extraction, and validation at COPEC.",
    technologies: [
      "AWS",
      "Amazon Bedrock",
      "Step Functions",
      "CloudFormation",
      "Serverless",
      "IaC",
    ],
    featured: true,
  },
  {
    title: "Digicore",
    type: "Secondary project / network automation prototype",
    description:
      "Intent-based network prototype that converts natural-language commands into simulated network configurations.",
    technologies: ["Python", "React", "Django", "GNS3"],
    github: "https://github.com/INF225-2023-2-P201/02-digicore?tab=readme-ov-file",
    image: "/projects/Digicore.png",
    imageAlt: "Digicore command generator interface",
  },
];
