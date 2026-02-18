import { useState } from 'react'
import Navbar from './components/Navbar'
import Heropanel from './components/Heropanel'
import PersonalInfo from './components/PersonalInfo'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [language, setLanguage] = useState('es')

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es')
  }

  return (
    <>
      <Navbar language={language} toggleLanguage={toggleLanguage} />
      <section id="home">
        <Heropanel language={language} />
      </section>
      <section id="about">
        <PersonalInfo language={language} />
      </section>
      <section id="skills">
        <Skills language={language} />
      </section>
      <section id="projects">
        <Projects language={language} />
      </section>
      <section id="contact">
        <Contact language={language} />
      </section>
      <Footer language={language} />
    </>
  )
}

export default App
