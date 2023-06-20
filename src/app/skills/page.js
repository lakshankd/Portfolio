import Navbar from "@/components/navbar/Navbar";
import React from "react";
import styles from "./page.module.css";
import Footer from "@/components/footer/Footer";
import Image from "next/image";
import Button from "@/components/button/Button";

export default function Skills() {
  const technologies = [
    {
      id: 1,
      src: "/tech/html.svg",
      name: "html",
      width: 40,
      height: 40,
    },
    {
      id: 2,
      src: "/tech/css.svg",
      name: "css",
      width: 40,
      height: 40,
    },
    {
      id: 3,
      src: "/tech/javascript.svg",
      name: "javaScript",
      width: 40,
      height: 40,
    },
    {
      id: 4,
      src: "/tech/java.svg",
      name: "Java",
      width: 40,
      height: 40,
    },
    {
      id: 5,
      src: "/tech/python.svg",
      name: "python",
      width: 40,
      height: 40,
    },
    {
      id: 6,
      src: "/tech/react.svg",
      name: "reactJs",
      width: 40,
      height: 40,
    },
    {
      id: 7,
      src: "/tech/spring.svg",
      name: "spirng boot",
      width: 40,
      height: 40,
    },
    {
      id: 8,
      src: "/tech/mysql.svg",
      name: "mysql",
      width: 80,
      height: 80,
    },
    {
      id: 9,
      src: "/tech/git.svg",
      name: "git",
      width: 40,
      height: 40,
    },
    {
      id: 10,
      src: "/tech/github.svg",
      name: "github",
      width: 40,
      height: 40,
    },
  ];

  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.content}>
        <h1 className={styles.title}>Technical Skills</h1>
        <div className={styles.imgContainer}>
          {technologies.map((item) => (
            <div className={styles.techItem}>
              <Image
                src={item.src}
                width={item.width}
                height={item.height}
                alt="technology-icon"
              />
              <span>{item.name}</span>
            </div>
          ))}
        </div>
        <Button url="/projects" text="Projects" next={true} />
      </div>
      <Footer />
    </div>
  );
}
