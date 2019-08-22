import React, { Component } from "react";
import data from "../../data";

class Main extends Component {
	state = {
		timer: 60,
		currentImg: data[0].img,
		currentName: data[0].name,
		answer: "",
		disableStartButton: false,
		disableTryButton: true
	};
	start = () => {
		this.setState(prevState => ({
			disableStartButton: !prevState.disableStartButton,
			disableTryButton: !prevState.disableTryButton
		}));

		setInterval(this.countDown, 1000);
	};
	countDown = () => {
		const { timer } = this.state;
		if (timer > 0) {
			this.setState(prevState => ({
				timer: prevState.timer - 1
			}));
		} else {
			this.props.triggerGameOver();
		}
	};

	compareInputWithAnswer = () => {
		const { currentName, answer } = this.state;
		if (currentName === answer) {
			if (this.props.score + 1 === 11) {
				this.props.triggerGameOver();
			} else {
				this.props.increaseScore();
				this.setState({
					currentName: data[this.props.score + 1].name,
					currentImg: data[this.props.score + 1].img,
					answer: ""
				});
			}
		}
	};

	updateUserAnswer = event => {
		const { value } = event.target;
		this.setState({ answer: value });
	};

	render() {
		return (
			<div className="main">
				<h2 className="w3-text-orange">Guess what's in the picture</h2>
				<div className="output">
				<label className="w3-text-blue"  htmlFor="timer">
					Timer
					<input className="timer" type="text" id="timer" value={this.state.timer} />
				</label>
				<label className="w3-text-blue"  htmlFor="score">
					Score
					<input className="score"  type="text" id="score" value={this.props.score} />
				</label>
				</div>
				<img src={this.state.currentImg} alt="" />
				<input
				className="answer"
					onChange={this.updateUserAnswer}
					type="text"
					value={this.state.answer}
					placeholder="Enter the name here !!"
				/>
				<button
				className="w3-btn w3-blue" 
					type="button"
					onClick={this.compareInputWithAnswer}
					disabled={this.state.disableTryButton}
				>
					Try
				</button>
				<button
				className="w3-btn w3-green" 
					type="button"
					onClick={this.start}
					disabled={this.state.disableStartButton}
				>
					Start
				</button>
			</div>
		);
	}
}

export default Main;
