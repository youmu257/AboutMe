import React, { useRef, useState, useEffect } from 'react'
import SectionNavigation from './Header/SectionNavigation'
import InfoBanner from './Header/InfoBanner'
import About from './AboutSection'
import Resume from './Resume/ResumeSection'
import Portfolio from './Portfolio/PortfolioSection'
import MottoSection from './Slides/MottoSection'
import Footer from './Footer/Footer'

function App () {
  const aboutme = useRef(null)
  const smoothScrollToAbout = () => aboutme.current.scrollIntoView({
    behavior: 'smooth'
  })
  const [heightScroll, updateHeightScroll] = useState(0)
  // 取得滾動時的位置
  const handleScroll = () => {
    updateHeightScroll({
      heightScroll: window.scrollY
    })
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })
  return (
    <div className="App">
      {/* Header */}
      <header className="App-header" id="home">
        <SectionNavigation props={heightScroll}/>
        <InfoBanner />
        <p className="scrolldown">
          <a className="smoothscroll" onClick={smoothScrollToAbout}>
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
      {/* Header End */}
      <div ref={aboutme}></div>
      <About />
      <Resume />
      <Portfolio />
      <MottoSection />
      <Footer />
    </div>
  )
}

export default App
