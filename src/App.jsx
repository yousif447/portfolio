import { BrowserRouter, Router, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Navbar from './componenets/NavBar'
import Hero from './componenets/Hero'
import About from './componenets/About'
import Timeline from './componenets/Timeline'
import Skills from './componenets/Skills'
import Contact from './componenets/Contact'
import Footer from './componenets/Footer'
import ScrollToTop from './componenets/ScrollToTop'
import { useState } from 'react'
function App() {
  const [isDark, setIsDark] = useState(true);
  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Router path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter> */}
  
    <div className={isDark ? 'dark' : ''}>
      <div className="min-h-screen bg-slate-950 transition-colors duration-300">
        <Navbar isDark={isDark} setIsDark={setIsDark} />
        <Hero />
        <About />
        <Skills />
        <Timeline />
        <Contact />
        <Footer />
        <ScrollToTop />
      </div>
    </div>
    </>
  )
}

export default App
