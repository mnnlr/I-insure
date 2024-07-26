// src/App.js
import React, { useState } from 'react';
import { FaMale, FaFemale, FaChild, FaUserMd, FaUserTie, FaUserGraduate, FaUserSecret } from 'react-icons/fa';

const HealthInsurance = () => {
  const [selectedGender, setSelectedGender] = useState('male');
  const [showMoreMembers, setShowMoreMembers] = useState(false);
  const [selectedMembers, setSelectedMembers] = useState({
    self: true,
    spouse: false,
    son: false,
    daughter: false,
    father: false,
    mother: false,
    grandfather: false,
    grandmother: false,
    fatherInLaw: false,
    motherInLaw: false,
  });

  const memberIcons = {
    self: selectedGender === 'male' ? <FaMale size={32} /> : <FaFemale size={32} />,
    spouse: selectedGender === 'male' ? <FaFemale size={32} /> : <FaMale size={32} />,
    son: <FaChild size={32} />,
    daughter: <FaChild size={32} />,
    father: <FaUserTie size={32} />,
    mother: <FaUserMd size={32} />,
    grandfather: <FaUserGraduate size={32} />,
    grandmother: <FaUserSecret size={32} />,
    fatherInLaw: <FaUserTie size={32} />,
    motherInLaw: <FaUserMd size={32} />,
  };

  const memberNames = {
    self: selectedGender === 'male' ? 'Self' : 'Self',
    spouse: selectedGender === 'male' ? 'Wife' : 'Husband',
    son: 'Son',
    daughter: 'Daughter',
    father: 'Father',
    mother: 'Mother',
    grandfather: 'Grandfather',
    grandmother: 'Grandmother',
    fatherInLaw: 'Father-in-law',
    motherInLaw: 'Mother-in-law',
  };

  const handleSelection = (member) => {
    setSelectedMembers((prev) => ({ ...prev, [member]: !prev[member] }));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Find top plans for you with up to <span className="text-pink-500">25% discount</span>
      </h1>
      <div className="flex space-x-2 mb-4">
        <button
          className={`py-2 px-4 rounded ${selectedGender === 'male' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-800'}`}
          onClick={() => setSelectedGender('male')}
        >
          Male
        </button>
        <button
          className={`py-2 px-4 rounded ${selectedGender === 'female' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-800'}`}
          onClick={() => setSelectedGender('female')}
        >
          Female
        </button>
      </div>
      <p className="text-lg mb-4">Select members you want to insure</p>
      <div className="grid grid-cols-3 gap-4 mb-6">
        {Object.keys(memberIcons).map((member) => (
          (member !== 'grandfather' && member !== 'grandmother' && member !== 'fatherInLaw' && member !== 'motherInLaw') && (
            <div
              key={member}
              className={`p-4 border rounded cursor-pointer ${selectedMembers[member] ? 'border-green-500' : 'border-gray-300'}`}
              onClick={() => handleSelection(member)}
            >
              <div className="w-12 h-12 mx-auto mb-2 flex justify-center">{memberIcons[member]}</div>
              <p className="text-center capitalize">{memberNames[member]}</p>
            </div>
          )
        ))}
      </div>
      <button className="text-blue-500 underline mb-4" onClick={() => setShowMoreMembers(!showMoreMembers)}>
        More members
      </button>
      {showMoreMembers && (
        <div className="grid grid-cols-3 gap-4 mb-6">
          {['grandfather', 'grandmother', 'fatherInLaw', 'motherInLaw'].map((member) => (
            <div
              key={member}
              className={`p-4 border rounded cursor-pointer ${selectedMembers[member] ? 'border-green-500' : 'border-gray-300'}`}
              onClick={() => handleSelection(member)}
            >
              <div className="w-12 h-12 mx-auto mb-2 flex justify-center">{memberIcons[member]}</div>
              <p className="text-center capitalize">{memberNames[member]}</p>
            </div>
          ))}
        </div>
      )}
      <button className="py-2 px-8 bg-orange-500 text-white rounded">Continue</button>
      <p className="mt-4 text-sm text-gray-600">
        By clicking on "Continue", you agree to our <a href="#" className="text-blue-500">Privacy Policy</a>, <a href="#" className="text-blue-500">Terms of Use</a> & <a href="#" className="text-blue-500">*Disclaimer</a>
      </p>
    </div>
  );
}

export default HealthInsurance;
