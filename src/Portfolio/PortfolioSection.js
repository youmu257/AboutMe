import React from 'react'
import SentimentLexicon from './SentimentLexicon/SentimentLexicon'
import TopicModel from './TopicModel/TopicModel'
import LatentAspectRatingAnalysis from './LatentAspectRatingAnalysis/LatentAspectRatingAnalysis'
import NLP from './NLP/NLP'
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
            <SentimentLexicon />
            <TopicModel />
            <LatentAspectRatingAnalysis />
            <NLP />
          </div>
        </div>
        {/* portfolio-wrapper end */}
      </div>
      {/* twelve columns end */}
      <SentimentLexiconPopup />
      <TopicModelPopup />
      <LatentAspectRatingAnalysisPopup />
      <NLPPopup />
    </section>
  )
}

export default Portfolio
