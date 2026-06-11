// import { useState, useEffect, useRef } from 'react'


// function HeaderSec() {
//   return (
//     <>
//       <nav className="bg-[#0a0a0b] w-full flex justify-center items-center py-2.5 px-0 fixed top-0 z-200 border-[#515151] border-solid border-t-0 border-b-[0.5px] border-r-0 border-l-0">
//         <div className="w-[90%] flex justify-between items-center mx-auto my-0">
//             <a href="#" className="text-[24px] font-fira font-medium">Jonah.</a>

//             <div className="flex gap-3 items-center justify-center">
//                 <svg id="theme-icon" className="h-5.75 w-5.75" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
//                   <circle cx="12" cy="12" r="4"></circle>
//                   <path d="M12 2v2"></path> 
//                   <path d="M12 20v2"></path> 
//                   <path d="m4.93 4.93 1.41 1.41"></path> 
//                   <path d="m17.66 17.66 1.41 1.41"></path> 
//                   <path d="M2 12h2"></path> 
//                   <path d="M20 12h2"></path> 
//                   <path d="m6.34 17.66-1.41 1.41"></path> 
//                   <path d="m19.07 4.93-1.41 1.41"></path> 
//                 </svg>
//                 <button className="cursor-pointer font-fira font-medium text-[15px] bg-[#f7f3f3] py-1.5 px-3.75 rounded-lg text-black" id="open-cv-btn-mobile">Hire Me</button>
//                 <button className="bg-none border-none cursor-pointer flex flex-col gap-1.25" id="menuToggle">
//                     <span className='block w-5 h-0.5 bg-[#f7f3f3]'></span>
//                     <span className='block w-5 h-0.5 bg-[#f7f3f3]'></span>
//                     <span className='block w-5 h-0.5 bg-[#f7f3f3]'></span>
//                 </button>
//             </div>
//         </div> 
//       </nav>
//     </>
//   )
// }

// export default HeaderSec







// import { useState, useEffect, useRef } from 'react'

// const SunIcon = () => (
//   <svg className="h-5.75 w-5.75" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <circle cx="12" cy="12" r="4"></circle>
//     <path d="M12 2v2"></path>
//     <path d="M12 20v2"></path>
//     <path d="m4.93 4.93 1.41 1.41"></path>
//     <path d="m17.66 17.66 1.41 1.41"></path>
//     <path d="M2 12h2"></path>
//     <path d="M20 12h2"></path>
//     <path d="m6.34 17.66-1.41 1.41"></path>
//     <path d="m19.07 4.93-1.41 1.41"></path>
//   </svg>
// )

// const MoonIcon = () => (
//   <svg className="h-5.75 w-5.75" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
//     <path strokeLinecap="round" strokeLinejoin="round"
//       d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z"/>
//   </svg>
// )

// function HeaderSec() {
//   const [isDark, setIsDark] = useState(true)

//   useEffect(() => {
//     document.documentElement.classList.add('dark')
//   }, [])

//   const toggleTheme = () => {
//     const html = document.documentElement
//     if (isDark) {
//       html.classList.remove('dark')
//     } else {
//       html.classList.add('dark')
//     }
//     setIsDark(!isDark)
//   }

//   return (
//     <>
//       <nav className="bg-[white] dark:bg-[#0a0a0b] w-full flex justify-center items-center py-2.5 px-0 fixed top-0 z-200 border-[#515151] border-solid border-t-0 border-b-[0.5px] border-r-0 border-l-0">
//         <div className="w-[90%] flex justify-between items-center mx-auto my-0">
//             <a href="#" className="text-[24px] font-fira font-medium">Jonah.</a>

//             <div className="flex gap-3 items-center justify-center">
//                 <button
//                   onClick={toggleTheme}
//                   className="bg-none border-none cursor-pointer text-[#f7f3f3] dark:text-[#f7f3f3]"
//                   aria-label="Toggle theme"
//                 >
//                   {isDark ? <SunIcon /> : <MoonIcon />}
//                 </button>
//                 <button className="cursor-pointer font-fira font-medium text-[15px] bg-[#f7f3f3] py-1.5 px-3.75 rounded-lg text-black" id="open-cv-btn-mobile">Hire Me</button>
//                 <button className="bg-none border-none cursor-pointer flex flex-col gap-1.25" id="menuToggle">
//                     <span className='block w-5 h-0.5 bg-[#f7f3f3]'></span>
//                     <span className='block w-5 h-0.5 bg-[#f7f3f3]'></span>
//                     <span className='block w-5 h-0.5 bg-[#f7f3f3]'></span>
//                 </button>
//             </div>
//         </div> 
//       </nav>
//     </>
//   )
// }

// export default HeaderSec





























































import { useState, useEffect, useRef } from 'react'

const SunIcon = () => (
  <svg className="h-5.75 w-5.75" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4"></circle>
    <path d="M12 2v2"></path>
    <path d="M12 20v2"></path>
    <path d="m4.93 4.93 1.41 1.41"></path>
    <path d="m17.66 17.66 1.41 1.41"></path>
    <path d="M2 12h2"></path>
    <path d="M20 12h2"></path>
    <path d="m6.34 17.66-1.41 1.41"></path>
    <path d="m19.07 4.93-1.41 1.41"></path>
  </svg>
)

const MoonIcon = () => (
  <svg className="h-5.75 w-5.75" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round"
      d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z"/>
  </svg>
)

function HeaderSec() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    document.documentElement.classList.add('dark')
  }, [])

  const toggleTheme = () => {
    const html = document.documentElement
    if (isDark) {
      html.classList.remove('dark')
    } else {
      html.classList.add('dark')
    }
    setIsDark(!isDark)
  }

  return (
    <>
      <nav className="bg-white dark:bg-[#0a0a0b] w-full flex justify-center items-center py-2.5 px-0 fixed top-0 z-200 border-[#515151] border-solid border-t-0 border-b-[0.5px] border-r-0 border-l-0">
        <div className="w-[90%] flex justify-between items-center mx-auto my-0">
            <a href="#" className="text-[#0a0a0b] dark:text-white text-[24px] font-fira font-medium">Jonah.</a>

            <div className="flex gap-3 items-center justify-center">
                <button
                  onClick={toggleTheme}
                  className="bg-none border-none cursor-pointer text-[#0a0a0b] dark:text-[#f7f3f3]"
                  aria-label="Toggle theme"
                >
                  {isDark ? <SunIcon /> : <MoonIcon />}
                </button>
                <button className="cursor-pointer font-fira font-medium text-[15px] bg-[#0a0a0b] dark:bg-[#f7f3f3] py-1.5 px-3.75 rounded-lg text-[white] dark:text-black" id="open-cv-btn-mobile">Hire Me</button>
                <button className="bg-none border-none cursor-pointer flex flex-col gap-1.25" id="menuToggle">
                    <span className='block w-5 h-0.5 bg-[black] dark:bg-[#f7f3f3]'></span>
                    <span className='block w-5 h-0.5 bg-[black] dark:bg-[#f7f3f3]'></span>
                    <span className='block w-5 h-0.5 bg-[black] dark:bg-[#f7f3f3]'></span>
                </button>
            </div>
        </div> 
      </nav>
    </>
  )
}

export default HeaderSec