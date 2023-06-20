import Link from "next/link";
import React from "react";
import styles from "./button.module.css";

export default function Button({ text, url, next }) {
  return (
    <Link href={url}>
      <button className={styles.btn}>{next ? text + " >" : "< " + text}</button>
    </Link>
  );
}
