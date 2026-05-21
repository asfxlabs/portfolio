import {
  motion,
  useScroll,
  useTransform,
} from 'framer-motion'

function ParallaxSection({ children }) {

  const { scrollYProgress } = useScroll()

  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 0.92]
  )

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.8],
    [1, 0.6]
  )

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -80]
  )

  return (
    <motion.div
      style={{
        scale,
        opacity,
        y,
      }}
    >
      {children}
    </motion.div>
  )
}

export default ParallaxSection