import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.scss'

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.titleContainer}>
        <h1>CARITO DA SILVA</h1>
        <h5>FULL STACK DEVELOPER</h5>
      </div>

      <div className={styles.fotoContent}>
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/portafoliocaritodasilva.appspot.com/o/caritoLogo.png?alt=media&token=fd133c70-55ac-4597-ac1a-0f663f3515f8"
          alt="Carito Da Silva"
          width={800}
          height={800}
          className={styles.profileImg}
          priority
        />
      </div>

      <div className={styles.buttonsContainer}>
        <Link href="/bio">
          <button className={styles.linedThin}>MyWorld</button>
        </Link>
        <Link href="/favorites-codes">
          <button className={styles.linedThin}>FavoriteCodes</button>
        </Link>
        <Link href="/conversemos">
          <button className={styles.linedThin}>LetsTalk</button>
        </Link>
      </div>
    </div>
  )
}
