import React from "react";
import styles from "./projectcard.module.css";
import Link from "next/link";

export default function ProjectCard({ project }) {
  return (
    <div className={styles.container}>
      <span className={styles.date}>{project.date}</span>
      <h4 className={styles.title}>{project.name}</h4>
      <p className={styles.desc}>{project.desc}</p>
      {project.link ? (
        <Link href={project.link}>
          <span className={styles.link}>Github Link</span>
        </Link>
      ) : (
        ""
      )}
    </div>
  );
}
