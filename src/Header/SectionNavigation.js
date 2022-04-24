import React from 'react'

function SectionNavigation (props) {
  let opaque = ''
  // header 的高度
  const h = props.headerHeight
  // 目前滾動到位置(高度)
  const y = props.heightScroll
  if ((y > h * 0.20) && (y < h) && (y > 768)) {
    opaque = 'opaque'
  } else {
    if (y < h * 0.20) {
      opaque = ''
    } else {
      opaque = 'opaque'
    }
  }
  return (
    <nav id="nav-wrap" className={opaque}>
      <a
        className="mobile-btn"
        href="#nav-wrap"
        title="Show navigation"
      >
        Show navigation
      </a>
      <a
        className="mobile-btn"
        href="#"
        title="Hide navigation"
      >
        Hide navigation
      </a>
      <ul id="nav" className="nav">
        <li className="current">
          <a className="smoothscroll" href="#home">Home</a>
        </li>
        <li>
          <a className="smoothscroll" href="#about">About</a>
        </li>
        <li>
          <a className="smoothscroll" href="#resume">Resume</a>
        </li>
        <li>
          <a className="smoothscroll" href="#portfolio">Works</a>
        </li>
      </ul>
    </nav>
  )
}

export default SectionNavigation
