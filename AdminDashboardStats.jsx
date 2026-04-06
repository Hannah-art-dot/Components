import React from 'react';

const AdminDashboardStats = ({ totalUsers, pendingVendors, totalRevenue }) => {
  return (
    <div className="admin-stats">
      <h2>Platform Overview</h2>
      <div className="stat-card">
        <p>Total Users: {totalUsers}</p>
      </div>
      <div className="stat-card warning">
        <p>Pending Verifications: {pendingVendors}</p>
        <button>Review Now</button>
      </div>
      <div className="stat-card">
        <p>Total Revenue Processed: {totalRevenue} ETB</p>
      </div>
    </div>
  );
};

export default AdminDashboardStats;
