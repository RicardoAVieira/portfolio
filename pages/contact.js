import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Head from 'next/head'
import Footer from '../components/Footer'



export default function Contact() {

    return (
        <div className="bg-gradient-to-r from-purple-100 via-pink-100 to-red-100">
            <Head>
                <title>teste</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Header />

            <div className={styles.container}>
                <main className={styles.main}>
                    <h1>
                        <a href="mailto:ricardo.antunes.vieira@gmail.com">In Development, send E-mail:</a>

                    </h1>
                </main>
            </div>


            <Footer />
        </div>
    )
}