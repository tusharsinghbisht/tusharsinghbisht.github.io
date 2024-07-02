'use client'
import { useEffect, useState } from "react"
import styles from "./Loading.module.css"

const Loading = () => {
    const [load, setLoad] = useState<Boolean>(true)

    useEffect(() => {
        setInterval(() => setLoad(false), 2500)
    })

    if (load) {
        return (
            <div className={styles.loader}>
                <div className={styles.load}>
                    <div className={styles.l1}></div>
                    <div className={styles.l2}></div>
                    <div className={styles.l3}></div>
                </div>
                    {/* <div className={styles.loadtxt}>just wait a second...</div> */}
            </div>
        )
    }

    return <></>
}

export default Loading