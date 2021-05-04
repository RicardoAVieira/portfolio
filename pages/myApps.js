import Head from 'next/head'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'
import Footer from '../components/Footer'


export default function Home() {
    return (<div className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-100">

        <Head>
            <title>Ricardo Vieira Development</title>
            <link rel="icon" href="/favicon.ico" />
            
        </Head>
        <div>
            <Header />
        </div>

        <div className={styles.container}>
            <main className={styles.main}>
                <div>
                    <a href="https://play.google.com/store/apps/details?id=online.rvdev.calculos_automotivos" target="_blank">
                        <img class="w-full p-4 shadow-2xl" src="./appPlayStore.jpg" alt="Author Image" />
                    </a>
                </div>

            </main>
        </div>

        <Footer />
    </div>
    )
}