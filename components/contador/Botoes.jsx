import React from "react";

const botoes = (props) => {
	return (
		<div>
			<button onClick={props.soma}>+</button>
			<button onClick={props.subtracao}>-</button>
			<button onClick={props.multiplicacao}>*</button>
			<button onClick={props.divisao}>/</button>
		</div>
	);
};

export default botoes
