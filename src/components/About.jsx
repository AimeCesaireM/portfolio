/**
 * Terminal-style about section.
 * © 2025 Aime Cesaire Mugishawayo — Apache-2.0
 */

import TerminalSection from "./TerminalSection"

const About = () => {
  return (
    <TerminalSection
      id="about"
      command="cat about.txt"
      lines={[
        {
          text: "Hi, I’m Aime Cesaire. I reverse-engineer complex systems and rebuild them with stronger guardrails.",
        },
        {
          text: "My toolkit blends AI research, secure infrastructure design, penetration testing, and full stack development.",
        },
        {
          text: "I chase hard problems: teaching models to reason, stress-testing networks, automating tedious ops.",
        },
        { text: "stats.projects_shipped = 15+" },
        { text: "stats.languages_in_rotation = 6" },
        { text: "stats.years_in_tech = 8" },
        { text: "# next: run `skills --list`", accent: true },
      ]}
    />
  )
}

export default About