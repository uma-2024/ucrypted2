import React from 'react'
import './MyCards.css'
import cardImage from '../../Assets/Images/image (42).png'
import cardImage2 from '../../Assets/Images/image (41).png'
import cardImage3 from '../../Assets/Images/image (40).png'
import cardImage4 from '../../Assets/Images/image (39).png'
const MyCards = () => {
  return (
    <div className='mycard-container'>
        <div className="category-section">
        <div className="category-header">
          <h4 className='mycard-heading'>My Cards</h4>
          <a href="#see-all">See All</a>
        </div>
        <div className="card-grid">
          <div className="company-card">
            <img src={cardImage} alt="NordVPN" />
          </div>
          <div className="company-card">
            <img src={cardImage2} alt="Zomato" />
          </div>
          <div className="company-card">
            <img src={cardImage3} alt="Myntra" />
          </div>
          <div className="company-card">
            <img src={cardImage4} alt="Starbucks" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyCards
