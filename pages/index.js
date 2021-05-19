import Head from 'next/head'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'
import Footer from '../components/Footer'
import React from 'react'


export default function Home() {
  return (<div className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-100">
    <Head>
      <title>Ricardo Vieira Development</title>
      <link rel="icon" href="/favicon.ico" />

    </Head>
    <Header />
    <div className={styles.container}>
      <main className={styles.main}>

      

        <div class="bg-white w-72 min-w-ful  md:w-3/4 min-w-full lg:w-4/5 min-w-full shadow-2xl ">
          <div class="md:flex w-auto h-auto ">
            <div class="md:flex-shrink-0">
              <img class="w-72  md:w-60 rounded-none lg:w-96  " src="/20210117_1510182.jpg" alt="Author Image" />
            </div>
            <div class="p-5 ">
              <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold ">Ricardo Antunes Vieira</div>
              <a href="mailto:ricardo.antunes.vieira@gmail.com"
                class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Entre em contato para novos trabalhos.</a>
              <p class="mt-2 text-gray-600 ">
                Profissional na área de Tecnologia da Informação, com foco em desenvolvimento mobile e web.              </p>

            </div>
          </div>
        </div>
      </main>

    </div>
    <Footer />
  </div>
  )
}
