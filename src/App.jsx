/**
 * © 2025 Aime Cesaire Mugishawayo — Apache-2.0
 */

import { useEffect, useMemo, useState } from "react"

// Components
import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Connect from "./components/Contact"
import Footer from "./components/Footer"
import ProjectDetail from "./components/ProjectDetail"
import ExperiencePage from "./components/ExperiencePage"
import { projectLookup } from "./data/projects"

const parseRoute = () => {
  const hash = window.location.hash || ""
  if (hash.startsWith("#/projects/")) {
    const slug = hash.replace("#/projects/", "").trim()
    return { type: "project", slug }
  }
  if (hash === "#/experience") {
    return { type: "experience" }
  }
  return { type: "home" }
}

const App = () => {
  const [route, setRoute] = useState(parseRoute())

  useEffect(() => {
    const onHashChange = () => setRoute(parseRoute())
    window.addEventListener("hashchange", onHashChange)
    return () => window.removeEventListener("hashchange", onHashChange)
  }, [])

  const activeProject = useMemo(() => {
    if (route.type !== "project") {
      return null
    }
    return projectLookup[route.slug] ?? null
  }, [route])

  return (
    <div className="site-shell">
      <Header />
      <main className="site-main">
        {route.type === "project" ? (
          <ProjectDetail project={activeProject} />
        ) : route.type === "experience" ? (
          <ExperiencePage />
        ) : (
          <>
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Connect />
          </>
        )}
      </main>
      <Footer />
    </div>
  )
}

export default App