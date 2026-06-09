import cv from '../assets/CV.pdf'


function LandingPageSection() {

  return (
    <>
      <section className="w-full pt-40 pb-26 flex justify-center bg-[#0a0a0b]">
        <div className="w-[90%] text-center flex flex-col items-center">
            <a href="" className="font-fira py-1 px-3.5 rounded-full flex gap-2 items-center text-[16px] bg-[#111114] border border-solid border-[#2a2a2e] text-[#B5B5B5] cursor-pointer">
              <svg className="h-4.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>
              <path d="M20 3v4"/><path d="M22 5h-4"/><path d="M4 17v2"/><path d="M5 18H3"/>
            </svg>
            Open to work</a>
            <h className="font-goggle text-[2.7rem] leading-13.75 font-semibold text-[#E5E5E5] tracking-tight mt-4 mb-3">Build with KemfonAbasi_</h>
            <p className="text-[#B5B5B5] text-[1.15rem] leading-7 font-normal">Crafting modern digital experiences focused on quality, performance, and professional web development standards.</p>
            <div className="flex gap-5 mt-6">
              <a href="" className="font-fira py-2.75 px-4.75 border-0 text-[15px] leading-5 bg-[#E5E5E5] text-[#111114] font-medium rounded-lg">View My Work</a>
              <a href="" className="font-fira py-2.75 px-4.75 text-[15px] leading-5 font-medium border border-solid border-[#2a2a2e] text-[#E5E5E5] rounded-lg cursor-pointer">Open Resume</a>
            </div>
        </div>
      </section>
    </>
  )
}

export default LandingPageSection