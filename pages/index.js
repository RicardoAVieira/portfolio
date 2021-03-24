import Head from 'next/head'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'
import Footer from '../components/Footer'


export default function Home() {
  return (<div className="bg-gradient-to-r from-purple-100 via-pink-100 to-red-100">
    <Head>
      <title>Ricardo Vieira Development</title>
      <link rel="icon" href="/favicon.ico" />

    </Head>
    <Header />
    <div className={styles.container}>
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

    </div>
    <Footer />
  </div>
  )
}
