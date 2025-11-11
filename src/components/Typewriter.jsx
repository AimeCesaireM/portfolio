/**
 * Simple typewriter component that reveals characters over time.
 * © 2025 Aime Cesaire Mugishawayo — Apache-2.0
 */

import { useEffect, useRef, useState } from "react"
import PropTypes from "prop-types"

const Typewriter = ({
  text,
  speed = 14,
  startDelay = 0,
  caret = true,
  as: Component = "span",
  className = "",
}) => {
  const [output, setOutput] = useState("")
  const typeTimeout = useRef()
  const startTimeout = useRef()

  useEffect(() => {
    clearTimeout(startTimeout.current)
    clearTimeout(typeTimeout.current)

    let index = 0
    let cancelled = false
    setOutput("")

    if (text.length === 0) {
      return () => {
        cancelled = true
      }
    }

    const type = () => {
      if (cancelled) {
        return
      }

      setOutput((prev) => (index === 0 ? text.charAt(0) : text.slice(0, index + 1)))
      index += 1

      if (index < text.length) {
        typeTimeout.current = setTimeout(type, speed)
      }
    }

    startTimeout.current = setTimeout(type, startDelay)

    return () => {
      cancelled = true
      clearTimeout(startTimeout.current)
      clearTimeout(typeTimeout.current)
    }
  }, [text, speed, startDelay])

  const isComplete = output.length === text.length

  return (
    <Component className={`typewriter ${className}`}>
      {output}
      {caret && !isComplete ? (
        <span className="typewriter-caret" aria-hidden="true">
          ▋
        </span>
      ) : null}
    </Component>
  )
}

Typewriter.propTypes = {
  text: PropTypes.string.isRequired,
  speed: PropTypes.number,
  startDelay: PropTypes.number,
  caret: PropTypes.bool,
  as: PropTypes.elementType,
  className: PropTypes.string,
}

export default Typewriter
