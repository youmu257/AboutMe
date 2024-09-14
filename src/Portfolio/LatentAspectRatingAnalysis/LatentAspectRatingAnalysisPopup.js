import React from 'react'
import Popup from 'reactjs-popup'
import LatentAspectRatingAnalysis from './LatentAspectRatingAnalysis'

function LatentAspectRatingAnalysisPopup () {
  return (
    <Popup
      trigger={ LatentAspectRatingAnalysis }
      modal
      nested
    >
      {close => (
        <div className="modal popup-modal">
          <img className="header scale-with-grid" src="images/portfolio/modals/reviews.jpg" alt="" />
          <div className="content">
            <div className="description-box">
              <h4>Latent Aspect Rating Analysis</h4>
              <p>利用評論中的文字來推測出評論者想對於產品不同面向的評分，像是旅館的評論可能會針對價錢、房間乾淨程度和位置等面向去作評分</p>
              <span className="categories"><i className="fa fa-tag"></i>Branding</span>
            </div>
          </div>
          <div className="actions link-box">
            {/* <a href="https://github.com/youmu257">Details</a> */}
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

export default LatentAspectRatingAnalysisPopup
