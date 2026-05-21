import React from 'react'
import { motion } from 'framer-motion'
import Reveal from '../components/Reveal'
import ParallaxSection from '../components/ParallaxSection'

// Programming Logos
import htmlLogo from '../assets/skills/html5.svg'
import cssLogo from '../assets/skills/css3.svg'
import jsLogo from '../assets/skills/javascript.svg'
import pythonLogo from '../assets/skills/python.svg'
import reactLogo from '../assets/skills/react.svg'
import nodeLogo from '../assets/skills/nodejs.svg'
import mongoLogo from '../assets/skills/mongo.svg'
import tailwindLogo from '../assets/skills/tailwindcss.svg'

// Creative Software Logos
import photoshopLogo from '../assets/skills/photoshop.svg'
import aftereffectsLogo from '../assets/skills/aftereffects.svg'
import illustratorLogo from '../assets/skills/illustrator.svg'
import lightroomLogo from '../assets/skills/lightroom.svg'
import premiereLogo from '../assets/skills/premiere.svg'
import davinciLogo from '../assets/skills/davinci.svg'

// Tools Logos
import gitLogo from '../assets/skills/git.svg'
import githubLogo from '../assets/skills/github.svg'
import firebaseLogo from '../assets/skills/firebase.svg'
import figmaLogo from '../assets/skills/figma.svg'

function About() {

  const skillCategories = [
    {
      title: 'Programming',
      gradient: 'from-purple-500 to-cyan-500',

      skills: [
        {
          name: 'HTML5',
          icon: htmlLogo,
        },

        {
          name: 'CSS3',
          icon: cssLogo,
        },

        {
          name: 'JavaScript',
          icon: jsLogo,
        },

        {
          name: 'Python',
          icon: pythonLogo,
        },

        {
          name: 'Node.js',
          icon: nodeLogo,
        },

        {
          name: 'React',
          icon: reactLogo,
        },

        {
          name: 'MongoDB',
          icon: mongoLogo,
        },

        {
          name: 'TailwindCSS',
          icon: tailwindLogo,
        },
      ],
    },

    {
      title: 'Creative Software',
      gradient: 'from-pink-500 to-purple-500',

      skills: [
        {
          name: 'Photoshop',
          icon: photoshopLogo,
        },

        {
          name: 'After Effects',
          icon: aftereffectsLogo,
        },

        {
          name: 'Illustrator',
          icon: illustratorLogo,
        },

        {
          name: 'Premiere Pro',
          icon: premiereLogo,
        },

        {
          name: 'Lightroom',
          icon: lightroomLogo,
        },

        {
          name: 'DaVinci Resolve',
          icon: davinciLogo,
        },
      ],
    },

    {
      title: 'Tools & Technologies',
      gradient: 'from-cyan-500 to-blue-500',

      skills: [
        {
          name: 'Git',
          icon: gitLogo,
        },

        {
          name: 'GitHub',
          icon: githubLogo,
        },

        {
          name: 'Firebase',
          icon: firebaseLogo,
        },

        {
          name: 'Figma',
          icon: figmaLogo,
        },
      ],
    },
  ]

  return (
    <ParallaxSection>

<section
      id="about"
      className="
        relative
        py-32
        px-6
        overflow-hidden
      "
    >

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
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
            ABOUT ME
          </p>

          <h2
            className="
              text-5xl
              md:text-7xl
              font-extrabold
              tracking-[-0.04em]
              mt-6
              leading-tight
            "
          >

            <span
              className="
                text-transparent
                bg-clip-text
                drop-shadow-[0_0_20px_rgba(168,85,247,0.25)]
                bg-gradient-to-r
                from-purple-400
                to-cyan-400
              "
            >
              Full Stack Developer
            </span>

            <br />

            & Multimedia Professional

          </h2>

          <p
            className="
              text-white
              text-lg
              leading-[2.2]
              max-w-4xl
              mx-auto
              mt-8
            "
          >
            Specialized in video editing, graphic design, web application development, YouTube content optimization, and LMS administration. Experienced in building modern web applications, developing scalable digital solutions, and creating high-quality multimedia content. Proven ability to streamline workflows, improve content performance, manage e-learning platforms, and deliver engaging digital experiences across both technical and creative domains.
          </p>

        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">

          {[
            ['10+', 'Projects'],
            ['250+', 'Video Assets'],
            ['2+', 'Years Experience'],
            ['∞', 'Creativity'],
          ].map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.08,
                y: -6,
              }}
              className="
                bg-white/5
                border
                border-white/15                
                backdrop-blur-xl
                rounded-3xl
                p-6
                text-center
                hover:border-purple-400/30
                transition
              "
            >

              <h3
                className="
                  text-4xl
                  font-black
                  text-white
                "
              >
                {item[0]}
              </h3>

              <p className="text-white mt-2">
                {item[1]}
              </p>

            </motion.div>

          ))}

        </div>

        {/* Skill Categories */}
