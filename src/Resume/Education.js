import React from 'react'

function Education () {
  return (
    <div className="row education" id="education">
      <div className="three columns header-col">
        <h1><span>Education</span></h1>
      </div>

      <div className="nine columns main-col">
        <div className="row item">
          <div className="twelve columns">
            <img src="images/ncku_logo.gif" height="30" width="30"></img>
            <h3>國立成功大學</h3>
            <p className="info">資訊工程研究所 智慧型知識管理實驗室<span>&bull;</span>
            <em className="date">July 2015 - Sep 2017</em></p>
            <p>
              在成大經歷與以往完全不同等級的訓練洗禮，除了學習文字探勘、機器學習等技術外，同時也在專案中學習團隊合作和報告能力，
              相較於大學時期的單兵戰鬥能力，研究所中更強調團隊合作能力。就學期間主要研究情緒分析、主題模型和潛在面向意見探勘。
            </p>
            <a href="https://drive.google.com/drive/folders/0B45UCSqNVGeaTDJyWGdoYlRaajQ">
              <span className="gold-tag">
                <li className="trophy">第二屆半導體大數據分析競賽 嘉作</li>
              </span>
            </a>
          </div>
        </div>
        {/* item end */}
        <div className="row item">
          <div className="twelve columns">
            <img src="images/icon_nttu_301.png" height="30" width="30" ></img>
            <h3>國立臺東大學</h3>
            <p className="info">資訊工程學系 <span>&bull;</span> <em className="date">Sep 2011 - Jun 2015</em></p>
            <p>
              在程式新手村鍛鍊基本能力，學習不同基礎資訊科學累積經驗值，曾在一學期同時被四個期末專案毆打，
              裡面更有三團隊專題被夥伴放生，包含軟體工程、文創APP開發和資料探勘，但也讓我的抗壓等級大幅提升。
              待在新手村時期最慶幸是跟一群快樂的小夥伴們挑戰CPE，並參與亞洲區賽事，體會到自己的渺小，才決定繼續研讀研究所增加實力。
            </p>
            {/* 2013 NCPC : http://ncpc2013.nsysu.edu.tw/files/11-1264-9960.php?Lang=zh-tw */}
            <a href="https://drive.google.com/file/d/1H3MKyKmFh24bpkS2KPFJRCgiy_o2AMN8/view">
              <span className="gold-tag">
                <li className="trophy"> NCPC 2013 佳作</li>
              </span>
            </a>
            {/* 2014 NCPC : http://ncpc.ntnu.edu.tw/ncpc/showpage.php?id=11 */}
            <a href="https://drive.google.com/open?id=1doz-LE0K17yDt2TFwrNfSvl7DWOLJgQO">
              <span className="gold-tag">
                <li className="trophy"> NCPC 2014 佳作</li>
              </span>
            </a>
            {/* CPE : https://cpe.cse.nsysu.edu.tw/cpe/scoreboard/2013-10-01 */}
            <a href="https://drive.google.com/open?id=1GhUJZfT4HBtjpTGUIuiPmRTaJAcjXbEH">
              <span className="gold-tag">
                <li className="trophy">CPE 2013 A級 (排名 46/819)</li>
              </span>
            </a>
            <a href="https://drive.google.com/open?id=1F3gcOTmAZ3hfvlMqhFXyXujbNAAM2Dt0">
              <span className="gold-tag">
                <li className="trophy"> 2015 學生學習成果競賽 佳作</li>
              </span>
            </a>
            <a href="https://drive.google.com/file/d/0B45UCSqNVGeaTl9vaE9vanBudGlBeXlXTkpxQXRpNDRuTzNF/view?usp=sharing">
              <span className="gold-tag">
                <li className="trophy"> 2014 RHCSA 證照</li>
              </span>
            </a>
          </div>
        </div>
        {/* item end */}
      </div>
      {/* main-col end */}
    </div>
  )
}

export default Education
