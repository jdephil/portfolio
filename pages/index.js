import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jennifer De Phillips</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
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

        <div className={styles.aboutDiv}>
          <p> 
            I use my passion for building projects and telling stories to design cohesive websites that truly represent the brands they are created for. 
          </p>
        </div>
        <div className={styles.campingDiv}>
          <h3>Camping Trip</h3>
          <p>Search the sky and find your favorite celestial bodies using this app and the NASA Images API</p>
        </div>
        
        <div className={styles.wonderDiv}>
          <h3>World of Wonder</h3>
          <p>Escape for the day into our virtual museum, exploring different artifacts and cultures. Take notes in your journal and curate a collection of your own.</p>
        </div>
        
        <div className={styles.frogDiv}>
          <h3>Frog Story</h3>
          <p>A little RPG choose-your-own-adventure about a lonely frog.</p>
        </div>
      </main>

      <footer className={styles.footer}>
          Twitter LinkedIn GitHub
      </footer>
    </div>
  )
}
