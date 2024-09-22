import React from "react";

const GallerySection = () => {
  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwePJ6EGuRjAf_sAdAyVLqVzDM9i_FfJUbdQ&s", 
    "https://m.media-amazon.com/images/I/41suAaoAQaL._AC_UF1000,1000_QL80_.jpg", 
    "https://cdn.shopify.com/app-store/listing_images/50259d37be2fdd4e0e403337db9d1716/icon/CNaD_L30lu8CEAE=.jpg", 
    "https://stickerme.in/wp-content/uploads/2023/05/Company-Logo-Sticker_.webp", 
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ2HNYmr8HPW8WAziNlET05J9LZz6JUYRl2Q&s", 
    "https://static.wixstatic.com/media/159cea_026b033e3e0e4bb8940ae952e37f3fdb~mv2.png/v1/fit/w_2500,h_1330,al_c/159cea_026b033e3e0e4bb8940ae952e37f3fdb~mv2.png", 
    "https://img.freepik.com/free-vector/gradient-printing-house-logo-template_23-2149763504.jpg", 
  ];

  // Generate random positions for images
  const positions = images.map(() => ({
    x: Math.random() * 70, // Random x position in vw
    y: Math.random() * 70, // Random y position in vh
  }));

  return (
    <section className="py-16 px-4 md:px-6 lg:px-10 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">Explore Our Gallery</h2>
      <p className="text-gray-600 mb-8">A glimpse into our amazing products and designs.</p>
      <div className="relative max-w-[80vw] mx-auto h-[80vh]">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Gallery ${index + 1}`}
            className="rounded-lg object-cover"
            style={{
              position: 'absolute',
              top: `${positions[index].y}vh`, // Use generated positions
              left: `${positions[index].x}vw`, // Use generated positions
              width: `${Math.random() * 100 + 100}px`, // Random width between 100px and 200px
              height: `${Math.random() * 100 + 100}px`, // Random height between 100px and 200px
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
