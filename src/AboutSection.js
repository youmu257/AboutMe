import React from 'react'

function About () {
  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img className="profile-pic" src="images/profilepic.jpg" alt="" />
        </div>

        <div className="nine columns main-col">
          <h2>About Me</h2>
          <p>
            嗨，我是李冠霖，是個有約兩年工作經驗的PHP後端工程師。曾在敏捷式開發團隊中擔任 Development Team 的角色，
            有跨組合作的經驗和SA文件撰寫經驗。在團隊中也接觸到前端 JS 的開發項目，也經歷過需要研究新套件的案子，不會排斥學習新技術。
          </p>
          <div className="row">
            <div className="columns download">
              <p>
                <a href="resume_guan_lin_ch.pdf" target="_blank" className="button">
                  <i className="fa fa-download"></i>Download (Chinese)
                </a>
              </p>
            </div>
          </div>
          {/* end row */}
        </div>
        {/* end .main-col */}
      </div>
    </section>
  )
}

export default About
