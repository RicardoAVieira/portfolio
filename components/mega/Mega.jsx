import React from "react";
import NumerosMega from "./NumerosMega";
import styles from "./Mega.module.css";

const mega = (props) => {
	return (
		<div>
			<div className={styles.Numeros}>
				<NumerosMega numRep={6}></NumerosMega>
			</div>
		</div>
	);
};


export default mega;