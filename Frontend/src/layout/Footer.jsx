import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm mb-2">
          © {new Date().getFullYear()} E-Learning Platform. All rights
          reserved.
        </p>
        <div className="flex justify-center gap-4">
          <a href="/terms" className="hover:text-gray-400 transition">
            Terms
          </a>
          <a href="/privacy" className="hover:text-gray-400 transition">
            Privacy Policy
          </a>
          <a href="/contact" className="hover:text-gray-400 transition">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
