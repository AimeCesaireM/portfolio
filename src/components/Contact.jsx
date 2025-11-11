/**
 * Terminal-style contact section.
 * © 2025 Aime Cesaire Mugishawayo — Apache-2.0
 */

import TerminalSection from "./TerminalSection"

const socialLinks = [
  {
    label: "github",
    href: "https://github.com/AimeCesaireM",
    desc: "source code, experiments, work-in-progress",
  },
  {
    label: "linkedin",
    href: "https://www.linkedin.com/in/aime-cesaire-mugishawayo/",
    desc: "career updates + collaboration",
  },
  {
    label: "handshake",
    href: "https://amherst.joinhandshake.com/profiles/33363579",
    desc: "campus recruiting + opportunities",
  },
  {
    label: "substack",
    href: "https://aimecesaire.substack.com",
    desc: "notes on systems, AI, and security",
  },
  {
    label: "email",
    href: "mailto:amugishawayo25@amherst.edu",
    desc: "direct reach-out",
  },
]

const Contact = () => {
  return (
    <TerminalSection
      id="contact"
      command="open contacts --all"
      lines={[
        { text: "# connect with me", accent: true },
        ...socialLinks.map(({ label, href, desc }) => ({
          text: `- ${label} => ${href} (${desc})`,
          href,
        })),
        { text: "# session complete. ctrl+c to exit.", accent: true, caret: true },
      ]}
    />
  )
}

export default Contact