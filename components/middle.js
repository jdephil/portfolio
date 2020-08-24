import styles from '../styles/Home.module.css'
import LanguageIcons from './LanguageIcons'

export default function Middle() {
  return (
    <div className={styles.middle}>
      <div className={styles.pdDiv}>
        <img className={styles.purpDiamonds} src="/purpleDiamonds.png" alt="purple diamonds" />
      </div>
      {/* <div className={styles.bdDiv}>
        <img className={styles.blackDiamonds} src="/blackDiamonds.png" alt="black diamonds" />
      </div> */}
      <div className={styles.aboutDiv}>
        <p> 
          I use my passion for telling stories and building projects to design cohesive websites that truly represent the brands they are created for. 
        </p>
      </div>
      <div className={styles.campingImgDiv}>
        <img className={styles.campingImg} src='/projects/campingTrip.png' alt='camping trip project' />
      </div>
      <div className={styles.campingDiv}>
        <div className={styles.linkDiv}>
          <a href='https://campingtrip-starsearch.herokuapp.com/' ><h3 className={styles.a}>Camping Trip</h3></a>
        </div>
        <p className={styles.p}>Search the sky and find your favorite celestial bodies using this app and the NASA Images API. Created with Express, Sequelize, Postgres, EJS, and styled with CSS.</p>
      </div>
      <div className={styles.wowImgDiv}>
        <img className={styles.wowImg} src='/projects/wow.png' alt='world of wonder project' />
      </div>
      <div className={styles.wonderDiv}>
        <div className={styles.linkDiv}>
         <a href='https://loving-williams-21d7ec.netlify.app/' ><h3 className={styles.a}>World of Wonder</h3></a>
        </div>
        <p>Escape for the day into our virtual museum, exploring different artifacts and cultures. Take notes in your journal and curate a collection of your own. A group project with 3 other developers, created with React and MongoDB, styled with Materialize and CSS.</p>
      </div>
      <div className={styles.frogImgDiv}>
        <img className={styles.frogImg} src='/projects/frogStory.png' alt='frog story' />
      </div>
      <div className={styles.frogDiv}>
        <div className={styles.linkDiv}>
         <a href='https://jdephil.github.io/Frog-Story/' ><h3 className={styles.a}>Frog Story</h3></a>
        </div>
        <p>A choose-your-own-adventure game about a lonely, little frog. Created with vanilla Javascript, CSS, and HTML.</p>
      </div>
      <LanguageIcons />
      <div className={styles.profDiv}>
        <p className={styles.connectP}>I would love to help you merge good design with functional code. Connect with me on one of the platforms below!</p>
      </div>
      <img className={styles.profpic} src="/profpic.png" alt="pic of Jennifer" />
    </div>
  )
}