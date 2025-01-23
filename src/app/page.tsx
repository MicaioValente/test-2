"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";

const images = [
  "/1.jpg", "/2.jpg", "/3.jpg", "/4.jpg", "/5.jpg", 
  "/6.jpg", "/7.jpg", "/8.jpg", "/9.jpg", "/10.jpg", 
  "/11.jpg", "/12.jpg", "/13.jpg", "/14.jpg", "/15.jpg", 
  "/16.jpg", "/17.jpg", "/18.jpg", "/19.jpg", "/20.jpg"
];

export default function Home() {

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const [playing, setPlaying] = useState(false);

  const toggleAudio = () => {
    const audio = document.getElementById("bg-music") as HTMLAudioElement;
    if (playing) {
      audio.pause();
    } else {
      audio.play();
    }
    setPlaying(!playing);
  };

  return (
    <div className={styles.page}>
      <audio autoPlay loop>
        <source src="/background-music.mp3" type="audio/mp3" />
        Seu navegador não suporta o elemento de áudio.
      </audio>
      <audio id="bg-music" loop>
        <source src="/background-music.mp3" type="audio/mp3" />
      </audio>

      {!playing && <button onClick={toggleAudio}>
        Aperta sua danadinha
      </button>}
      {
        playing && (
        <main className={styles.main}>
          <div className={styles.container}>
            <h1 className={styles.rgbText}>🫶Fernanda🫶</h1>
            <div className={styles.flipContainer}>
              <div className={styles.flipInner}>
                <div className={styles.flipFront}>
                  <Image
                    className={styles.profileImage}
                    src={images[currentImage]}
                    alt={`Imagem ${currentImage + 1}`}
                    width={200}
                    height={200}
                    priority
                  />
                </div>
                <div className={styles.flipBack}>
                <Image
                    className={styles.profileImage}
                    src={images[currentImage]}
                    alt={`Imagem ${currentImage + 1}`}
                    width={200}
                    height={200}
                    priority
                  />
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
        ) 
      }
      
    </div>
  );
}
