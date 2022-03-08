import React from 'react'

function FooterTemplate (link, className) {
  if (className === 'fa fa-envelope-o') {
    return (
      <li>
        <address>
          <a href={ link }>
            <i className={ className }></i>
          </a>
        </address>
      </li>
    )
  }
  return (
    <li>
      <a href={ link }>
        <i className={ className }></i>
      </a>
    </li>
  )
}

export default FooterTemplate
