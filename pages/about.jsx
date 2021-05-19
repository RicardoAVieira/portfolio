import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Head from 'next/head'
import Footer from '../components/Footer'
import React from 'react'



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
                    <div className="max-w-md mx-auto bg-white rounded-xl shadow-2xl overflow-hidden md:max-w-2xl">
                        <div className="md:flex">
                            <div className="md:flex-shrink-0">
                            </div>
                            <div className="p-10">
                                <div className="tracking-wide text-sm text-gray-700 text-4xl p-10 center">Ricardo Antunes Vieira</div>

                                <p className="mt-2 text-gray-500">Profissional do ramo da Tecnologia da Informação com experiência no atendimento ao usuário e suas demandas. Conhecimentos em cabeamento estruturado e noções de roteamento e proteção de rede logica, manutenção e instalação de softwares  e serviços em estações de trabalho e servidores em arquiteturas Windows e Linux. Conhecimentos  em  linguagens de programação como Java, JavaScript, Dart, Php, Css, HTML e SQL, bem como frameworks para desenvolvimento web e móbile como Flutter entre outros.</p>
                            </div>
                        </div>
                    </div>


                </main>
            </div>


            <Footer />
        </div>
    )
}