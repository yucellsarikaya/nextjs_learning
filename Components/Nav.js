import React from 'react'
import Link from 'next/link'
import styles from "../styles/Nav.module.css"
const Nav = () => {
    return (
        <nav className={styles.Nav}>
            <ul className={styles.ul}>
                <li className={styles.li}>
                    <Link href="/" legacyBehavior>
                        <a>Home</a>
                    </Link>
                </li>
                <li className={styles.li}>
                    <Link href="/about" legacyBehavior>
                        <a>About</a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav