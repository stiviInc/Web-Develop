import React from "react";

//Stateless Function

const NavBar = props => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand">
        {props.children} <span>{props.value}</span>
      </a>
    </nav>
  );
};

export default NavBar;
