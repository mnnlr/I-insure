import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const InsurancePayment = () => {
    const location = useLocation();
    const { plan } = location.state || {};
    
    console.log("Plan is-->>", plan);

  const [formData, setFormData] = useState({
    title: 'Mr.',
    fullName: '',
    mobileNumber: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full md:w-2/3 bg-white p-8 rounded-lg shadow-md mb-8 md:mb-0 md:mr-8">
        <a href="/product/motorinsuranceform/motorinsurancepage" className="text-blue-500 hover:underline mb-4 inline-block">← Back to quotes</a>
        <h2 className="text-2xl font-bold mb-4">Personal details</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Where should we send your policy?
            </label>
            <div className="mt-2 flex">
              <select
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="block w-24 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option>Mr.</option>
                <option>Ms.</option>
                <option>Mrs.</option>
              </select>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full name (as per RC)"
                required
                className="ml-2 flex-1 py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              placeholder="Mobile number"
              required
              className="block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <p className="text-xs text-gray-500 mt-1">
              <span role="img" aria-label="fingers crossed">🤞</span> We will not call you. This is only to send you a policy copy, pakka promise!
            </p>
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email address"
              required
              className="block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="w-full md:w-1/3 bg-white p-8 rounded-lg shadow-md">
        <div className="mb-4">
          <h3 className="text-lg font-semibold">TVS Jupiter</h3>
          <p className="text-sm text-gray-500">UK19A1632 | Registered in 2016</p>
        </div>
        <div className="mb-4 flex items-center">
          <img
            src= {plan.src}
            alt= {plan.title}
            className="w-16 h-16 object-contain mr-4"
          />
          <div>
            <h4 className="font-semibold">{plan.company}</h4>
            <p className="text-sm text-gray-500">{plan.type}</p>
          </div>
        </div>
        <div className="mb-4">
          <h4 className="text-sm font-semibold">Compulsory Owner-Driver PA Cover of <span className="text-orange-500">₹15 Lakhs</span></h4>
          <div className="mt-2 space-y-2">
            <div className="flex items-center">
              <input type="radio" id="digit" name="insurance" className="mr-2" />
              <label htmlFor="digit" className="flex-1">Digit</label>
              <span className="font-semibold">₹310</span>
            </div>
            <div className="flex items-center">
              <input type="radio" id="cholaMS" name="insurance" className="mr-2" />
              <label htmlFor="cholaMS" className="flex-1">Chola MS</label>
              <span className="font-semibold">₹325</span>
            </div>
            <div className="flex items-center">
              <input type="radio" id="libertyGI" name="insurance" className="mr-2" />
              <label htmlFor="libertyGI" className="flex-1">Liberty GI</label>
              <span className="font-semibold">₹322</span>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <h4 className="text-sm font-semibold">Premium details</h4>
          <div className="flex justify-between text-sm text-gray-700">
            <p>Net premium</p>
            <p>₹714</p>
          </div>
          <div className="flex justify-between text-sm text-gray-700">
            <p>GST</p>
            <p>₹128</p>
          </div>
        </div>
        <div className="flex justify-between font-bold text-lg mb-4">
          <p>Total amount</p>
          <p>₹842</p>
        </div>
        <button
          type="button"
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Pay securely
        </button>
        <p className="text-xs text-gray-500 mt-2">
          By clicking on 'Pay securely', I agree to the <a href="#" className="text-blue-500 hover:underline">terms & conditions</a>
        </p>
      </div>
    </div>
  );
};

export default InsurancePayment;
