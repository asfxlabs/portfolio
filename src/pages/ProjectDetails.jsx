import React from 'react'

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

        </motion.div>

        {/* Content Grid */}
        <div
          className="
            grid
            lg:grid-cols-3
            gap-12
            mt-20
          "
        >

          {/* Left Content */}
          <div className="lg:col-span-2">

            <motion.div
              initial={{
                opacity: 0,
                y: 40,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              viewport={{
                once: true,
              }}
            >

              <h2
                className="
                  text-3xl
                  font-bold
                "
              >
                Project Overview
              </h2>

              <p
                className="
                  mt-6
                  text-white/80
                  leading-9
                  text-lg
                "
              >
                {project.content}
              </p>

            </motion.div>

          </div>

          {/* Sidebar */}
          <div>

            <motion.div
              initial={{
                opacity: 0,
                y: 40,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              viewport={{
                once: true,
              }}

              className="
                sticky
                top-24
                rounded-[32px]
                border
                border-white/10
                bg-white/5
                backdrop-blur-2xl
                p-8
              "
            >

              {/* Stack */}
              <div>

                <h3
                  className="
                    text-xl
                    font-bold
                  "
                >
                  Tech Stack
                </h3>

                <div
                  className="
                    flex
                    flex-wrap
                    gap-3
                    mt-6
                  "
                >

                  {project.tech.map((tech, index) => (

                    <div
                      key={index}
                      className="
                        px-4
                        py-2
                        rounded-xl
                        border
                        border-white/10
                        bg-white/5
                        text-sm
                        text-white/90
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
                  flex
                  flex-col
                  gap-4
                  mt-10
                "
              >

                <a
                  href={project.live}
                  className="
                    text-center
                    px-6
                    py-4
                    rounded-2xl
                    bg-gradient-to-r
                    from-purple-500
                    to-cyan-500
                    font-semibold
                    shadow-xl
                  "
                >
                  Live Preview
                </a>

                <a
                  href={project.github}
                  className="
                    text-center
                    px-6
                    py-4
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/5
                    hover:bg-white/10
                    transition
                  "
                >
                  GitHub Repository
                </a>

              </div>

              

            </motion.div>

          </div>



        </div>

{/* Screenshots */}
<div className="mt-32">

  <motion.h2
    initial={{
      opacity: 0,
      y: 30,
    }}

    whileInView={{
      opacity: 1,
      y: 0,
    }}

    viewport={{
      once: true,
    }}

    className="
      text-4xl
      font-bold
      mb-16
      text-center
    "
  >
    Screenshots
  </motion.h2>

  <ScreenshotCarousel
    images={project.screenshots}
  />

</div>

{/* Features */}
<div className="mt-32">

  <motion.h2
    initial={{
      opacity: 0,
      y: 30,
    }}

    whileInView={{
      opacity: 1,
      y: 0,
    }}

    viewport={{
      once: true,
    }}

    className="
      text-4xl
      font-bold
      mb-12
    "
  >
    Key Features
  </motion.h2>

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
          rounded-[28px]
          border
          border-white/10
          bg-white/5
          backdrop-blur-xl
          p-6
        "
      >

        <p
          className="
            text-lg
            text-white/90
          "
        >
          {feature}
        </p>

      </motion.div>

    ))}

  </div>

</div>

{/* Process */}
<div className="mt-32 max-w-4xl">

  <motion.h2
    initial={{
      opacity: 0,
      y: 30,
    }}

    whileInView={{
      opacity: 1,
      y: 0,
    }}

    viewport={{
      once: true,
    }}

    className="
      text-4xl
      font-bold
      mb-10
    "
  >
    Development Process
  </motion.h2>

  <motion.p
    initial={{
      opacity: 0,
      y: 40,
    }}

    whileInView={{
      opacity: 1,
      y: 0,
    }}

    viewport={{
      once: true,
    }}

    className="
      text-lg
      text-white/80
      leading-9
    "
  >
    {project.process}
  </motion.p>

</div>

{/* Challenges */}
<div className="mt-32 max-w-4xl mb-24">

  <motion.h2
    initial={{
      opacity: 0,
      y: 30,
    }}

    whileInView={{
      opacity: 1,
      y: 0,
    }}

    viewport={{
      once: true,
    }}

    className="
      text-4xl
      font-bold
      mb-10
    "
  >
    Challenges & Solutions
  </motion.h2>

  <motion.p
    initial={{
      opacity: 0,
      y: 40,
    }}

    whileInView={{
      opacity: 1,
      y: 0,
    }}

    viewport={{
      once: true,
    }}

    className="
      text-lg
      text-white/80
      leading-9
    "
  >
    {project.challenges}
  </motion.p>

</div>

      </div>

    </div>
  )
}

export default ProjectDetails