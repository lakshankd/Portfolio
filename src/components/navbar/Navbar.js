"use client";
import React, { useState } from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import { BiMenuAltRight } from "react-icons/bi";
import { GrClose } from "react-icons/gr";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
      <div className={styles.nav_menu}>
        <div className={styles.nav_menu_icon}>
          {isMenuOpen ? (
            <GrClose size={20} onClick={() => setIsMenuOpen((prev) => !prev)} />
          ) : (
            <BiMenuAltRight
              size={25}
              onClick={() => setIsMenuOpen((prev) => !prev)}
            />
          )}
        </div>
        {isMenuOpen && (
          <div className={styles.nav_menu_links}>
            <a href="#home">Home</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#interest">Interests</a>
            <button>Contact</button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