<div className="flex flex-col gap-10 mt-24">

  {skillCategories.map((category, index) => (

    <motion.div
      key={index}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15 }}
      viewport={{ once: true }}
      className="
        relative
        rounded-[32px]
        overflow-hidden
        p-[1px]
      "
    >

      {/* Gradient Border */}
      <div
        className={`
          absolute
          inset-0
          bg-gradient-to-r
          ${category.gradient}
          opacity-20
        `}
      />

      {/* Card */}
      <div
        className="
          relative
          bg-[#0b1220]/90
          backdrop-blur-xl
          border
          border-white/15          
          rounded-[32px]
          px-8
          py-7
        "
      >

        {/* Title */}
        <h3
          className={`
            text-3xl
            font-bold
            mb-8
            text-transparent
bg-clip-text
bg-gradient-to-r
drop-shadow-[0_0_18px_rgba(168,85,247,0.35)]
brightness-125
${category.gradient}
          `}
        >
          {category.title}
        </h3>

        {/* Skills */}
        <div className="
          flex
          flex-wrap
          gap-4
        ">

          {category.skills.map((skill, i) => (

            <motion.div
              key={i}
              whileHover={{
  scale: 1.08,
  y: -6,
}}

transition={{
  duration: 0.15,
  ease: 'easeOut',
}}
              className="
  relative
  overflow-hidden
  bg-white/[0.07]
  border
  border-white/15
  rounded-2xl
  px-4
  py-3
  min-w-[150px]
  w-fit
  hover:border-purple-400/30
  hover:bg-white/[0.10]
  hover:shadow-[0_0_35px_rgba(168,85,247,0.18)]

  before:absolute
  before:inset-0
  before:bg-gradient-to-b
  before:from-white/[0.08]
  before:to-transparent
  before:opacity-40
  before:pointer-events-none

  transition-all
  duration-300
  group
  cursor-default
"
            >

              {/* Glow Background */}
              <div
                className="
                  absolute
                  inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition
                  duration-500
                  bg-gradient-to-r
                  from-purple-500/10
                  to-cyan-500/10
                "
              />

              {/* Giant Background Icon */}
              <div
                className="
                  absolute
                  inset-0
                  flex
                  items-center
                  justify-center
                  opacity-0
                  group-hover:opacity-[0.08]
                  group-hover:scale-90
                  transition
                  duration-500
                  scale-[2.2]
                  pointer-events-none
                "
              >

                <img
                  src={skill.icon}
                  alt=""
                  className="
                    w-20
                    h-20
                    object-contain
                    blur-[1px]
                  "
                />

              </div>

              {/* Foreground */}
              <div
                className="
                  relative
                  z-10
                  flex
                  items-center
                  gap-3
                "
              >

                {/* Logo */}
                <div
                  className="
                    w-10
                    h-10
                    rounded-xl
                    bg-black/20
                    border
                    border-white/5
                    flex
                    items-center
                    justify-center
                    shrink-0
                  "
                >

                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="
                      w-6
                      h-6
                      object-contain
                      drop-shadow-[0_0_12px_rgba(168,85,247,0.35)]
                    "
                  />

                </div>

                {/* Name */}
                <span
  className="
    text-[15px]
    font-semibold
    text-white
    whitespace-nowrap
  "
>
                  {skill.name}
                </span>

              </div>

            </motion.div>

          ))}

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

export default About