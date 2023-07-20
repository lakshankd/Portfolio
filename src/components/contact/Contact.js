import React from "react";
import styles from "./contact.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <div className={styles.container}>
      <div className={styles.head_section}>
        <h1>Contact Me</h1>
        <p>Let's start a project!</p>
      </div>
      <div className={styles.details_section}>
        <h2>Find me on</h2>
        <div className={styles.contact_card}>
          <div className={styles.contact_card_item}>
            <Image
              src="./contact/icons8-gmail.svg"
              width={40}
              height={40}
              alt="gmail-icon"
            />
            <Link href="mailto:dominiclakshank@gmail.com">
              <span>dominiclakshank@gmail.com</span>
            </Link>
          </div>
          <div className={styles.contact_card_item}>
            <Image
              src="./contact/icons8-linkedin.svg"
              width={40}
              height={40}
              alt="linkedin-icon"
            />
            <Link href="linkedin.com/in/dominic-lakshan-1b710927a">
              <span>linkedin.com/dominic-lakshan</span>
            </Link>
          </div>
          <div className={styles.contact_card_item}>
            <Image
              src="./contact/icons8-github.svg"
              width={40}
              height={40}
              alt="github-icon"
            />
            <Link href="https://github.com/lakshankd">
              <span>github.com/dominic-lakshan</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
