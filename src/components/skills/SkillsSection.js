import React from "react";
import styles from "./skills.module.css";
import Image from "next/image";
import skillImage from "../../../public/skills/skills.svg";

export default function SkillsSection() {
  return (
    <div className={styles.container}>
      <div className={styles.skills_left}>
        <h1 className={styles.skills_title}>My Skills</h1>
        {/* <Image src={skillImage} width={300} height={300} alt="skills-image" /> */}
      </div>
      <div className={styles.skills_right}>
        <dl>
          <dt>Full Stack Sorcerer</dt>
          <dd>
            Mastering HTML, CSS, and JavaScript to craft dynamic and immersive
            web experiences.
          </dd>

          <dt>React Ninja</dt>
          <dd>
            Weaving cutting-edge UIs with React and Material-UI for sleek and
            responsive applications.
          </dd>

          <dt>Java & Spring Maestro</dt>
          <dd>
            Building robust backend solutions using Java and Spring Boot,
            turning ideas into powerful realities.
          </dd>
        </dl>
      </div>
    </div>
  );
}
