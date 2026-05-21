import { motion } from 'framer-motion'

const projects = [
  {
    title: 'ASFX Studio',
    description:
      'Speech-based video cutter and subtitle generator desktop app.',
    tech: ['Electron', 'Python', 'Node.js'],
  },

  {
    title: 'Rocket LMS',
    description:
      'Learning management platform customization and deployment.',
    tech: ['Flutter', 'Firebase'],
  },
]

function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-10 bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
  key={index}
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: index * 0.2 }}
  viewport={{ once: true }}
  className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/10 transition duration-300"
>
              <h3 className="text-2xl font-semibold">
                {project.title}
              </h3>

              <p className="mt-4 text-gray-300 leading-7">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 mt-6">
                {project.tech.map((item, i) => (
                  <span
                    key={i}
                    className="bg-white/10 px-3 py-1 rounded-lg text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 mt-8">
  <a
    href="#"
    className="bg-white text-black px-4 py-2 rounded-lg text-sm font-medium"
  >
    Live Demo
  </a>

  <a
    href="#"
    className="border border-white/20 px-4 py-2 rounded-lg text-sm"
  >
    GitHub
  </a>
</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects