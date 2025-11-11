/**
 * Terminal-style skills section.
 * © 2024-2025 Aime Cesaire Mugishawayo — Apache-2.0
 */

import TerminalSection from "./TerminalSection";

const skillItems = [
  { title: "Python, Django", desc: "Fast prototyping, REST APIs" },
  { title: "PyTorch, Hugging Face", desc: "Deep Learning, NLP pipelines, LLM fine-tuning" },
  { title: "Rust, C++", desc: "low-level systems programming" },
  { title: "C#, ASP.NET Core", desc: "systems programming, tooling" },
  { title: "React Native", desc: "cross-platform mobile" },
  { title: "Node.js, TypeScript, React", desc: "Web development" },
  { title: "Postgres, MongoDB", desc: "databases" },
  { title: "AWS & Azure", desc: "cloud infrastructure" },
  { title: "Docker", desc: "container orchestration" },
];

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
      ]}
    />
  );
};

export default Skills;
