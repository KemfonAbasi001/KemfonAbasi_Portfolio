import { useState, useEffect, useRef } from 'react'

import imgsrc from '../assets/skin.webp'
import one from '../assets/lastly.webp'
import two from '../assets/fyn.webp'
import three from '../assets/twitter_post.webp'
import four from '../assets/dine.webp'
import five from '../assets/log.webp'
import six from '../assets/Eden.webp'

const projects = [
  
  {
    link: "https://hospital-web-site.vercel.app",
    src: one,
    title: "Healthcare Website",
    text: "Hospital management platform focused on modern web development, responsive design, and seamless healthcare interactions.",
    year: "2026"
  },
  {
    link: "https://velmora-web-site.vercel.app/",
    src: three,
    title: "Velmora Experience",
    text: "Velmora restaurant focused on responsive systems, modern frontend development, and smooth customer interaction.",
    year: "2026"
  },
  {
    link: "https://imbibe-wines.vercel.app/",
    src: four,
    title: "Taste Meets Elegance",
    text: "Wine commerce platform focused on modern web development, responsive design, and seamless shopping interactions.",
    year: "2026"
  },
  {
    link: "https://garden-eden-web.vercel.app/",
    src: six,
    title: "Eden Garden",
    text: "A clean and responsive gardening website focused on nature-inspired design, service discovery, and effortless user experience.",
    year: "2026"
  },
  {
    link: "https://furniture-web-black.vercel.app/",
    src: five,
    title: "CozaStore Website",
    text: "A stylish online store delivering seamless product browsing, intuitive navigation, and a premium retail experience across devices.",
    year: "2025"
  },
  
  {
    link: "https://avenoir-web-site.vercel.app/",
    src: two,
    title: "Avenoir Website",
    text: "Luxury hotel experience focused on responsive systems, modern frontend development, and smooth interaction.",
    year: "2026"
  },
  {
    link: "https://skin-6jrj.vercel.app/",
    src: imgsrc,
    title: "SkinLovry Website",
    text: "Modern beauty and skincare platform designed with responsive interfaces, smooth interactions, and premium frontend structure.",
    year: "2025"
  }
]

function ExternalLinkIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-3 h-3 lg:w-2.5 lg:h-2.5 shrink-0"
      viewBox="0 0 640 640"
      fill="currentColor"
    >
      <path d="M354.4 83.8C359.4 71.8 371.1 64 384 64L544 64C561.7 64 576 78.3 576 96L576 256C576 268.9 568.2 280.6 556.2 285.6C544.2 290.6 530.5 287.8 521.3 278.7L464 221.3L310.6 374.6C298.1 387.1 277.8 387.1 265.3 374.6C252.8 362.1 252.8 341.8 265.3 329.3L418.7 176L361.4 118.6C352.2 109.4 349.5 95.7 354.5 83.7zM64 240C64 195.8 99.8 160 144 160L224 160C241.7 160 256 174.3 256 192C256 209.7 241.7 224 224 224L144 224C135.2 224 128 231.2 128 240L128 496C128 504.8 135.2 512 144 512L400 512C408.8 512 416 504.8 416 496L416 416C416 398.3 430.3 384 448 384C465.7 384 480 398.3 480 416L480 496C480 540.2 444.2 576 400 576L144 576C99.8 576 64 540.2 64 496L64 240z"/>
    </svg>
  )
}

function CardFooter({ year }) {
  return (
    <div className="flex justify-between items-center border-[#9b9b9b] dark:border-[#515151] border-solid border-b-0 border-t-[0.5px] border-r-0 border-l-0 pt-2.75 mt-auto">
      <p className="font-fira text-[13px] lg:text-[10px] font-semibold text-[#1c1c1c] dark:text-white">
        {year} Project
      </p>
      <span className="font-fira font-semibold text-[12px] lg:text-[10px] text-[#1c1c1c] dark:text-white flex items-center gap-1.5">
        VIEW LIVE PROJECT
        <ExternalLinkIcon />
      </span>
    </div>
  )
}

function useSlideUp(ref, { delay = 0, threshold = 0.15 } = {}) {
  useEffect(function () {
    const el = ref.current
    if (!el) return

    el.style.opacity = '0'
    el.style.transform = 'translateY(32px)'
    el.style.transition = 'none'

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return
          setTimeout(function () {
            el.style.transition = `opacity 0.55s ease ${delay}ms, transform 0.55s ease ${delay}ms`
            el.style.opacity = '1'
            el.style.transform = 'translateY(0)'
          }, 16)
          observer.unobserve(el)
        })
      },
      { threshold }
    )

    observer.observe(el)
    return function () { observer.disconnect() }
  }, [])
}

