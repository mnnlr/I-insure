import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ title, imageUrl, link }) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(link)
        // console.log(link);
    }

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      {imageUrl && (
        <img src={imageUrl} alt={`${title} image`} className="w-full h-32 object-cover" />
      )}
      <div className="p-1 w-30">
        <h3 className="text-lg font-bold mb-4 flex align-center">{title} Section</h3>
        <div className="flex justify-between">
            <button className="bg-blue-500 text-white text-xs py-1 px-2 rounded hover:bg-blue-600 flex-grow mx-1 w-32 h-10">
                Know More
            </button>
          <button onClick={handleClick} className="bg-green-500 text-white text-xs py-1 px-2 rounded hover:bg-green-600 flex-grow mx-1 w-32 h-10">
            Get Quote/Buy Policy
          </button>
          <button className="bg-yellow-500 text-white text-xs py-1 px-2 rounded hover:bg-yellow-600 flex-grow mx-1 w-32 h-10">
            Renew Policy
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
