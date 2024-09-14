import React from 'react'
import Popup from 'reactjs-popup'
import TopicModel from './TopicModel'

function TopicModelPopup () {
  return (
    <Popup
      trigger={ TopicModel }
      modal
      nested
    >
      {close => (
        <div className="modal popup-modal">
          <img className="header scale-with-grid" src="images/portfolio/modals/topic model.PNG" alt="" />
          <div className="content">
            <div className="description-box">
              <h4>主題模型</h4>
              <p>LDA(Latent Dirichlet allocation)利用詞共同出現的關係來實作語意上的分群</p>
              <span className="categories"><i className="fa fa-tag"></i>topic model, opinion mining</span>
            </div>
          </div>
          <div className="actions link-box">
            <a href="https://github.com/youmu257/jLDAGibbsSampling">Details</a>
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

export default TopicModelPopup
