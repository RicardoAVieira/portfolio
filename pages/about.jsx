import styles from "../styles/About.module.css";
import Header from "../components/layout/Header";
import Head from "next/head";
import Footer from "../components/layout/Footer";
import React from "react";

export default function Contact() {
	return (
		<div className={styles.body}>
			<Head>
				<title>Sobre RvDev</title>
				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<Header />

			<div className={styles.container}>
				<main className={styles.main}>
					<div className={styles.aboutCompany}>
						<h1>Sobre a RvDev</h1>
						<p className="">
							Empresa especializada em desenvolver soluções online e offline
							para o seu negócio. Somos especialistas no desenvolvimento de
							Websites responsivos para todos os segmentos de empresas.
							Desenvolvemos aplicativos para Android e iOS.
						</p>
					</div>
				</main>
			</div>

			<Footer />
		</div>
	);
}
