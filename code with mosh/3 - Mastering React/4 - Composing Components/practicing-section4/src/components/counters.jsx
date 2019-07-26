import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const {
      onResetCounter,
      counters,
      onDeleteCounter,
      onIncrementCounter
    } = this.props; //Destructuring props object!

    return (
      <React.Fragment>
        {/*This handle event is called as a function because is defined in this component, it doesnt need to be raising from the children component! */}
        <button
          style={{ marginTop: 25 }}
          className="btn btn-primary"
          onClick={onResetCounter}
        >
          Reset Counters
        </button>
        {counters.map(counter => {
          return (
            <Counter
              key={counter.id}
              counter={counter} //is an object with all the attributes of a counter object!
              onDeleteCounter={onDeleteCounter} //Is the reference to the handleDelete... for make the counter component rais the event!
              onIncrementCounter={onIncrementCounter} //Is the reference to the handleIncrement... for make the counter component rais the event!
            />
          );
        })}
      </React.Fragment>
    );
  }
}

export default Counters;
