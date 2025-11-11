/**
 * TerminalSection renders a CLI-style block with a command prompt
 * followed by sequentially typed response lines.
 * © 2025 Aime Cesaire Mugishawayo — Apache-2.0
 */

import PropTypes from "prop-types"
import Typewriter from "./Typewriter"

const DEFAULT_PROMPT = "visitor@portfolio:~$"
const DEFAULT_SPEED = 14
const DEFAULT_GAP = 360

const normalizeLines = (lines) =>
  lines.map((line) =>
    typeof line === "string"
      ? { text: line }
      : {
          text: line.text ?? "",
          href: line.href,
          accent: Boolean(line.accent),
          caret: Boolean(line.caret),
          gap: line.gap,
          speed: line.speed,
          className: line.className ?? "",
        }
  )

const buildHrefProps = (href = "") => {
  if (!href || href.startsWith("#")) {
    return {}
  }

  return {
    target: "_blank",
    rel: "noreferrer",
  }
}

const TerminalSection = ({
  id,
  command,
  lines,
  prompt = DEFAULT_PROMPT,
  speed = DEFAULT_SPEED,
  gap = DEFAULT_GAP,
  className = "",
}) => {
  const commandText = `${prompt} ${command}`.trimEnd()
  let delay = 240

  const sequence = [
    <Typewriter
      key="command"
      text={commandText}
      speed={speed}
      startDelay={delay}
      as="div"
      className="terminal-line terminal-line--command"
    />,
  ]

  delay += commandText.length * speed + gap

  normalizeLines(lines).forEach((line, index) => {
    const lineDelay = delay
    const lineSpeed = line.speed ?? speed
    const lineGap = line.gap ?? gap

    const lineElement = (
      <Typewriter
        key={`line-${index}`}
        text={line.text}
        speed={lineSpeed}
        startDelay={lineDelay}
        caret={line.caret}
        as="div"
        className={`terminal-line ${line.accent ? "terminal-line--accent" : ""} ${line.className}`}
      />
    )

    if (line.href) {
      sequence.push(
        <a
          key={`line-${index}-link`}
          href={line.href}
          className="terminal-link"
          {...buildHrefProps(line.href)}
        >
          {lineElement}
        </a>
      )
    } else {
      sequence.push(lineElement)
    }

    delay = lineDelay + line.text.length * lineSpeed + lineGap
  })

  return (
    <section id={id} className={`terminal-section ${className}`}>
      {sequence}
    </section>
  )
}

TerminalSection.propTypes = {
  id: PropTypes.string,
  command: PropTypes.string.isRequired,
  lines: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        text: PropTypes.string.isRequired,
        href: PropTypes.string,
        accent: PropTypes.bool,
        caret: PropTypes.bool,
        gap: PropTypes.number,
        speed: PropTypes.number,
        className: PropTypes.string,
      }),
    ])
  ).isRequired,
  prompt: PropTypes.string,
  speed: PropTypes.number,
  gap: PropTypes.number,
  className: PropTypes.string,
}

export default TerminalSection
