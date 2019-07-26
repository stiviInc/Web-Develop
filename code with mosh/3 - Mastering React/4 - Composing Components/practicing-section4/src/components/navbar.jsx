import React, { Component } from "react";

// Stateless Functional Component

const NavBar = props => {
  return (
    <span>
      There are
      <span className="badge badge-pill badge-secondary">
        {props.totalCounters}
      </span>
      counters with a value greather than 0
    </span>
  );
};

export default NavBar;
