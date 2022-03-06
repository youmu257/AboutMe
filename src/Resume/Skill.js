import React from 'react'

function Skill () {
  return (
    <div className="row skill">
      <div className="three columns header-col">
        <h1><span>Skills</span></h1>
      </div>

      <div className="nine columns main-col">
        <div className="bars">
          <ul className="skills">
            <li><span className="bar-expand php"></span><em>PHP</em></li>
            <li><span className="bar-expand java"></span><em>Java</em></li>
            <li><span className="bar-expand python"></span><em>Python</em></li>
            <li><span className="bar-expand javascript"></span><em>Javascript</em></li>
            <li><span className="bar-expand c"></span><em>C/C++</em></li>
          </ul>
        </div>
        {/* end skill-bars */}
      </div>
      {/* main-col end */}
    </div>
  )
}

export default Skill
