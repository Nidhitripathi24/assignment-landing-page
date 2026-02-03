import './App.css'
import Hero from './components/Hero'
import Services from './components/Services'
import Specialties from './components/Specialties'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="app">
      <Hero />
      <Specialties />
      <Services />
      <About />
      <Contact />

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-links">
            <a href="#services">Services</a>
            <a href="#specialties">Specialties</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
          <p>&copy; 2026 Dr. Maya Reynolds, PsyD. All rights reserved.</p>
          <p style={{ fontSize: 'var(--font-size-sm)', marginTop: 'var(--spacing-sm)' }}>
            Licensed Psychologist in California | Santa Monica Therapy Practice
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
