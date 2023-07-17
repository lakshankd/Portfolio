"use client";
import React, { useState } from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import logo from "../../../public/logo/logo.png";
import menuIcon from "../../../public/icons/icons8-menu.svg";
import closeIcon from "../../../public/icons/icons8-close.svg";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className={styles.container}>
      <div className={styles.nav_logo}>
        <Image
          src={logo}
          width={40}
          height={40}
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
        <div className={styles.nav_menu_icon} color="white">
          {isMenuOpen ? (
            <Image
              src={closeIcon}
              width={25}
              height={25}
              alt="menu-icon"
              onClick={() => setIsMenuOpen((prev) => !prev)}
            />
          ) : (
            <Image
              src={menuIcon}
              width={25}
              height={25}
              alt="menu-icon"
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
