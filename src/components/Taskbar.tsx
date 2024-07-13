"use client"
import React, { Dispatch, ReactNode, SetStateAction, useEffect, useState } from 'react'
import styles from './Taskbar.module.css'
import { FaCode, FaHeadphones, FaHome, FaJs, FaNodeJs, FaPhoneAlt, FaPython, FaReact } from 'react-icons/fa'
import { IoTerminal } from 'react-icons/io5'
import { Inter, Source_Code_Pro } from 'next/font/google'
import { TypeAnimation } from 'react-type-animation'
import { getCookie, setCookie } from '@/utils/cookies'

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


  return (
    <div className={isOpen ? (fullSize ? `${styles.tab} ${styles.tabFull}` : styles.tab) : styles.tabClose}>
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
              `👦 Hey i am Tushar (He/Him)!\n💁 I am a 18 year old boy\n💻 I am a passionate programmer\n💖 I love to code, works in different programming languages\n🔧 Currently an Engineering Student\n🕸️ Worked as Web Developer (Full Stack)\n👓 Currently learning DSA in C/C++ `,
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
      <div className={styles.skillstab}>
        <h2 className={inter.className} >Skills 🔧</h2>
        <p className={inter.className} >Here is my complete skill set</p>

        <div className={styles.skillboxes}>
          <div className={styles.skillbox}>
            <span></span><span></span>
            <span><p style={{ color: "#7b97ff" }}>I have a ton of experience in python</p></span>
            <span>
              <FaPython fill='#7b97ff' className={styles.skillicon} />
              <h4 style={{ color: "#7b97ff" }}>Python</h4>
            </span>
          </div>
          <div className={styles.skillbox}>
            <span></span><span></span>
            <span><p style={{ color: "#f5ff45" }}>Web Developer, Knows HTML, CSS, Javascript and tyepscript</p></span>
            <span>
              <FaJs fill='#f5ff45' className={styles.skillicon} />
              <h4 style={{ color: "#f5ff45" }}>Javascript</h4>
            </span>
          </div>
          <div className={styles.skillbox}>
            <span></span><span></span>
            <span><p style={{ color: "#0bd7ca" }}>Worked with React and NextJS and many more web frameworks</p></span>
            <span>
              <FaReact fill='#0bd7ca' className={styles.skillicon} />
              <h4 style={{ color: "#0bd7ca" }}>React</h4>
            </span>
          </div>
          <div className={styles.skillbox}>
            <span></span><span></span>
            <span><p style={{ color: "#76ff59" }}>Worked with frameworks like express.js for server side scripting</p></span>
            <span>
              <FaNodeJs fill='#76ff59' className={styles.skillicon} />
              <h4 style={{ color: "#76ff59" }}>NodeJS</h4>
            </span>
          </div>
        </div>
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

  const [result, setResult] = useState("")
  const [loading, setLoading] = useState(false)
  const [submited, setSubmited] = useState(false)
  const [formData, setFormData] = useState({
    name: "", email: "", message: ""
  })

  useEffect(() => {
    const s = getCookie("contact_form")
    if (s == "yes") {
      setSubmited(true)
    }
  }, [submited])

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true)
    e.preventDefault();

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "deeb8091-a275-44b8-8c4d-f4ac4407dc8d",
        ...formData
      }),
    });

    const data = await response.json();

    if (data.success) {
      setLoading(false)
      setCookie("contact_form", "yes", 1)
      setSubmited(true)
      setFormData({ name: "", email:"", message: "" })
    } else {
      console.log("Error", data);
      setLoading(false)
      setResult(data.message);
    }
  };

  return (
    <Tab title="Contact" isOpen={tab_state} setOpen={set_tab_state}>
      <div className={`${inter.className} ${styles.contacttab}`}>
        <div className={styles.contactinfo}>
          <h2>Let{"'"}s get in touch! 👋</h2>
          <p>Don{"'"}t worry! your data will be safe</p>
        </div>
        <form onSubmit={onSubmit} className={`${styles.contactform} ${loading ? styles.contactdisabled : ""}  ${submited ? styles.contactsubmited : ""}`}>
          <p>{result}</p>
          <input value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} type="text" placeholder="Enter Name" required={true} />
          <input value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} type="email" placeholder="Enter Email" required={true} />
          <textarea value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} cols={5} rows={8} placeholder='Enter your query' required={true} minLength={30}></textarea>
          <button type="submit">Submit</button>
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