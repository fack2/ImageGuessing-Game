import React, { Component } from "react";
class Result extends Component {
	render() {
		return (
			<div>
				{this.props.score === 10 ? <h1>You Win!</h1> : <h1>You Lose</h1>}
				<p>{this.props.score}</p>
			</div>
		);
	}
}

export default Result;
