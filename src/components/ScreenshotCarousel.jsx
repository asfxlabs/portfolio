import {
  motion,
  AnimatePresence,
} from 'framer-motion'

import {
  useEffect,
  useState,
} from 'react'

function ScreenshotCarousel({ images }) {

  const [current, setCurrent] = useState(0)

  const [paused, setPaused] = useState(false)

  const total = images.length

  useEffect(() => {

    if (paused) return

    const interval = setInterval(() => {

      setCurrent((prev) =>
        (prev + 1) % total
      )

    }, 3000)

    return () => clearInterval(interval)

  }, [paused, total])

  const getIndex = (index) => {
    return (index + total) % total
  }

  const prevIndex = getIndex(current - 1)
  const nextIndex = getIndex(current + 1)

  return (
    <div
      className="
        relative
        h-[700px]
        flex
        items-center
        justify-center
        overflow-hidden
      "
    >

      {/* Ambient Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.25, 0.4, 0.25],
        }}

        transition={{
          duration: 6,
          repeat: Infinity,
        }}

        className="
          absolute
          w-[700px]
          h-[700px]
          rounded-full
          bg-purple-500/20
          blur-[140px]
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

        animate={{
          opacity: 0.18,
          scale: 0.78,
          x: -420,
          rotateY: 20,
          filter: 'blur(5px)',
        }}

        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}

        className="
          absolute
          w-[42%]
          rounded-[36px]
          cursor-pointer
          z-10
          select-none
        "
      />

      {/* Current */}
      <AnimatePresence mode="wait">

        <motion.img
          key={current}
          src={images[current]}

          onClick={() => {
            setPaused(!paused)
          }}

          initial={{
            opacity: 0,
            scale: 0.85,
            y: 40,
          }}

          animate={{
            opacity: 1,
            scale: paused ? 1.28 : 1.02,
            y: 0,
          }}

          exit={{
            opacity: 0,
            scale: 0.92,
          }}

          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}

          className="
            absolute
            w-[72%]
            rounded-[40px]
            border
            border-white/10
            shadow-2xl
            z-30
            cursor-pointer
            select-none
          "
        />

      </AnimatePresence>

      {/* Next */}
      <motion.img
        key={nextIndex}
        src={images[nextIndex]}

        onClick={() => {
          setCurrent(nextIndex)
          setPaused(false)
        }}

        animate={{
          opacity: 0.18,
          scale: 0.78,
          x: 420,
          rotateY: -20,
          filter: 'blur(5px)',
        }}

        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}

        className="
          absolute
          w-[42%]
          rounded-[36px]
          cursor-pointer
          z-10
          select-none
        "
      />

      {/* Floating Indicators */}
      <div
        className="
          absolute
          bottom-8
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

    </div>
  )
}

export default ScreenshotCarousel