import React from 'react'
import About from './AboutSection'

function App () {
  return (
    <div className="App">
      {/* Header */}
      <header className="App-header" id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>

          <ul id="nav" className="nav">
              <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
              <li><a className="smoothscroll" href="#about">About</a></li>
            <li><a className="smoothscroll" href="#resume">Resume</a></li>
              <li><a className="smoothscroll" href="#portfolio">Works</a></li>
          </ul>
          {/* end #nav */}
        </nav>
        {/* end #nav-wrap */}

        <div className="row banner">
          <div className="banner-text">
            <h2 className="side-title">你好，歡迎來到我的主頁!</h2>
            <h1 className="responsive-headline head-title head-title-margin">我是李冠霖</h1>
            <p className="intro-position">
              <span>Software Engineer</span>
              <span>Backend Engineer</span>
            </p>
            <hr />
            <ul className="social">
              <li><a href="http://youmu257.github.io"><i className="fa fa-home"></i></a></li>
              <li><address><a href="mailto:youmu257@gmail.com"><i className="fa fa-envelope-o"></i></a></address></li>
              <li><a href="https://github.com/youmu257"><i className="fa fa-github"></i></a></li>
              <li><a href="https://www.linkedin.com/in/%E5%86%A0%E9%9C%96-%E6%9D%8E-a97a44123/"><i className="fa fa-linkedin"></i></a></li>
            </ul>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
        </p>
      </header>
      {/* Header End */}
      <About />
    </div>
  )
}

export default App
