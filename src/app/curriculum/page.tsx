import Image from 'next/image'
import styles from './page.module.scss'

export default function Curriculum() {
  return (
    <div className={styles.resumeContainer}>
      <div className={styles.caroImgContainer}>
        <Image
          src="/images/Caro.png"
          alt="Carito Da Silva"
          width={120}
          height={120}
          className={styles.caroImg}
        />
      </div>

      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <h1>CAROLINA DA SILVA</h1>
          <h6>FULL STACK DEVELOPER</h6>
        </div>

        <hr className={styles.divider} />

        <section className={styles.section}>
          <div className={styles.sectionTitle}>Educación</div>
          <div className={styles.sectionBody}>
            <p><span className={styles.year}>2020</span> - Coding Dojo, Estados Unidos.</p>
            <p>Full Stack Developer</p>
            <p><span className={styles.year}>2018</span> - Laboratoria. Santiago, Chile.</p>
            <p>Front-End Developer</p>
            <p><span className={styles.year}>2009</span> - Universidad Nacional Experimental de las Artes, Caracas, Venezuela.</p>
            <p>Licenciada en Artes Escénicas</p>
          </div>
        </section>

        <hr className={styles.divider} />

        <section className={styles.section}>
          <div className={styles.sectionTitle}>Experiencia Profesional</div>
          <div className={styles.sectionBody}>
            <div className={styles.experience}>
              <h5>GO CLOUD</h5>
              <p>
                Desarrolladora Junior en software de IA especialista en Bots,
                plataforma que utilizaba React en el front y NodeJs para el backend,
                apoyé en varias áreas.
              </p>
            </div>
            <div className={styles.experience}>
              <h5>IMPORT CLUB</h5>
              <p>
                Desarrolladora Front End, software hecho con Angular, donde estuve a
                cargo de implementar mejoras en el portal público e interno.
              </p>
            </div>
            <div className={styles.experience}>
              <h5>CLEVER IT</h5>
              <p>
                Desarrolladora Front End, actualmente trabajo en la construcción de
                un agendador de servicios para importante retail. Software construido
                con NextJs, ReactJs y unit testing con 85% de coverage.
              </p>
            </div>
          </div>
        </section>

        <hr className={styles.divider} />

        <section className={styles.section}>
          <div className={styles.sectionTitle}>Logros Profesionales</div>
          <div className={styles.sectionBody}>
            <div className={styles.achievement}>
              <h6>Saturdays AI</h6>
              <p>Seleccionada para realizar programa de estudios en Inteligencia Artificial.</p>
            </div>
            <div className={styles.achievement}>
              <Image src="/images/trophy.svg" alt="Trofeo" width={32} height={32} className={styles.trophy} />
              <p>Ganadora de la Beca &ldquo;Her Global Impact&rdquo; con Coding Dojo, un Bootcamp de desarrollo Fullstack.</p>
            </div>
          </div>
        </section>

        <hr className={styles.divider} />

        <section className={styles.section}>
          <div className={styles.sectionTitle}>Software</div>
          <div className={styles.sectionBody}>
            <ul className={styles.skillList}>
              <li>Javascript - Intermedio</li>
              <li>CSS/SCSS</li>
              <li>React/NextJS/Gatsby - Avanzado</li>
              <li>Angular - Intermedio</li>
              <li>Diseño responsive (Bootstrap, Materialize, Angular Material) - Avanzado</li>
              <li>Firebase - Intermedio</li>
              <li>NodeJs/Express/MongoDB - Intermedio</li>
              <li>Python - Iniciación</li>
              <li>Java - Iniciación</li>
              <li>AWS</li>
            </ul>
          </div>
        </section>

        <hr className={styles.divider} />

        <section className={styles.section}>
          <div className={styles.sectionTitle}>Contacto</div>
          <div className={styles.sectionBody}>
            <ul className={styles.contactList}>
              <li>
                <span className={styles.contactIcon}>📍</span>
                Pedro de Valdivia 6923, Macul
              </li>
              <li>
                <Image src="/images/icons8-whatsapp.svg" alt="WhatsApp" width={20} height={20} />
                <a href="https://wa.me/56950134332" target="_blank" rel="noopener noreferrer">+56950134332</a>
              </li>
              <li>
                <span className={styles.contactIcon}>✉️</span>
                <a href="mailto:caritodasilva@gmail.com">caritodasilva@gmail.com</a>
              </li>
              <li>
                <Image src="/images/rostro1.png" alt="Web" width={20} height={20} />
                <a href="https://www.caritodasilva.work" target="_blank" rel="noopener noreferrer">www.caritodasilva.work</a>
              </li>
              <li>
                <Image src="/images/icons8-linkedin.svg" alt="LinkedIn" width={20} height={20} />
                <a href="https://www.linkedin.com/in/carolina-da-silva-hernandez/" target="_blank" rel="noopener noreferrer">carolina-da-silva-hernandez</a>
              </li>
              <li>
                <Image src="/images/icons8-github.svg" alt="GitHub" width={20} height={20} />
                <a href="https://github.com/CaritoDasilva" target="_blank" rel="noopener noreferrer">CaritoDasilva</a>
              </li>
            </ul>
          </div>
        </section>
      </div>

      <div className={styles.downloadContainer}>
        <a
          href="https://firebasestorage.googleapis.com/v0/b/portafoliocaritodasilva.appspot.com/o/cvCaritoDaSilva.pdf?alt=media&token=412d5300-4913-4465-97d1-5567fc17c904"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.downloadBtn}
        >
          DESCARGAR PDF
        </a>
      </div>
    </div>
  )
}
