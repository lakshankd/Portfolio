import Navbar from "@/components/navbar/Navbar";
import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className={styles.container}>
      <Navbar />
      <h3 className={styles.title}>About Me</h3>
      <div className={styles.items}>
        <Image
          src="/my-photo.jpeg"
          width={250}
          height={250}
          className={styles.image}
          alt="my picture"
        />
        <span className={styles.name}>Dominic Lakshan</span>
        <p className={styles.desc}>
          Passionate about software engineering, I love creating innovative
          projects that push boundaries. Explore my portfolio to see my
          dedication and expertise in action.
        </p>
        <span>dominiclakshank@gmail.com</span>
        <div className={styles.imgContainer}>
          <Link href="https://github.com/lakshankd">
            <Image
              width={30}
              height={30}
              src="/github.png"
              alt="github account"
            />
          </Link>
          <Link href="https://medium.com/@dominiclakshank">
            <Image
              width={30}
              height={30}
              src="/medium.png"
              alt="medium account"
            />
          </Link>
          <Link href="https://www.hackerrank.com/dominiclakshank?hr_r=1">
            <Image
              width={30}
              height={30}
              src="/hackerR.png"
              alt="hackerRank account"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
