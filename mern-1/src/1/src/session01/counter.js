import React, { Component } from "react";
import ReactDOM from "react-dom";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  incrementCounter = () => {
    this.setState((state, props) => {
      return {
        count: state.count + props.diff
      };
    });
  };

  decrementCounter = () => {
    this.setState((state, props) => {
      return {
        count: state.count - props.diff
      };
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.incrementCounter}>+{this.props.diff}</button>
        <button onClick={this.decrementCounter}>-{this.props.diff}</button>
      </div>
    );
  }
}

export default Counter;
