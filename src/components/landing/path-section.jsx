import React from "react";
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";

const PathSection = () => {
  const data = [
    {
      title: "2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-2xl font-bold mb-8">
            Software Engineering Intern at Sysco LABS Sri Lanka
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Developed innovative solutions using cutting-edge technologies,
            including Single SPA (micro frontends), NodeJs, SpringBoot and GCP
            (Document AI and Vertex AI).
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Enhanced skills in collaboration, agile development, and enterprise
            software life cycle management in a dynamic and supportive work
            environment.
          </p>
        </div>
      ),
    },
    {
      title: "2021",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-2xl font-bold mb-8">
            BSc (Hons) in Information Technology at University of Moratuwa
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Currently pursuing my Bachelor of Science (Honours) in Information
            Technology at the University of Moratuwa. I began this degree
            program in June 2021 and expect to graduate in 2025.
          </p>
        </div>
      ),
    },
    {
      title: "2019",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-2xl font-bold mb-8">
            G.C.E Advanced Level Examination - Physical Stream
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            I completed my Advanced Level Examination in the Physical Science
            stream at St. Joseph's College, Colombo 10 and achieved a Z-Score of
            1.8521.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Combined Mathematics - A
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Chemistry - B
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Physics - B
            </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <section id="about" className="md:w-6xl h-full mx-auto pb-10 scroll-mt-20">
      <Timeline data={data} />
    </section>
  );
};

export default PathSection;
