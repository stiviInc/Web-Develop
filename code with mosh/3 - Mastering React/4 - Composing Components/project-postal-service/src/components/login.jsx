import React, { Component } from "react";
import Form from "./common/form";
import Joi from "joi-browser";

class Login extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .min(1)
      .max(10)
      .required()
      .label("Password")
  };

  doSubmit = () => {
    //After every operation, goes to postal-list
    console.log(this.props.history.replace("/postal-list"));
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.renderInput("username", "Username")}
        {this.renderInput("password", "Pasword", "password")}
        {this.renderButton("Login")}
      </form>
    );
  }
}

export default Login;
