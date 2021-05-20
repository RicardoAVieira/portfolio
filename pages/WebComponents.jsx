import styles from "../styles/WebComponents.module.css";
import Header from "../components/layout/Header";
import Head from "next/head";
import Footer from "../components/layout/Footer";
import Card from "../components/layout/Card";
import Contador from "../components/contador/Contador";

export default function WebComponents() {
	return (
		<div className="">
			<Head>
				<title>Componentes Web RvDev</title>
				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<Header />

			<div className={styles.container}>
				<main className={styles.main}>
					
				</main>
			</div>

			<Footer />
		</div>
	);
}
