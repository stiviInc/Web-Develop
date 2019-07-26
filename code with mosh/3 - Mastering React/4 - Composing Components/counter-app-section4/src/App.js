import React, { Component } from "react";
import "./App.css";
import Counters from "./components/counters";
import NavBar from "./components/navbar";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 4 },
      { id: 3, value: 0 },
      { id: 4, value: 2 }
    ]
  };

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

  //Handle DecrementCounter method
  handleDecrementCounter = counter => {
    const counters = this.state.counters;
    const index = counters.indexOf(counter);
    counters[index].value -= 1;
    this.setState({ counters });
  };

  //Handle delete counter method
  handleDeleteCounter = counterID => {
    this.setState({
      counters: this.state.counters.filter(counter => counter.id !== counterID)
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
        {/* send the total of counter with a value greather than 0.... */}
        <main className="container">
          <Counters
            counters={this.state.counters} //Sending the object counters from the state...
            onResetCounters={this.handleResetCounters} //Sending the reference for access the handleReset
            onIncrementCounter={this.handleIncrementCounter} //Sending the reference for access the handleIncrement
            onDeleteCounter={this.handleDeleteCounter} //Sending the reference for access the handleDelete
            onDecrementCounter={this.handleDecrementCounter} //Sending the referece for acces the handleDecrement
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
