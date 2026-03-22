import Image from 'next/image'
import styles from './page.module.scss'

const projects = [
  {
    id: 1,
    image: '/images/bricofem.org.gif',
    alt: 'Bricofem - plataforma de economía social feminista',
    tags: ['Angular', 'SCSS', 'Bootstrap'],
    links: [{ label: 'Demo', href: 'https://www.bricofem.org/' }],
  },
  {
    id: 2,
    image: '/images/api-cencosud.gif',
    alt: 'API Cencosud - backend REST API',
    tags: ['NodeJs', 'Javascript', 'Express', 'MongoDB'],
    links: [{ label: 'Code', href: 'https://github.com/CaritoDasilva/cenco_api_test' }],
  },
  {
    id: 3,
    image: '/images/color-picker.gif',
    alt: 'Color Picker - aplicación Angular',
    tags: ['Angular', 'Javascript', 'Typescript', 'Angular Material'],
    links: [
      { label: 'Demo', href: 'https://color-picker-61f35.web.app/' },
      { label: 'Code', href: 'https://github.com/CaritoDasilva/color-picker' },
    ],
  },
]

export default function FavoritesCodes() {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h1>MIS PROYECTOS</h1>
      </div>

      <div className={styles.projectsGrid}>
        {projects.map((project) => (
          <div key={project.id} className={styles.project}>
            <div className={styles.gifWrapper}>
              <Image
                src={project.image}
                alt={project.alt}
                width={500}
                height={340}
                className={styles.projectGif}
                unoptimized
              />
            </div>
            <div className={styles.tagsContainer}>
              <ul className={styles.tags}>
                {project.tags.map((tag) => (
                  <li key={tag} className={styles.tag}>{tag}</li>
                ))}
                {project.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className={`${styles.tag} ${styles.demoLink}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
