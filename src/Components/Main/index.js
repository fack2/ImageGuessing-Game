import React, { Component } from "react";
import data from "../../data";
class Main extends Component {
  state = {
    score: 0,
    timer: 60,
    counter: 0,
    currentImg: data[0].img,
    currentName: data[0].name,
    answer: ""
  };

  compare = event => {
    const { value } = event.target;
    const { currentName, counter, score } = this.state;
    this.setState({ answer: value }, () => {
      if (currentName === this.state.answer) {
        this.setState(prevState => ({
          score: prevState.score + 1,
          currentName: data[prevState.counter + 1].name,
          currentImg: data[prevState.counter + 1].img,
          answer: "",
          counter: counter + 1
        }));
      }
    });
  };

  render() {
    return (
      <div>
        <h1>Guess what's in the picture</h1>
        <label htmlFor="">
          Timer
          <input type="text" value={this.state.timer} />
        </label>
        <label htmlFor="">
          Score
          <input type="text" value={this.state.score} />
        </label>
        <img src={this.state.currentImg} alt="" />
        <input
          onChange={this.compare}
          type="text"
          value={this.state.answer}
          placeholder="Enter the name here !!"
        />
      </div>
    );
  }
}

export default Main;
