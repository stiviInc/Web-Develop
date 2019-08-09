import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import PostalList from "./components/postalCodeList";

import NavBar from "./components/navbar";
import AdminSection from "./components/adminSection";
import About from "./components/about";
import NotFound from "./components/notFound";
import PostalCodeDetails from "./components/postalCodeDetails";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Switch>
            {/*Route components*/}
            <Route
              path="/postal-list/:code/:asentamiento"
              component={PostalCodeDetails}
            />
            <Route path="/postal-list" component={PostalList} />
            {/*Send admin's name as a parameter to AdminSection component! */}
            <Route
              path="/admin"
              render={props => (
                <AdminSection adminName="Stalin Macias" {...props} />
              )}
            />
            <Route path="/about" component={About} />
            <Route path="/not-found" component={NotFound} />

            {/*Redirect components*/}
            <Redirect from="/" exact to="/postal-list" />
            {/*if any of the above statements match with the url, redirect to not found page!*/}
            <Redirect to="not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
