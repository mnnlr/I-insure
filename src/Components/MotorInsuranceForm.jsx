import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MotorInsuranceForm = () => {
  const navigate = useNavigate();
  const [carNumber, setCarNumber] = useState('');
  const [prize, setPrize] = useState('');
  const [error, setError] = useState('');

  const validateCarNumber = (number) => {
    const carNumberPattern = /^[A-Z]{2}-\d{2}-[A-Z]{1,2}-\d{4}$/;
    return carNumberPattern.test(number);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateCarNumber(carNumber)) {
      setError('');
      // Placeholder for fetching prize logic
      const fetchedPrize = 'Congratulations! You are eligible for a 10% discount on your motor insurance.';
      setPrize(fetchedPrize);
      navigate('/product/motorinsuranceform/motorinsurancepage');
    } else {
      setError('Please enter a valid car number (e.g., DL-10-CB-1234).');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-3/6 h-80 bg-white p-8 rounded-lg shadow-md flex">
        <div className="flex-none mr-10">
          <img
            src="https://static.pbcdn.in/car-cdn/car2.0/adCampaign/bannerDesk1.png"
            alt="Motor Insurance"
            className="rounded-lg shadow-md"
            style={{ maxWidth: '300px', height: '250px' }}
          />
        </div>
        <div className="flex-grow">
          <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-6">Motor Insurance Prize</h2>
          <form className="space-y-11" onSubmit={handleSubmit}>
            <div className='mt-16'>
              <label htmlFor="carNumber" className="block text-sm font-medium text-gray-700">
                Enter Car No.
              </label>
              <input
                id="carNumber"
                name="carNumber"
                placeholder='Enter Car Number (e.g., DL-10-CB-1234)'
                type="text"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={carNumber}
                onChange={(e) => setCarNumber(e.target.value)}
              />
              {error && (
                <p className="mt-2 text-sm text-red-600">{error}</p>
              )}
            </div>
            <div>
              <button 
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                View Prize
              </button>
            </div>
          </form>
          {prize && (
            <div className="mt-6 p-4 text-sm text-green-700 bg-green-100 border border-green-400 rounded">
              {prize}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MotorInsuranceForm;
