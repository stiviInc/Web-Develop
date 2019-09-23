import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";

import { registerUser } from "../services/userService";
import auth from "../services/authService";

class RegisterForm extends Form {
  state = {
    data: { username: "", password: "", name: "" },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .email()
      .label("Username"),
    password: Joi.string()
      .required()
      .min(5)
      .label("Password"),
    name: Joi.string()
      .required()
      .label("Name")
  };

  doSubmit = async () => {
    // Call the server
    try {
      const response = await registerUser(this.state.data);
      auth.loginWithJWT(response.headers["x-auth-token"]);
      //Redirect the user to the home page! (NO Reload)
      //this.props.history.push("/");
      //Redirect the user to the home page doing a full reload of the app
      window.location = "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        //Remember, a 400 code it means in the client-side something was done wrong, in this case, the user is trying to register an user that is already in the database
        //it means the user already exist in the database
        const errors = { ...this.state.errors };
        //Add the error message that is located at ex.response.data to the errors object!
        errors.username = ex.response.data;
        //Update the state in order to display the error in its corresponding place!
        this.setState({ errors });
      }
    }
  };

  render() {
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("name", "Name")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
