import React from "react";
import { NavLink, Link } from "react-router-dom";

//Stateless Function

const NavBar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light"
      style={{ marginBottom: 20 }}
    >
      <Link className="navbar-brand" to="/">
        Postals Code
      </Link>

      <div className="collapse navbar-collapse">
        <div className="navbar-nav">
          <NavLink className="nav-item nav-link" to="/postal-list">
            Postal Code List
          </NavLink>
          <NavLink className="nav-item nav-link" to="/admin">
            Admin Section
          </NavLink>
          <NavLink className="nav-item nav-link" to="/about">
            About
          </NavLink>
          <NavLink className="nav-item nav-link" to="/login">
            Login
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
