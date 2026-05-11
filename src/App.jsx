import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import CodingProfiles from './components/CodingProfiles'
import Contact from './components/Contact'
import Footer from './components/Footer'

const Divider = () => (
  <div className="section-container py-4">
    <div className="section-divider" />
  </div>
)

export default function App() {
  return (
    <div className="min-h-screen bg-[#08090b] text-white">
      <Navbar />
      <main>
        <Hero />
        <Divider />
        <About />
        <Divider />
        <Skills />
        <Divider />
        <Projects />
        <Divider />
        <Experience />
        <Divider />
        <CodingProfiles />
        <Divider />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
