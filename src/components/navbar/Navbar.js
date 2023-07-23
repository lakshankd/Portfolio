"use client";
import React, { useState } from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import logo from "../../../public/logo/logo.png";
import menuIcon from "../../../public/icons/icons8-menu.svg";
import closeIcon from "../../../public/icons/icons8-close.svg";
import Link from "next/link";

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
        <Link href="#hero_section">Home</Link>
        <Link href="#skills_section">Skills</Link>
        <Link href="#projects_section">Projects</Link>
        {/* <Link href="#interest">Interests</Link> */}
        <Link href="#contact_section">
          <button>Contact</button>
        </Link>
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
            <Link href="#hero_section">Home</Link>
            <Link href="#skills_section">Skills</Link>
            <Link href="#projects_section">Projects</Link>
            {/* <Link href="#interest">Interests</Link> */}
            <Link href="#contact_section">
              <button>Contact</button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
