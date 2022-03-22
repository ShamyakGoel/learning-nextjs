import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
        <style jsx>
            {`
            h2{
                font-size: 38px;
            }
            h3{
                font-size: 28px;
            }
            `}
        </style>
      <Head>
        <title>Hunting coder</title>
        <meta name="keywords" content="nextjs, huntingcoder blog, hunting coder" />
        <link rel="icon" href="/favicon.ico" />
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
        <div className={styles.imgWrapper}>
        <Image className={styles.myImg} src="/homeimg.jpg" width={237} height={158} />
        </div>
        <p className={styles.description}>
          A blog for the hunting coders by a hunting coder
        </p>

       <div>
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
      </footer>
    </div>
  )
}
