'use client'

import React, { useState } from 'react'
import styles from "./Navbar.module.css"
import { FaGithub, FaInstagram, FaLinkedin, FaReddit } from 'react-icons/fa'
import { IoClose, IoShareSocial } from 'react-icons/io5'

const Navbar = () => {
  const [nav, setNav] = useState<Boolean>(false)
  const [socialmenu, setsocialmenu] = useState<Boolean>(false)

  return (
    <nav className={styles.navbar}>
      <span className={styles.logo}>Tushar<span>.</span></span>

     
      <button className={styles.social} onClick={() => setsocialmenu(!socialmenu)}>
        {
          socialmenu ?
          <IoClose fill="black" className={styles.share} />
          :
          <IoShareSocial fill='black' className={styles.share} />
        }
      </button>

      <div className={`${styles.socialMenu} ${socialmenu ? styles.socialactive : ""}`}>
        <ul className={styles.socialList}>
          <li className={styles.icon}><FaGithub fill='black' /></li>
          <li className={styles.icon}><FaInstagram fill='pink' /></li>
          <li className={styles.icon}><FaLinkedin fill='blue' /></li>
          <li className={styles.icon}><FaReddit fill='red' /></li>
        </ul>
      </div>

    </nav>
  )
}

export default Navbar