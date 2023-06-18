import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className={styles.container}>
      <div>
        <Link href="/">
          <Image src="/arrow.png" width={20} height={20} alt="arrow-btn" />
        </Link>
      </div>
      <div className={styles.btnContainer}>
        <Link href="/projects">
          <button className={styles.btn}>Projects</button>
        </Link>
        <Link href="/about">
          <button className={styles.btn}>About</button>
        </Link>
      </div>
    </nav>
  );
}
