import React from 'react'
import Education from './Education'
import WorkExperience from './WorkExperience'
import Skill from './Skill'

function Resume () {
  return (
    <section id="resume">
      <Education />
      <WorkExperience />
      <Skill />
    </section>
  )
}

export default Resume
