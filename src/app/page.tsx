import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.rgbText}>🫶Fernanda🫶</h1>
          <div className={styles.flipContainer}>
            <div className={styles.flipInner}>
              <div className={styles.flipFront}>
                <Image
                  className={styles.profileImage}
                  src="/fernanda.jpg"
                  alt="Fernanda"
                  width={200}
                  height={200}
                  priority
                />
              </div>
              <div className={styles.flipBack}>
                <p className={styles.backText}>Chatonilda</p>
              </div>
            </div>
          </div>
          <div className={styles.rotatingText}>
            <span>S</span>
            <span>A</span>
            <span>F</span>
            <span>A</span>
            <span>D</span>
            <span>A</span>
          </div>
        </div>
      </main>
    </div>
  );
}
