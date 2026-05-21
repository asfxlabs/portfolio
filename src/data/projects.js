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
  'Whisper AI',
  'JavaScript',
  'HTML5',
  'CSS3',
  'Node.js',
  'OpenAI API',
],

    github: '#',

    live: '#',

    content: `
      ASFX Studio was developed to solve a real workflow problem I faced while editing recorded classes and educational content. A large amount of time was being wasted manually reviewing footage and cutting out silent or non-explanatory sections before editing in Adobe Premiere Pro.

To simplify this process, I built an AI-powered desktop application that analyzes video clips, detects speech segments, removes unnecessary silence, and generates an edited sequence ready for further editing. The application also supports automatic subtitle generation using AI transcription.

Built using Electron, Python, FFmpeg, and OpenAI Whisper, the project helped automate repetitive editing tasks, significantly reducing editing time and allowing me to focus more on productivity and content quality instead of manual trimming.
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

  process: [

  {
    title: 'Planning & Research',

    description:
      'Started by identifying a common creator problem: manually cutting videos and generating subtitles takes too much time. Planned a desktop-based AI workflow focused on automation, speed, and offline processing.',
  },

  {
    title: 'UI & Desktop Application',

    description:
      'Built the application interface using HTML, CSS, JavaScript, and Electron to create a lightweight cross-platform desktop experience with simple drag-and-drop workflows.',
  },

  {
    title: 'AI Transcription Integration',

    description:
      'Integrated OpenAI Whisper through Python to process speech, generate timestamps, and create accurate subtitles automatically.',
  },

  {
    title: 'Media Processing Pipeline',

    description:
      'Used FFmpeg to handle audio extraction, video trimming, subtitle embedding, and final export rendering.',
  },

  {
    title: 'Automation Features',

    description:
      'Developed speech-based cutting logic to detect spoken segments, remove silence, and automate repetitive editing tasks.',
  },

  {
    title: 'Optimization & Packaging',

    description:
      'Optimized processing performance, added error handling, and bundled Python dependencies and FFmpeg into a standalone desktop application.',
  },

],

  challenges: [

  {
    title: 'Python + Electron Integration',

    challenge:
      'Connecting Electron with Python scripts caused path and execution issues during development and packaging.',

    solution:
      'Implemented child process handling and dynamic resource path management for stable communication between the frontend and backend.',
  },

  {
    title: 'Slow Video Processing',

    challenge:
      'Large video files increased processing and rendering time.',

    solution:
      'Optimized FFmpeg commands, reduced unnecessary re-renders, and improved processing flow for better performance.',
  },

  {
    title: 'Subtitle Synchronization',

    challenge:
      'Generated subtitles occasionally became misaligned with speech timestamps.',

    solution:
      'Added timestamp correction logic and refined Whisper segment processing for improved synchronization.',
  },

  {
    title: 'Application Freezing During Tasks',

    challenge:
      'Long-running AI transcription and FFmpeg operations caused UI freezing.',

    solution:
      'Moved heavy processes to background execution and added real-time progress tracking.',
  },

  {
    title: 'Packaging Dependencies',

    challenge:
      'Bundling Python, Whisper, and FFmpeg into a standalone Electron application was difficult across different systems.',

    solution:
      'Embedded required dependencies and configured Electron Builder to manage external resources correctly.',
  },

],
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