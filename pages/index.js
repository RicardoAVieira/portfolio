import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>


        <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div class="md:flex">
            <div class="md:flex-shrink-0">
              <img class="h-48 w-full object-cover md:w-48" src="/20210117_1510182.jpg" alt="Author Image" />
            </div>
            <div class="p-8">
              <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Ricardo Antunes Vieira</div>
              <a href="mailto:ricardo.antunes.vieira@gmail.com" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding new jobs</a>
              <p class="mt-2 text-gray-500">
                Professional in the Information Technology area, focused on mobile and web development.
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.linkedin.com/in/ricardoav/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' RVDev'}
          <img src="/logo_size.jpg" alt="RVDev Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
