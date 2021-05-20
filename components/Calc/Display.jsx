import React from "react";
import Styles from "./Display.module.css";

const ret = (props) => {
	return <div className={Styles.display}>{props.value} </div>;
};

export default ret

