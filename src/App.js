import React, { Component } from "react";
import ButtonOne from "./ButtonOne";
import math from "mathjs";
import ShowNames from "./ShowNames";

class App extends Component {
  constructor() {
    super();
    this.state = {
      names: ["gordon", "sahil", "david", "sally", "jane", "alice"],
      luckyWinnerIndex: null,
      value: ""
    };
  }
  render() {
    return (
      <div>
        <h1 id="app-title">Luccky one</h1>
        <ShowNames input={this.state} />
        <input
          value={this.state.value}
          onChange={event => {
            this.handleChange(event);
          }}
        />
        <button onClick={() => this.handleAddNameBtn()}>Add Names</button>
        <br />
        <br />
        <ButtonOne cleck_luck={() => this.cleck_luck()} />
        <br />
      </div>
    );
  }
  cleck_luck() {
    const random = math.randomInt(this.state.names.length);
    this.setState({
      luckyWinnerIndex: random
    });
  }
  handleChange(event) {
    this.setState({
      value: event.target.value
    })
  }
  handleAddNameBtn() {
    this.setState({
      names: [...this.state.names, this.state.value],
      value: ""
    })
  }
}

export default App;