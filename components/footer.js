import styles from '../styles/Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.linkDiv}>
        <a href="https://www.twitter.com/JenDePhillips" target="_blank"><p className={styles.a}>Twitter</p></a>
      </div>
      <div className={styles.linkDiv}>
        <a href="https://www.linkedin.com/in/jenniferpaigedephillips/" target="_blank"><p className={styles.a}>LinkedIn</p></a>
      </div>
      <div className={styles.linkDiv}>
        <a href="https://github.com/jdephil" target="_blank"><p className={styles.a}>GitHub</p></a>
      </div>
      <div className={styles.linkDiv}>
        <a className={styles.hover} href='/resume.pdf' download><p className={styles.a}>Resume</p></a>
      </div>
        <p className={styles.copyright}> ©️ Jennifer De Phillips 2020</p>
    </footer>
  )
}