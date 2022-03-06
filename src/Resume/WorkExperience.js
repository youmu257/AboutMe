import React from 'react'

function WorkExperience () {
  return (
    <div className="row work" id="work">
      <div className="three columns header-col">
        <h1><span>Experience</span></h1>
      </div>

    <div className="nine columns main-col">
      {/* KKday */}
      <div className="row item">
        <div className="twelve columns">
          <h3>酷遊天國際旅行社 KKday</h3>
          <p className="info">助理工程師 <span>&bull;</span>
          <em className="date">July 2018 - March 2020 </em></p>

          <p>
            開發內部人員使用的 ERP 系統，包含訂單、訊息、單據等...。後端使用 PHP 的框架(codeigniter 和 laravel)，前端有接觸過 angular 和 vue 的框架。
            團隊跑敏捷式開發並用採用 github 發 PR 形式做 code review 和撰寫單元測試跑 CI 確保程式品質。
          </p>
        </div>
      </div>
      {/* KKday end */}
      {/* 中磊電子 */}
      <div className="row item">
        <div className="twelve columns">
          <h3>中磊電子</h3>
          <p className="info">助理工程師 <span>&bull;</span>
          <em className="date">March 2018 - May 2018</em></p>

          <p>
            使用 JAVA 在 openfire 上開發智慧家電的 API，實作 RFC 通訊協定。
          </p>
        </div>
      </div>
      {/* 中磊電子 end */}
      {/* 成大KPI 系統維護 */}
      <div className="row item">
        <div className="twelve columns">
          <h3>成大KPI 系統維護</h3>
          <p className="info">頂尖大學計畫 <span>&bull;</span>
          <em className="date">August 2016 - February 2017</em></p>

          <p>
          重構成大KPI資料庫與維護KPI網站，重構後資料庫大小減少40%，於二月後交接給學弟維護。
          </p>
        </div>
      </div>
      {/* 成大KPI 系統維護 end */}
      {/* 成大馬達中心網管 */}
      <div className="row item">
        <div className="twelve columns">
          <h3>成大馬達中心網管</h3>
          <p className="info">深耕計畫 <span>&bull;</span>
          <em className="date">February 2016 - December 2016</em></p>

          <p>
          維護與更新成大馬達中心網頁。同時開發成大馬達博物館網站，我主要擔任PM與後台的建立，使用php與jQuery建立後台操作頁面。
          </p>
        </div>
      </div>
      {/* 成大馬達中心網管 end */}
      {/* 綠能低碳社會溝通之議題分析與知識發掘平台 */}
      <div className="row item">
        <div className="twelve columns">
          <h3>綠能低碳社會溝通之議題分析與知識發掘平台</h3>
          <p className="info">科技部計畫 <span>&bull;</span>
          <em className="date">April 2015 - December 2015</em></p>

          <p>
            此計畫主要希望分析民眾在 Facebook 上對綠能議題的看法。我負責的是情緒上的分析，利用少量關鍵字建立情緒字典，以利後續對文章的情緒分析。
            程式主要接手學長的碩論，但其中有部分 library 是使用 java 且不易改動，但主程式卻是C#，因此我把 C# 的部分全部翻譯成 java 以利整合，這也是我碩士的第一件工作。
          </p>
        </div>
      </div>
      {/* 綠能低碳社會溝通之議題分析與知識發掘平台 end */}
    </div>
    {/* main-col end */}
    </div>
  )
}

export default WorkExperience
