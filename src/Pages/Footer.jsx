import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full md:mt-40 md:h-[40vh] bg-black text-white px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-bold mb-2">SoftWantage</h2>
          <p className="text-gray-400 text-sm">
            © 2025 SoftWantage. All rights reserved.
          </p>
          <p className="mt-2 text-sm">📞 +91 98765 43210</p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/about" className="hover:text-blue-400">
                About
              </Link>
            </li>
            <li>
              <Link to="/software-solutions" className="hover:text-blue-400">
                Software
              </Link>
            </li>
            <li>
              <Link to="/talent-development" className="hover:text-blue-400">
                Talent
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-400">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Follow Us</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="https://instagram.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-400"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-300"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
