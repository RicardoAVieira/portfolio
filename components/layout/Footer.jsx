import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
	return (
		<div className={styles.footerDark}>
			<footer>
				<div className={styles.container}>
					<div className={styles.column}>
						<h3>Serviços</h3>
						<ul>
							<li>
								<a href="#">Web sites</a>
							</li>
							<li>
								<a href="/myApps">Apps e Ferramentas</a>
							</li>
							<li>
								
							</li>
						</ul>
					</div>
					<div className={styles.column}>
						<h3>Sobre</h3>
						<ul>
							<li>
								<a href="/about">Empresa</a>
							</li>
							<li>
								<a href="#">Equipe</a>
							</li>
							<li>
								
							</li>
						</ul>
					</div>
					<div className={styles.text}>
						<h3>RvDev.</h3>
						<p>
						Soluções online e offline para seu negócio. Somos especialistas no desenvolvimento de Websites responsivos para todos os segmentos de empresas. Desenvolvemos aplicativos para Android e iOS. 
						</p>
					</div>
				</div>
				<div className={styles.itemSocial}>
					<a href="https://www.linkedin.com/in/ricardoav/" target="blank">
						<img src="./linkedin.png"/>
					</a>
					<a href="https://github.com/RicardoAVieira" target="blank">
						<img src="./github.png"/>
					</a>
					<a href="https://www.facebook.com/RicardoTSI/" target="blank">
						<img src="./facebook.png"/>
					</a>
					<a href="https://www.instagram.com/ricardotsi/" target="blank">
						<img src="./instagram.png"/>
					</a>
				</div>
				<p className={styles.copyright}>RvDev 2021</p>
			</footer>
		</div>
	);
}
