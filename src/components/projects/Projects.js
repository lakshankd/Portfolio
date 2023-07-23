import React from "react";
import styles from "./projects.module.css";
import { projectsData } from "@/constants";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projects = projectsData;
  return (
    <div className={styles.container} id="projects_section">
      <div className={styles.title_container}>
        <h1>Projects</h1>
      </div>
      <div className={styles.projects_contianer}>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            projectName={project.name}
            languages={project.languages}
            desc={project.desc}
            github={project.link}
          />
        ))}
      </div>
    </div>
  );
}
