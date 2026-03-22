import Image from 'next/image'
import styles from './page.module.scss'

export default function Bio() {
  return (
    <div className={styles.bioContainer}>
      <div className={styles.section}>
        <div className={styles.leftContainer}>
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/portafoliocaritodasilva.appspot.com/o/fotoBio.jpg?alt=media&token=03e7d72c-011c-483c-ad4d-d9fb30bf1ed8"
            alt="Carito Da Silva"
            width={400}
            height={500}
            className={styles.caroPic}
          />
        </div>
        <div className={styles.rightContainer}>
          <h1>¿Quien Soy?</h1>
          <p>
            Venezolana, viviendo hace 11 años en Chile. Perseverante y trabajadora.
            Me apasiona lo que hago y me esfuerzo en hacerlo lo mejor posible.
            Soy creativa y buscar soluciones innovadoras. También me encanta el café,
            amo a mis cachorros y a las papitas fritas, porque obvio, son papitas fritas.
            Tengo mente inquieta por eso siempre estoy aprendiendo algo nuevo.
            ¡Trabajemos juntos!
          </p>
        </div>
      </div>
    </div>
  )
}
