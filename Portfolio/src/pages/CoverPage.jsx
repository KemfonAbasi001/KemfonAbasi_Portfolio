import { useEffect, useRef, useState } from 'react'
import { useIntro } from '../context/IntroContext'

const ANIM_STYLES = `
  @keyframes intro-rise {
    from { bottom: -140px; }
    to   { bottom: 0px; }
  }
  @keyframes intro-unblur {
    from { filter: blur(5px); }
    to   { filter: blur(0px); }
  }
  @keyframes intro-unblur-alt {
    from { filter: blur(5px); }
    to   { filter: blur(0px); }
  }
  @keyframes intro-unblur-last {
    from { filter: blur(5px); }
    to   { filter: blur(0px); }
  }
  @keyframes intro-expand {
    from { transform: scaleX(0); filter: blur(1.5px); }
    to   { transform: scaleX(1); filter: blur(0px); }
  }
`


const letterStyle = (animName, duration) => ({
  filter: 'blur(0px)',
  position: 'relative',
  animation: `${animName} ${duration} ease-in-out forwards`,
})

export default function CoverPage() {
  const introRef = useRef(null)
  const { setIntroDone } = useIntro()

  const [isDark, setIsDark] = useState(
    () => document.documentElement.classList.contains('dark')
  )

  const INTRO_DURATION = 3010

  useEffect(() => {
    const html = document.documentElement
    const observer = new MutationObserver(() => {
      setIsDark(html.classList.contains('dark'))
    })
    observer.observe(html, { attributes: true, attributeFilter: ['class'] })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const intro = introRef.current
    if (!intro) return

    const slideTimer = setTimeout(() => {
      intro.style.transform = 'translateY(-100%)'
    }, INTRO_DURATION)

    const handleTransitionEnd = (e) => {
      if (e.propertyName === 'transform') {
        intro.style.display = 'none'
        setIntroDone(true)
      }
    }

    intro.addEventListener('transitionend', handleTransitionEnd)
    return () => {
      clearTimeout(slideTimer)
      intro.removeEventListener('transitionend', handleTransitionEnd)
    }
  }, [setIntroDone])

  const fg = isDark ? 'white' : 'black'
  const bg = isDark ? 'black' : 'white'

  return (
    <>
      <style>{ANIM_STYLES}</style>

      <section
        ref={introRef}
        className="fixed inset-0 z-9999 flex items-center justify-center text-center"
        style={{
          backgroundColor: bg,
          transform: 'translateY(0)',
          transition: 'transform 0.9s cubic-bezier(0.76, 0, 0.24, 1)',
          fontFamily: '"Cookie", cursive',
        }}
      >
        <div className="flex flex-col gap-2 overflow-hidden h-fit">

          <div
            className="w-full"
            style={{
              bottom: '-140px',
              position: 'relative',
              animation: 'intro-rise 1s linear 1.2s forwards',
              lineHeight: '1.2',
            }}
          >
            {[
  { text: 'W', anim: 'intro-unblur-alt', dur: '4.2s', spaced: false },
  { text: 'e', anim: 'intro-unblur',     dur: '3.8s', spaced: false },
  { text: 'l', anim: 'intro-unblur-alt', dur: '4.2s', spaced: false },
  { text: 'c', anim: 'intro-unblur',     dur: '3.8s', spaced: false },
  { text: 'o', anim: 'intro-unblur-alt', dur: '4.2s', spaced: false },
  { text: 'm', anim: 'intro-unblur',     dur: '3.8s', spaced: false },
  { text: 'e', anim: 'intro-unblur-alt', dur: '4.2s', spaced: true  },
].map(({ text, anim, dur, spaced }, i) => (
  <span
    key={i}
    className={`text-[2.4rem] lg:text-[3.4rem] ${spaced ? 'mr-2.5' : ''}`}
    style={{
      ...letterStyle(anim, dur),
      letterSpacing: '3px',
      color: fg,
      fontWeight: 500,
    }}
  >
    {text}
  </span>
))}
            {' '}

            <span style={{ ...letterStyle('intro-unblur', '3.8s'), letterSpacing: '3px', color: fg, fontWeight: 500 }} className='text-[2.4rem] lg:text-[3.4rem]'>t</span>
            <span style={{ ...letterStyle('intro-unblur-alt', '4.2s'), letterSpacing: '3px', color: fg, fontWeight: 500, marginRight: '10px' }} className='text-[2.4rem] lg:text-[3.4rem]'>o</span>

            {' '}

            <span style={{ ...letterStyle('intro-unblur', '3.8s'),     letterSpacing: '3px', color: fg, fontWeight: 500 }} className='text-[2.4rem] lg:text-[3.4rem]'>m</span>
            <span style={{ ...letterStyle('intro-unblur-alt', '4.2s'), letterSpacing: '3px', color: fg, fontWeight: 500 }} className='text-[2.4rem] lg:text-[3.4rem]'>y</span>

            <br />

            <span style={{ ...letterStyle('intro-unblur', '3.8s'),     letterSpacing: '3px', color: fg, fontWeight: 500 }} className='text-[2.4rem] lg:text-[3.4rem]'>Portfolio W</span>
            <span style={{ ...letterStyle('intro-unblur-last', '4.4s'), letterSpacing: '3px', color: fg, fontWeight: 500 }} className='text-[2.4rem] lg:text-[3.4rem]'>ebsite</span>
          </div>

          <hr
            className="w-full m-0"
            style={{
              borderRadius: '50%',
              borderColor: fg,
              transform: 'scaleX(0)',
              transformOrigin: 'center',
              animation: 'intro-expand 2s ease-in-out forwards',
            }}
          />

        </div>
      </section>
    </>
  )
}