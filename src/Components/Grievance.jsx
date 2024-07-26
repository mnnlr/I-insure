import React, { useState } from "react";
import axios from "axios";

const Grievance = () => {
  const [name, setName] = useState("");
  const [policyNumber, setPolicyNumber] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [description, setDescription] = useState("");
  const [notification, setNotification] = useState("");

  

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/api/grievance", {
        name,
        policyNumber,
        contactInfo,
        description,
      })
      .then((response) => {
        if (response.data.success) {
          setNotification("Your form was submitted successfully!");
          // Clear the form fields
          setName("");
          setPolicyNumber("");
          setContactInfo("");
          setDescription("");
          setTimeout(() => setNotification(""), 5000);
        } else {
          console.log("Failed to submit grievance:", response.data.error);
        }
      })
      .catch((error) => console.error("There was an error!", error));
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-6">
            Grievance Form
          </h2>
          {notification && (
            <div className="mb-4 p-4 text-sm text-green-700 bg-green-100 border border-green-400 rounded">
              {notification}
            </div>
          )}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="policy-number"
                className="block text-sm font-medium text-gray-700"
              >
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
              <label
                htmlFor="contact-info"
                className="block text-sm font-medium text-gray-700"
              >
                Contact Information
              </label>
              <input
                id="contact-info"
                name="contact-info"
                type="text"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={contactInfo}
                onChange={(e) => setContactInfo(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Grievance Description
              </label>
              <textarea
                id="description"
                name="description"
                required
                className="mt-1 block w-full px-3 py-2 h-32 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Grievance;
