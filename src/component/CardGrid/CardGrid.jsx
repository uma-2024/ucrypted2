import React from 'react';
import './CardGrid.css'; // Import CSS for styling
import foodImage from '../../Assets/Images/Group 12.png'
import cardImage from '../../Assets/Images/image (42).png'
import cardImage2 from '../../Assets/Images/image (41).png'
import cardImage3 from '../../Assets/Images/image (40).png'
import cardImage4 from '../../Assets/Images/image (39).png'
const CardGrid = () => {
  return (
    <div className="card-grid-container">
      {/* Icon Row */}
      <div className="icon-row">
        {Array(8).fill().map((_, index) => (
          <div key={index} className="icon-card">
            <img src={foodImage} alt="Food Icon" />
        
          </div>
        ))}
      </div>

      {/* Bitcoin Cashback Section */}
      <div className="category-section">
        <div className="category-header">
          <h3>Bitcoin Cashback!</h3>
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

      {/* Food Section */}
      <div className="category-section">
        <div className="category-header">
          <h3>Food</h3>
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
  );
};

export default CardGrid;
