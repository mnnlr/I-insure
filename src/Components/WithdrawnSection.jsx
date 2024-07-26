

import React from 'react';

const WithdrawnSection = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-4">Withdrawal Section</h2>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h3 className="text-xl font-bold mb-4">How to Withdraw</h3>
        <p className="text-gray-700 mb-4">
          To make a withdrawal from your account, please follow these steps:
        </p>
        <ol className="list-decimal pl-6">
          <li className="mb-2">Log in to your account on the designated portal.</li>
          <li className="mb-2">Navigate to the withdrawal section.</li>
          <li className="mb-2">Select the withdrawal method (e.g., bank transfer, cheque).</li>
          <li className="mb-2">Enter the withdrawal amount.</li>
          <li className="mb-2">Confirm the withdrawal request.</li>
        </ol>
      </div>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h3 className="text-xl font-bold mb-4">Withdrawal Methods</h3>
        <p className="text-gray-700 mb-4">
          We offer the following withdrawal methods for your convenience:
        </p>
        <ul className="list-disc pl-6">
          <li className="mb-2">Bank Transfer</li>
          <li className="mb-2">Cheque</li>
          <li className="mb-2">Online Payment Platforms (e.g., PayPal, Payoneer)</li>
        </ul>
      </div>
    </div>
  );
}

export default WithdrawnSection;
