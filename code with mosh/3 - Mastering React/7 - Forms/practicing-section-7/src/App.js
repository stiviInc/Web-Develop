import React from "react";
import "./App.css";

import { Route, Switch, Redirect } from "react-router-dom";
import Login from "./components/login";
import NavBar from "./components/common/navbar";
import Main from "./components/main";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/main" component={Main} />
          <Redirect from="/" exact to="/login" />
          <Redirect to="not-fount" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
