import styles from "./page.module.css";

import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import Button from "@/components/button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.content}>
        <h1 className={styles.title}>dominiclakshan</h1>
        <p className={styles.subTitle}>Full Stack Developer</p>
        <p className={styles.desc}>
          Passionate about software engineering, I love creating innovative
          projects that push boundaries. Explore my portfolio to see my
          dedication and expertise in action.
        </p>
        <Button text="Skills" url="/skills" next={true} />
      </div>
      <Footer />
    </div>
  );
}
