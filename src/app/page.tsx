import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.rgbText}>🫶Fernanda🫶</h1>
          <Image
            className={styles.profileImage}
            src="/fernanda.jpg"
            alt="Fernanda"
            width={400}
            height={400}
            priority
          />
          <div className={styles.rotatingText}>
            <span>C</span>
            <span>H</span>
            <span>A</span>
            <span>T</span>
            <span>A</span>
          </div>
        </div>
      </main>
    </div>
  );
}
