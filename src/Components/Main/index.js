import React, { Component } from "react";
import data from "../../data";

class Main extends Component {
	state = {
		score: 0,
		timer: 60,
		currentImg: data[0].img,
		currentName: data[0].name,
		answer: ""
	};

	countDown = () => {
		this.setState(() => {
			this.timer = setInterval(this.tick, 1000);
		});
	};

	tick = () => {
		this.setState(({ timer }) => {
			return { timer: timer - 1 };
		});
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
				<button type="button" onClick={this.compare}>
					Try
				</button>
				<button type="button" onClick={this.countDown}>
					Start
				</button>
			</div>
		);
	}
}

export default Main;
