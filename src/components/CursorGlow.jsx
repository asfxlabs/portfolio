import { useEffect, useRef } from 'react'

function CursorGlow() {

  const glowRef = useRef(null)

  useEffect(() => {

    const moveCursor = (e) => {

      const x = e.clientX
      const y = e.clientY

      if (glowRef.current) {

        glowRef.current.animate(
          {
            left: `${x}px`,
            top: `${y}px`,
          },
          {
            duration: 500,
            fill: 'forwards',
          }
        )

      }

    }

    window.addEventListener('mousemove', moveCursor)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
    }

  }, [])

  return (
    <div
      ref={glowRef}
      className="
        fixed
        top-0
        left-0
        w-72
        h-72
        rounded-full
        pointer-events-none
        z-[1]
        opacity-40
        blur-3xl
        bg-gradient-to-r
        from-purple-500/30
        to-cyan-500/30
        -translate-x-1/2
        -translate-y-1/2
      "
    />
  )
}

export default CursorGlow