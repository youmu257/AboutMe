import React from 'react'

function MottoTemplate (motto, cite) {
  return (
    <li>
      <blockquote>
        <p>{ motto }
        </p>
        <cite>{ cite }</cite>
      </blockquote>
    </li>
  )
}

export default MottoTemplate
