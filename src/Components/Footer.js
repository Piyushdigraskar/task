import React from "react";

const Footer = () => {
  return (
    <footer className="py-6 px-4 bg-gray-800 text-gray-300 text-center">
      {/* Links */}
      <div className="mb-4">
        <a href="/" className="text-gray-300 hover:underline mx-2">
          Intellectual Property Policy
        </a>
        <a href="/" className="text-gray-300 hover:underline mx-2">
          Terms of Service
        </a>
        <a href="/" className="text-gray-300 hover:underline mx-2">
          Privacy Policy
        </a>
        <a href="/" className="text-gray-300 hover:underline mx-2">
          Security
        </a>
      </div>
      {/* Copyright */}
      <div className="text-sm">
        © 2024 PrintMe, Inc. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
