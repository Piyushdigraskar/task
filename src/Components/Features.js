import React from "react";

const Features = () => {
  const features = [
    {
      imgSrc:
        "https://images-platform.99static.com//YG9tgbQCZpBHlBL-ke8euhK-Xu4=/0x0:1080x1080/fit-in/500x500/projects-files/121/12139/1213997/2d92e1cf-5fcd-4b72-9a70-ce499d89a9f1.jpg", 
      heading: "Custom Designs",
      description: "Create unique and personalized products with ease.",
    },
    {
      imgSrc:
        "https://st2.depositphotos.com/1000128/5974/i/950/depositphotos_59744789-stock-photo-worldwide-shipping-concept.jpg", 
      heading: "Global Shipping",
      description: "We ship worldwide with fast and reliable service.",
    },
    {
      imgSrc:
        "https://www.qalara.com/blog/wp-content/uploads/2023/02/Featured.jpg", 
      heading: "Sustainable Products",
      description: "We focus on eco-friendly materials and sustainable practices.",
    },
  ];

  return (
    <section className="py-16 px-4 md:px-6 lg:px-10 bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="text-center">
            {/* Rounded Image */}
            <img
              src={feature.imgSrc}
              alt={feature.heading}
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
            />
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

export default Features;
