'use client'

import React, { useState } from 'react'
import styles from "./Navbar.module.css"
import { FaDiscord, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { IoClose, IoShareSocial } from 'react-icons/io5'

const Navbar = () => {
  const [nav, setNav] = useState<Boolean>(false)
  const [socialmenu, setsocialmenu] = useState<Boolean>(false)

  return (
    <>
      <nav className={styles.navbar}>
        <span className={styles.logo}>Tushar<span>.</span></span>
      </nav>
      <button className={styles.social} onClick={() => setsocialmenu(!socialmenu)}>
        {
          socialmenu ?
            <IoClose fill="black" className={styles.share} />
            :
            <IoShareSocial fill='black' className={styles.share} />
        }
      </button>

      <div className={`${styles.socialMenu} ${socialmenu ? styles.socialactive : ""}`}>
        <div className={styles.socialList}>
          <a className={styles.icon} href='https://github.com/tusharsinghbisht' target='__blank'><FaGithub fill='black' /></a>
          <a className={styles.icon} href='https://www.instagram.com/tushar_coder/' target='__blank'><FaInstagram fill='#DD2A7B' /></a>
          <a className={styles.icon} href='https://www.linkedin.com/in/tushar-singh-bisht-289092306/' target='__blank'><FaLinkedin fill='#0077B5' /></a>
          <a className={styles.icon} href='https://discordapp.com/users/707421998078492744' target='__blank'><FaDiscord fill='#7289DA' /></a>
        </div>
      </div>
    </>
  )
}

export default Navbar