import React from 'react'

function smoothScrollTo (e) {
  e.preventDefault()
  document.querySelector(e.currentTarget.getAttribute('href')).scrollIntoView({ behavior: 'smooth' })
}

function SectionNavigation (props) {
  let opaque = ''
  // header 的高度
  const h = props.headerHeight
  // header 的寬度
  const w = props.headerWidth
  // 目前滾動到位置(高度)
  const y = props.heightScroll
  if ((y > h * 0.20) && (y < h) && (w > 768)) {
    // 隱藏起來
    opaque = 'not-show'
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
          <a className="smoothscroll" href="#home" onClick={smoothScrollTo}>Home</a>
        </li>
        <li>
          <a className="smoothscroll" href="#about" onClick={smoothScrollTo}>About</a>
        </li>
        <li>
          <a className="smoothscroll" href="#resume" onClick={smoothScrollTo}>Resume</a>
        </li>
        <li>
          <a className="smoothscroll" href="#portfolio" onClick={smoothScrollTo}>Works</a>
        </li>
      </ul>
    </nav>
  )
}

export default SectionNavigation
