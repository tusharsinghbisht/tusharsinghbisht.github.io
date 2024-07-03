"use client"
import React, { ReactNode, useState } from 'react'
import styles from './Taskbar.module.css'
import { FaCode, FaHeadphones, FaHome, FaPhoneAlt } from 'react-icons/fa'
import { IoTerminal } from 'react-icons/io5'
import { useRouter } from 'next/navigation'

type TabProps = {
  children: ReactNode
  title: String
  thisTabCode: Number
  currentTabCode: Number
}

const Tab = ({ children, title, thisTabCode, currentTabCode }: TabProps) => {
  return (
    <div className={currentTabCode === thisTabCode ? styles.tab : styles.tabClose}>
      {children}
    </div>
  )
}

const AboutTab = ({ code }: { code: Number }) => {
  return (
    <Tab title="About" currentTabCode={code} thisTabCode={1}>
      hello
    </Tab>
  )
}


const Taskbar = () => {
  const [tabCode, setTabCode] = useState<Number>(0)
  const router = useRouter()
  return (
    <>
      <AboutTab code={tabCode} />
      <div className={styles.taskbar}>
        <div className={styles.taskbarlist}>
          <button
            className={tabCode == 0 ? styles.taskbaritemselected : styles.taskbaritems}
            onClick={() => {
              setTabCode(0)
              router.push("/")
            }}>
            <FaHome fill='white' /><span>Home</span>
          </button>

          <button className={tabCode == 1 ? styles.taskbaritemselected : styles.taskbaritems} onClick={() => setTabCode(1)}><IoTerminal fill='white' /><span>About</span></button>

          <button className={tabCode == 2 ? styles.taskbaritemselected : styles.taskbaritems} onClick={() => setTabCode(2)}><FaCode fill="white" /><span>Skills</span></button>

          <button
            className={tabCode == 3 ? styles.taskbaritemselected : styles.taskbaritems}
            onClick={() => {
              setTabCode(3)
              router.push("/blog")
            }}>
            <FaHeadphones fill='white' /><span>Blog</span>
          </button>

          <button className={tabCode == 4 ? styles.taskbaritemselected : styles.taskbaritems} onClick={() => setTabCode(4)}><FaPhoneAlt fill='white' /><span>Contact</span></button>
        </div>
      </div >
    </>
  )
}

export default Taskbar