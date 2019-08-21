import React, { Component } from "react";
import data from "../../data";

class Main extends Component {
	state = {
		score: 0,
		timer: 60,
		currentImg: data[0].img,
		currentName: data[0].name,
		answer: "",
		disableStartButton: false,
		disableTryButton: true
	};

	countDown = () => {
		this.setState(prevState => ({
			disableStartButton: !prevState.disableStartButton,
			disableTryButton: !prevState.disableTryButton
		}));
		const timer = () => {
			const { timer } = this.state;
			if (timer > 0) {
				this.setState(prevState => ({
					timer: prevState.timer - 1
				}));
			}
		};
		setInterval(timer, 100);
	};

	compare = () => {
		const { currentName, answer } = this.state;
		if (currentName === answer) {
			this.setState(prevState => ({
				score: prevState.score + 1,
				currentName: data[prevState.score + 1].name,
				currentImg: data[prevState.score + 1].img,
				answer: ""
			}));
		}
	};

	updateUserAnswer = event => {
		const { value } = event.target;
		this.setState({ answer: value });
	};

	render() {
		return (
			<div>
				<h1>Guess what's in the picture</h1>
				<label htmlFor="timer">
					Timer
					<input type="text" id="timer" value={this.state.timer} />
				</label>
				<label htmlFor="score">
					Score
					<input type="text" id="score" value={this.state.score} />
				</label>
				<img src={this.state.currentImg} alt="" />
				<input
					onChange={this.updateUserAnswer}
					type="text"
					value={this.state.answer}
					placeholder="Enter the name here !!"
				/>
				<button
					type="button"
					onClick={this.compare}
					disabled={this.state.disableTryButton}
				>
					Try
				</button>
				<button
					type="button"
					onClick={this.countDown}
					disabled={this.state.disableStartButton}
				>
					Start
				</button>
			</div>
		);
	}
}

export default Main;
