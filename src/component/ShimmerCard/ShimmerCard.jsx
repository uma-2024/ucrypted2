import React from 'react';
import './ShimmerCard.css'; // Add your CSS file

const ShimmerCard = () => {
  return (
    <div className="skeleton-card shimmer">
      <div className="skeleton-image"></div>
      <div className="skeleton-text"></div>
      <div className="skeleton-text"></div>
      <div className="skeleton-text"></div>
    </div>
  );
};

export default ShimmerCard;
