import {
  motion,
  AnimatePresence,
} from 'framer-motion'

import {
  useEffect,
useState,
useRef,
} from 'react'

function ScreenshotCarousel({ images }) {

  const [current, setCurrent] = useState(0)

  const [paused, setPaused] = useState(false)
  const [fullscreen, setFullscreen] = useState(false)
  const containerRef = useRef(null)

const [rotate, setRotate] = useState({
  x: 0,
  y: 0,
})
const [glow, setGlow] = useState({
  x: 50,
  y: 50,
})

  const total = images.length
  const handleMouseMove = (e) => {

  if (window.innerWidth < 768) return

  const rect =
    containerRef.current.getBoundingClientRect()

  const x =
    e.clientX - rect.left

  const y =
    e.clientY - rect.top

  const centerX =
    rect.width / 2

  const centerY =
    rect.height / 2

  const rotateY =
    ((x - centerX) / centerX) * 10

  const rotateX =
    -((y - centerY) / centerY) * 10

  setRotate({
    x: rotateX,
    y: rotateY,
  })
  

setGlow({
  x: (x / rect.width) * 100,
  y: (y / rect.height) * 100,
})

}

const resetRotation = () => {

  setRotate({
  x: 0,
  y: 0,
})

setGlow({
  x: 50,
  y: 50,
})

}

  useEffect(() => {

  if (paused) return

  const interval = setTimeout(() => {

    setCurrent((prev) =>
      (prev + 1) % total
    )

  }, 3000)



  return () => clearTimeout(interval)

}, [current, paused, total])

  const getIndex = (index) => {
    return (index + total) % total
  }

  const prevIndex = getIndex(current - 1)
  const nextIndex = getIndex(current + 1)

  return (
    <div
  ref={containerRef}

  onMouseMove={handleMouseMove}

  onMouseLeave={resetRotation}

  className="
    relative
        h-[320px]
        md:h-[700px]
        flex
        items-center
        justify-center
        overflow-hidden
      "
    >

      {/* Ambient Glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.35, 0.2],
        }}

        transition={{
          duration: 6,
          repeat: Infinity,
        }}

        className="
          absolute
          w-[300px]
          h-[300px]
          md:w-[700px]
          md:h-[700px]
          rounded-full
          bg-purple-500/20
          blur-[100px]
          md:blur-[140px]
          z-0
        "
      />

      {/* Previous */}
      <motion.img
        key={prevIndex}
        
        src={images[prevIndex]}

        onClick={() => {
          setCurrent(prevIndex)
          setPaused(false)
        }}
        drag="x"

dragConstraints={{
  left: 0,
  right: 0,
}}

dragElastic={0.08}

onDragEnd={(event, info) => {

  if (info.offset.x < -120) {

    setCurrent((prev) =>
      (prev + 1) % total
    )

  }

  else if (info.offset.x > 120) {

    setCurrent((prev) =>
      (prev - 1 + total) % total
    )

  }

}}

        animate={{
          opacity: 0.15,
          scale: 0.75,
          x: window.innerWidth < 768 ? -140 : -420,
          filter: 'blur(4px)',
        }}

        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}

        className="
          absolute
          w-[55%]
          md:w-[42%]
          rounded-[24px]
          md:rounded-[36px]
          cursor-grab
active:cursor-grabbing
touch-pan-y
          z-10
          select-none
        "
      />

      <motion.div
  style={{
    perspective: 2000,
  }}

  className="
    absolute
    z-30
    w-[88%]
    md:w-[72%]
  "
>
      
      <motion.img
  key={current}
  src={images[current]}

  onClick={() => {

  setPaused(true)

  setFullscreen(true)

}}

  initial={{
    opacity: 0,
    scale: 0.92,
    x: 120,
    filter: 'blur(10px)',
  }}

  animate={{
  opacity: 1,
  scale: paused ? 1.32 : 1.02,
  x: 0,
  filter: 'blur(0px)',
  rotateX: rotate.x,
  rotateY: rotate.y,
}}

  exit={{
    opacity: 0,
    scale: 0.92,
    x: -120,
    filter: 'blur(10px)',
  }}

  transition={{
    duration: 1.15,
    ease: [0.22, 1, 0.36, 1],
  }}

  className="
  relative
  w-full
  rounded-[28px]
  md:rounded-[40px]
  border
  border-white/10
  shadow-2xl
  cursor-pointer
  select-none
  will-change-transform
"
/>
  {/* Dynamic Reflection */}
  <motion.div
    animate={{
      background: `
        radial-gradient(
          circle at
          ${glow.x}% ${glow.y}%,
          rgba(255,255,255,0.05),
          transparent 55%
        )
      `,
    }}

    transition={{
      duration: 0.15,
    }}

    className="
      absolute
      inset-0
      rounded-[28px]
      md:rounded-[40px]
      pointer-events-none
      z-10
    
    "
  />

</motion.div>
      {/* Next */}
      <motion.img
        key={nextIndex}
        src={images[nextIndex]}

        onClick={() => {
          setCurrent(nextIndex)
          setPaused(false)
        }}

        animate={{
          opacity: 0.15,
          scale: 0.75,
          x: window.innerWidth < 768 ? 140 : 420,
          filter: 'blur(4px)',
        }}

        transition={{
  duration: 1.15,
  ease: [0.22, 1, 0.36, 1],
}}

        className="
          absolute
          w-[55%]
          md:w-[42%]
          rounded-[24px]
          md:rounded-[36px]
          cursor-pointer
          z-10
          select-none
        "
      />

      {/* Indicators */}
      <div
        className="
          absolute
          bottom-2
          md:bottom-8
          flex
          gap-3
          z-40
        "
      >

        {images.map((_, index) => (

          <motion.button
            key={index}

            onClick={() => {
              setCurrent(index)
            }}

            animate={{
              width:
                current === index
                  ? 40
                  : 10,

              opacity:
                current === index
                  ? 1
                  : 0.4,
            }}

            transition={{
              duration: 0.4,
            }}

            className="
              h-[10px]
              rounded-full
              bg-white
            "
          />

        ))}

      </div>

{/* Fullscreen Viewer */}
<AnimatePresence>

  {fullscreen && (

    <motion.div
      initial={{
        opacity: 0,
      }}

      animate={{
        opacity: 1,
      }}

      exit={{
        opacity: 0,
      }}

      transition={{
        duration: 0.4,
      }}

      onClick={() => {
        setFullscreen(false)
        setPaused(false)
      }}

      className="
        fixed
        inset-0
        z-[9999]
        bg-black/90
        backdrop-blur-xl
        flex
        items-center
        justify-center
        p-6
      "
    >

      {/* Image */}
      <motion.img
        src={images[current]}

        initial={{
          scale: 0.8,
          opacity: 0,
        }}

        animate={{
          scale: 1,
          opacity: 1,
        }}

        exit={{
          scale: 0.9,
          opacity: 0,
        }}

        transition={{
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1],
        }}

        onClick={(e) => {
          e.stopPropagation()
        }}

        className="
          max-w-[95vw]
          max-h-[90vh]
          rounded-[32px]
          border
          border-white/10
          shadow-2xl
        "
      />

      {/* Close Hint */}
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}

        animate={{
          opacity: 1,
          y: 0,
        }}

        transition={{
          delay: 0.2,
        }}

        className="
          absolute
          bottom-8
          text-white/50
          text-sm
          tracking-wide
        "
      >
        Tap anywhere to close
      </motion.div>

    </motion.div>

  )}

</AnimatePresence>

    </div>
  )
}

export default ScreenshotCarousel