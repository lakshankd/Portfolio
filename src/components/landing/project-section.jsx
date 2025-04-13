"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import WebSafe from "../../assets/images/projects/websafe.png";
import Jobster from "../../assets/images/projects/jobster.png";
import DianaHRMS from "../../assets/images/projects/diana-hrms.png";
import Ecommerce from "../../assets/images/projects/ecommerce.png";
import WebSafeProject from "../project-content/websafe-project";
import JobsterProject from "../project-content/jobster-project";
import DianaHRMSProject from "../project-content/diana-hrms-project";
import ECommercePlatformProject from "../project-content/e-commerce-platfrom-project";

const ProjectSection = () => {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));

  return (
    <section
      id="projects"
      className="md:w-6xl h-full mx-auto py-10 scroll-mt-20"
    >
      <h2 className="max-w-6xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Project Highlights.
      </h2>
      <Carousel items={cards} />
    </section>
  );
};

export default ProjectSection;

const data = [
  {
    category: "WebSafe",
    title: "A Cookie Consent Management System.",
    src: WebSafe,
    content: <WebSafeProject />,
  },
  {
    category: "Jobster",
    title: "A UI prototype for a job portal.",
    src: Jobster,
    content: <JobsterProject />,
  },
  {
    category: "Diana HRMS",
    title: "A Human Resource Management System.",
    src: DianaHRMS,
    content: <DianaHRMSProject />,
  },

  {
    category: "E-Commerce Platform",
    title: "Micro-service Based E-Commerce Platform",
    src: Ecommerce,
    content: <ECommercePlatformProject />,
  },
];
