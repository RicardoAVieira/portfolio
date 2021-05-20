import Head from "next/head";
import Header from "../components/layout/Header";
import styles from "../styles/Home.module.css";
import Footer from "../components/layout/Footer";
import React from "react";

export default function Home() {
	return (
		<div className={styles.body}>
			<Head>
				<title>RvDev</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<script data-ad-client="ca-pub-2897656619807606" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>

			<Header />
			<div className={styles.containerHome}></div>
			<Footer />
		</div>
	);
}
