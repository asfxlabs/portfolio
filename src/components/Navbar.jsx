import { useState } from 'react'
import { motion, useScroll } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()

  return (
    <nav className="fixed top-0 w-full bg-black/30 backdrop-blur-md z-50 border-b border-white/10">
      
  <motion.div
    className="absolute bottom-0 left-0 right-0 h-[2px] bg-purple-500 origin-left"
    style={{ scaleX: scrollYProgress }}
  />

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold">
          ASFX
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-sm md:text-base">

          <a
            href="#about"
            className="hover:text-purple-400 transition"
          >
            About
          </a>

          <a
            href="#projects"
            className="hover:text-purple-400 transition"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="hover:text-purple-400 transition"
          >
            Contact
          </a>

        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-4 bg-black/90">

          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="hover:text-purple-400 transition"
          >
            About
          </a>

          <a
            href="#projects"
            onClick={() => setMenuOpen(false)}
            className="hover:text-purple-400 transition"
          >
            Projects
          </a>

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="hover:text-purple-400 transition"
          >
            Contact
          </a>

        </div>
      )}
    </nav>
  )
}

export default Navbar