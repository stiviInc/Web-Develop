import React, { Component } from "react";

//Stateless Function

const NavBar = props => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        {props.children} <span>{props.value}</span>
      </a>
    </nav>
  );
};

export default NavBar;
