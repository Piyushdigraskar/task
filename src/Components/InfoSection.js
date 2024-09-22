import React from "react";

const InfoSection = () => {
  const columns = [
    {
      title: "Integration",
      items: [
        "Shopify",
        "Etsy",
        "eBay",
        "Amazon",
        "TikTok Shop",
        "PrestaShop",
        "BigCommerce",
      ],
    },
    {
      title: "Discover",
      items: [
        "Blog",
        "Guides",
        "Products",
        "Etsy print-on-demand",
        "Shopify print-on-demand",
        "Woocommerce print-on-demand",
        "Wix print-on-demand",
        "Squarespace print-on-demand",
        "Make Your Own Shirt",
      ],
    },
    {
      title: "Start Selling",
      items: [
        "Custom T-shirts",
        "Custom Hoodies",
        "Custom Mugs",
        "Custom Socks",
        "Custom Backpacks",
        "Custom Branding",
        "Sell on Etsy",
        "Sell on Social Media",
        "Free T-shirt Designs",
        "Custom Products",
        "Custom All-Over-Print Hoodies",
      ],
    },
    {
      title: "Printify",
      items: [
        "Print on Demand",
        "Print Providers",
        "Experts Program",
        "Printify Express Delivery",
        "Become a Partner",
        "About",
        "Printify Quality Promise",
        "Jobs",
        "Webinars",
        "Printing Profits Podcast",
        "Contact Us",
      ],
    },
  ];

  return (
    <section className="py-16 px-4 md:px-6 lg:px-10 bg-gray-100">
      <h5 className="text-2xl font-bold text-gray-800 mb-6 text-center">Quick Links</h5>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {columns.map((column, index) => (
          <div key={index} className="text-left">
            <h6 className="font-semibold text-lg text-gray-800 mb-4">{column.title}</h6>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              {column.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InfoSection;
