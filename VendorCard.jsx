import React from 'react';

const VendorCard = ({ vendor }) => {
  return (
    <div className="vendor-card">
      <img src={vendor.image || '/placeholder.jpg'} alt={vendor.name} />
      <h3>{vendor.name}</h3>
      <p>Service: {vendor.serviceType}</p>
      <p>Rating: {vendor.rating} / 5</p>
      {vendor.isVerified && <span className="verified-badge">Verified ✓</span>}
      <button>View Profile</button>
    </div>
  );
};

export default VendorCard;
