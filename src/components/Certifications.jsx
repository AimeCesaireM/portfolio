/**
 * Terminal-style certifications section.
 * © 2025 Aime Cesaire Mugishawayo — Apache-2.0
 */

import TerminalSection from "./TerminalSection"

const certificationItems = [
  {
    title: "Microsoft Azure Fundamentals (AZ-900)",
    desc: "validated cloud foundations + governance",
    link: "https://learn.microsoft.com/en-us/certifications/azure-fundamentals/",
  },
  {
    title: "Google Cybersecurity Professional Certificate",
    desc: "SOC practices, detection engineering, response",
    link: "https://www.coursera.org/professional-certificates/google-cybersecurity",
  },
]

const Certifications = () => {
  return (
    <TerminalSection
      id="certifications"
      command="certifications --show"
      lines={[
        { text: "# verified learning", accent: true },
        ...certificationItems.map(({ title, desc, link }) => ({
          text: `- ${title} :: ${desc}`,
          href: link,
        })),
        { text: "# final prompt: `open contacts --all`", accent: true },
      ]}
    />
  )
}

export default Certifications