function WorkCard({ link, src, title, text, year, animDelay }) {
  const wrapRef = useRef(null)
  useSlideUp(wrapRef, { delay: animDelay })

  return (
    <div ref={wrapRef}>
      <div className="rounded-lg bg-inherit dark:bg-[#0a0a0a] border border-solid dark:border-[#232427] border-[#9b9b9b] overflow-hidden h-full flex flex-col">
        <a href={link} target="_blank" rel="noreferrer" className="flex flex-col h-full">
          <div className="w-full overflow-hidden">
            <img 
              className="w-full block" 
              src={src} 
              alt={title}
              width="800"
              height="600"
              loading="lazy"
            />
          </div>
          <div className="p-4 flex flex-col gap-2.25 lg:gap-1.5 flex-1">
            <div className="flex justify-between items-center">
              <h3 className="text-[#0f0f0f] dark:text-[#E5E5E5] text-[17.8px] lg:text-[16px] font-semibold">{title}</h3>
              <svg className="text-[#0f0f0f] dark:text-[#B5B5B5] h-5 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>
            <p className="text-[16px] text-[#1c1c1c] dark:text-[#B5B5B5] lg:text-[15px]">{text}</p>
            <CardFooter year={year} />
          </div>
        </a>
      </div>
    </div>
  )
}

function Work() {
  const [showAll, setShowAll] = useState(false)

  const headingRef = useRef(null)
  useSlideUp(headingRef, { delay: 0 })

  const btnRef = useRef(null)
  useSlideUp(btnRef, { delay: 0 })

  const extraCardsRef = useRef([])

  const initialProjects = projects.slice(0, 5)
  const extraProjects = projects.slice(5)

  useEffect(function animateExtraCards() {
    if (!showAll) return

    extraCardsRef.current.forEach(function (card, index) {
      if (!card) return
      card.style.opacity = '0'
      card.style.transform = 'translateY(32px)'

      setTimeout(function () {
        card.style.transition = `opacity 0.55s ease ${index * 120}ms, transform 0.55s ease ${index * 120}ms`
        card.style.opacity = '1'
        card.style.transform = 'translateY(0)'
      }, 16 + index * 120)
    })
  }, [showAll])

  function handleViewAll() {
    setShowAll(true)
  }

  return (
    <>
      <section className="w-full py-20 flex justify-center items-center bg-[#f4f4f4] dark:bg-[#0a0a0b]" id="work">
        <div className="w-[90%] max-w-330 flex flex-col gap-10 items-center">

          <div ref={headingRef} className="flex flex-col gap-1 self-start">
            <h1 className="text-[34.7px] lg:text-[40px] leading-tight text-[#0f0f0f] dark:text-[#E5E5E5] font-semibold">Selected Work</h1>
            <p className="text-[15.6px] lg:text-[18px] text-[#1c1c1c] dark:text-[#B5B5B5] max-w-125">
              A growing collection of interfaces and web experiences built with simplicity, structure, and usability in mind.
            </p>
          </div>

          <div className="w-full grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-6">
            {initialProjects.map(function (project, index) {
              return (
                <WorkCard
                  key={project.title}
                  link={project.link}
                  src={project.src}
                  title={project.title}
                  text={project.text}
                  year={project.year}
                  animDelay={index * 100}
                />
              )
            })}

            {showAll && extraProjects.map(function (project, index) {
              return (
                <div
                  key={project.title}
                  ref={function (el) { extraCardsRef.current[index] = el }}
                  style={{ opacity: 0, transform: 'translateY(32px)' }}
                >
                  <div className="rounded-lg bg-inherit dark:bg-[#0a0a0a] border border-solid dark:border-[#232427] border-[#9b9b9b] overflow-hidden">
                    <a href={project.link} target="_blank" rel="noreferrer" className="block">
                      <div className="w-full overflow-hidden">
                        <img 
                          className="w-full block" 
                          src={project.src} 
                          alt={project.title}
                          width="800"
                          height="600"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-4 flex flex-col gap-2.25 lg:gap-1.5">
                        <div className="flex justify-between items-center">
                          <h3 className="text-[#0f0f0f] dark:text-[#E5E5E5] text-[17.8px] lg:text-[16px] font-semibold">{project.title}</h3>
                          <svg className="text-[#0f0f0f] dark:text-[#B5B5B5] h-5 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                          </svg>
                        </div>
                        <p className="text-[16px] text-[#1c1c1c] dark:text-[#B5B5B5] lg:text-[15px]">{project.text}</p>
                        <CardFooter year={project.year} />
                      </div>
                    </a>
                  </div>
                </div>
              )
            })}
          </div>

          {!showAll && (
            <button
              ref={btnRef}
              onClick={handleViewAll}
              className="lg:py-2.75 py-2.5 px-5.25 lg:px-5.5 text-sm lg:text-[12px] rounded-lg bg-inherit text-black dark:bg-[#111114] border border-solid border-[#9b9b9b] dark:border-[#2a2a2e] dark:text-[#E5E5E5] cursor-pointer font-medium self-center font-fira"
            >
              View All Projects
            </button>
          )}

        </div>
      </section>
    </>
  )
}

export default Work