import React from "react";


const passo = (props) => {
	return (
		<div>
			<label htmlFor="passoInput">{props.label}</label>
			<input
				id="passoInput"
				type="number"
				min="0"
				max="1000"
				
				onChange={(e) => props.setPasso(+e.target.value)}
			/>
		</div>
	);
};

export default passo;
