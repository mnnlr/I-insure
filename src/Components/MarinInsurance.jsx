

import React from 'react';


const MarinIsurance = () => { 
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-xl font-semibold text-purple-700 mb-4">
          Get ₹10 Lakh cover at just ₹591/transit+
        </h1>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Compare & Save upto 42% on Marine Insurance
        </h2>
        <ul className="mb-6">
          <li className="flex items-center text-gray-700 mb-2">
            <span className="bg-green-200 text-green-700 rounded-full px-2 py-1 text-xs font-bold mr-2">✔</span>
            Instant policy copy
          </li>
          <li className="flex items-center text-gray-700 mb-2">
            <span className="bg-green-200 text-green-700 rounded-full px-2 py-1 text-xs font-bold mr-2">✔</span>
            All commodities available
          </li>
          <li className="flex items-center text-gray-700">
            <span className="bg-green-200 text-green-700 rounded-full px-2 py-1 text-xs font-bold mr-2">✔</span>
            Single transit & Annual open covers
          </li>
        </ul>
        <div className="mb-4">
          <input 
            type="text" 
            placeholder="Enter Mobile Number" 
            className="w-full p-3 border border-gray-300 rounded"
          />
          {/* <span className="text-red-500 text-xs">mobile number is required</span> */}
        </div>
        <button className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700">
          Check Premium Now
        </button>
        <p className="text-gray-600 text-xs mt-4">
          By clicking on 'Check Premium Now', you agree to our 
          <a href="#" className="text-blue-600"> Privacy policy </a> & 
          <a href="#" className="text-blue-600"> Terms of use </a>.
        </p>
        <div className="flex items-center mt-4">
          <input type="checkbox" id="whatsappUpdates" className="mr-2"/>
          <label htmlFor="whatsappUpdates" className="text-gray-700 text-sm">
            Get Updates on WhatsApp
          </label>
        </div>
        <div className="flex justify-center mt-6 gap-2">
          <img src="https://static.pbcdn.in/twowheeler-cdn/InsurerImages/Bajaj_Allianz.gif" alt="Bajaj" className="h-8"/>
          <img src="https://static.pbcdn.in/twowheeler-cdn/InsurerImages/National.gif" alt="Allianz" className="h-8"/>
          <img src="https://static.pbcdn.in/twowheeler-cdn/InsurerImages/United_India_Insurance.gif" alt="TATA AIG" className="h-8"/>
          <img src="https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/The_Oriental_Insurance_Company_Logo.svg/1200px-The_Oriental_Insurance_Company_Logo.svg.png" alt="Reliance" className="h-8"/>
       
        </div>
      </div>
    </div>
  );
}

export default MarinIsurance;
