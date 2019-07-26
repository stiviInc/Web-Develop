import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const {
      onResetCounters,
      counters,
      onDeleteCounter,
      onIncrementCounter,
      onDecrementCounter
    } = this.props; //Destructuring the props object!

    return (
      <React.Fragment>
        <button
          style={{ marginLeft: "40%", marginTop: 50 }}
          className="btn btn-primary btn-lg"
          onClick={onResetCounters} //We use the onClick method because its a button, and we send the reference of the method handleResetCounters by its onResetCounters raising event....
        >
          Reset Counters
        </button>
        {counters.map(counter => {
          return (
            <Counter
              key={counter.id}
              counter={counter} //This parameter contains all properties from a counter object!
              onDeleteCounter={onDeleteCounter} //Sending the reference to the handle  delete event
              onIncrementCounter={onIncrementCounter} //Sending reference to the handle increment event
              onDecrementCounter={onDecrementCounter} //Sending the reference to the handle decrement event

              //nameOfPropertyWillBeSendInProps = {methodReference}
            />
          );
        })}
      </React.Fragment>
    );
  }
}

export default Counters;
