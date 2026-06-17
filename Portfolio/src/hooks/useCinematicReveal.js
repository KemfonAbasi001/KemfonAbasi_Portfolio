import { useEffect } from 'react'
import { useIntro } from '../context/IntroContext'

export function useCinematicReveal() {
  const { introDone } = useIntro()

  useEffect(() => {
    if (!introDone) return

    const frameId = requestAnimationFrame(() => {
      document.querySelectorAll('.work__card').forEach((card, i) => {
        card.classList.add('cin-reveal')
        card.dataset.cinDelay = i * 90
      })

      const cinObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const el = entry.target
          const isCard = el.classList.contains('work__card')

          if (entry.isIntersecting) {
            const delay = parseInt(el.dataset.cinDelay || 0, 10)
            setTimeout(() => el.classList.add('cin-visible'), delay)
            if (!isCard) cinObserver.unobserve(el)
          } else if (isCard) {
            el.classList.remove('cin-visible')
          }
        })
      }, { threshold: 0.1 })

      document.querySelectorAll('.cin-reveal').forEach((el) => {
        const delay = parseInt(el.dataset.cinDelay || 0, 10)
        const isHero = el.closest('.landing') !== null
        const baseDelay = isHero ? delay + 80 : delay
        el.style.transitionDelay = baseDelay + 'ms'
        cinObserver.observe(el)
      })
    })

    return () => cancelAnimationFrame(frameId)
  }, [introDone]) 
}
