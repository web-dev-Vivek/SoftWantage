import React from "react";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer
      className="w-full bg-gray-900 text-gray-100 px-6 py-12"
      data-scroll-section
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* 🟢 Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-teal-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-teal-400 transition">
                About
              </a>
            </li>
            <li>
              <a href="/career" className="hover:text-teal-400 transition">
                Careers
              </a>
            </li>
            <li>
              <a
                href="/software-solution"
                className="hover:text-teal-400 transition"
              >
                Solutions
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-teal-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* 🟡 Contact Info */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
          <ul className="text-sm space-y-2">
            <li>
              📞{" "}
              <a href="tel:+918765432100" className="hover:text-teal-400">
                +91 87654 32100
              </a>
            </li>
            <li>
              ✉️{" "}
              <a
                href="mailto:info@yourcompany.com"
                className="hover:text-teal-400"
              >
                info@yourcompany.com
              </a>
            </li>
            <li>📍 123 Tech Street, Bangalore, India</li>
          </ul>
        </div>

        {/* 🔵 Social Media */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4 text-2xl">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-pink-500 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-600 transition"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Text */}
      <div className="mt-10 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Your Company Name. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
