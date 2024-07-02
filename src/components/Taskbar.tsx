import React from 'react'
import styles from './Taskbar.module.css'

type Props = {}

const Taskbar = (props: Props) => {
  return (
    <div className={styles.taskbar}>
        <ul className={styles.taskbarlist}>
          {/* <li className={styles.taskbaritems}></li>
          <li className={styles.taskbaritems}></li>
          <li className={styles.taskbaritems}></li>
          <li className={styles.taskbaritems}></li> 
          <li className={styles.taskbaritems}></li> 
          */}

        </ul>
      </div>
  )
}

export default Taskbar