import React from 'react'

function NLPPopup () {
  return (
    <div id="modal-04" className="popup-modal mfp-hide">
      <img className="scale-with-grid" src="images/portfolio/modals/NLP.png" alt="" />
      <div className="description-box">
        <h4>常用的自然語言工具整理</h4>
        <p>前處理如中文斷詞、stemming、去停用詞(stopwords)等。文字探勘如主題模型、word2vec、NER等。</p>
        <span className="categories"><i className="fa fa-tag"></i></span>
      </div>
      <div className="link-box">
        <a href="https://github.com/youmu257/NLP-python">Details</a>
        <a className="popup-modal-dismiss">Close</a>
      </div>
    </div>
  )
}

export default NLPPopup
