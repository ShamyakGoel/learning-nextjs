import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hunting coder</title>
        <meta name="keywords" content="nextjs, huntingcoder blog, hunting coder" />
        <link rel="icon" href="/favicon.ico" />
        {/* <Script  src="./sc.js"></Script> */}
      </Head>
      <nav className={styles.mainnav}>
          <ul>
              <Link href='/'><li>Home</li></Link>
              <Link href='/about'><li>About</li></Link>
              <Link href='/blog'><li>Blog</li></Link>
              <Link href='/contact'><li>Contact</li></Link>
          </ul>
      </nav>
      <main className={styles.main}>
        <h1 className={styles.title}>
        Hunting coder
        </h1>

        <p className={styles.description}>
          A blog for the hunting coders by a hunting coder
        </p>

       <div className="blogs">
           <h2>Popular Blogs</h2>
        <div className="blogItem">
            <h3>How to learn javascript in 2022</h3>
            <p>Javascript is the langauage used to describe to logic for the web</p>
        </div>
        <div className="blogItem">
            <h3>How to learn javascript in 2022</h3>
            <p>Javascript is the langauage used to describe to logic for the web</p>
        </div>
        <div className="blogItem">
            <h3>How to learn javascript in 2022</h3>
            <p>Javascript is the langauage used to describe to logic for the web</p>
        </div>
       </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
