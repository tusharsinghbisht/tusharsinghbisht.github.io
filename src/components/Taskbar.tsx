"use client"
import React, { Dispatch, MouseEventHandler, ReactNode, SetStateAction, useEffect, useRef, useState } from 'react'
import styles from './Taskbar.module.css'
import { FaCode, FaHeadphones, FaHome, FaPhoneAlt } from 'react-icons/fa'
import { IoTerminal } from 'react-icons/io5'
import { Inter, Source_Code_Pro } from 'next/font/google'
import { TypeAnimation } from 'react-type-animation'

type TabProps = {
  children: ReactNode
  title: String
  isOpen: Boolean
  setOpen: Dispatch<SetStateAction<Boolean>>

}

const srccodepro = Source_Code_Pro({ subsets: ["latin"] })
const inter = Inter({ subsets: ["latin"] })

const Tab = ({ children, title, isOpen, setOpen }: TabProps) => {
  const [fullSize, setfullSize] = useState(false)
  const tabRef = useRef(null)


  useEffect(() => setfullSize(false), [isOpen])

  return (
    <div ref={tabRef} className={isOpen ? (fullSize ? `${styles.tab} ${styles.tabFull}` : styles.tab) : styles.tabClose}>
      <div className={styles.tabtopbar}>
        <div className={styles.topbarleft}>
          <div onClick={() => setOpen(false)}></div>
          <div onClick={() => setfullSize(!fullSize)}></div>
          <div onClick={() => setOpen(false)}></div>
        </div>

        <div className={styles.topbartitle}>{title}</div>

      </div>
      <div className={styles.tabcontent}>
        {children}
      </div>
    </div>
  )
}

const AboutTab = ({ tab_state, set_tab_state }: { tab_state: Boolean, set_tab_state: Dispatch<SetStateAction<Boolean>> }) => {
  return (
    <Tab title="About" isOpen={tab_state} setOpen={set_tab_state}>
      <div className={`${srccodepro.className} ${styles.abouttext}`}>
        <p><span className={styles.yellow}>USER@MACHINE</span> <span className={styles.pink}>/c/usr/bin</span></p>
        <p>$ <span className={styles.blue}>source</span> ./aboutme.bash</p>
        <p>
          <TypeAnimation
            style={{ whiteSpace: 'pre-line', height: '195px', display: 'block' }}
            sequence={[
              `Hey i am Tushar! I am a programmer\nI am a passionate programmer aspiring enginner\nI love to code`,
              1000,
              ''
            ]}
            speed={50}
            repeat={Infinity}
            omitDeletionAnimation={true}
          />
        </p>
      </div>

    </Tab>
  )
}


const SkillsTab = ({ tab_state, set_tab_state }: { tab_state: Boolean, set_tab_state: Dispatch<SetStateAction<Boolean>> }) => {
  return (
    <Tab title="Skills" isOpen={tab_state} setOpen={set_tab_state}>
      <div className={`${inter.className} ${styles.skillstab}`}>
        <h2>Skills 🔧</h2>
        <p>Here is my complete skill set</p>
      </div>
    </Tab>
  )
}

const BlogTab = ({ tab_state, set_tab_state }: { tab_state: Boolean, set_tab_state: Dispatch<SetStateAction<Boolean>> }) => {
  return (
    <Tab title="Blog" isOpen={tab_state} setOpen={set_tab_state}>
      <div className={`${inter.className} ${styles.blogtab}`}>
        <h1>Coming Soon 🚀</h1>
        <p>Work under construction</p>
      </div>
    </Tab>
  )
}

const ContactTab = ({ tab_state, set_tab_state }: { tab_state: Boolean, set_tab_state: Dispatch<SetStateAction<Boolean>> }) => {
  return (
    <Tab title="Contact" isOpen={tab_state} setOpen={set_tab_state}>
      <div className={`${inter.className} ${styles.contacttab}`}>
        <div className={styles.contactinfo}>
          <h2>Let{"'"}s get in touch! 👋</h2>
          <p>Don{"'"}t worry! your data will be safe</p>
        </div>
        <form className={styles.contactform}>
          <input type="text" name="" placeholder="Enter Name" />
          <input type="text" name="" placeholder="Enter Email" />
          <textarea cols={5} rows={8} placeholder='Enter your query'></textarea>
          <button>Submit</button>
        </form>
      </div>
    </Tab>
  )
}




const Taskbar = () => {
  const [aboutTab, setAboutTab] = useState<Boolean>(false)
  const [skillsTab, setSkillsTab] = useState<Boolean>(false)
  const [blogTab, setBlogTab] = useState<Boolean>(false)
  const [contactTab, setContactTab] = useState<Boolean>(false)

  const closeTabs = () => {
    setAboutTab(false)
    setSkillsTab(false)
    setBlogTab(false)
    setContactTab(false)
  }
  const switchTab = (n: Number) => {
    setAboutTab(n == 1 ? !aboutTab : false)
    setSkillsTab(n == 2 ? !skillsTab : false)
    setBlogTab(n == 3 ? !blogTab : false)
    setContactTab(n == 4 ? !contactTab : false)
  }
  return (
    <>
      <AboutTab tab_state={aboutTab} set_tab_state={setAboutTab} />
      <SkillsTab tab_state={skillsTab} set_tab_state={setSkillsTab} />
      <BlogTab tab_state={blogTab} set_tab_state={setBlogTab} />
      <ContactTab tab_state={contactTab} set_tab_state={setContactTab} />
      <div className={styles.taskbar}>
        <div className={styles.taskbarlist}>
          <button
            className={!aboutTab && !skillsTab && !blogTab && !contactTab ? styles.taskbaritemselected : styles.taskbaritems}
            onClick={closeTabs}>
            <FaHome fill='white' /><span>Home</span>
          </button>

          <button
            id="aboutTab"
            className={
              aboutTab ? styles.taskbaritemselected : styles.taskbaritems}
            onClick={() => switchTab(1)}>
            <IoTerminal fill='white' /><span>About</span>
          </button>

          <button
            className={skillsTab ? styles.taskbaritemselected : styles.taskbaritems}
            onClick={() => switchTab(2)}><FaCode fill="white" /><span>Skills</span>
          </button>

          <button
            className={blogTab ? styles.taskbaritemselected : styles.taskbaritems}
            onClick={() => switchTab(3)}>
            <FaHeadphones fill='white' /><span>Blog</span>
          </button>

          <button
            id="contactTab"
            className={contactTab ? styles.taskbaritemselected : styles.taskbaritems}
            onClick={() => switchTab(4)}>
            <FaPhoneAlt fill='white' /><span>Contact</span>
          </button>
        </div>
      </div >
    </>
  )
}

export default Taskbar