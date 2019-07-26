import React, { Component } from "react";

class Counter extends Component {
  styles = {
    display: "inline-block",
    width: "20%",
    marginLeft: 20,
    padding: 15
  };

  componentDidUpdate(prevProps, prevState) {
    console.log("Prev Props", prevProps);
    console.log("Prev State", prevState);
    console.log("--------------------");
    //Example when an AJAX Request should be made
    if (prevProps.counter.value !== this.props.counter.value) {
      //Make the AJAX Request
    }
  }

  componentWillUnmount() {
    console.log("Counter removed");
  }

  render() {
    return (
      <div style={{ margin: "20px auto" }} className="counter-container">
        <h3 style={this.styles} className={this.getBadgeClasses()}>
          {this.showCounterMessage()}
        </h3>
        <button
          onClick={() => this.props.onIncrementCounter(this.props.counter)}
          className="btn btn-secondary btn-sm"
          style={this.styles}
        >
          +
        </button>

        <button
          disabled={this.props.counter.value === 0}
          onClick={() => this.props.onDecrementCounter(this.props.counter)}
          className="btn btn-secondary btn-sm"
          style={this.styles}
        >
          -
        </button>

        <button
          onClick={() => this.props.onDeleteCounter(this.props.counter.id)} // Raising the handle event by accessing its reference that was send from the compose component!
          //The reference of the handle event method that is receibed here its used to call it...thats why if the method receibe arguments, them have to be send it from here!....
          style={this.styles}
          className="btn btn-danger btn-sm"
        >
          X
        </button>
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
