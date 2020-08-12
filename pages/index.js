import Head from 'next/head'
import Intro from '../components/intro'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jennifer De Phillips</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Intro />
        <div className={styles.middle}>
          <img className={styles.purpDiamonds} src="/purpleDiamonds.png" alt="purple diamonds" />
          <img className={styles.blackDiamonds} src="/blackDiamonds.png" alt="black diamonds" />
          <div className={styles.aboutDiv}>
            <p> 
              I use my passion for telling stories and building projects to design cohesive websites that truly represent the brands they are created for. 
            </p>
          </div>
          <div className={styles.campingDiv}>
            <h3>Camping Trip</h3>
            <p>Search the sky and find your favorite celestial bodies using this app and the NASA Images API.</p>
          </div>
          
          <div className={styles.wonderDiv}>
            <h3>World of Wonder</h3>
            <p>Escape for the day into our virtual museum, exploring different artifacts and cultures. Take notes in your journal and curate a collection of your own.</p>
          </div>
          
          <div className={styles.frogDiv}>
            <h3>Frog Story</h3>
            <p>A choose-your-own-adventure game about a lonely, little frog.</p>
          </div>
          <div className={styles.profDiv}>
            <p className={styles.connectP}>I would love to help you merge good design with functional code. Connect with me on one of the platforms below!</p>
          </div>
          <img className={styles.profpic} src="/profpic.png" alt="pic of Jennifer" />
        </div>
      </main>

      <footer className={styles.footer}>
          <a href="https://www.twitter.com/JenDePhillips" target="_blank">Twitter</a>
          <a href="https://www.linkedin.com/in/jenniferpaigedephillips/" target="_blank">LinkedIn</a>
          <a href="https://github.com/jdephil" target="_blank">GitHub</a>
          <a className={styles.hover} href='/resume.pdf' download>Resume</a>
      </footer>
    </div>
  )
}
