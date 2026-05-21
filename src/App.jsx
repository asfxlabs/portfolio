import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import CursorGlow from './components/CursorGlow'
import { motion, useScroll } from 'framer-motion'

function App() {
  const { scrollYProgress } = useScroll()
  return (
    
    <div className="bg-[#050816] text-white overflow-x-hidden min-h-screen">
      <motion.div
  className="
    fixed
    top-0
    left-0
    right-0
    h-[3px]
    bg-gradient-to-r
    from-purple-500
    via-pink-500
    to-cyan-500
    z-[9999]
    origin-left
    shadow-[0_0_20px_rgba(168,85,247,0.6)]
  "
  style={{
    scaleX: scrollYProgress,
  }}
/>

      <div className="fixed inset-0 -z-10 overflow-hidden">

  {/* Main Background */}
  <div className="absolute inset-0 bg-[#050816]" />

  {/* Smooth Ambient Gradients */}
  <div
    className="
      absolute
      inset-0
      bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.15),transparent_35%),
      radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.12),transparent_35%),
      radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_60%)]
    "
  />

  {/* Grid Overlay */}
  <div className="absolute inset-0 opacity-[0.03]">
    <div
      className="
        h-full
        w-full
        bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),
        linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
        bg-[size:60px_60px]
      "
    />
  </div>

  {/* Noise Texture */}
  <div
  
    className="
      absolute
      inset-0
      opacity-[0.02]
      bg-[url('https://www.transparenttextures.com/patterns/noise.png')]
    "
  />

</div>

      <CursorGlow />
      
      <Navbar />

      <Hero />
      <About />
      <Projects />
      <Contact />

      <Footer />
    </div>
  )
}

export default App