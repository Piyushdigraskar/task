import React from "react";

const Pitch = () => {
  const features = [
    {
      imgSrc:
        "https://cdn.shopify.com/app-store/listing_images/08313cab5d04fcc9a59ffc39eefa1521/icon/CPuHmrL0lu8CEAE=.png", 
      pitch: "Create",
      heading: "Custom Designs",
      description: "Create unique and personalized products with ease.",
    },
    {
      imgSrc:
        "https://files.cdn.printful.com/upload/lpg-svg-upload/39/39fb90a41700c2f83a25003042370020", 
      pitch: "Sell",
      heading: "Global Shipping",
      description: "We ship worldwide with fast and reliable service.",
    },
    {
      imgSrc:
        "https://na.bhs1.com/media/webp_image/catalog/product/cache/0aa28326261b973917cc582be35639df/t/t/tt-4845-pc_26301196_web_1.webp",
      pitch: "Handle", 
      heading: "Sustainable Products",
      description: "We focus on eco-friendly materials and sustainable practices.",
    },
  ];

  return (
    <section className="py-16 px-4 md:px-6 lg:px-10 bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="text-left">
            {/* Rounded Image */}
            <img
              src={feature.imgSrc}
              alt={feature.heading}
              className="w-40 h-40 object-cover mb-4"  // Increased size
            />
            <h2 className="text-xl font-semibold text-green-600">
              {feature.pitch}
            </h2>
            {/* Heading */}
            <h3 className="text-xl font-semibold text-gray-800">
              {feature.heading}
            </h3>
            {/* Paragraph */}
            <p className="text-gray-600 mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pitch;
