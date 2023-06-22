import Navbar from "@/components/navbar/Navbar";
import React from "react";
import styles from "./page.module.css";
import ProjectCard from "@/components/project-card/ProjectCard";
import Footer from "@/components/footer/Footer";
import Button from "@/components/button/Button";
import { projectsData } from "@/constants/index";

export default function Projetcs() {
  const projects = projectsData;
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.content}>
        <h1 className={styles.title}>Projects</h1>
        <div className={styles.projectsContainer}>
          {projects.map((project) => (
            <div key={project.id} className={styles.cardItem}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
        <Button url="/contact" text="Contact Me" next={true} />
      </div>
      <Footer />
    </div>
  );
}
