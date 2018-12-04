import React, { Component } from "react";

class Counter extends Component {
  state = {
    counter: 0
  };
  handleIncDec = amount => () =>
    this.setState(prevState => ({
      counter: prevState.counter + amount
    }));
  handleIncrement = this.handleIncDec(1);
  handleDecrement = this.handleIncDec(-1);

  render() {
    const { counter } = this.state;

    return (
      <div className="count">
        <p className="counter">Count: {counter}</p>
        <button className="increment" onClick={this.handleIncrement}>
          Increment
        </button>
        <button className="decrement" onClick={this.handleDecrement}>
          Decrement
        </button>
      </div>
    );
  }
}

export default Counter;
