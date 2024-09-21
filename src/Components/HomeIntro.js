import React from 'react';
import { TiTick } from "react-icons/ti";
import { FaThumbsUp, FaPlayCircle } from "react-icons/fa";

const HomeIntro = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row justify-between items-center h-screen px-6 lg:px-10">
      {/* Left Section: Text and Buttons */}
      <div className="w-full lg:w-2/5 space-y-6 mb-8 lg:mb-0">
        {/* Big Text */}
        <h1 className="text-3xl lg:text-5xl font-bold text-gray-800">
          Create And Sell Custom Products
        </h1>

        {/* Three Small Lines */}
        <div className="flex items-center">
          <TiTick className="text-green-500" />
          <p className="text-gray-600 text-lg ml-2">100% free to Start.</p>
        </div>
        <div className="flex items-center">
          <TiTick className="text-green-500" />
          <p className="text-gray-600 text-lg ml-2">900+ products modernized.</p>
        </div>
        <div className="flex items-center">
          <TiTick className="text-green-500" />
          <p className="text-gray-600 text-lg ml-2">Global printing network around the world.</p>
        </div>

        {/* Buttons */}
        <div className="flex items-center space-x-4">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
            Start For Free
          </button>
          <button className="bg-gray-500 flex items-center space-x-1 text-white px-6 py-3 rounded-lg hover:bg-gray-600">
            <FaPlayCircle className="text-red-500 text-3xl" />
            How it works
          </button>
        </div>

        <div className="flex items-center">
          <FaThumbsUp className="text-green-500" />
          <p className="text-green-600 text-lg ml-2">Trusted by 8M users around the world.</p>
        </div>
      </div>

      {/* Right Section: Image */}
      <div className="w-full lg:w-3/5">
        <img
          src="https://www.drupa.com/cache/pica/5/3/6/9/2/2/5310661704207366/AI-and-printindustry.jpg"
          alt="Atom"
          className="w-full h-auto"
        />
      </div>
    </section>
  );
};

export default HomeIntro;
