/**
 * Terminal-style hero section.
 * © 2025 Aime Cesaire Mugishawayo — Apache-2.0
 */

import TerminalSection from "./TerminalSection"

const Hero = () => {
  return (
    <TerminalSection
      id="home"
      command="whoami"
      lines={[
        { text: "name: Aime Cesaire Mugishawayo" },
        { text: "role: systems builder // security explorer // AI tinkerer" },
        { text: "location: Amherst College — graduated 2025" },
        { text: "focus: intelligent systems, secure infrastructure, resilient code" },
        {
          text: "resume -> ./other/resume.pdf",
          href: "/other/resume.pdf",
        },
        {
          text: "github -> https://github.com/AimeCesaireM",
          href: "https://github.com/AimeCesaireM",
        },
        {
          text: "linkedin -> https://www.linkedin.com/in/aime-cesaire-mugishawayo/",
          href: "https://www.linkedin.com/in/aime-cesaire-mugishawayo/",
        }
      ]}
    />
  )
}

export default Hero