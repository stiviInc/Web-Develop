import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./input";
import Select from "./select";

class Form extends Component {
  state = {
    data: {},
    errors: {}
  };

  validate = () => {
    const options = { abortEarly: false };
    //validate all the inputs, abortEarly is set to false in order to show all the errors... not only the first one!
    const result = Joi.validate(this.state.data, this.schema, options);
    const { error } = result;
    const errors = {};

    if (!error) return false; //if there is no error, return false!

    //if there is at leats 1 error, add it to the errors object!
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value }; //Extract the current input to validate!
    const schema = { [name]: this.schema[name] }; //Extract the schema rule that corresponds to the current input!
    const result = Joi.validate(obj, schema); //Make the validation with Joi!

    return result.error ? result.error.details[0].message : null;
  };

  handleSubmit = e => {
    e.preventDefault(); //prevent the default behavior when a form is submitted! ---> call the server and reload the page!

    const errors = this.validate(); //if validate() method returns false, it means at least one error was thrown!
    this.setState({ errors: errors });

    //if there is at least 1 error, you can't call the server until you solve it!
    if (errors !== false) return null;
    //if there is no errors, call doSubmit() method
    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };

    //Call the method for validate during each change!
    const errorMessage = this.validateProperty(input);

    //if errorMessage is truthy, add to errors object the errorMessage
    if (errorMessage) errors[input.name] = errorMessage;
    //otherwise, delete from errors object any prop related to the currently input!
    else delete errors[input.name];

    //update the state object with each change!
    const data = { ...this.state.data }; //Cloning the data property!
    data[input.name] = input.value;
    this.setState({ data, errors }); //update data and errors properties!
  };

  renderButton(label) {
    return (
      <button disabled={this.validate()} className="btn btn-primary">
        {label}
      </button>
    );
  }

  renderInput(name, label, type = "text") {
    const { data, errors } = this.state;
    return (
      <Input
        name={name}
        label={label}
        type={type}
        value={data[name]}
        errors={errors[name]}
        onChange={this.handleChange}
      />
    );
  }

  renderSelect(name, label, options) {
    const { data, errors } = this.state;
    return (
      <Select
        name={name}
        label={label}
        value={data[name]}
        options={options}
        onChange={this.handleChange}
        errors={errors[name]}
      />
    );
  }
}

export default Form;
