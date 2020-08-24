import Head from 'next/head'
import Intro from '../components/intro'
import Middle from '../components/middle'
import Footer from '../components/footer'
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
        <Middle />
      </main>

      <Footer />
    </div>
  )
}
