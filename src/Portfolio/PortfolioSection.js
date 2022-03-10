import React from 'react'
import SentimentLexiconPopup from './SentimentLexicon/SentimentLexiconPopup'
import TopicModelPopup from './TopicModel/TopicModelPopup'
import LatentAspectRatingAnalysisPopup from './LatentAspectRatingAnalysis/LatentAspectRatingAnalysisPopup'
import NLPPopup from './NLP/NLPPopup'

function Portfolio () {
  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>與您分享一些小專案</h1>
          {/* portfolio-wrapper */}
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
            <SentimentLexiconPopup />
            <TopicModelPopup />
            <LatentAspectRatingAnalysisPopup />
            <NLPPopup />
            {/* <TestPopup /> */}
          </div>
        </div>
        {/* portfolio-wrapper end */}
      </div>
    </section>
  )
}

export default Portfolio
