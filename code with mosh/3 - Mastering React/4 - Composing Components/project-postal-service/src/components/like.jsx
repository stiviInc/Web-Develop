import React, { Component } from "react";

const Like = props => {
  let className = "fa fa-heart";
  if (!props.postalCode.like) className += "-o";
  return (
    <i
      className={className}
      aria-hidden="true"
      style={{ cursor: "pointer" }}
      onClick={() => props.onClick(props.postalCode)}
    />
  );
};

export default Like;
