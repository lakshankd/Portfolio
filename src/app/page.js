import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.btnContainer}>
        <Link href="/projects">
          <button className={styles.btn}>Projects</button>
        </Link>

        <button className={styles.btn}>About</button>
      </div>
      <h1 className={styles.title}>dominiclakshan</h1>
      <p className={styles.desc}>
        Passionate about software engineering, I love creating innovative
        projects that push boundaries. Explore my portfolio to see my dedication
        and expertise in action.
      </p>
    </div>
  );
}
