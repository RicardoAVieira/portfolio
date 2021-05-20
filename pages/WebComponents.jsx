import styles from "../styles/WebComponents.module.css";
import Header from "../components/layout/Header";
import Head from "next/head";
import Footer from "../components/layout/Footer";
import Card from "../components/layout/Card";
import Contador from "../components/contador/Contador";
import Mega from "../components/mega/Mega";

export default function WebComponents() {
	return (
		<div className={styles.body}>
			<Head>
				<title>Componentes Web RvDev</title>
				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<Header />

			<div className={styles.container}>
				<main className={styles.main}>
					<Card titulo="Contador" >
						<Contador numeroInicial={1} numero2Inicial={1} passoInicial={1}></Contador>
					</Card>
					<Card titulo="Sorteador Mega-Sena" styles={styles.card}>
						<Mega></Mega>
					</Card>
				</main>
			</div>

			<Footer />
		</div>
	);
}
