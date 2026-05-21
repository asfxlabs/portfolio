import React, {
  useRef,
  useState,
} from 'react'

import {
  useParams,
  Link,
} from 'react-router-dom'

import { motion } from 'framer-motion'

import projects from '../data/projects'
import ScreenshotCarousel from '../components/ScreenshotCarousel'

function ProjectDetails() {

  const { slug } = useParams()

  const project = projects.find(
    (p) => p.slug === slug
  )
  const imageRef = useRef(null)

const [glow, setGlow] = useState({
  x: 50,
  y: 50,
})

  if (!project) {

    return (
      <div
        className="
          min-h-screen
          bg-[#050816]
          text-white
          flex
          items-center
          justify-center
          text-4xl
          font-bold
        "
      >
        Project Not Found
      </div>
    )

  }

  const handleMouseMove = (e) => {

  if (window.innerWidth < 768) return

  const rect =
    imageRef.current.getBoundingClientRect()

  const x =
    e.clientX - rect.left

  const y =
    e.clientY - rect.top

  setGlow({
    x: (x / rect.width) * 100,
    y: (y / rect.height) * 100,
  })

}

const resetGlow = () => {

  setGlow({
    x: 50,
    y: 50,
  })

}

  return (
    <div
      className="
        min-h-screen
        bg-[#050816]
        text-white
        overflow-x-hidden
      "
    >

      {/* Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">

        <div className="absolute inset-0 bg-[#050816]" />

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.15),transparent_35%),
            radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.12),transparent_35%)]
          "
        />

      </div>

      <div className="max-w-7xl mx-auto px-6 py-24">

        {/* Back Button */}
        <Link to="/">

          <motion.button
            whileHover={{
              x: -4,
            }}

            className="
              mb-12
              px-5
              py-3
              rounded-2xl
              border
              border-white/10
              bg-white/5
              hover:bg-white/10
              transition
            "
          >
            ← Back to Home
          </motion.button>

        </Link>

        {/* Hero */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.8,
          }}
        >

          <p
            className="
              uppercase
              tracking-[0.3em]
              text-purple-400
              text-sm
            "
          >
            CASE STUDY
          </p>

          <h1
            className="
              mt-6
              text-5xl
              md:text-7xl
              font-extrabold
              tracking-[-0.04em]
            "
          >

            <span
              className="
                bg-gradient-to-r
                from-white
                to-purple-300
                bg-clip-text
                text-transparent
              "
            >
              {project.title}
            </span>

          </h1>

          <p
            className="
              mt-8
              max-w-4xl
              text-white/80
              text-lg
              leading-9
            "
          >
            {project.description}
          </p>

        </motion.div>

        {/* Hero Image */}
        <motion.div
        
  ref={imageRef}

  onMouseMove={handleMouseMove}

  onMouseLeave={resetGlow}
          initial={{
            opacity: 0,
            scale: 0.95,
          }}

          animate={{
            opacity: 1,
            scale: 1,
          }}

          transition={{
            delay: 0.2,
            duration: 0.8,
          }}

          className="
            relative
            mt-16
            overflow-hidden
            rounded-[36px]
            border
            border-white/10
            bg-white/5
            backdrop-blur-2xl
            shadow-2xl
          "
        >

          <img
            src={project.image}
            alt={project.title}
            className="
              w-full
              object-cover
            "
          />
          {/* Cursor Reflection */}
<motion.div
  animate={{
    background: `
      radial-gradient(
        circle at
        ${glow.x}% ${glow.y}%,
        rgba(255,255,255,0.22),
        transparent 35%
      )
    `,
  }}

  transition={{
    duration: 0.12,
  }}

  className="
    absolute
    inset-0
    pointer-events-none
    z-10
  "
/>

{/* Soft Gradient Overlay */}
<div
  className="
    absolute
    inset-0
    bg-gradient-to-t
    from-black/30
    via-transparent
    to-white/[0.03]
    pointer-events-none
    z-10
  "
/>

        </motion.div>
{/* Project Overview */}
<div
  className="
    relative
    mt-32
    grid
    lg:grid-cols-[1.4fr_0.8fr]
    gap-20
    items-start
  "
>

  {/* Background Text */}
  <div
    className="
      absolute
      -top-24
      left-0
      text-[120px]
      md:text-[220px]
      font-black
      leading-none
      text-white/[0.03]
      pointer-events-none
      select-none
    "
  >
    {project.title.split(' ')[0]}
  </div>

  {/* Left */}
  <motion.div

    initial={{
      opacity: 0,
      y: 80,
    }}

    whileInView={{
      opacity: 1,
      y: 0,
    }}

    transition={{
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    }}

    viewport={{
      amount: 0.2,
    }}

    className="relative z-10"
  >

    <p
      className="
        uppercase
        tracking-[0.35em]
        text-sm
        text-purple-400
        mb-6
      "
    >
      PROJECT OVERVIEW
    </p>

    <h2
      className="
        text-5xl
        md:text-7xl
        font-extrabold
        tracking-[-0.05em]
        leading-none
      "
    >

      <span
        className="
          bg-gradient-to-r
          from-white
          via-white
          to-purple-300
          bg-clip-text
          text-transparent
        "
      >
        Building AI
      </span>

      <br />

      <span className="text-white/30">
        Video Automation
      </span>

    </h2>

    <p
      className="
        mt-12
        text-xl
        md:text-2xl
        leading-[2]
        text-white/75
        max-w-4xl
        font-light
        tracking-[-0.02em]
      "
    >
      {project.content}
    </p>

  </motion.div>

  {/* Sidebar */}
  <motion.div

    initial={{
      opacity: 0,
      y: 100,
    }}

    whileInView={{
      opacity: 1,
      y: 0,
    }}

    transition={{
      duration: 1,
      delay: 0.1,
      ease: [0.22, 1, 0.36, 1],
    }}

    viewport={{
      amount: 0.2,
    }}

    className="
      relative
      overflow-hidden
      rounded-[40px]
      border
      border-white/10
      bg-white/[0.04]
      backdrop-blur-2xl
      p-8
      sticky
      top-28
    "
  >

    {/* Reflection */}
    <div
      className="
        absolute
        inset-0
        bg-gradient-to-b
        from-white/[0.08]
        to-transparent
        pointer-events-none
      "
    />

    {/* Stack */}
    <div className="relative z-10">

      <p
        className="
          uppercase
          tracking-[0.25em]
          text-xs
          text-white/40
          mb-5
        "
      >
        TECHNOLOGIES
      </p>

      <div
        className="
          flex
          flex-wrap
          gap-3
        "
      >

        {project.tech.map((tech, index) => (

          <div
            key={index}

            className="
              px-5
              py-3
              rounded-2xl
              border
              border-white/10
              bg-white/[0.04]
              text-white/90
              backdrop-blur-xl
            "
          >
            {tech}
          </div>

        ))}

      </div>

    </div>

    {/* Buttons */}
    <div
      className="
        relative
        z-10
        flex
        flex-col
        gap-5
        mt-12
      "
    >

      <a
        href={project.live}

        className="
          relative
          overflow-hidden
          group
          rounded-2xl
          bg-gradient-to-r
          from-purple-500
          via-fuchsia-500
          to-cyan-500
          py-5
          text-center
          text-lg
          font-semibold
          transition-all
          duration-500
          hover:scale-[1.03]
        "
      >

        Live Preview

        <div
          className="
            absolute
            inset-0
            translate-x-[-100%]
            bg-gradient-to-r
            from-transparent
            via-white/30
            to-transparent
            transition-transform
            duration-1000
            group-hover:translate-x-[100%]
          "
        />

      </a>

      <a
        href={project.github}

        className="
          rounded-2xl
          border
          border-white/10
          bg-white/[0.04]
          py-5
          text-center
          text-lg
          text-white/90
          transition-all
          duration-300
          hover:bg-white/[0.08]
        "
      >
        GitHub Repository
      </a>
{/* Navigation */}
<div
  className="
    mt-6
    pt-6
    border-t
    border-white/10
    flex
    flex-col
    gap-4
  "
>

  <button
    onClick={() =>
      document
        .getElementById('process')
        ?.scrollIntoView({
          behavior: 'smooth',
        })
    }

    className="
      rounded-2xl
      border
      border-white/10
      bg-white/[0.03]
      py-4
      text-white/80
      transition-all
      duration-300
      hover:bg-white/[0.08]
      hover:text-white
    "
  >
    View Development Process
  </button>

  <button
    onClick={() =>
      document
        .getElementById('challenges')
        ?.scrollIntoView({
          behavior: 'smooth',
        })
    }

    className="
      rounded-2xl
      border
      border-white/10
      bg-white/[0.03]
      py-4
      text-white/80
      transition-all
      duration-300
      hover:bg-white/[0.08]
      hover:text-white
    "
  >
    View Challenges & Solutions
  </button>

</div>
    </div>

  </motion.div>

</div>

         
{/* Screenshots */}
<div className="mt-32">

  <motion.div

  initial={{
    opacity: 0,
    y: 60,
  }}

  whileInView={{
    opacity: 1,
    y: 0,
  }}

  transition={{
    duration: 1,
    ease: [0.22, 1, 0.36, 1],
  }}

  viewport={{
    amount: 0.3,
  }}

  className="mb-20 text-center"
>

  <p
    className="
      uppercase
      tracking-[0.35em]
      text-sm
      text-purple-400
      mb-6
    "
  >
    VISUAL SHOWCASE
  </p>

  <h2
    className="
      text-5xl
      md:text-7xl
      font-extrabold
      tracking-[-0.05em]
      leading-none
    "
  >

    <span
      className="
        bg-gradient-to-r
        from-white
        via-white
        to-purple-300
        bg-clip-text
        text-transparent
      "
    >
      Screenshots
    </span>

  </h2>

</motion.div>

  <ScreenshotCarousel
    images={project.screenshots}
  />

</div>

{/* Features */}
<div className="mt-32">

  <motion.div

  initial={{
    opacity: 0,
    y: 60,
  }}

  whileInView={{
    opacity: 1,
    y: 0,
  }}

  transition={{
    duration: 1,
    ease: [0.22, 1, 0.36, 1],
  }}

  viewport={{
    amount: 0.3,
  }}

  className="mb-20"
>

  <p
    className="
      uppercase
      tracking-[0.35em]
      text-sm
      text-purple-400
      mb-6
    "
  >
    CORE CAPABILITIES
  </p>

  <h2
    className="
      text-5xl
      md:text-7xl
      font-extrabold
      tracking-[-0.05em]
      leading-none
    "
  >

    <span
      className="
        bg-gradient-to-r
        from-white
        via-white
        to-purple-300
        bg-clip-text
        text-transparent
      "
    >
      Key Features
    </span>

  </h2>

</motion.div>

  <div
    className="
      grid
      md:grid-cols-2
      gap-6
    "
  >

    {project.features.map((feature, index) => (

      <motion.div
        key={index}

        initial={{
          opacity: 0,
          y: 40,
        }}

        whileInView={{
          opacity: 1,
          y: 0,
        }}

        transition={{
          delay: index * 0.08,
        }}

        viewport={{
          once: true,
        }}

        whileHover={{
          y: -5,
        }}

        className="
  relative
  overflow-hidden
  rounded-[32px]
  border
  border-white/10
  bg-white/[0.04]
  backdrop-blur-2xl
  p-8
  group
"
      >

{/* Reflection */}
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

{/* Number */}
<div
  className="
    text-purple-400
    text-sm
    tracking-[0.3em]
    uppercase
    mb-6
  "
>
  0{index + 1}
</div>

        <p
          className="
  relative
  z-10
  text-xl
  font-medium
  text-white
  leading-8
"
        >
          {feature}
        </p>

      </motion.div>

    ))}

  </div>

</div>

{/* Development Process */}
<div
  id="process"
  className="mt-32"
>

  <motion.div

  initial={{
    opacity: 0,
    y: 60,
  }}

  whileInView={{
    opacity: 1,
    y: 0,
  }}

  transition={{
    duration: 1,
    ease: [0.22, 1, 0.36, 1],
  }}

  viewport={{
    amount: 0.3,
  }}

  className="mb-20"
>

  <p
    className="
      uppercase
      tracking-[0.35em]
      text-sm
      text-purple-400
      mb-6
    "
  >
    WORKFLOW BREAKDOWN
  </p>

  <h2
    className="
      text-5xl
      md:text-7xl
      font-extrabold
      tracking-[-0.05em]
      leading-none
    "
  >

    <span
      className="
        bg-gradient-to-r
        from-white
        via-white
        to-purple-300
        bg-clip-text
        text-transparent
      "
    >
      Development
    </span>

    <br />

    <span className="text-white/30">
      Process
    </span>

  </h2>

</motion.div>

  <div
    className="
      relative
      border-l
      border-white/10
      ml-4
      space-y-10
    "
  >

    {project.process.map((step, index) => (

      <motion.div
        key={index}

        initial={{
  opacity: 0,
  scale: 0.92,
  y: 80,
}}

whileInView={{
  opacity: 1,
  scale: 1,
  y: 0,
}}

transition={{
  duration: 0.8,
  delay: index * 0.08,
  ease: [0.22, 1, 0.36, 1],
}}

viewport={{
  amount: 0.25,
}}
        className="
          relative
          pl-10
        "
      >

        {/* Timeline Dot */}
        <div
          className="
            absolute
            -left-[14px]
            top-2
            w-6
            h-6
            rounded-full
            bg-gradient-to-r
            from-purple-500
            to-cyan-500
            shadow-[0_0_20px_rgba(168,85,247,0.6)]
          "
        />

        {/* Card */}
        <div
          className="
            relative
            overflow-hidden
            rounded-[32px]
            border
            border-white/10
            bg-white/[0.04]
            backdrop-blur-2xl
            p-8
          "
        >

          {/* Reflection */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-b
              from-white/[0.08]
              to-transparent
              pointer-events-none
            "
          />

          {/* Step Number */}
          <div
            className="
              relative
              z-10
              text-sm
              tracking-[0.3em]
              uppercase
              text-purple-400
              mb-5
            "
          >
            STEP 0{index + 1}
          </div>

          {/* Title */}
          <h3
            className="
              relative
              z-10
              text-2xl
              md:text-3xl
              font-bold
              text-white
            "
          >
            {step.title}
          </h3>

          {/* Description */}
          <p
            className="
              relative
              z-10
              mt-6
              text-lg
              leading-9
              text-white/80
            "
          >
            {step.description}
          </p>

        </div>

      </motion.div>

    ))}

  </div>

</div>

{/* Challenges & Solutions */}
<div
  id="challenges"
  className="mt-40 mb-32"
>

  {/* Heading */}
  <motion.div

    initial={{
      opacity: 0,
      y: 60,
    }}

    whileInView={{
      opacity: 1,
      y: 0,
    }}

    transition={{
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    }}

    viewport={{
      amount: 0.3,
    }}

    className="mb-24"
  >

    <p
      className="
        uppercase
        tracking-[0.35em]
        text-sm
        text-purple-400
        mb-6
      "
    >
      ENGINEERING JOURNEY
    </p>

    <h2
      className="
        text-5xl
        md:text-7xl
        font-extrabold
        tracking-[-0.05em]
        leading-none
      "
    >

      <span
        className="
          bg-gradient-to-r
          from-white
          via-white
          to-purple-300
          bg-clip-text
          text-transparent
        "
      >
        Challenges
      </span>

      <br />

      <span
        className="
          text-white/30
        "
      >
        & Solutions
      </span>

    </h2>

  </motion.div>

  {/* Timeline */}
  <div className="space-y-24">

    {project.challenges.map((item, index) => (

      <motion.div
        key={index}

        initial={{
          opacity: 0,
          y: 120,
        }}

        whileInView={{
          opacity: 1,
          y: 0,
        }}

        transition={{
          duration: 1,
          delay: index * 0.08,
          ease: [0.22, 1, 0.36, 1],
        }}

        viewport={{
          amount: 0.2,
        }}

        className="
          relative
          grid
          lg:grid-cols-[180px_1fr]
          gap-10
          items-stretch
        "
      >

        {/* Huge Number */}
        <div
          className="
            sticky
            top-24
            text-5xl
            md:text-7xl
            font-black
            leading-none
            text-white/10
          "
        >
          0{index + 1}
        </div>

        {/* Content */}
        <div
          className="
            relative
            h-full
            overflow-hidden
            rounded-[40px]
            border
            border-white/10
            bg-white/[0.03]
            backdrop-blur-2xl
            p-8
            md:p-12
          "
        >

          {/* Reflection */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-b
              from-white/[0.06]
              to-transparent
              pointer-events-none
            "
          />

          {/* Title */}
          <h3
            className="
              relative
              z-10
              text-3xl
              md:text-4xl
              font-bold
              tracking-[-0.03em]
              text-white
            "
          >
            {item.title}
          </h3>

          {/* Divider */}
          <div
            className="
              mt-8
              h-px
              bg-gradient-to-r
              from-white/20
              to-transparent
            "
          />

          {/* Challenge */}
          <div className="mt-10">

            <div
              className="
                text-red-300
                uppercase
                tracking-[0.25em]
                text-sm
                mb-5
              "
            >
              Challenge
            </div>

            <p
              className="
                text-xl
                leading-10
                text-white/75
              "
            >
              {item.challenge}
            </p>

          </div>

          {/* Solution */}
          <div className="mt-14">

            <div
              className="
                text-cyan-300
                uppercase
                tracking-[0.25em]
                text-sm
                mb-5
              "
            >
              Solution
            </div>

            <p
              className="
                text-xl
                leading-10
                text-white
              "
            >
              {item.solution}
            </p>

          </div>

        </div>

      </motion.div>

    ))}

  </div>



</div>

      </div>

    </div>
  )
}

export default ProjectDetails