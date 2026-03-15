/**
 * © 2025 Aime Cesaire Mugishawayo — Apache-2.0
 */

// Components
import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Experience from "./components/Experience"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Courses from "./components/Courses"
import Certifications from "./components/Certifications"
import Connect from "./components/Contact"
import Footer from "./components/Footer"

const App = () => {
  return (
    <div className="terminal-screen">
      <Header />
      <main className="terminal-main">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Courses />
        <Certifications />
        <Connect />
      </main>
      <Footer />
    </div>
  )
}

export default App