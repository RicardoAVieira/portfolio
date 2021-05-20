import Head from "next/head";
import Header from "../components/layout/Header";
import styles from "../styles/Home.module.css";
import Footer from "../components/layout/Footer";
import React from "react";

export default function Home() {
	return (
		<div className="">
			<Head>
				<title>Aplicativos RvDev</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div>
				<Header />
			</div>

			<div className={styles.container}>
				<main className={styles.main}>
					<div>
						<a
							href="https://play.google.com/store/apps/details?id=online.rvdev.calculos_automotivos"
							target="_blank"
						>
							<img
								class="w-full p-4 shadow-2xl"
								src="./appPlayStore.jpg"
								alt="Author Image"
							/>
						</a>
					</div>
				</main>
			</div>

			<Footer />
		</div>
	);
}
