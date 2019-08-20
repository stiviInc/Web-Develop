import React from "react";

const Input = ({ label, errors, name, value, onChange, type }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        value={value} //single source of truth - doing this the element is now a Controlled Element...
        onChange={onChange} //Handling the changes on the element for update the state
        name={name} //name of the html element for identify it!
        type={type}
        //ref={this.usserName}
        id={name}
        placeholder={`Type ${label}`}
        className="form-control"
      />
      {errors && <div className="alert alert-danger">{errors}</div>}
    </div>
  );
};

export default Input;
