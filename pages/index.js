import Head from "next/head";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";
import Footer from "../components/Footer";
import React from "react";

export default function Home() {
	return (
		<div className={styles.body}>
			<Head>
				<title>Ricardo Vieira Development</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />
			<div className={styles.containerHome}></div>
			<Footer />
		</div>
	);
}
