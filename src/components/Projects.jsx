/**
 * Terminal-style projects section.
 * © 2024-2025 Aime Cesaire Mugishawayo — Apache-2.0
 */

import TerminalSection from "./TerminalSection"

const works = [
  {
    title: "Mammoth Rumble",
    subtitle: "decentralized voting platform",
    tags: ["Solidity", "Web3", "React", "Ethers"],
    link: "https://github.com/AimeCesaireM/Decentralized-Voting",
  },
  {
    title: "Madame Saville",
    subtitle: "market intelligence tool",
    tags: ["Regression", "Data Science", "Python", "Flask"],
    link: "https://github.com/AimeCesaireM/madame_saville",
    demo: "https://www.loom.com/share/709ba366e40d4b27af0e8161769bac28?sid=854c5a84-433b-46a9-83c3-8cd7419f5551",
  },
  {
    title: "Foodback",
    subtitle: "LLM-powered food waste management",
    tags: ["LLMs", "Express.js", "Hugging Face", "Computer Vision"],
    link: "https://github.com/AimeCesaireM/foodback",
  },
  {
    title: "Intelligent Pacman bots",
    subtitle: "competitive search agents",
    tags: ["Adversarial Search", "Q-Learning", "Python"],
    link: "https://github.com/AimeCesaireM/AI-Projects",
  },
  {
    title: "Phase1",
    subtitle: "steganography detector",
    tags: ["Steganography", "Java", "Swing"],
    link: "https://github.com/AimeCesaireM/Steganography-Detector",
    demo: "https://sourceforge.net/projects/steganography-detector/",
  },
  {
    title: "energive",
    subtitle: "statistical attack on the Vigenère cipher",
    tags: ["Cryptanalysis", "Number Theory", "Python"],
    link: "https://github.com/AimeCesaireM/ecc-cryptography",
    demo: "https://sourceforge.net/projects/enervige/",
  },
  {
    title: "Soccer Data Analytics",
    subtitle: "predictive modeling for EPL",
    tags: ["Machine Learning", "Regression Models", "Python"],
    link: "https://github.com/AimeCesaireM/PremierLeagueMLProject",
  },
]

const formatTags = (tags) => tags.join(", ")

const Projects = () => {
  return (
    <TerminalSection
      id="projects"
      command="ls projects/"
      lines={[
        { text: "# select projects", accent: true },
        ...works.flatMap(({ title, subtitle, tags, link, demo }, index) => {
          const label = `project[${String(index + 1).padStart(2, "0")}] ${title} — ${subtitle}`
          const details = `  stack => ${formatTags(tags)}`

          const entries = [
            {
              text: label,
              href: link,
            },
            {
              text: details,
            },
          ]

          if (demo) {
            entries.push({
              text: `  demo => ${demo}`,
              href: demo,
            })
          }

          return entries
        }),
        { text: "# next command: `courses --recent`", accent: true },
      ]}
    />
  )
}

export default Projects