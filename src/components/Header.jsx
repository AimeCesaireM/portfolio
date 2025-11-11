/**
 * Terminal-inspired header bar.
 * © 2025 Aime Cesaire Mugishawayo — Apache-2.0
 */

const Header = () => {
  return (
    <header className="terminal-header">
      <div className="terminal-header__controls">
        <span className="terminal-header__dot terminal-header__dot--close" />
        <span className="terminal-header__dot terminal-header__dot--minimize" />
        <span className="terminal-header__dot terminal-header__dot--expand" />
      </div>

      <p className="terminal-header__title">portfolio@aime:~ — interactive shell</p>
    </header>
  )
}

export default Header