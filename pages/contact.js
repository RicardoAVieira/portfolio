import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Head from 'next/head'
import Footer from '../components/Footer'



export default function Contact() {

    return (
        <div className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-100">
            <Head>
                <title>teste</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                
            </Head>
            <Header />

            <div className={styles.container}>
                <main className={styles.main}>
                    <h1>
                        <a href="mailto:ricardo.antunes.vieira@gmail.com">In Development,click here to send Email:</a>
                        <a href="https://www.linkedin.com/in/ricardoav/" target="_blank">Linkedin</a>

                    </h1>
                </main>
            </div>


            <Footer />
        </div>
    )
}