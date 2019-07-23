import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 4 },
      { id: 3, value: 0 },
      { id: 4, value: 2 }
    ]
  };
  render() {
    return (
      <React.Fragment>
        <button
          style={{ marginLeft: "40%", marginTop: 50 }}
          className="btn btn-primary btn-lg"
          onClick={() => this.handleResetCounters()} //This method is call as a function because the element is defined in this component!
        >
          Reset Counters
        </button>
        {this.state.counters.map(counter => {
          return (
            <Counter
              key={counter.id}
              counter={counter} //This parameter contains all properties from a counter object!
              onDeleteCounter={this.handleDeleteCounter} //Sending the reference to the handle  delete event
              onIncrementCounter={this.handleIncrementCounter} //Sending reference to the handle increment event
            />
          );
        })}
      </React.Fragment>
    );
  }

  //handleResetCounters method
  handleResetCounters = () => {
    const counters = [...this.state.counters]; //Making a copy of the counters
    counters.map(counter => (counter.value = 0)); //Reseting the value of each counter
    this.setState({ counters }); //Updating the state of the counters
  };

  //handleIncrementCounter method
  handleIncrementCounter = counter => {
    const counters = [...this.state.counters]; //Making a copy of the counters
    const index = counters.indexOf(counter); //Getting the index of the counter that will be incremented
    counters[index].value += 1; //Increment the value of the current counter
    this.setState({ counters }); //Update the value of the counters with the new array...
  };

  //Handle delete counter method
  handleDeleteCounter = counterID => {
    this.setState({
      counters: this.state.counters.filter(counter => counter.id !== counterID)
    });
  };
}

export default Counters;
