import React from 'react';

const Dashboard = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Dashboard</h2>
      {/* Example metric cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white shadow rounded p-4">
          <p className="text-gray-600">Total Expenses</p>
          <p className="text-2xl font-bold">$2,345</p>
        </div>
        <div className="bg-white shadow rounded p-4">
          <p className="text-gray-600">Active Subscriptions</p>
          <p className="text-2xl font-bold">5</p>
        </div>
        <div className="bg-white shadow rounded p-4">
          <p className="text-gray-600">Monthly Budget</p>
          <p className="text-2xl font-bold">$3,000</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
