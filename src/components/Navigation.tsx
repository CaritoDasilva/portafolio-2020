'use client'

import Link from 'next/link'
import { useState } from 'react'
import styles from './Navigation.module.scss'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const close = () => setIsOpen(false)

  return (
    <nav className={styles.nav}>
      <button
        className={styles.menuBtn}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Abrir menú"
        aria-expanded={isOpen}
      >
        ☰
      </button>

      {isOpen && (
        <>
          <div className={styles.overlay} onClick={close} />
          <ul className={styles.menuList}>
            <li>
              <Link href="/" onClick={close}>HOME</Link>
            </li>
            <li>
              <Link href="/bio" onClick={close}>MyWorld</Link>
            </li>
            <li>
              <Link href="/conversemos" onClick={close}>LetsTalk</Link>
            </li>
            <li>
              <Link href="/favorites-codes" onClick={close}>FavoriteCodes</Link>
            </li>
          </ul>
        </>
      )}
    </nav>
  )
}
