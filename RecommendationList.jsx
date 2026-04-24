import React from 'react';
import VendorCard from './VendorCard';

const RecommendationList = ({ recommendations }) => {
  return (
    <div className="recommendation-list">
      <h2>AI Recommendations for You</h2>
      <div className="grid">
        {recommendations.map(vendor => (
          <VendorCard key={vendor.id} vendor={vendor} />
        ))}
      </div>
    </div>
  );
};

export default RecommendationList;
