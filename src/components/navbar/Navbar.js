import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";

function Navbar() {
  return (
    <nav className={styles.container}>
      <div className={styles.nav_logo}>
        <Image
          src="/logo/logo.png"
          width={50}
          height={50}
          className={styles.nav_logo_img}
          alt="logo"
        />
        <h1>Dominic Lakshan</h1>
      </div>
      <div className={styles.nav_links}>
        <a href="#home">Home</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#interest">Interests</a>
        <button>Contact</button>
      </div>
    </nav>
  );
}

export default Navbar;
