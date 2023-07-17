import React from "react";
import styles from "./technologies.module.css";
import Image from "next/image";

const technologies = [
  {
    id: 1,
    url: "./tech/html.svg",
    name: "HTML",
  },
  {
    id: 2,
    url: "./tech/javascript.svg",
    name: "JavaScript",
  },
  {
    id: 3,
    url: "./tech/css.svg",
    name: "CSS",
  },
  {
    id: 4,
    url: "./tech/java.svg",
    name: "Java",
  },
  {
    id: 5,
    url: "./tech/python.svg",
    name: "Python",
  },
  {
    id: 6,
    url: "./tech/mysql.svg",
    name: "MySQL",
  },
  {
    id: 7,
    url: "./tech/react.svg",
    name: "ReactJS",
  },
  {
    id: 8,
    url: "./tech/spring.svg",
    name: "Spring-Boot",
  },
  {
    id: 9,
    url: "./tech/material.svg",
    name: "MUI",
  },
  {
    id: 10,
    url: "./tech/git.svg",
    name: "GIT",
  },
  {
    id: 11,
    url: "./tech/github.svg",
    name: "GitHub",
  },
  {
    id: 12,
    url: "./tech/figma.svg",
    name: "Figma",
  },
];

export default function Technologies() {
  return (
    <div className={styles.container}>
      {technologies.map((item) => (
        <div key={item.id} className={styles.tech_image_container}>
          <Image src={item.url} width={50} height={50} alt="image" />
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
}
