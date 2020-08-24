import styles from '../styles/Home.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <a href="https://www.twitter.com/JenDePhillips" target="_blank">Twitter</a>
        <a href="https://www.linkedin.com/in/jenniferpaigedephillips/" target="_blank">LinkedIn</a>
        <a href="https://github.com/jdephil" target="_blank">GitHub</a>
        <a className={styles.hover} href='/resume.pdf' download>Resume</a>
    </footer>
  )
}