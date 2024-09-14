import React from 'react'
import FooterTemplate from './FooterTemplate'

const infoArray = [
  {
    link: 'http://youmu257.github.io',
    className: 'fa fa-home'
  },
  {
    link: 'mailto:youmu257@gmail.com',
    className: 'fa fa-envelope-o'
  },
  {
    link: 'https://github.com/youmu257',
    className: 'fa fa-github'
  },
  {
    link: 'https://twitter.com/youmu257',
    className: 'fa fa-twitter'
  }
  // {
  //   link: 'https://www.linkedin.com/in/%E5%86%A0%E9%9C%96-%E6%9D%8E-a97a44123/',
  //   className: 'fa fa-linkedin'
  // },
  // {
  //   link: '#',
  //   className: 'fa fa-facebook'
  // },
  // {
  //   link: '#',
  //   className: 'fa fa-google-plus'
  // },
  // {
  //   link: '#',
  //   className: 'fa fa-instagram'
  // },
  // {
  //   link: '#',
  //   className: 'fa fa-dribbble'
  // },
  // {
  //   link: '#',
  //   className: 'fa fa-skype'
  // }
]

function Footer () {
  // 把資訊陣列塞進樣板中
  const infoList = []
  infoArray.map(({ link, className }) => (
    infoList.push(FooterTemplate(link, className))
  ))

  return (
    <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">
            { infoList }
          </ul>
          <ul className="copyright">
            <li>&copy; Copyright 2014 CeeVee</li>
            <li>Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>
          </ul>
        </div>
        <div id="go-top">
          <a className="smoothscroll" title="Back to Top" href="#home">
            <i className="icon-up-open"></i>
          </a>
        </div>
      </div>
   </footer>
  )
}

export default Footer
