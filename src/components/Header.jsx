/**
 * Terminal-inspired header bar.
 * © 2025 Aime Cesaire Mugishawayo — Apache-2.0
 */

const Header = () => {
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Connect", href: "#connect" },
  ]

  return (
    <header className="terminal-header">
      <div className="terminal-header__left">
        <div className="terminal-header__controls" aria-hidden="true">
          <span className="terminal-header__dot terminal-header__dot--close" />
          <span className="terminal-header__dot terminal-header__dot--minimize" />
          <span className="terminal-header__dot terminal-header__dot--expand" />
        </div>
        <a href="https://iamecesaire.github.io" className="terminal-header__brand">
          Aime Cesaire
        </a>
      </div>

      <nav className="terminal-header__nav" aria-label="Primary navigation">
        {navItems.map(({ label, href }) => (
          <a key={href} href={href} className="terminal-header__nav-link">
            {label}
          </a>
        ))}
      </nav>
    </header>
  )
}

export default Header