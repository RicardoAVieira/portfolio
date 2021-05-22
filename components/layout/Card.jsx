import React from "react";
import styles from "./Card.module.css";

export default function Card(props) {
	// - Não é aceito em js, pr aisso utiliza-se CamelCase
	const cardStyle = {
		backgroundColor: props.backgroundColor || "#263238",
		color: props.color || "#f0f9ff",
		borderColor: props.color || "#263238",
		width: props.size || "300px;",
	};

	return (
		<div className={styles.Card} style={cardStyle}>
			<div className={styles.Title}>{props.titulo}</div>
			<div className={styles.Content}>{props.children}</div>
		</div>
	);
}
