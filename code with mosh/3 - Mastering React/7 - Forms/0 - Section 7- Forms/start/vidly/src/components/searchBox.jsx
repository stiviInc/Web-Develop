import React, { Component } from "react";
import Form from "./common/form";

const SearchBox = props => {
  return (
    <input
      type="text"
      placeholder="Search movie"
      className="form-control my-3"
    />
  );
};

export default SearchBox;
