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
                    <form name="contact" method="POST" data-netlify="true" class="flex flex-col border-solid border-4 border-light-blue-500">
                        <label for="name">Name</label>
                        <input type="text" id="name" name="name" />

                        <label for="email">Email</label>
                        <input type="text" id="email" name="email" />

                        <label for="message">Message</label>
                        <textarea id="message" name="message" />

                        <button type="submit">Send</button>

                    </form>
                </main>
            </div>


            <Footer />
        </div>
    )
}