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
        <button className={styles.btn}>Projects</button>
        <button className={styles.btn}>About</button>
      </div>
    </nav>
  );
}
