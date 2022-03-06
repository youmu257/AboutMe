import React from 'react'

function TopicModelPopup () {
  return (
    <div id="modal-02" className="popup-modal mfp-hide">
      <img className="scale-with-grid" src="images/portfolio/modals/topic model.PNG" alt="" />
      <div className="description-box">
        <h4>主題模型</h4>
        <p>LDA(Latent Dirichlet allocation)利用詞共同出現的關係來實作語意上的分群</p>
        <span className="categories"><i className="fa fa-tag"></i>topic model, opinion mining</span>
      </div>
      <div className="link-box">
        <a href="https://github.com/youmu257/jLDAGibbsSampling">Details</a>
        <a className="popup-modal-dismiss">Close</a>
      </div>
    </div>
  )
}

export default TopicModelPopup
