import React from 'react'
import SectionNavigation from './Header/SectionNavigation'
import InfoBanner from './Header/InfoBanner'
import About from './AboutSection'
import Resume from './Resume/ResumeSection'
import Portfolio from './Portfolio/PortfolioSection'
import MottoSection from './Slides/MottoSection'
import Footer from './Footer/Footer'

function App () {
  return (
    <div className="App">
      {/* Header */}
      <header className="App-header" id="home">
        <SectionNavigation />
        <InfoBanner />
        <p className="scrolldown">
          <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
        </p>
      </header>
      {/* Header End */}
      <About />
      <Resume />
      <Portfolio />
      <MottoSection />
      <Footer />
    </div>
  )
}

export default App
