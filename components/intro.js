import styles from '../styles/Intro.module.css'

export default function Intro() {
  return (
    <div className={styles.headerDiv}>
      <img className={styles.forestImg} src="/sunrise.jpg" />
        <div className={styles.jenDiv}>
          <h1 className={styles.h1}>I'm Jennifer</h1>
        </div>
        <div className={styles.descDiv}>
          <h2 className={styles.h2}>a front end developer <br></br> creating online experiences <br></br> using CSS, JavaScript, and React</h2>
        </div>
        <div className={styles.sunDiv}>
          <img className={styles.sun} src="/sun1.png" alt="sun" />
        </div>
        <div className={styles.attribution}><a href='https://www.freepik.com/vectors/background'>Background vector created by freepik - www.freepik.com</a></div>
    </div>
  )
}