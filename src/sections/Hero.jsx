import {motion,useScroll,useTransform,} from 'framer-motion'
import profileImage from '../assets/profile.png'
import { lenis } from '../main'


function Hero() {
  const { scrollY } = useScroll()
  const scale = useTransform(
  scrollY,
  [0, 500],
  [1, 0.82]
)

const opacity = useTransform(
  scrollY,
  [0, 400],
  [1, 0.3]
)

const y = useTransform(
  scrollY,
  [0, 500],
  [0, -100]
)


  return (
    <section
      className="
        min-h-screen
        flex
        items-center
        justify-center
        px-6
        relative
        overflow-hidden
        pt-24
      "
    >

      {/* Ambient Glow */}
      <motion.div
        animate={{
  scale: [1, 1.15, 1],
  opacity: [0.3, 0.6, 0.3],
  x: [0, 40, 0],
  y: [0, -30, 0],
}}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="
          absolute
          w-[500px]
          h-[500px]
          bg-purple-500/20
          rounded-full
          blur-[120px]
        "
      />

      {/* Background Gradient */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-purple-500/5
          via-transparent
          to-transparent
        "
      />

      <motion.div
  style={{
    scale,
    opacity,
    y,
  }}
  className="
    text-center
    max-w-5xl
    relative
    z-10
  "
>

        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="
            mb-8
            inline-flex
            items-center
            gap-3
            px-5
            py-2
            rounded-full
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            text-sm
            text-gray-300
          "
        >

          <div
            className="
              w-2
              h-2
              rounded-full
              bg-green-400
              animate-pulse
            "
          />

          Available for freelance & collaborations

        </motion.div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            type: 'spring',
          }}
          className="
            relative
            mx-auto
            w-52
            h-52
            mb-10
          "
        >

          {/* Glow Ring */}
          <div
            className="
              absolute
              inset-0
              rounded-full
              bg-gradient-to-r
              from-purple-500
              via-cyan-500
              to-pink-500
              blur-xl
              opacity-50
              animate-pulse
            "
          />

          {/* Rotating Border */}
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="
              absolute
              inset-[-6px]
              rounded-full
              border-2
              border-dashed
              border-purple-400/40
            "
          />

          {/* Actual Image */}
          <div
            className="
              relative
              w-full
              h-full
              rounded-full
              overflow-hidden
              border-4
              border-white/10
              backdrop-blur-xl
              bg-[#0b1220]
            "
          >

            <img
              src={profileImage}
              alt="Muhammed Asif"
              className="
                w-full
                h-full
                object-cover
              "
            />

          </div>

        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="
            text-6xl
md:text-8xl
font-extrabold
tracking-[-0.04em]
leading-[0.95]
          "
        >

          <span
            className="
              bg-gradient-to-r
from-white
via-white
to-purple-300
drop-shadow-[0_0_25px_rgba(168,85,247,0.25)]
              bg-clip-text
              text-transparent
            "
          >
            Muhammed Asif
          </span>

        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.5,
            duration: 0.8,
          }}
          className="
            mt-6
            text-lg
            md:text-2xl
            text-gray-300
            max-w-3xl
            mx-auto
            leading-9
          "
        >
          Full Stack Developer & Creative Automation Builder
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.8,
            duration: 0.8,
          }}
          className="
            mt-12
            flex
            justify-center
            gap-4
            flex-wrap
          "
        >

          <motion.a
            whileHover={{
              scale: 1.05,
              y: -3,
            }}
            whileTap={{
              scale: 0.97,
            }}
            onClick={() => {
    lenis.scrollTo('#projects')

}}
            className="
              bg-gradient-to-r
              from-purple-500
              to-cyan-500
              px-7
              py-4
              rounded-2xl
              font-semibold
              shadow-[0_0_30px_rgba(168,85,247,0.35)]
            "
          >
            View Projects
          </motion.a>

          <motion.a
            whileHover={{
              scale: 1.05,
              y: -3,
            }}
            whileTap={{
              scale: 0.97,
            }}
            onClick={() => {
  lenis.scrollTo('#contact')
}}
            className="
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              px-7
              py-4
              rounded-2xl
              hover:bg-white/10
              transition
            "
          >
            Contact Me
          </motion.a>

          <motion.a
            whileHover={{
              scale: 1.05,
              y: -3,
            }}
            whileTap={{
              scale: 0.97,
            }}
            href="/resume.pdf"
            download
            className="
              border
              border-purple-400/30
              text-purple-300
              bg-purple-500/5
              px-7
              py-4
              rounded-2xl
              hover:bg-purple-500
              hover:text-white
              transition
            "
          >
            Download Resume
          </motion.a>

        </motion.div>

      </motion.div>

    </section>
  )
}

export default Hero