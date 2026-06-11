import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 px-6 md:px-16 py-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

        {/* Logo + description */}
        <div>
          <h1 className="text-2xl font-bold text-white mb-3">Swiggy Clone</h1>
          <p className="text-sm">
            Order food from your favorite restaurants near you. Fast delivery & best prices.
          </p>
        </div>

        {/* Company */}
        <div>
          <h2 className="text-white font-semibold mb-3">Company</h2>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Careers</li>
            <li className="hover:text-white cursor-pointer">Team</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-white font-semibold mb-3">Contact</h2>
          <ul className="space-y-2 text-sm">
            <li>Email: support@swiggyclone.com</li>
            <li>Phone: +91 9876543210</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h2 className="text-white font-semibold mb-3">Follow Us</h2>
          <div className="flex space-x-4 text-xl">
            <span className="hover:text-white cursor-pointer">🌐</span>
            <span className="hover:text-white cursor-pointer">📸</span>
            <span className="hover:text-white cursor-pointer">🐦</span>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-sm">
        © {new Date().getFullYear()} Swiggy Clone. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;