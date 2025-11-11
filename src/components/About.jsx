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
          text: "Hi, I’m Aime Cesaire. I dabble in complex and resilient systems.",
        },
        {
          text: "My toolkit blends AI, secure infrastructure design, penetration testing, and full stack development.",
        },
        {
          text: "I chase hard problems: teaching models to reason, stress-testing networks, automating tedious ops.",
        },
        { text: "projects_shipped = 15+" },
        { text: "technologies_in_rotation = 6" },
        { text: "years_in_tech = 8" },
      ]}
    />
  )
}

export default About