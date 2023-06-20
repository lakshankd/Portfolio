import React from "react";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <div className={styles.container}>
      <p className={styles.desc}>
        © 2023 Dominic Lakshan. All rights reserved.
      </p>
    </div>
  );
}
