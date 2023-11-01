import React, { Component } from "react";
import Class2 from "./Class2";

export default class Class extends Component {
  constructor(props) {
    super(props);
    this.props = props;

    this.state = {
      count: 0,
      inputName: "",
    };
  }
  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  decrement = () => {
    if (this.state.count > 0) {
      this.setState({
        count: this.state.count - 1,
      });
    } else {
    }
  };
  handleChange = (e) => {
    this.setState({
      inputName: e.target.value,
    });
  };

  render() {
    return (
      <>
        <h1>
          hello {this.props.name} {this.state.count}
        </h1>
        <button onClick={this.increment}>increment</button>
        <button onClick={this.decrement}>decrement</button>

        <br />
        <br />
        <div>
          <input
            type="text"
            placeholder="name..."
            value={this.state.inputName}
            onChange={this.handleChange}
          />
          <h2>{this.state.inputName}</h2>
        </div>

        <br />
        <br />
        <h2>props</h2>
        <Class2 name="dk baraiya" />
      </>
    );
  }
}
