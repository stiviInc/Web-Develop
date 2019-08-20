import React from "react";
import Input from "./common/input";
import FormValidations from "./common/formValidations";
import Joi from "joi-browser";

class LoginForm extends FormValidations {
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

  doSubmit = () => {
    console.log("Default submit behavior has been stopped!");
  };

  render() {
    const { data, errors } = this.state;
    return (
      <form onSubmit={this.handleSubmit} style={{ marginTop: 50 }}>
        <Input
          name="username"
          value={data.username}
          label="Username"
          onChange={this.handleChange}
          errors={errors.username}
        />
        <Input
          name="password"
          value={data.password}
          label="Password"
          onChange={this.handleChange}
          errors={errors.password}
        />
        <button disabled={this.validate()} className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

export default LoginForm;
