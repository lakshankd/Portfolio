import Image from "next/image";
import React from "react";
import styles from "./hero.module.css";

export default function HeroSection() {
  return (
    <div className={styles.container}>
      <div className={styles.info_section}>
        <h4 className={styles.info_section_head1}>Hi!</h4>
        <h1 className={styles.info_section_head2}>I am Dominic.</h1>
        <h5 className={styles.info_section_head4}>Full Stack Developer</h5>
        <p>
          Passionate about software engineering, I love creating innovative
          projects that push boundaries. Explore my portfolio to see my
          dedication and expertise in action.
        </p>
        <button>Contact Me</button>
      </div>
      <div className={styles.img_section}>
        <Image
          src="/my-photo-PhotoRoom (1).png"
          width={400}
          height={400}
          alt="image"
          className={styles.img_section_img}
        />
      </div>
    </div>
  );
}
