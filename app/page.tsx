import Image from "next/image";
import styles from "./page.module.scss";
import profile from '../public/profile.jpeg'

export default function Home() {
  return (
    <main className={styles.main}>

      <div className={styles.headingContainer}>
        <p className='title'>Thomas Gransden</p>
        <p className="body"><span className={styles.rn}>React Native Developer</span></p>
      </div>

      <div className={styles.imageAndDesc}>

      <div className={styles.imageContainer}>

        <Image src={profile} alt="" width={250} height={250} style={{position: 'relative', zIndex: 1, borderRadius: 8}}/>

        <div style={{position: 'absolute', height: 250, width: 250, right: 0, bottom: 0, zIndex: 0, border: '4px solid aqua', borderRadius: 8}}/>

      </div>

      <div className={styles.aboutSection}>

        <p className={styles.aboutTitle}>About me</p>

        <p className={styles.aboutText}>I'm an app developer with over 8 years of app development experience, focussing on React Native for the last 6 years. I enjoy writing robust, performant and well tested code.</p>


      </div>

      </div>

    </main>
  );
}
