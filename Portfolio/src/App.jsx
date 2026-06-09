import { useState } from 'react'
import CoverPage from './pages/CoverPage'
import HeaderSec from './pages/Header'
import LandingPageSection from './pages/Landingpage'
import Work from './pages/SelectedWork'

function App() {

  return (
    <>
      {/* <CoverPage/> */}
      <HeaderSec/>
      <LandingPageSection/>
      <Work/>
    </>
  )
}

export default App
