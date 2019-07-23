import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 3 },
      { id: 2, value: 0 },
      { id: 3, value: 7 },
      { id: 4, value: 0 }
    ]
  };

  render() {
    return (
      <React.Fragment>
        <h2>There are {this.state.counters.length} counters</h2>
        {/*This handle event is called as a function because is defined in this component, it doesnt need to be raising from the children component! */}
        <button className="btn btn-primary" onClick={() => this.handleReset()}>
          Reset Counters
        </button>
        {this.state.counters.map(counter => {
          return (
            <Counter
              key={counter.id}
              counter={counter} //is an object with all the attributes of a counter object!
              onDeleteCounter={this.handleDeleteCounter} //Is the reference to the handleDelete... for make the counter component rais the event!
              onIncrementCounter={this.handleIncrementCounter} //Is the reference to the handleIncrement... for make the counter component rais the event!
            />
          );
        })}
      </React.Fragment>
    );
  }

  handleReset() {
    const counters = [...this.state.counters]; //Make a copy of the counters array!
    counters.map(counter => (counter.value = 0)); //reset the value of each counter of the new array!
    this.setState({ counters }); //Update the state of the counters array
  }

  handleIncrementCounter = counter => {
    const counters = [...this.state.counters]; //Make a copy of the counters array!
    const index = counters.indexOf(counter); //Get the index of the counter that will be incremented!
    counters[index].value += 1; //Increment the value of the current counter

    this.setState({ counters }); //Update the state of counters with the modified counters array!
  };

  handleDeleteCounter = counterID => {
    this.setState({
      counters: this.state.counters.filter(counter => counter.id !== counterID) //For delete the counter with the ID receibed
    });
  };
}

export default Counters;
