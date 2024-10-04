import React from 'react';
import ShimmerCard from './ShimmerCard'; // Import the shimmer component
import './ShimmerCard.css'; // CSS for layout

const ShimmerContainer = () => {
  // Create an array of length 8 to map over
  const shimmerCards = Array(8).fill(0);

  return (
    <div className="shimmer-container">
      {shimmerCards.map((_, index) => (
        <ShimmerCard key={index} />
      ))}
    </div>
  );
};

export default ShimmerContainer;
