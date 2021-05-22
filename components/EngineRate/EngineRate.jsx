import React, { Component } from "react";
import styles from "./EngineRate.module.css";
import Display from "./Display";

import Imputs from "./Imputs";

class EngineRate extends Component {
	state = {
		diametroPistao: 0,
		cursoVira: 0,
		espessuraJunta: 0,
		diametroJunta: 0,
		volumeCamara: 0,
		volumePistao: 0,
		numeroPistoes: 0,
		volumeCilindro: 0,
		volumeJunta: 0,
		volumeTCamara: 0,
		volumeTotal: 0,
		taxaCompressao: 0,
		cilindradaMotor: 0,
	};
	setDP = (novoDP) => {
		this.setState({
			diametroPistao: novoDP,
		});
	};
	setCV = (novoCV) => {
		this.setState({
			cursoVira: novoCV,
		});
	};
	setEJ = (novoEJ) => {
		this.setState({
			espessuraJunta: novoEJ,
		});
	};
	setDJ = (novoDJ) => {
		this.setState({
			diametroJunta: novoDJ,
		});
	};
	setVC = (novoVC) => {
		this.setState({
			volumeCamara: novoVC,
		});
	};
	setVP = (novoVP) => {
		this.setState({
			volumePistao: novoVP,
		});
	};
	setNP = (novoNP) => {
		this.setState({
			numeroPistao: novoNP,
		});
	};

	volCilindro = () => {
		this.setState({
			volumeCilindro:
				(this.state.diametroPistao *
					this.state.diametroPistao *
					this.state.cursoVira *
					3.1415) /
				4000,
		});
        
	};
	volJunta = () => {
		this.setState({
			volumeJunta:
				(this.state.diametroJunta *
					this.state.diametroJunta *
					this.state.diametroJunta *
					3.1415) /
				4000,
		});
	};
	volTCamara = () => {
		this.setState({
			volumeTCamara:
				this.state.volumeCamara +
				this.state.volumePistao +
				this.state.volumeJunta,
		});
	};
	volTotal = () => {
		this.setState({
			volumeTotal: this.state.volumeCilindro + this.state.volumeTCamara,
		});
	};

	taxaComp = () => {
		this.setState({
			taxaCompressao:
				(this.state.volumeCilindro + this.state.volumeTCamara) /
				this.state.volumeTCamara,
		});
	};
	cilMotor = () => {
		this.setState({
			cilindradaMotor: this.state.volumeCilindro * this.state.numeroPistoes,
		});
	};

    run = () =>{
        <span> Em Contrução !</span>
    }

	render() {
		return (
			<div className={styles.EngineRate}>
				<Imputs
					passo={this.state.diametroPistao}
					setPasso={this.setDP}
					label="Diametro do Pistão (milimetros): "
				/>
				<Imputs
					passo={this.state.cursoVira}
					setPasso={this.setCV}
					label="Curso do Virabrequim (milimetros): "
				/>
				<Imputs
					passo={this.state.espessuraJunta}
					setPasso={this.setEJ}
					label="Espessura da Junta (milimetros): "
				/>
				<Imputs
					passo={this.state.diametroJunta}
					setPasso={this.setDJ}
					label="Diametro da Junta (milimetros): "
				/>
				<Imputs
					passo={this.state.volumeCamara}
					setPasso={this.setVC}
					label="Volume da câmara(ml) (milimetros): "
				/>
				<Imputs
					passo={this.state.volumePistao}
					setPasso={this.setVP}
					label="Volume do Pistão(ml) (milimetros): "
				/>
				<Imputs
					passo={this.state.numeroPistoes}
					setPasso={this.setNP}
					label="Numero de Pistões (milimetros): "
				/>
				
				<label>Em Breve !</label>
			</div>
		);
	}
}

const engineRate = EngineRate;

export default engineRate;
