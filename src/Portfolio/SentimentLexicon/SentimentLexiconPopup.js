import React from 'react'
import Popup from 'reactjs-popup'
import SentimentLexicon from './SentimentLexicon'

function SentimentLexiconPopup () {
  return (
    <Popup
      trigger={ SentimentLexicon }
      modal
      nested
    >
      {close => (
        <div className="modal popup-modal">
          <img className="header scale-with-grid" src="images/portfolio/modals/sentiment_lexicon.jpg" alt="" />
          <div className="content">
            <div className="description-box">
              <h4>情緒字典</h4>
              <p>利用少量關鍵字作半監督式學習將輸入文章分成正向和負向兩群來建立情緒字典，可以針對不同類型(domain)的資料建立專屬的情緒字典。</p>
              <span className="categories"><i className="fa fa-tag"></i>Java, SOC-PMI, Machine learning</span>
            </div>
          </div>
          <div className="actions link-box">
            <a href="https://github.com/youmu257/SentimentLexicon">Details</a>
            <a
              className="popup-modal-dismiss"
              onClick={() => {
                close()
              }}
            >
              close
            </a>
          </div>
        </div>
      )}
    </Popup>
  )
}
export default SentimentLexiconPopup
