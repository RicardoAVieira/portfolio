import React from "react";
import Styles from "./Button.module.css";

const ret = (props) => {
	var stylo;
	function qualStylo(props) {
		if (props.label === "AC") {
			return (stylo = (Styles.button, Styles.triple));
		} else if (props.label === "0") {
			return (stylo = (Styles.button, Styles.double));
		} else if(props.label === "/" || props.label === "*" || props.label === "+" || props.label === "-" || props.label === "="){
			return (stylo = Styles.operation);
		}else {
            return (stylo = (Styles.button));
        }
	}

	return (
		<button
			onClick={(e) => props.click && props.click(props.label)}
			className={qualStylo(props)}
		>
			{props.label}
		</button>
	);
};

export default ret;
