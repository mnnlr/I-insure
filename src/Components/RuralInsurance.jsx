import React from 'react';

const RuralInsurance = () => {
  return (
    <div className="bg-gray-100 p-6 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* <div className="bg-red-100 p-4 text-red-600 text-sm font-semibold">
          Prices Increasing Soon
        </div> */}
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">Rural Insurance</h1>
          <p className="mb-4">
            Rural Insurance is a type of insurance that has been specifically designed for the rural public to insure their businesses such as farming, cattle, poultry, etc. This plan ensures that families 
            <a href="#" className="text-blue-600"> Read more</a>
          </p>
          <div className="flex items-center mb-6">
            <img src="https://static.pbcdn.in/cdn/images/bu/term/term-new-template-img-1.png" alt="Family" className="w-32 h-32 rounded-full mr-4" />
            <div className="text-green-700 font-semibold bg-green-100 p-2 rounded">COVID-19 Covered</div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h2 className="text-2xl font-semibold mb-2">Life is Unpredictable! Protect your family’s future</h2>
            <p className="mb-4">Get ₹1 Crore Life cover starting from ₹473/month</p>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
                <div className="flex items-center">
                  <input type="radio" name="gender" id="male" className="mr-2" defaultChecked />
                  <label htmlFor="male" className="mr-4">Male</label>
                  <input type="radio" name="gender" id="female" className="mr-2" />
                  <label htmlFor="female">Female</label>
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input type="text" id="name" className="w-full border border-gray-300 p-2 rounded" placeholder="Your Name" />
              </div>
              <div className="mb-4">
                <label htmlFor="dob" className="block text-sm font-medium text-gray-700 mb-2">Date of Birth</label>
                <input type="text" id="dob" className="w-full border border-gray-300 p-2 rounded" placeholder="DD/MM/YYYY" />
              </div>
              <div className="mb-4">
                <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-2">Mobile Number</label>
                <div className="flex">
                  <select className="border border-gray-300 p-2 rounded-l">
                    <option value="India">India</option>
                    {/* Add other country codes as needed */}
                  </select>
                  <input type="text" id="mobile" className="w-full border border-gray-300 p-2 rounded-r" placeholder="+91 Mobile Number" />
                </div>
              </div>
              <button type="submit" className="bg-blue-600 text-white p-2 rounded w-full">Check Your Premium Now</button>
            </form>
          </div>
        </div>
        {/* <div className="bg-gray-100 p-4 flex justify-between items-center">
          <div>
            <p className="text-xl font-semibold">We are rated</p>
            <div className="flex items-center">
              <span className="text-yellow-500 mr-2">★★★★☆</span>
              <span>4.3</span>
            </div>
          </div>
          <div>
            <p className="text-xl font-semibold">6.7 Crore</p>
            <p className="text-gray-600">Registered Consumers</p>
          </div>
          <div>
            <p className="text-xl font-semibold">51</p>
            <p className="text-gray-600">Insurance Partners</p>
          </div>
          <div>
            <p className="text-xl font-semibold">3.4 Crore</p>
            <p className="text-gray-600">Policies Sold</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default RuralInsurance;
