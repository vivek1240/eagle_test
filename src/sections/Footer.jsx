import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative bg-black text-white py-16">
      {/* Background gradient effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 opacity-20 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Branding Section */}
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h3 className="text-3xl font-bold tracking-wider text-blue-400 nav">Eagle Agents</h3>
            <p className="text-gray-400 mt-2">
            Geo-Science Agents Working 24×7 for You.
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-6">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="hover:scale-110 transition-transform"
              >
                <path d="M22.46 6c-.77.35-1.6.59-2.46.69a4.28 4.28 0 001.88-2.37 8.55 8.55 0 01-2.7 1.03 4.26 4.26 0 00-7.28 3.88 12.08 12.08 0 01-8.77-4.45 4.26 4.26 0 001.32 5.69 4.24 4.24 0 01-1.93-.53v.05a4.27 4.27 0 003.42 4.18 4.27 4.27 0 01-1.93.07 4.27 4.27 0 003.98 2.97A8.56 8.56 0 012 18.57a12.07 12.07 0 006.54 1.92c7.86 0 12.16-6.52 12.16-12.16 0-.19-.01-.38-.02-.57A8.69 8.69 0 0024 5.55a8.45 8.45 0 01-2.54.7z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/vivek-singh-kgp/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="hover:scale-110 transition-transform"
              >
                <path d="M4.98 3.5C3.88 3.5 3 4.38 3 5.5s.88 2 1.98 2H5c1.1 0 2-.9 2-2s-.9-2-2-2zM3 8.5h4v12H3v-12zm7.2 0h3.8v1.6h.1c.5-.9 1.7-1.8 3.5-1.8 3.7 0 4.4 2.4 4.4 5.5v6.7h-4v-5.9c0-1.4 0-3.1-1.9-3.1-1.9 0-2.2 1.5-2.2 3v6h-4v-12z" />
              </svg>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="hover:scale-110 transition-transform"
              >
                <path d="M22 12a10 10 0 10-11.5 9.9v-7h-3v-3h3v-2.3c0-3 1.8-4.7 4.5-4.7 1.3 0 2.6.2 2.6.2v3h-1.5c-1.5 0-2 1-2 2v2.3h3.4l-.5 3h-2.9v7A10 10 0 0022 12" />
              </svg>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-12 text-center text-gray-500"
        >
          <p>© {new Date().getFullYear()} Eagle Tech. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
