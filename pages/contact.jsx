import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Head from "next/head";
import Footer from "../components/Footer";
import React from "react";

export default function Contact() {
	return (
		<div className="">
			<Head>
				<title>teste</title>
				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<Header />

			<div className={styles.container}>
				<main className={styles.mainContact}>
					<a href="mailto:ricardo.antunes.vieira@gmail.com">
						 Em desenvolvimento, para enviar um E-mail clique aqui!
					</a>
				</main>
			</div>

			<Footer />
		</div>
	);
}
