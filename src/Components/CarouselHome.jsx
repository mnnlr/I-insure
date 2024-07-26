// Carousel.js
import React, { useState } from 'react';

const CarouselHome = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      title: "Invest ₹10K and Get ₹1 Crore return*",
      description: "Investment Plans",
      bgColor: "bg-green-500",
    },
    {
      title: "1 Crore Health coverage now cheaper than 5 lacs",
      description: "Health Insurance",
      bgColor: "bg-blue-500",
    },
    {
      title: "Make investment simple with our SIP calculator",
      description: "Reach your financial goals",
      bgColor: "bg-purple-500",
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="px-10 h-80 bg-slate-200 flex items-center">

    <div className="relative w-full mx-auto ">
      <div className="overflow-hidden relative">
        <div
          className="flex transition-transform duration-300"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
          {slides.map((slide, index) => (
            <div
            key={index}
            className={`flex-shrink-0 w-full h-64 p-6 ${slide.bgColor} text-white`}
            >
              <h3 className="text-lg font-bold">{slide.description}</h3>
              <p className="mt-2 text-2xl">{slide.title}</p>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 transform -translate-y-1/2  bg-opacity-50 text-white p-2 rounded-full"
        >
        &#9664;
      </button>
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-opacity-50 text-white p-2 rounded-full"
        >
        &#9654;
      </button>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2 p-4">
        {slides.map((_, index) => (
            <div
            key={index}
            className={`w-3 h-3 rounded-full ${
                index === activeIndex ? "bg-white" : "bg-gray-500"
            }`}
            ></div>
        ))}
      </div>
    </div>
        </div>
  );
};

export default CarouselHome;
