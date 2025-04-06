"use client";

import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t dark:border-gray-800 border-gray-200 mt-10">
      <div className="md:max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600 dark:text-gray-400">
        {/* Left Section */}
        <div className="mb-4 md:mb-0 text-center md:text-left">
          &copy; {currentYear} Dominic Lakshan. All rights reserved.
        </div>

        {/* Center Links (Optional) */}
        {/* <div className="mb-4 md:mb-0 flex gap-4">
          <Link
            href="/about"
            className="hover:underline hover:text-black dark:hover:text-white transition"
          >
            About
          </Link>
          <Link
            href="/projects"
            className="hover:underline hover:text-black dark:hover:text-white transition"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="hover:underline hover:text-black dark:hover:text-white transition"
          >
            Contact
          </Link>
        </div> */}

        {/* Right Section - Social Icons */}
        <div className="flex space-x-4">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black dark:hover:text-white transition"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-500 dark:hover:text-sky-400 transition"
          >
            <FaTwitter size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
