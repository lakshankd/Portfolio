import Navbar from "@/components/navbar/Navbar";
import React from "react";
import styles from "./page.module.css";
import ProjectCard from "@/components/project-card/ProjectCard";

export default function Projetcs() {
  const projects = [
    {
      id: 1,
      date: "June 14, 2023",
      name: "Websafe",
      desc: "The Cookie Consent Management System is an open-source tool that helps websites comply with laws and regulations related to cookies and tracking technologies. It provides website visitors with information about the types of cookies being used, while also giving them the option to control their cookie preferences.",
      link: "https://github.com/Team-Infolinx",
    },
    {
      id: 2,
      date: "May 15, 2022",
      name: "Automated Cake Slicing Machine",
      desc: "A hardware project utilizing an Atmega32 Microcontroller to create an autonomous cake slicing machine. Users can slice cakes based on entered weight, ensuring precise and consistent portions.",
    },
  ];
  return (
    <div className={styles.container}>
      <Navbar />
      <h3 className={styles.title}>Projects</h3>
      <div className={styles.projectContainer}>
        {projects.map((project) => (
          <ProjectCard project={project} />
        ))}
      </div>
    </div>
  );
}
