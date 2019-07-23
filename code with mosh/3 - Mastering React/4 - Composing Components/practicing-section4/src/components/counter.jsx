import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div id="counter-container">
        <h4 style={{ width: 150 }} className={this.getBadgeClass()}>
          {this.showValue()}
        </h4>

        <button
          onClick={() => this.props.onIncrementCounter(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>

        <button
          className="btn btn-danger btn-sm m-4"
          onClick={() => this.props.onDeleteCounter(this.props.counter.id)}
        >
          Delete
        </button>
      </div>
    );
  }

  showValue() {
    const { value } = this.props.counter;
    return value === 0 ? <span>The counter is zero</span> : value;
  }

  getBadgeClass() {
    let classes = "badge m-4 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "success";
    return classes;
  }
}

export default Counter;
