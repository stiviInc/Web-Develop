import React, { Component } from "react";

import Counters from "./components/counters";
import NavBar from "./components/navbar";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 3 },
      { id: 2, value: 0 },
      { id: 3, value: 7 },
      { id: 4, value: 0 }
    ]
  };

  //handle events...

  handleReset = () => {
    const counters = [...this.state.counters]; //Make a copy of the counters array!
    counters.map(counter => (counter.value = 0)); //reset the value of each counter of the new array!
    this.setState({ counters }); //Update the state of the counters array
  };

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

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={
            this.state.counters.filter(counter => counter.value > 0).length
          }
        />

        <main className="container">
          <Counters
            counters={this.state.counters}
            onResetCounter={this.handleReset}
            onIncrementCounter={this.handleIncrementCounter}
            onDeleteCounter={this.handleDeleteCounter}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
