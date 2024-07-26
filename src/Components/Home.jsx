import React, { useState } from "react";
import CarouselHome from "./CarouselHome";

const images = [
  "https://static.pbcdn.in/cdn/images/home/term_crore_desktop.png?v=2",
  "https://static.pbcdn.in/cdn/images/home/investment_1cr_desktop.png",
  "	https://static.pbcdn.in/cdn/images/home/health-cashless-anywhere_desktop.png",
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const index = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    const index = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(index);
  };
  return (
    <header className="bg-white">
      <div className=" h-96 flex items-center px-6">
        <div className="container mx-auto ml-42">
          <h1 className="text-4xl font-bold">
            Let’s find you <br />
            the Best Insurance
          </h1>
          <div className="flex space-x-8 mt-4">
            <div className="flex items-center">
              <span className="text-purple-500 text-2xl mr-2">📊</span>
              <p className="text-lg text-gray-600">
                50+ insurers with one of the best prices
              </p>
            </div>
            <div className="flex items-center">
              <span className="text-orange-500 text-2xl mr-2">⚡</span>
              <p className="text-lg text-gray-600">Quick, easy & hassle free</p>
            </div>
          </div>
        </div>
        <div className="relative w-1/2 mx-auto mt-10 mr-32">
          <div className="overflow-hidden relative rounded-xl shadow-lg">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Slide ${index}`}
                  className="w-full flex-shrink-0"
                />
              ))}
            </div>
          </div>
          <button
            onClick={prevSlide}
            className="absolute top-1/2 transform -translate-y-1/2 left-0 text-white p-2 rounded-full"
          >
            ‹
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 transform -translate-y-1/2 right-0 text-white p-2 rounded-full"
          >
            ›
          </button>
        </div>
      </div>
      <CarouselHome />
      <div
        className="flex items-center px-10 bg-[url('https://static.pbcdn.in/cdn/images/home-v1/left-bg.png')]"
        style={{ height: "600px" }}
      >
        <div className="container mx-auto ml-42">
          <h1 className="text-4xl font-bold">
            What makes <br />
            Policybazaar one of <br />
            India's favourite places <br />
            to buy insurance?
          </h1>
        </div>
        <div className="flex flex-wrap justify-center space-x-4 space-y-4 p-6 mr-16">
          <div className="bg-white shadow-md rounded-lg p-4 w-64 text-center">
            <div className="text-4xl mb-2">🎉</div>
            <h3 className="text-2xl font-bold text-blue-600">Over 9 million</h3>
            <p className="text-gray-700">
              customers trust us & have bought their insurance on Policybazaar
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4 w-64 text-center mt-96">
            <div className="text-4xl mb-2">🔍</div>
            <h3 className="text-2xl font-bold text-blue-500">50+ insurers</h3>
            <p className="text-gray-700">
              partnered with us so that you can compare easily & transparently
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4 w-64 text-center">
            <div className="text-4xl mb-2">😎</div>
            <h3 className="text-2xl font-bold text-green-500">Great Price</h3>
            <p className="text-gray-700">
              for all kinds of insurance plans available online
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4 w-64 text-center">
            <div className="text-4xl mb-2">🧑</div>
            <h3 className="text-2xl font-bold text-yellow-500">Claims</h3>
            <p className="text-gray-700">
              support built in with every policy for help, when you need it the
              most
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Home;
