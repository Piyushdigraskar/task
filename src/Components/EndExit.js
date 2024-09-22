import React from "react";

const EndExit = () => {
  const testimonials = [
    {
      imgSrc: "https://image3.photobiz.com/8929/35_20220824195554_6565770_xlarge.jpg",
      title: "Great Service....",
      smallTitle: "Amey Kumar",
      icons: ["🌟", "🌟", "🌟", "🌟", "🌟"],
      testimony: "I had an amazing experience with this product!",
    },
    {
      imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvJaoIeJQU_V9rL_ZII61whWyqSFbmMgTgwQ&s",
      title: "Highly Recommend!",
      smallTitle: "Bhakti Rai",
      icons: ["🌟", "🌟", "🌟", "🌟", "🌟"],
      testimony: "The quality exceeded my expectations!",
    },
    {
      imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkGb0KXZff72_aNYCOMxSo3wBXLUugcSQItw&s",
      title: "Will Buy Again!!",
      smallTitle: "Karan Malhotra",
      icons: ["🌟", "🌟", "🌟", "🌟"],
      testimony: "Fantastic service and support!",
    },
  ];

  return (
    <div className="flex flex-col items-center p-8 bg-gray-100">
      {/* Middle Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center w-full lg:w-3/4 mb-8">
        <div className="text-center lg:text-left lg:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800">Trusted by over 8M sellers around the world</h2>
        </div>
        <div className="text-center lg:text-left lg:w-1/2 mt-4 lg:mt-0">
          <p className="text-gray-600">
          Whether you are just getting started or run an enterprise-level e-commerce business, we do everything we can to ensure a positive merchant experience.
          </p>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full lg:w-3/4">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
            {/* Image and Title */}
            <img
              src={testimonial.imgSrc}
              alt={testimonial.smallTitle}
              className="rounded-full mb-2 w-24 h-24 object-cover"
            />
            <h3 className="text-lg font-semibold">{testimonial.title}</h3>
            <p className="text-gray-500">{testimonial.smallTitle}</p>
            <div className="flex space-x-1 my-2">
              {testimonial.icons.map((icon, idx) => (
                <span key={idx} className="text-xl">{icon}</span>
              ))}
            </div>
            {/* Testimony Paragraph */}
            <p className="text-gray-600 text-center mt-2">{testimonial.testimony}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EndExit;
