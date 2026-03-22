'use client'

import Image from 'next/image'
import { useState } from 'react'
import styles from './page.module.scss'

interface FormData {
  name: string
  organization: string
  phone: string
  mail: string
  comments: string
}

const initialForm: FormData = {
  name: '',
  organization: '',
  phone: '',
  mail: '',
  comments: '',
}

export default function Conversemos() {
  const [form, setForm] = useState<FormData>(initialForm)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!res.ok) throw new Error('Error en el envío')

      setStatus('success')
      setForm(initialForm)
    } catch {
      setStatus('error')
    }
  }

  const isValid = form.name.trim() !== '' && form.mail.trim() !== ''

  return (
    <div className={styles.contactContainer}>
      <div className={styles.titleContainer}>
        <h1>TRABAJEMOS JUNTOS</h1>

        <div className={styles.rrssSection}>
          <div className={styles.rrssRow}>
            <p>Puedes seguirme por mis redes:</p>
            <div className={styles.btnContainer}>
              <a
                href="https://github.com/CaritoDasilva"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.socialBtn} ${styles.github}`}
                aria-label="GitHub"
              >
                <Image src="/images/icons8-github.svg" alt="GitHub" width={40} height={40} />
              </a>
              <a
                href="https://www.linkedin.com/in/carolina-da-silva-hernandez/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.socialBtn} ${styles.linkedin}`}
                aria-label="LinkedIn"
              >
                <Image src="/images/icons8-linkedin.svg" alt="LinkedIn" width={40} height={40} />
              </a>
              <a
                href="mailto:caritodasilva@gmail.com"
                className={`${styles.socialBtn} ${styles.gmail}`}
                aria-label="Gmail"
              >
                <Image src="/images/gmail.svg" alt="Gmail" width={52} height={40} />
              </a>
            </div>
          </div>

          <div className={styles.divider} />

          <div className={styles.rrssRow}>
            <p>También puedes descargar mi CV:</p>
            <div className={styles.btnContainer}>
              <a
                href="https://firebasestorage.googleapis.com/v0/b/portafoliocaritodasilva.appspot.com/o/CaritoDasilvaCV.pdf?alt=media&token=7451b816-fbe8-4986-aa58-d109746f0669"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.socialBtn} ${styles.cvBtn}`}
                aria-label="Descargar CV"
              >
                <Image src="/images/archive.svg" alt="CV" width={28} height={40} />
              </a>
            </div>
          </div>

          <div className={styles.divider} />

          <p className={styles.invitationText}>
            Y si prefieres ser contactado a continuación te presento un breve formulario
            para que puedas dejar tus datos para hacerme llegar tus dudas y comentarios.
            Me encanta la idea de que trabajemos en conjunto, así que te invito a que conversemos.
          </p>
        </div>
      </div>

      <div className={styles.formCard}>
        <h2 className={styles.cardTitle}>¡Deja tus datos!</h2>

        {status === 'success' && (
          <p className={styles.successMsg}>¡Mensaje enviado! Te contactaré pronto 🎉</p>
        )}
        {status === 'error' && (
          <p className={styles.errorMsg}>Hubo un error. Intenta de nuevo.</p>
        )}

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputField}>
            <input
              type="text"
              name="name"
              id="name"
              value={form.name}
              onChange={handleChange}
              placeholder=" "
              required
            />
            <label htmlFor="name">Nombre</label>
          </div>
          <div className={styles.inputField}>
            <input
              type="text"
              name="organization"
              id="organization"
              value={form.organization}
              onChange={handleChange}
              placeholder=" "
            />
            <label htmlFor="organization">Organización</label>
          </div>
          <div className={styles.inputField}>
            <input
              type="text"
              name="phone"
              id="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder=" "
            />
            <label htmlFor="phone">Contacto</label>
          </div>
          <div className={styles.inputField}>
            <input
              type="email"
              name="mail"
              id="mail"
              value={form.mail}
              onChange={handleChange}
              placeholder=" "
              required
            />
            <label htmlFor="mail">E-mail</label>
          </div>
          <div className={styles.inputField}>
            <textarea
              name="comments"
              id="comments"
              value={form.comments}
              onChange={handleChange}
              placeholder=" "
              rows={4}
            />
            <label htmlFor="comments">Comentarios</label>
          </div>
          <button
            type="submit"
            className={styles.submitBtn}
            disabled={!isValid || status === 'loading'}
          >
            {status === 'loading' ? 'Enviando...' : '¡Quiero entrevistarte!'}
          </button>
        </form>
      </div>
    </div>
  )
}
