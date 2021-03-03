import Head from 'next/head'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div class="max-w-xl mx-auto bg-white rounded-x1 shadow-md overflow-hidden md:max-w-2xl">
          <div class="md:flex w-auto h-auto ">
            <div class="md:flex-shrink-0">
              <img class="h-auto w-auto object-cover lg:w-48" src="/20210117_1510182.jpg" alt="Author Image" />
            </div>
            <div class="p-5 ">
              <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold ">Ricardo Antunes Vieira</div>
              <a href="mailto:ricardo.antunes.vieira@gmail.com"
                class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Contact for new jobs</a>
              <p class="mt-2 text-gray-600 ">
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
