import { useState } from 'react'

import {
  motion,
  AnimatePresence,
  useScroll,
} from 'framer-motion'

import {
  FaBars,
  FaTimes,
} from 'react-icons/fa'

import { lenis } from '../main'

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)

  const { scrollYProgress } = useScroll()

  const navItems = [
    {
      name: 'About',
      target: '#about',
    },

    {
      name: 'Projects',
      target: '#projects',
    },

    {
      name: 'Contact',
      target: '#contact',
    },
  ]

  return (
    <>

      {/* Scroll Progress */}
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

      {/* Navbar */}
      <motion.nav
        initial={{
          opacity: 0,
          y: -40,
        }}

        animate={{
          opacity: 1,
          y: 0,
        }}

        transition={{
          duration: 0.8,
        }}

        className="
          fixed
          top-5
          left-1/2
          -translate-x-1/2
          z-[999]
          w-[95%]
          max-w-6xl
        "
      >

        <div
          className="
            relative
            flex
            items-center
            justify-between
            px-6
            py-4
            rounded-[28px]
            border
            border-white/10
            bg-white/[0.04]
            backdrop-blur-2xl
            shadow-[0_0_40px_rgba(0,0,0,0.25)]
            overflow-hidden
          "
        >

          {/* Glass Reflection */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-b
              from-white/[0.08]
              to-transparent
              opacity-50
              pointer-events-none
            "
          />

          {/* Logo */}
          <motion.div
            whileHover={{
              scale: 1.04,
            }}

            className="
              relative
              flex
              items-center
              gap-3
              cursor-pointer
              z-10
            "
          >

            {/* Glow Dot */}
            <div
              className="
                w-3
                h-3
                rounded-full
                bg-gradient-to-r
                from-purple-400
                to-cyan-400
                shadow-[0_0_18px_rgba(168,85,247,0.9)]
              "
            />

            {/* Brand */}
            <h1
              className="
                text-xl
                font-bold
                tracking-[-0.04em]
                bg-gradient-to-r
                from-white
                to-purple-300
                bg-clip-text
                text-transparent
              "
            >
              ASFX Labs
            </h1>

          </motion.div>

          {/* Desktop Menu */}
          <div
            className="
              hidden
              md:flex
              items-center
              gap-2
              relative
              z-10
            "
          >

            {navItems.map((item, index) => (

              <motion.button
                key={index}

                whileHover={{
                  y: -2,
                }}

                whileTap={{
                  scale: 0.97,
                }}

                onClick={() => {
                  lenis.scrollTo(item.target)
                }}

                className="
                  relative
                  px-5
                  py-2.5
                  rounded-xl
                  text-sm
                  font-medium
                  text-white/80
                  hover:text-white
                  transition
                  group
                "
              >

                {/* Hover Background */}
                <div
                  className="
                    absolute
                    inset-0
                    rounded-xl
                    bg-white/[0.06]
                    opacity-0
                    group-hover:opacity-100
                    transition
                  "
                />

                {/* Glow */}
                <div
                  className="
                    absolute
                    inset-0
                    rounded-xl
                    opacity-0
                    blur-xl
                    group-hover:opacity-100
                    bg-purple-500/20
                    transition
                  "
                />

                <span className="relative z-10">
                  {item.name}
                </span>

              </motion.button>

            ))}

          </div>

          {/* Resume Button */}
          <motion.a
            whileHover={{
              scale: 1.05,
              y: -2,
            }}

            whileTap={{
              scale: 0.97,
            }}

            href="/resume.pdf"
            download

            className="
              hidden
              md:flex
              items-center
              gap-2
              px-5
              py-3
              rounded-2xl
              bg-gradient-to-r
              from-purple-500
              to-cyan-500
              font-semibold
              text-sm
              shadow-[0_0_30px_rgba(168,85,247,0.35)]
              relative
              z-10
            "
          >

            Resume

          </motion.a>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{
              scale: 0.9,
            }}

            className="
              md:hidden
              relative
              z-10
              w-11
              h-11
              rounded-xl
              border
              border-white/10
              bg-white/[0.05]
              flex
              items-center
              justify-center
              text-lg
            "

            onClick={() => {
              setMenuOpen(!menuOpen)
            }}
          >

            {menuOpen ? <FaTimes /> : <FaBars />}

          </motion.button>

        </div>

        {/* Mobile Menu */}
        <AnimatePresence>

  {menuOpen && (

    <motion.div
      initial={{
        opacity: 0,
        height: 0,
        y: -10,
      }}

      animate={{
        opacity: 1,
        height: 'auto',
        y: 0,
      }}

      exit={{
        opacity: 0,
        height: 0,
        y: -10,
      }}

      transition={{
        duration: 0.35,
        ease: [0.25, 1, 0.5, 1],
      }}

      className="
        md:hidden
        overflow-hidden
      "
    >

      <motion.div
        initial="hidden"
        animate="visible"
        exit="hidden"

        variants={{
          hidden: {},

          visible: {
            transition: {
              staggerChildren: 0.08,
            },
          },
        }}

        className="
          mt-4
          p-4
          rounded-3xl
          border
          border-white/10
          bg-black/40
          backdrop-blur-2xl
          shadow-2xl
        "
      >

        <div className="flex flex-col gap-2">

          {navItems.map((item, index) => (

            <motion.button
              key={index}

              variants={{
                hidden: {
                  opacity: 0,
                  y: -10,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}

              whileHover={{
                x: 4,
              }}

              whileTap={{
                scale: 0.97,
              }}

              onClick={() => {
                lenis.scrollTo(item.target)
                setMenuOpen(false)
              }}

              className="
                text-left
                px-5
                py-4
                rounded-2xl
                bg-white/5
                hover:bg-white/10
                transition
                text-white/90
                font-medium
              "
            >

              {item.name}

            </motion.button>

          ))}

        </div>

      </motion.div>

    </motion.div>

  )}

</AnimatePresence>

      </motion.nav>

    </>
  )
}

export default Navbar