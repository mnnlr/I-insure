import React, { useState } from 'react';


const DownloadPolicy = () => {
  const [policyNumber, setPolicyNumber] = useState('');
  const [email, setEmail] = useState('');

  const handleDownload = () => {
    // Check if policy number and email are filled
    if (policyNumber.trim() === '' || email.trim() === '') {
      // If any field is empty, alert the user
      alert('Please fill out all fields before downloading.');
      return;
    }
  
    const fileContent = `Policy Number: ${policyNumber}\nEmail: ${email}`;
  
    const blob = new Blob([fileContent], { type: 'text/plain' });
  
    const anchor = document.createElement('a');
    anchor.href = window.URL.createObjectURL(blob);
    anchor.download = 'policy.txt'; 
  
    document.body.appendChild(anchor);
    anchor.click();
  
  
    document.body.removeChild(anchor);
  };
  

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
   
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-6">Download Your Policy</h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="policy-number" className="block text-sm font-medium text-gray-700">
              Policy Number
            </label>
            <input
              id="policy-number"
              name="policy-number"
              type="text"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={policyNumber}
              onChange={(e) => setPolicyNumber(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <button
              type="button"
              onClick={handleDownload}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Download
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DownloadPolicy;
