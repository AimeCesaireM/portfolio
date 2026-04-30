import useScrollReveal from "../hooks/useScrollReveal"

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/AimeCesaireM",
    desc: "code, experiments, and shipped prototypes",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/aime-cesaire-mugishawayo/",
    desc: "career updates and collaborations",
  },
  {
    label: "Substack",
    href: "https://timeundertensors.substack.com",
    desc: "systems, AI, and security writing",
  },
  {
    label: "Handshake",
    href: "https://amherst.joinhandshake.com/profiles/33363579",
    desc: "campus recruiting and opportunities",
  },
  {
    label: "Email",
    href: "mailto:aimecesaire.thespecialist@gmail.com",
    desc: "direct reach-out",
  },
]

const Connect = () => {
  const ref = useScrollReveal()
  return (
    <section ref={ref} id="connect" className="section-card section-stack scroll-reveal">
      <p className="section-kicker">Connect</p>
      <h2>Let&apos;s build something meaningful</h2>
      <div className="connect-grid">
        {socialLinks.map(({ label, href, desc }) => (
          <a key={label} href={href} target="_blank" rel="noreferrer" className="connect-card">
            <div>
              <span className="connect-card__label">{label}</span>
              <p className="connect-card__desc">{desc}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Connect
