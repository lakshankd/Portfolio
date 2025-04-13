"use client";

import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t dark:border-gray-800 border-gray-200 mt-10">
      <div className="md:max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600 dark:text-gray-400">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          &copy; {currentYear} Dominic Lakshan. All rights reserved.
        </div>

        <div className="flex space-x-4">
          <Link
            href="https://github.com/lakshankd"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black dark:hover:text-white transition"
          >
            <FaGithub size={18} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/dominic-lakshan-1b710927a/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            <FaLinkedin size={18} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
