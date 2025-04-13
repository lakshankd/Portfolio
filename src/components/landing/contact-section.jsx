"use client";

import React from "react";
import { motion } from "motion/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Link from "next/link";
import { HoverBorderGradient } from "../ui/hover-border-gradient";

const contactMethods = [
  {
    name: "LinkedIn",
    icon: <FaLinkedin size={24} />,
    link: "https://www.linkedin.com/in/dominic-lakshan-1b710927a/",
    color: "text-blue-600 dark:text-blue-400",
  },
  {
    name: "Gmail",
    icon: <FaEnvelope size={24} />,
    link: "mailto:dominiclakshank@gmail.com",
    color: "text-red-500 dark:text-red-400",
  },
  {
    name: "GitHub",
    icon: <FaGithub size={24} />,
    link: "https://github.com/lakshankd",
    color: "text-gray-800 dark:text-gray-200",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 14,
      stiffness: 100,
    },
  },
};

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="md:w-6xl h-full mx-auto pb-10 scroll-mt-20"
    >
      <h2 className="max-w-6xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Contact Me
      </h2>
      <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-lg px-4 mt-4">
        Interested in collaborating or just want to say hi? Reach out through
        the links below.
      </p>

      <motion.div
        className="flex justify-items-start items-center gap-6 flex-wrap py-10 max-w-6xl pl-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {contactMethods.map((contact, index) => (
          <Link
            key={index}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 hover:cursor-pointer"
            >
              {contact.icon}
              <span>{contact.name}</span>
            </HoverBorderGradient>
          </Link>
        ))}
      </motion.div>
    </section>
  );
};

export default ContactSection;
