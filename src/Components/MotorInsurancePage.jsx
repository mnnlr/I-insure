import React from "react";
import { Link, useNavigate } from "react-router-dom";

const plans = [
  {
    id: 1,
    company: "Bajaj Allianz",
    type: "Third Party",
    price: "₹714",
    instantBuy: false,
    src: 'https://static.pbcdn.in/twowheeler-cdn/InsurerImages/Bajaj_Allianz.gif',
  },
  {
    id: 2,
    company: "National Insurance",
    type: "Third Party",
    price: "₹714",
    instantBuy: false,
    src: 'https://static.pbcdn.in/twowheeler-cdn/InsurerImages/National.gif',
  },
  {
    id: 3,
    company: "New India Insurance",
    type: "Third Party",
    price: "₹714",
    instantBuy: true,
    src: 'https://static.pbcdn.in/twowheeler-cdn/InsurerImages/United_India_Insurance.gif',
  },
  {
    id: 4,
    company: "Oriental Insurance",
    type: "Third Party",
    price: "₹714",
    instantBuy: false,
    src: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/The_Oriental_Insurance_Company_Logo.svg/1200px-The_Oriental_Insurance_Company_Logo.svg.png',
  },
  
];

const MotorInsurancePage = () => {

  const navigate = useNavigate();

  const handleClick = (plan, e) =>{
     e.preventDefault();
    navigate('/product/motorinsuranceform/motorinsurancepage/insurancepayment', { state: { plan } })
  }

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <div className="w-2/3 p-8">
        <h2 className="text-2xl font-bold mb-4">5 third-party plans</h2>
        <div className="space-y-4">
          {plans.map((plan) => (
            <div key={plan.id} className="flex items-center bg-white shadow-md rounded-lg p-4">
              <img
                src={plan.src}
                alt={plan.company}
                className="w-24 h-24 object-contain mr-4"
              />
              <div className="flex-grow">
                <h3 className="text-lg font-semibold">{plan.company}</h3>
                <p className="text-gray-600">{plan.type}</p>
              </div>
              <div className="flex items-center">
                {plan.instantBuy && (
                  <span className="text-orange-500 text-xs font-semibold mr-2">Instant buy in 30 sec</span>
                )}
                <Link to={navigate('/product/motorinsuranceform/motorinsurancepage/insurancepayment')}>
                <button onClick={(e) => handleClick(plan, e)} className="bg-blue-500 text-white text-xs py-2 px-4 rounded hover:bg-blue-600">
                  {plan.price} →
                </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-1/3 p-8 bg-white shadow-md rounded-lg ml-4">
        <h2 className="text-xl font-bold mb-4">Why buy from Policybazaar?</h2>
        <ul className="space-y-2">
          <li className="flex items-center text-gray-700">
            <svg className="w-6 h-6 mr-2 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm-2-7a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1zm-3 0a1 1 0 011-1h2a1 1 0 110 2H6a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
            Claim assistance anytime, anywhere!
          </li>
          <li className="flex items-center text-gray-700">
            <svg className="w-6 h-6 mr-2 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm-2-7a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1zm-3 0a1 1 0 011-1h2a1 1 0 110 2H6a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
            Compare and choose best plan
          </li>
          <li className="flex items-center text-gray-700">
            <svg className="w-6 h-6 mr-2 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm-2-7a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1zm-3 0a1 1 0 011-1h2a1 1 0 110 2H6a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
            24/7 support helpline
          </li>
          <li className="flex items-center text-gray-700">
            <svg className="w-6 h-6 mr-2 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm-2-7a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1zm-3 0a1 1 0 011-1h2a1 1 0 110 2H6a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
            Get your policy instantly with quick and easy KYC process
          </li>
          <li className="flex items-center text-gray-700">
            <svg className="w-6 h-6 mr-2 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm-2-7a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1zm-3 0a1 1 0 011-1h2a1 1 0 110 2H6a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
            10,000+ people use Policybazaar every day to insure their bike
          </li>
        </ul>
        <div className="mt-4">
          <a href="#" className="text-indigo-500 hover:underline">
            Not in a hurry? Explore comprehensive plans
          </a>
        </div>
      </div>
    </div>
  );
};

export default MotorInsurancePage;
