import React, { Component } from "react";
import Main from "../Main/index";
import Result from "./../Result";
class App extends Component {
	state = {
		gameOver: false,
		score: 0
	};

	triggerGameOver = () => {
		this.setState({ gameOver: true });
	};

	increaseScore = () => {
		this.setState(prevState => ({ score: prevState.score + 1 }));
	};

	render() {
		const { gameOver, score } = this.state;
		return (
			<div>
				{gameOver ? (
					<Result score={score} />
				) : (
					<Main
						triggerGameOver={this.triggerGameOver}
						increaseScore={this.increaseScore}
						score={this.state.score}
					/>
				)}
			</div>
		);
	}
}

export default App;
