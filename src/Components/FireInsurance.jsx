import React from "react";

const benefits = [
    { icon: '🛠️', text: 'Get right expert advice' },
    { icon: '⚡', text: 'Hassle free policy' },
    { icon: '✅', text: 'Speedy Claims' },
  ];

const FireInsurance = () => {
  return (
    <div className="flex items-center">
      <div className="text-center p-8">
        <div>

        <h1 className="text-3xl font-bold">Fire Insurance</h1>
        <p className="mt-4 text-lg">
          Fire insurance safeguards property against losses or damages resulting
          from fire incidents.
       
        </p>
        </div>
        <div className="flex justify-center space-x-8 p-8">
        {benefits.map((benefit, index) => (
          <div key={index} className="text-center">
            <div className="flex">
                <div className="text-3xl bg-red-100 w-12 h-10 rounded-lg">{benefit.icon}</div>
                <div className="mt-2 px-3">{benefit.text}</div>

            </div>
        </div>
      ))}
      </div>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md mx-auto mt-48 ">
        <h2 className="text-xl font-bold mb-4">
          Get ₹50 Lakh cover starting at ₹280/month*
        </h2>
        <div className="mb-4">
          <label className="block mb-2">Property Type</label>
          <div className="flex space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="property-type"
                value="commercial"
                className="mr-2"
                defaultChecked
              />
              Commercial
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="property-type"
                value="home"
                className="mr-2"
              />
              Home
            </label>
          </div>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Enter Mobile Number</label>
          <input
            type="text"
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>
        <div className="flex items-center mb-4">
          <input type="checkbox" className="mr-2" />
          <label>Get Updates on WhatsApp</label>
        </div>
        <button className="bg-blue-500 text-white w-full py-2 rounded">
          View Plans
        </button>
        <p className="text-sm mt-4">
          By clicking on "View Plans" you agree to our{" "}
          <a href="#" className="text-blue-500">
            Privacy Policy
          </a>{" "}
          and{" "}
          <a href="#" className="text-blue-500">
            Terms of Use
          </a>
        </p>
      </div>
    </div>
  );
};

export default FireInsurance;
