import { useEffect, useRef } from 'react'

import src from '../assets/skin.png'
import one from '../assets/lastly.png'
import two from '../assets/fyn.png'
import three from '../assets/twitter_post.png'
import four from '../assets/dine.png'
import five from '../assets/log.png'
import six from '../assets/Eden.png'

function Work() {
  return (
    <>
      <section className="w-full py-20 flex justify-center items-center bg-[#0a0a0b]" id="work">
        <div className="w-[90%] flex flex-col gap-10">
          <div className="flex flex-col gap-1">
            <h1 className="text-[40px] leading-tight text-[#E5E5E5] font-semibold">Selected Work</h1>
            <p className="text-[18px] text-[#B5B5B5] max-w-125">
              A growing collection of interfaces and web experiences built with simplicity, structure, and usability in mind.
            </p>
          </div>
          <div className="w-full grid grid-cols-1 gap-12">

            <a href="#" target="_blank" className="rounded-lg bg-[#0a0a0a] border border-solid border-[#232427] overflow-hidden block">
              <div className="w-full overflow-hidden">
                <img className="w-full block" src={src} />
              </div>
              <div className="p-4 flex flex-col gap-2.25">
                <div className="flex justify-between items-center">
                  <h3 className="text-[#E5E5E5] text-[21px] font-semibold">SkinLovry Website</h3>
                  <svg className="text-[#B5B5B5] h-6 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
                <p className="text-[18px] text-[#B5B5B5]">Modern beauty and skincare platform designed with responsive interfaces, smooth interactions, and premium frontend structure.</p>
                <div className="flex justify-between border-[#515151] border-solid border-b-0 border-t-[0.5px] border-r-0 border-l-0 my-2 pt-3.75">
                  <p className="font-fira">2025 Project</p>
                  <a href="" className="">
                    <h2 className="font-fira ">VIEW LIVE PROJECT</h2>
                  </a>
                </div>
              </div>
            </a>


             <a href="#" target="_blank" className="rounded-lg bg-[#0a0a0a] border border-solid border-[#232427] overflow-hidden block">
              <div className="w-full overflow-hidden">
                <img className="w-full block" src={one} />
              </div>
              <div className="p-4 flex flex-col gap-2.25">
                <div className="flex justify-between items-center">
                  <h3 className="text-[#E5E5E5] text-[21px] font-semibold">Healthcare Website</h3>
                  <svg className="text-[#B5B5B5] h-6 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
                <p className="text-[18px] text-[#B5B5B5]">Hospital management platform focused on modern web development, responsive design, and seamless healthcare interactions.</p>
                <div className="flex justify-between border-[#515151] border-solid border-b-0 border-t-[0.5px] border-r-0 border-l-0 my-2 pt-3.75">
                  <p className="font-fira">2026 Project</p>
                  <a href="" className="">
                    <h2 className="font-fira ">VIEW LIVE PROJECT</h2>
                  </a>
                </div>
              </div>
            </a>


             <a href="#" target="_blank" className="rounded-lg bg-[#0a0a0a] border border-solid border-[#232427] overflow-hidden block">
              <div className="w-full overflow-hidden">
                <img className="w-full block" src={two} />
              </div>
              <div className="p-4 flex flex-col gap-2.25">
                <div className="flex justify-between items-center">
                  <h3 className="text-[#E5E5E5] text-[21px] font-semibold">Avenoir Website</h3>
                  <svg className="text-[#B5B5B5] h-6 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
                <p className="text-[18px] text-[#B5B5B5]">Luxury hotel experience focused on responsive systems, modern frontend development, and smooth interaction.</p>
                <div className="flex justify-between border-[#515151] border-solid border-b-0 border-t-[0.5px] border-r-0 border-l-0 my-2 pt-3.75">
                  <p className="font-fira">2026 Project</p>
                  <a href="" className="">
                    <h2 className="font-fira ">VIEW LIVE PROJECT</h2>
                  </a>
                </div>
              </div>
            </a>


             <a href="#" target="_blank" className="rounded-lg bg-[#0a0a0a] border border-solid border-[#232427] overflow-hidden block">
              <div className="w-full overflow-hidden">
                <img className="w-full block" src={three} />
              </div>
              <div className="p-4 flex flex-col gap-2.25">
                <div className="flex justify-between items-center">
                  <h3 className="text-[#E5E5E5] text-[21px] font-semibold">Velmora Experience</h3>
                  <svg className="text-[#B5B5B5] h-6 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
                <p className="text-[18px] text-[#B5B5B5]">Velmora restaurant focused on responsive systems, modern frontend development, and smooth customer interaction.</p>
                <div className="flex justify-between border-[#515151] border-solid border-b-0 border-t-[0.5px] border-r-0 border-l-0 my-2 pt-3.5">
                  <p className="font-fira">2026 Project</p>
                  <a href="" className="">
                    <h2 className="font-fira ">VIEW LIVE PROJECT</h2>
                  </a>
                </div>
              </div>
            </a>

             <a href="#" target="_blank" className="rounded-lg bg-[#0a0a0a] border border-solid border-[#232427] overflow-hidden block">
              <div className="w-full overflow-hidden">
                <img className="w-full block" src={four} />
              </div>
              <div className="p-4 flex flex-col gap-2.25">
                <div className="flex justify-between items-center">
                  <h3 className="text-[#E5E5E5] text-[21px] font-semibold">Taste Meets Elegance</h3>
                  <svg className="text-[#B5B5B5] h-6 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
                <p className="text-[18px] text-[#B5B5B5]">Wine commerce platform focused on modern web development, responsive design, and seamless shopping interactions.</p>
                <div className="flex justify-between border-[#515151] border-solid border-b-0 border-t-[0.5px] border-r-0 border-l-0 my-2 pt-3.5">
                  <p className="font-fira">2026 Project</p>
                  <a href="" className="">
                    <h2 className="font-fira ">VIEW LIVE PROJECT</h2>
                  </a>
                </div>
              </div>
            </a>

             <a href="#" target="_blank" className="rounded-lg bg-[#0a0a0a] border border-solid border-[#232427] overflow-hidden block">
              <div className="w-full overflow-hidden">
                <img className="w-full block" src={five} />
              </div>
              <div className="p-4 flex flex-col gap-2.25">
                <div className="flex justify-between items-center">
                  <h3 className="text-[#E5E5E5] text-[21px] font-semibold">SkinLovry Website</h3>
                  <svg className="text-[#B5B5B5] h-6 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
                <p className="text-[18px] text-[#B5B5B5]">Modern beauty and skincare platform designed with responsive interfaces, smooth interactions, and premium frontend structure.</p>
                <div className="flex justify-between border-[#515151] border-solid border-b-0 border-t-[0.5px] border-r-0 border-l-0 my-2 pt-3.5">
                  <p className="font-fira">2026 Project</p>
                  <a href="" className="">
                    <h2 className="font-fira ">VIEW LIVE PROJECT</h2>
                  </a>
                </div>
              </div>
            </a>

             <a href="#" target="_blank" className="rounded-lg bg-[#0a0a0a] border border-solid border-[#232427] overflow-hidden block">
              <div className="w-full overflow-hidden">
                <img className="w-full block" src={six} />
              </div>
              <div className="p-4 flex flex-col gap-2.25">
                <div className="flex justify-between items-center">
                  <h3 className="text-[#E5E5E5] text-[21px] font-semibold">SkinLovry Website</h3>
                  <svg className="text-[#B5B5B5] h-6 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
                <p className="text-[18px] text-[#B5B5B5]">Modern beauty and skincare platform designed with responsive interfaces, smooth interactions, and premium frontend structure.</p>
                <div className="flex justify-between border-[#515151] border-solid border-b-0 border-t-[0.5px] border-r-0 border-l-0 my-2 pt-3.5">
                  <p className="font-fira">2026 Project</p>
                  <a href="" className="">
                    <h2 className="font-fira ">VIEW LIVE PROJECT</h2>
                  </a>
                </div>
              </div>
            </a>

          </div>

          <a href="" className="py-2.75 px-5.5 text-sm rounded-lg bg-[#111114] border border-solid border-[#2a2a2e] text-[#E5E5E5] cursor-pointer self-center font-fira" id="view-all-btn">View All Projects</a>
        </div>
      </section>
    </>
  )
}

export default Work