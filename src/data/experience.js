export const experiences = [
  {
    id: "gratz-systems-engineer",
    period: "Jun 2025 - Present",
    title: "Systems & Software Engineer",
    org: "Gratz Pilates",
    location: "Philadelphia, PA",
    story:
      "I joined as the only engineer and inherited a landscape of disconnected SaaS tools, manual data entry between systems, and no automation. My job was to make the technology actually work together -- building the integrations, writing the automation, hardening the security, and managing the infrastructure across AWS, Azure, Digital Ocean, and on-prem servers.",
    highlights: [
      "Designed and shipped the HubSpot-to-Fishbowl order sync and the Shopify-Fishbowl validation pipeline, eliminating manual order re-entry.",
      "Built Python and PowerShell automation for monitoring, API health checks, and scheduled backups across production systems.",
      "Managed a mixed infrastructure stack: Linux/Apache, Windows Server, and three cloud providers.",
      "Hardened IAM and RBAC policies across on-prem, PaaS, and SaaS systems after identifying gaps in existing access controls.",
      "Reverse-engineered and fixed a critical Fishbowl integration bug that had been silently corrupting order data.",
      "Improved internal AI agent accuracy by restructuring prompts with context engineering and RAG patterns.",
    ],
  },
  {
    id: "amherst-it-support",
    period: "Sep 2022 - May 2025",
    title: "IT Support Engineer",
    org: "Amherst College",
    location: "Amherst, MA",
    story:
      "Three years supporting the technology behind a liberal arts campus -- diagnosing outages, managing device fleets, and building automation to keep a small team responsive to 3,000+ escalations a year. This is where I learned to debug under pressure and think about systems at scale.",
    highlights: [
      "Led 20+ root-cause investigations into major software outages, using API tracing and browser tooling to isolate failures.",
      "Managed lifecycle and configuration of campus hardware and software through JAMF Pro and Microsoft Intune.",
      "Automated ticket triage workflows that cut average response time by 50% across 3K+ annual escalations.",
      "Supported a campus-wide MFA rollout that contributed to an 80% drop in security incidents.",
    ],
  },
  {
    id: "amherst-ai-program-assistant",
    period: "Sep 2022 - May 2023",
    title: "Program Assistant for AI in the Liberal Arts",
    org: "Amherst College",
    location: "Amherst, MA",
    story:
      "Bridged the gap between AI research and a liberal arts audience -- prototyping models, writing accessible summaries of technical papers, and organizing events that brought AI practitioners to campus.",
    highlights: [
      "Prototyped and evaluated LLMs, diffusion models, GANs, and multimodal architectures for educational demonstrations.",
      "Produced 50+ article summaries translating AI research papers for a non-technical audience.",
      "Co-organized six expert panels drawing 5K+ attendees, helping grow program membership 3x.",
    ],
  },
]
