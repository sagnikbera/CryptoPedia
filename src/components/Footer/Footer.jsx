import React from "react";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-zinc-800 text-gray-300 py-6 px-4 sm:px-8 flex flex-col items-center text-center space-y-3">
      <p className="text-sm sm:text-base">
        Copyright © 2025 - <span className="font-semibold">CryptoPedia</span> -
        All Rights Reserved.
      </p>

      <p className="flex items-center gap-2 text-sm sm:text-base">
        Made with <span className="text-red-500">❤️</span> by
        <a
          href="https://www.linkedin.com/in/sagnik-bera/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-blue-400 hover:text-blue-600 font-medium transition"
        >
          <FaLinkedin className="text-lg sm:text-2xl" />
          Sagnik
        </a>
      </p>
    </footer>
  );
};

export default Footer;
