import React from 'react'
import $ from 'jquery'
import MottoTemplate from './MottoTemplate'

const slidesArray = [
  {
    motto: '極限只是一條讓人超越的界線',
    cite: 'Leo Li'
  },
  {
    motto: 'Don’t worry if it does not work right. If everything did, you’d be out of a job.',
    cite: 'Mosher’s Law of Software Engineering'
  },
  {
    motto: 'Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.',
    cite: 'Martin Golding'
  },
  {
    motto: 'Walking on water and developing software from a specification are easy if both are frozen.',
    cite: 'Edward V Berard'
  }
]

function MottoSection () {
  // TODO: 找替代 flexslider  的 react 套件
  window.jQuery = window.$ = $
  require('flexslider')
  window.onload = () => {
    $('.flexslider').flexslider({
      namespace: 'flex-',
      controlsContainer: '.flex-container',
      animation: 'slide',
      controlNav: true,
      directionNav: false,
      smoothHeight: true,
      slideshowSpeed: 7000,
      animationSpeed: 600,
      randomize: false
    })
  }
  // 把座右銘陣列塞進樣板中
  const mottoList = []
  slidesArray.map(({ motto, cite }) => (
    mottoList.push(MottoTemplate(motto, cite))
  ))
  return (
    <section id="testimonials">
      <div className="text-container">
        <div className="row">
          <div className="two columns header-col">
            <h1><span>Client Testimonials</span></h1>
          </div>
          <div className="ten columns flex-container">
            <div className="flexslider">
              <ul className="slides">
                { mottoList }
              </ul>
            </div>
            {/* div.flexslider ends */}
          </div>
          {/* div.flex-container ends */}
        </div>
        {/* row ends */}
      </div>
      {/* text-container ends */}
    </section>
  )
}

export default MottoSection
