import { useEffect } from 'react'

import { useLocation } from 'react-router-dom'

import { lenis } from '../main'

function ScrollToTop() {

  const { pathname } = useLocation()

  useEffect(() => {

    requestAnimationFrame(() => {

      lenis.scrollTo(0, {
        immediate: true,
        force: true,
      })

    })

  }, [pathname])

  return null
}

export default ScrollToTop