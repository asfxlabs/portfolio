import React from 'react'

import { motion } from 'framer-motion'

import { Link } from 'react-router-dom'

import projects from '../data/projects'

import ParallaxSection from '../components/ParallaxSection'

function Projects() {

  return (
    <ParallaxSection>

      <section
        id="projects"
        className="
          relative
          py-32
          px-6
          overflow-hidden
        "
      >

        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              duration: 0.7,
            }}

            viewport={{
              once: true,
            }}

            className="text-center"
          >

            <p
              className="
                uppercase
                tracking-[0.3em]
                text-purple-400
                text-sm
              "
            >
              MY WORK
            </p>

            <h2
              className="
                text-5xl
                md:text-7xl
                font-extrabold
                tracking-[-0.04em]
                mt-6
              "
            >

              <span
                className="
                  text-transparent
                  bg-clip-text
                  bg-gradient-to-r
                  from-white
                  to-purple-300
                "
              >
                Featured Projects
              </span>

            </h2>

            <p
              className="
                mt-8
                max-w-3xl
                mx-auto
                text-white/80
                text-lg
                leading-9
              "
            >
              Selected projects showcasing development,
              automation, multimedia production,
              and creative engineering workflows.
            </p>

          </motion.div>

          {/* Projects */}
          <div className="grid gap-10 mt-24">

            {projects.map((project, index) => (

              <motion.div
                key={index}

                initial={{
                  opacity: 0,
                  y: 60,
                }}

                whileInView={{
                  opacity: 1,
                  y: 0,
                }}

                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                }}

                viewport={{
                  once: true,
                }}

                whileHover={{
                  y: -8,
                }}

                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[36px]
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-2xl
                  shadow-2xl
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

                <div
                  className="
                    grid
                    lg:grid-cols-2
                    gap-10
                    items-center
                    p-8
                  "
                >

                  {/* Image */}
                  <div
                    className="
                      relative
                      overflow-hidden
                      rounded-3xl
                      border
                      border-white/10
                    "
                  >

                    <img
                      src={project.image}
                      alt={project.title}
                      className="
                        w-full
                        h-full
                        object-cover
                        transition
                        duration-700
                        group-hover:scale-105
                      "
                    />

                    {/* Overlay */}
                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black/40
                        to-transparent
                      "
                    />

                  </div>

                  {/* Content */}
                  <div>

                    {/* Number */}
                    <p
                      className="
                        text-purple-400
                        text-sm
                        tracking-[0.3em]
                        uppercase
                        mb-4
                      "
                    >
                      Project 0{index + 1}
                    </p>

                    {/* Title */}
                    <h3
                      className="
                        text-4xl
                        font-extrabold
                        tracking-[-0.04em]
                        text-white
                      "
                    >
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="
                        mt-6
                        text-white/80
                        leading-8
                        text-lg
                      "
                    >
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div
                      className="
                        flex
                        flex-wrap
                        gap-3
                        mt-8
                      "
                    >

                      {project.tech.map((tech, i) => (

                        <div
                          key={i}
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

                    {/* Buttons */}
                    <div
                      className="
                        flex
                        gap-4
                        mt-10
                        flex-wrap
                      "
                    >

                      <Link
                        to={`/projects/${project.slug}`}
                      >

                        <motion.button
                          whileHover={{
                            scale: 1.05,
                          }}

                          whileTap={{
                            scale: 0.97,
                          }}

                          className="
                            px-6
                            py-3
                            rounded-2xl
                            bg-gradient-to-r
                            from-purple-500
                            to-cyan-500
                            font-semibold
                            shadow-xl
                          "
                        >
                          View Case Study
                        </motion.button>

                      </Link>

                    </div>

                  </div>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

    </ParallaxSection>
  )
}

export default Projects