import project1 from '../assets/projects/project1.jpg'
import project2 from '../assets/projects/project2.jpg'

const projects = [

  {
    slug: 'asfx-studio',

    title: 'ASFX Studio',

    description:
      'AI-powered subtitle generation and speech-based video editing desktop application.',

    image: project1,

    tech: [
      'React',
      'Electron',
      'Python',
      'FFmpeg',
    ],

    github: '#',

    live: '#',

    content: `
      ASFX Studio is a desktop application focused on
      speech-based editing and automated subtitle generation.
    `,

    features: [
    'Speech-based video cutting',
    'Automatic subtitle generation',
    'FFmpeg-powered rendering',
    'Desktop workflow optimization',
  ],

  screenshots: [
  project1,
  project2,
  project1,
  project2,
  project1,
  project2,
],

  process: `
    The project was designed to automate repetitive
    editing workflows and reduce manual subtitle creation.
  `,

  challenges: `
    One of the biggest challenges was synchronizing
    subtitle timing accuracy with speech recognition.
  `,
  },

  {
    slug: 'portfolio-website',

    title: 'Portfolio Website',

    description:
      'Modern cinematic portfolio with smooth scrolling and interactive animations.',

    image: project2,

    tech: [
      'React',
      'Tailwind',
      'Framer Motion',
      'Lenis',
    ],

    github: '#',

    live: '#',

    content: `
      A modern creative developer portfolio built with
      cinematic motion and glassmorphism UI.
    `,

    features: [
    'Speech-based video cutting',
    'Automatic subtitle generation',
    'FFmpeg-powered rendering',
    'Desktop workflow optimization',
  ],

  screenshots: [
  project1,
  project2,
  project1,
  project2,
  project1,
  project2,
],

  process: `
    The project was designed to automate repetitive
    editing workflows and reduce manual subtitle creation.
  `,

  challenges: `
    One of the biggest challenges was synchronizing
    subtitle timing accuracy with speech recognition.
  `,
  },

]

export default projects