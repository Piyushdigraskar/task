import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const ImageTextLayout = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center lg:items-center py-16 px-6 lg:px-16">
      {/* Left Side: Image */}
      <div className="w-full lg:w-2/5 mb-8 lg:mb-0">
        <img
          src="https://img.freepik.com/free-psd/nature-vertical-podium-background_23-2150423264.jpg"
          alt="Your Alt Text"
          className="w-full h-auto rounded-lg object-cover p-6"
        />
      </div>

      {/* Right Side: Text aligned with lower part of image */}
      <div className="w-full lg:w-3/5 lg:pl-10">
        {/* Heading */}
        <h1 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-4">
          Easily add your design to a wide range of products
        </h1>

        {/* Paragraph */}
        <p className="text-gray-600 text-lg lg:text-xl mb-4">
          Easily personalize your designs and apply them to a variety of
          products, from apparel to accessories, with just a few clicks. Whether
          you're creating for personal use or business, our platform ensures
          seamless customization and high-quality results. Make your designs
          stand out across multiple items effortlessly!
        </p>

        {/* Slightly Larger Text */}
        <p className="text-green-800 flex items-center space-x-3 text-xl lg:text-2xl font-semibold">
  <span>All product</span>
  <FaLongArrowAltRight className="text-green-800" />
</p>

      </div>
    </section>
  );
};

export default ImageTextLayout;
