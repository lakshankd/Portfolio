import React from "react";
import styles from "./projectcard.module.css";
import Link from "next/link";

export default function ProjectCard({ projectName, languages, github, desc }) {
  return (
    <div className={styles.container}>
      <h1>{projectName}</h1>
      <div className={styles.languages}>
        {languages.map((item) => (
          <span key={item}>◉ {item}</span>
        ))}
      </div>
      <div className={styles.desc}>
        <p>{desc}</p>
      </div>
      {github ? (
        <Link href={github}>
          <button className={styles.btn}>GitHub</button>
        </Link>
      ) : (
        ""
      )}
    </div>
  );
}
