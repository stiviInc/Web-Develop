import React, { Component } from "react";

class Counter extends Component {
  styles = {
    display: "inline-block",
    width: "20%",
    marginLeft: 20,
    padding: 15
  };

  render() {
    return (
      <div style={{ margin: "20px auto" }} className="counter-container">
        <div style={{ marginLeft: "25%" }}>
          <h3 style={this.styles} className={this.getBadgeClasses()}>
            {this.showCounterMessage()}
          </h3>
          <button
            onClick={() => this.props.onIncrementCounter(this.props.counter)}
            className="btn btn-secondary btn-sm"
            style={this.styles}
          >
            Increment
          </button>

          <button
            onClick={() => this.props.onDeleteCounter(this.props.counter.id)} // Raising the handle event by accessing its reference that was send from the compose component!
            //The reference of the handle event method that is receibed here its used to call it...thats why if the method receibe arguments, them have to be send it from here!....
            style={{ marginLeft: 10 }}
            className="btn btn-danger"
          >
            Delete
          </button>
        </div>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  showCounterMessage = () => {
    const { value } = this.props.counter;

    return value === 0 ? (
      <span>The counter is zero!</span>
    ) : (
      <span>{value}</span>
    );
  };

  hanldeIncrement = () => {
    this.setState({ value: this.props.counter.value + 1 });
  };
}

export default Counter;
