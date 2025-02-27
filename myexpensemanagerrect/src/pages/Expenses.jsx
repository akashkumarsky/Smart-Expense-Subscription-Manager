import React from 'react';

const Expenses = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Expenses</h2>
      {/* Example expense list */}
      <div className="bg-white shadow rounded p-4">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left">Description</th>
              <th className="px-4 py-2 text-left">Amount</th>
              <th className="px-4 py-2 text-left">Date</th>
              <th className="px-4 py-2 text-left">Category</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            <tr>
              <td className="px-4 py-2">Coffee</td>
              <td className="px-4 py-2">$3.50</td>
              <td className="px-4 py-2">2025-02-27</td>
              <td className="px-4 py-2">Food</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Expenses;
