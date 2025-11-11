/**
 * Terminal-style skills section.
 * © 2024-2025 Aime Cesaire Mugishawayo — Apache-2.0
 */

import TerminalSection from "./TerminalSection"

const skillItems = [
  { title: "Python", desc: "AI research, backend services" },
  { title: "Java", desc: "systems programming, tooling" },
  { title: "Hugging Face", desc: "NLP pipelines, fine-tuning" },
  { title: "Flutter", desc: "cross-platform product delivery" },
  { title: "Solidity", desc: "web3 governance + auditing" },
  { title: "Node.js", desc: "APIs, automation, ops tooling" },
  { title: "React", desc: "front-end experiments" },
  { title: "TailwindCSS", desc: "rapid UI prototyping" },
  { title: "PostgreSQL", desc: "relational modeling, analytics" },
  { title: "MySQL", desc: "transaction-heavy workloads" },
  { title: "AWS & Azure", desc: "cloud infrastructure + DevOps" },
  { title: "Docker", desc: "container orchestration" },
]

const Skills = () => {
  return (
    <TerminalSection
      id="skills"
      command="skills --list"
      lines={[
        { text: "# core stack", accent: true },
        ...skillItems.map(({ title, desc }) => ({
          text: `- ${title} :: ${desc}`,
        })),
        { text: "# try `ls projects/`", accent: true },
      ]}
    />
  )
}

export default Skills