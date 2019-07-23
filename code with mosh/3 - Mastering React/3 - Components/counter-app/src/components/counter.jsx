import React, { Component } from "react";
//import Client from "./client";
//import Student from "./student";

class Counter extends Component {
  //Create a button that when its clicked increment the counter prop of state{}
  //Transform the method for an arrow function for avoid rebinding!
  //With each click the counter have to increment!....
  //Pass an argument to the method where is handled the increment!
  styles = {
    margin: "20px auto",
    display: "block",
    width: "50%",
    padding: 15
  };
  state = {
    count: 0
  };

  handleIncrementButton = product => {
    this.setState({ count: this.state.count + 1 });
    console.log(product);
  };

  render() {
    return (
      <React.Fragment>
        <h3 style={this.styles} className={this.getBadgeClasses()}>
          {this.showCounter()}
        </h3>
        <button
          style={this.styles}
          className="btn btn-primary"
          onClick={() => {
            this.handleIncrementButton({ id: 1, name: "Whey Protein" });
          }}
        >
          Increment!
        </button>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge badge-";
    classes += this.state.count === 0 ? "warning" : "secondary";
    return classes;
  }

  showCounter() {
    const { count } = this.state;
    return count === 0 ? <p>Zero</p> : <p>{count}</p>;
  }
  //--------------------------------------------------//
  //--------------------------------------------------//
  /*  3 - Your First React Component!
  // Component with one JSX Element
  render() {
    return <h1>Hello World!</h1>;
  }
  */
  //--------------------------------------------------//
  //--------------------------------------------------//
  /*  4 - Specifying Children
  //Component with various JSX Elements...
  render() {
    return (
      <React.Fragment>
        <h1>Element 1</h1>
        <button>Click me</button>
      </React.Fragment>
    );
  }
  */
  //--------------------------------------------------//
  //--------------------------------------------------//
  /*  5 - Embedding Expressions
  //Embedding JS expressions in JSX Code
  state = {
    count: 2
  };

  render() {
    return (
      <React.Fragment>
        <span>{this.countFormatter()}</span>
        <button>Increment</button>
      </React.Fragment>
    );
  }

  countFormatter() {
    const { count } = this.state;
    return count === 0 ? <h1>Zero</h1> : <h1>{count}</h1>;
  }
  */
  //--------------------------------------------------//
  //--------------------------------------------------//
  /*  6 - Setting Attributes
  // Defining class property to JSX Elements and adding Style property!
  state = {
    count: 0
  };

  render() {
    return (
      <React.Fragment>
        <span style={{ fontSize: 10 }} className="badge badge-primary m-2">
          {this.countFormatter()}
        </span>
        <button style={{ marginLeft: 20 }} className="btn btn-secondary">
          Increment
        </button>
      </React.Fragment>
    );
  }

  countFormatter() {
    const { count } = this.state;
    return count === 0 ? <h1>Zero</h1> : <h1>{count}</h1>;
  }
  */
  //--------------------------------------------------//
  //--------------------------------------------------//
  /*  7 - Rendering Classes Dynamically
  //Create a method for render dynamically the badge class of the span JSX Element!
  state = {
    count: 2
  };

  render() {
    return (
      <React.Fragment>
        <span style={{ width: 100 }} className={this.getBadgeClasses()}>
          {this.countFormatter()}
        </span>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  countFormatter() {
    const { count } = this.state;
    return count === 0 ? <h3>Zero</h3> : <h3>{count}</h3>;
  }
  */
  //--------------------------------------------------//
  //--------------------------------------------------//
  /*  8 - Rendering Lists
  //Create a list of client objects and render it!

  state = {
    clients: [
      new Client(1, "Stalin", 2500),
      new Client(2, "Andres", 0),
      new Client(3, "Humberto", 5000)
    ]
  };

  render() {
    return (
      <React.Fragment>
        <ul>
          {this.state.clients.map(client => (
            <li key={client._id}>
              {client.name} <span>have a debt of {client._credit}</span>
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
  */
  //--------------------------------------------------//
  //--------------------------------------------------//
  /*  9 - Conditional Rendering
  //if the value of the score property is less or equal than 70 show the next message : "See you in summer + the name of the student!"
  //show 2 messages with different appearance also depending the value of the score variable...
  state = {
    students: [
      new Student(1, "Stalin", 90),
      new Student(2, "Carlos", 70),
      new Student(3, "Andres", 85),
      new Student(4, "Jose", 60)
    ]
  };

  render() {
    return (
      <React.Fragment>
        <ul>
          {this.state.students.map(student => {
            return (
              <li
                key={student._idStudent}
                className={this.getBadgeClasses(student._score)}
                style={{ marginBottom: 15, width: 400, display: "block" }}
              >
                {this.getMessage(student)}
                <h6>{student._score <= 70 && "See you in summer"}</h6>
                <h6>{student._score > 70 && "Enjoy your vacations"}</h6>
              </li>
            );
          })}
        </ul>
      </React.Fragment>
    );
  }

  getBadgeClasses(score) {
    let classes = "badge badge-";
    classes += score <= 70 ? "danger" : "success";
    return classes;
  }

  getMessage(student) {
    return student._score <= 70 ? (
      <h4>{student.name} has failed the signature!</h4>
    ) : (
      <h4>{student.name} has approved the signature!</h4>
    );
  }

  */
  //--------------------------------------------------//
  //--------------------------------------------------//
  /*  10 - Handling Events && 11 - Binding Event Handlers
  //Create a button that when its clicked show in console "Button Clicked"....
  //Transform the method for an arrow function for avoid rebinding!
  handleIncrementButton = () => {
    console.log("The button has being clicked!", this);
  };
  render() {
    return (
      <button
        style={{ margin: 40 }}
        className="btn btn-primary"
        onClick={this.handleIncrementButton}
      >
        Increment!
      </button>
    );
  }
  */
  //--------------------------------------------------//
  //--------------------------------------------------//
  /*  12 - Updating the State && 14 - Passing Event Arguments



  */
}

export default Counter;
