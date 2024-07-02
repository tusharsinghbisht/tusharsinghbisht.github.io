import { FaInfoCircle } from "react-icons/fa";
import styles from "./page.module.css";
import { FaPhone } from "react-icons/fa6";
import { Inter } from 'next/font/google'

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})


export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.info}>
          <h4>
            Hii, I am <span className={styles.highlighted}>Tushar</span>
          </h4>
          <h2>I am a <span className={styles.highlighted2}>Programmer</span></h2>
          <div>
            <button className={styles.morebtn}>Know More <span className={styles.arw}><FaInfoCircle /></span></button>
            <button className={styles.contactbtn}>Contact Me <span className={styles.arw}><FaPhone /></span></button>
          </div>

        </div>

        <div className={styles.bgcover}></div>

      </main>

    </>
  );
}
