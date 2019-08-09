import React from "react";
import { Route, Link } from "react-router-dom";
import Search from "./search";
import Maintenance from "./maintenance";

const AdminSection = props => {
  return (
    <React.Fragment>
      <h4>Welcome admin: {props.adminName}</h4>

      <ul>
        <li>
          <Link to="/admin/search">Search</Link>
        </li>
        <li>
          <Link to="/admin/maintenance">Maintanance</Link>
        </li>
      </ul>

      {/*Nested Routing!*/}
      <Route path="/admin/search" component={Search} />
      <Route path="/admin/maintenance" component={Maintenance} />
    </React.Fragment>
  );
};

export default AdminSection;
