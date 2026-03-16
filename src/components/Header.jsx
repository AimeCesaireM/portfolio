import PropTypes from "prop-types"

const primaryLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#/experience" },
  { label: "Projects", href: "#projects" },
  { label: "Connect", href: "#connect" },
]

const Header = ({ detailTitle }) => {
  return (
    <header className="site-header">
      <div className="site-header__left">
        <a href="https://iamecesaire.github.io" className="site-header__brand">
          Aime Cesaire
        </a>
        {detailTitle ? <span className="site-header__crumb">/ {detailTitle}</span> : null}
      </div>

      <div className="site-header__right">
        {detailTitle ? (
          <a href="#projects" className="site-header__back">
            Back to Projects
          </a>
        ) : (
          <nav className="site-header__nav" aria-label="Primary">
            {primaryLinks.map(({ label, href }) => (
              <a key={href} href={href} className="site-header__nav-link">
                {label}
              </a>
            ))}
          </nav>
        )}
        <div className="site-header__quick-links">
          <a href="/portfolio/other/Aime_Cesaire_resume.pdf" target="_blank" rel="noreferrer">
            Resume
          </a>
          <a href="https://github.com/AimeCesaireM" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/aime-cesaire-mugishawayo/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  detailTitle: PropTypes.string,
}

export default Header