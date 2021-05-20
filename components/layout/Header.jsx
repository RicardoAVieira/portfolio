import React from 'react'
import styles from "./Header.module.css"

export default function Header() {
    return (
        <div className={styles.hBody}>
            <div className={styles.hMenus}  >
                <a className={styles.hMenu} href="/">Home</a>
                <a className={styles.hMenu} href="/WebComponents">Web</a>
                <a className={styles.hMenu} href="/myApps">Apps</a>
                <a className={styles.hMenu} href="contact">Contato</a>
                <a className={styles.hMenu} href="about">Sobre</a>
             
            </div>
           

         
        </div>
    )
}

