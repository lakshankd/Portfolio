import Navbar from "@/components/navbar/Navbar";
import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/footer/Footer";

export default function About() {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.content}>
        <h3 className={styles.title}>Contact Me</h3>
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
        {/* <Image src="/name.png" height={50} width={200} alt="name" /> */}
        {/* <span>dominiclakshank@gmail.com</span> */}
        <div className={styles.imgContainer}>
          <Link href="https://github.com/lakshankd">
            <Image
              width={40}
              height={40}
              src="/contact/github.svg"
              alt="github account"
            />
          </Link>
          <Link href="dominiclakshank@gmail.com">
            <Image
              width={40}
              height={40}
              src="/contact/gmail.svg"
              alt="gmail account"
            />
          </Link>
          <Link href="https://www.linkedin.com/in/dominic-lakshan-1b710927a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BRk%2BunjR0QfucJLRoXTsdpQ%3D%3D">
            <Image
              width={40}
              height={40}
              src="/contact/linkedin.svg"
              alt="linkedin account"
            />
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
