"use client";

import React from "react";

const ContactSection = () => {
  const words = `Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows
`;
  return (
    <section className="md:w-6xl h-full mx-auto pb-10">
      <h2 className="max-w-6xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Contact Me
      </h2>
      <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-lg px-4 mt-4">
        Interested in collaborating or just want to say hi? Reach out through
        the links below.
      </p>
    </section>
  );
};

export default ContactSection;
