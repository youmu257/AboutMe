import React from 'react'
import Popup from 'reactjs-popup'
import NLP from './NLP'

function NLPPopup () {
  return (
    <Popup
      trigger={ NLP }
      modal
      nested
    >
      {close => (
        <div className="modal popup-modal">
          <img className="header scale-with-grid" src="images/portfolio/modals/NLP.png" alt="" />
          <div className="content">
            <div className="description-box">
              <h4>常用的自然語言工具整理</h4>
              <p>前處理如中文斷詞、stemming、去停用詞(stopwords)等。文字探勘如主題模型、word2vec、NER等。</p>
              <span className="categories"><i className="fa fa-tag"></i>NLP</span>
            </div>
          </div>
          <div className="actions link-box">
            <a href="https://github.com/youmu257/NLP-python">Details</a>
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

export default NLPPopup
