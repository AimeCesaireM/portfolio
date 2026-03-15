/**
 * Terminal-style experience section.
 * © 2026 Aime Cesaire Mugishawayo — Apache-2.0
 */

import TerminalSection from "./TerminalSection"

const experiences = [
  {
    role: "Software Engineer Intern",
    org: "Scale AI",
    period: "Summer 2024",
    focus: "Built evaluation tooling for LLM data quality and model feedback loops.",
  },
  {
    role: "Teaching Assistant",
    org: "Amherst College Computer Science",
    period: "2022-2025",
    focus: "Mentored students in algorithms, systems, and practical debugging workflows.",
  },
  {
    role: "Independent Builder",
    org: "Open Source + Personal Labs",
    period: "Ongoing",
    focus: "Shipped AI, security, and systems experiments from concept to deployable prototypes.",
  },
]

const Experience = () => {
  return (
    <TerminalSection
      id="experience"
      command="cat experience.log"
      lines={[
        { text: "# selected experience", accent: true },
        ...experiences.flatMap(({ role, org, period, focus }) => [
          { text: `- ${role} @ ${org}` },
          { text: `  period => ${period}` },
          { text: `  focus  => ${focus}` },
        ]),
      ]}
    />
  )
}

export default Experience
