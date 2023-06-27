import React from "react";
import styles from "./projectcard.module.css";
import Link from "next/link";

export default function ProjectCard({ project }) {
  return (
    <div className={styles.container}>
      <div className={styles.dateContainer}>
        <span className={styles.date}>{project.date}</span>
      </div>
      <h4 className={styles.title}>{project.name}</h4>
      <p className={styles.desc}>{project.desc}</p>
      {project.link ? (
        <Link href={project.link}>
          <button className={styles.link}>Github Repository</button>
        </Link>
      ) : (
        ""
      )}
    </div>
  );
}
