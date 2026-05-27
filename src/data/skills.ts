export interface ToolItem {
  name: string;
  icon: string;
  iconUrl?: string;
}

export interface ToolCategory {
  title: string;
  items: ToolItem[];
}

export interface CapabilityCategory {
  title: string;
  items: string[];
}

export const toolCategories: ToolCategory[] = [
  {
    title: "Languages",
    items: [
      { name: "Python", icon: "python" },
      {
        name: "TypeScript",
        icon: "typescript",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      { name: "JavaScript", icon: "javascript" },
      { name: "SQL", icon: "sql" },
      { name: "C", icon: "c" },
      { name: "C++", icon: "cpp" },
      { name: "Java", icon: "java" },
      { name: "Go", icon: "go" },
    ],
  },
  {
    title: "Backend & Frontend",
    items: [
      { name: "Node.js", icon: "node" },
      { name: "Express.js", icon: "express" },
      {
        name: "NestJS",
        icon: "nestjs",
        iconUrl: "https://cdn.simpleicons.org/nestjs",
      },
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "next" },
      { name: "Astro", icon: "astro" },
      { name: "Django", icon: "django" },
      { name: "Tailwind CSS", icon: "tailwind" },
    ],
  },
  {
    title: "Data & ML",
    items: [
      {
        name: "PyTorch",
        icon: "pytorch",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
      },
      {
        name: "TensorFlow / Keras",
        icon: "tensorflow",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
      },
      {
        name: "BigQuery",
        icon: "bigquery",
        iconUrl: "https://cdn.simpleicons.org/googlebigquery",
      },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "Sequelize", icon: "sequelize" },
      { name: "YOLOv8", icon: "yolo" },
      { name: "CVAT", icon: "cvat" },
    ],
  },
  {
    title: "Cloud & Infrastructure",
    items: [
      { name: "AWS", icon: "aws" },
      {
        name: "Amazon Bedrock",
        icon: "bedrock",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/aws-amazon-bedrock/default.svg",
      },
      {
        name: "Lambda",
        icon: "lambda",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/aws-aws-lambda/default.svg",
      },
      {
        name: "Step Functions",
        icon: "stepfunctions",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/aws-aws-step-functions/default.svg",
      },
      {
        name: "CloudFormation",
        icon: "cloudformation",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/aws-aws-cloudformation/default.svg",
      },
      {
        name: "API Gateway",
        icon: "apigateway",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/aws-amazon-api-gateway/default.svg",
      },
      {
        name: "S3",
        icon: "s3",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/aws-amazon-simple-storage-service/default.svg",
      },
      {
        name: "DynamoDB",
        icon: "dynamodb",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/aws-amazon-dynamodb/default.svg",
      },
      { name: "Docker", icon: "docker" },
      { name: "Ubuntu", icon: "ubuntu" },
      { name: "Linux", icon: "linux" },
    ],
  },
  {
    title: "DevOps & Automation",
    items: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "GitHub Actions", icon: "githubactions" },
      { name: "CI/CD", icon: "cicd" },
      { name: "Azure DevOps", icon: "azuredevops" },
      { name: "Azure Pipelines", icon: "azurepipelines" },
      { name: "GitHub Enterprise", icon: "github" },
      { name: "Power Automate", icon: "powerautomate" },
      { name: "Power Apps", icon: "powerapps" },
      { name: "Power Platform", icon: "powerplatform" },
      { name: "Excel", icon: "excel" },
    ],
  },
  {
    title: "Research Tooling",
    items: [
      { name: "MCP", icon: "mcp" },
      {
        name: "PRESTO",
        icon: "presto",
        iconUrl: "https://cdn.simpleicons.org/presto",
      },
      { name: "FITS / PSRFITS", icon: "fits" },
      { name: "GLPI", icon: "glpi" },
      { name: "GNS3", icon: "gns3" },
      { name: "Figma", icon: "figma" },
    ],
  },
];

export const capabilityCategories: CapabilityCategory[] = [
  {
    title: "AI / ML / GenAI",
    items: [
      "Machine Learning",
      "Deep Learning",
      "RAG",
      "LLMs",
      "GenAI Systems",
      "Prompt Engineering",
      "Model Evaluation",
      "AI Agents",
    ],
  },
  {
    title: "Research & Scientific Computing",
    items: [
      "Research Software Engineering",
      "Scientific Computing",
      "Radio Astronomy",
      "Astroinformatics",
      "Fast Radio Bursts",
      "Scientific Pipelines",
      "Signal Processing",
      "Reproducible Workflows",
    ],
  },
  {
    title: "Engineering Scope",
    items: [
      "Backend Engineering",
      "Full-stack Development",
      "Serverless",
      "IaC",
      "APIs",
      "Cloud AI",
      "Document AI",
      "Workflow Automation",
    ],
  },
];
