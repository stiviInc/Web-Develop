import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import NavBar from "./components/navbar";
import Products from "./components/products";
import Posts from "./components/posts";
import Home from "./components/home";
import Dashboard from "./components/admin/dashboard";
import ProductDetails from "./components/productDetails";
import NotFound from "./components/notFound";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="content">
          <Switch>
            {/* Defining a parameter in the path attribute */}
            <Route path="/products/:id" component={ProductDetails} />
            {/* Sending extra props to the products component.... */}
            <Route
              path="/products"
              render={props => <Products myProp="xd" myProp2="df" {...props} />}
            />
            {/* Adding optional parameters */}
            <Route path="/posts/:year?/:month?" component={Posts} />
            {/* Redirect from the /configs to /admin*/}
            <Redirect from="/configs" to="admin" />
            <Route path="/admin" component={Dashboard} />
            {/* Add the corresponding Route component for display the not found component!*/}
            <Route path="/not-found" component={NotFound} />
            <Route path="/" exact component={Home} />
            {/* Redirect to not-found component if the given url doesnt match with any Route component*/}
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
