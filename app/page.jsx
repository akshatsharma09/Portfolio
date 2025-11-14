import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import ContactForm from '../components/ContactForm'
import ScrollToTop from '../components/ScrollToTop'

export default function Page() {
  return (
    <>
      <section id="home" className="min-h-screen flex items-center py-28 px-6 md:px-12">
        <Hero />
      </section>

      <section id="about" className="min-h-screen flex items-center py-28 px-6 md:px-12">
        <About />
      </section>

      <section id="skills" className="min-h-screen flex items-center py-28 px-6 md:px-12">
        <Skills />
      </section>

      <section id="projects" className="min-h-screen flex items-center py-28 px-6 md:px-12">
        <Projects />
      </section>

      <section id="experience" className="min-h-screen flex items-center py-28 px-6 md:px-12">
        <Experience />
      </section>

      <section id="contact" className="min-h-screen flex items-center py-28 px-6 md:px-12">
        <ContactForm />
      </section>

      <ScrollToTop />
    </>
  )
}
