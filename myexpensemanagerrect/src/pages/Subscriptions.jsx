import React from 'react';

const Subscriptions = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Subscriptions</h2>
      {/* Example subscription list */}
      <div className="bg-white shadow rounded p-4">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left">Service</th>
              <th className="px-4 py-2 text-left">Cost</th>
              <th className="px-4 py-2 text-left">Renewal Date</th>
              <th className="px-4 py-2 text-left">Frequency</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            <tr>
              <td className="px-4 py-2">Netflix</td>
              <td className="px-4 py-2">$15.99</td>
              <td className="px-4 py-2">2025-03-01</td>
              <td className="px-4 py-2">Monthly</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Subscriptions;
