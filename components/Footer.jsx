import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
	return (
		<div className={styles.footerDark}>
			<footer>
				<div className={styles.container}>
					<div className={styles.column}>
						<h3>Services</h3>
						<ul>
							<li>
								<a href="#">Web design</a>
							</li>
							<li>
								<a href="#">Development</a>
							</li>
							<li>
								<a href="#">Hosting</a>
							</li>
						</ul>
					</div>
					<div className={styles.column}>
						<h3>About</h3>
						<ul>
							<li>
								<a href="#">Company</a>
							</li>
							<li>
								<a href="#">Team</a>
							</li>
							<li>
								<a href="#">Careers</a>
							</li>
						</ul>
					</div>
					<div className={styles.text}>
						<h3>Ricardo Vieira Dev.</h3>
						<p>
							Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus
							ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique
							lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.
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
