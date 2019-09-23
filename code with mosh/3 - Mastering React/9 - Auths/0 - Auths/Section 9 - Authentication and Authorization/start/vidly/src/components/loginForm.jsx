import React from "react";
import { Redirect } from "react-router-dom";
import Joi from "joi-browser";
import Form from "./common/form";
import auth from "../services/authService";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password")
  };

  doSubmit = async () => {
    // Call the server
    try {
      const { data } = this.state;
      await auth.login(data.username, data.password); //Get the JSON Web Token that the server will return if the user's data it is correct
      //Redirect the user to the home page! (NO Reload)
      //this.props.history.push("/");

      //Redirect the user either to the home page or to the page where this login form was called doing a full reload of the app to save the token in the localStorage....
      const { state } = this.props.location;
      //if the state object its true, it means that this login form was called by a component that requires the user authentication, if not, it means this component was invoked directly by its url
      window.location = state ? state.from.pathname : "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        //Set the error that the server is returning in the error property of the state object!
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    if (auth.getCurrentUser()) return <Redirect to="/"></Redirect>;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
