import React from "react";

const PostalCodeDetails = props => {
  const { code, asentamiento } = props.match.params;
  const { history } = props;

  return (
    <React.Fragment>
      <h3>Details of Postal Code: {code}</h3>
      <h4>Asentamiento: {asentamiento}</h4>

      <button
        className="btn btn-primary"
        //Save the actual url in broswer history and redirect to the given url
        onClick={() => history.push("/postal-list")}
      >
        Save
      </button>
    </React.Fragment>
  );
};

export default PostalCodeDetails;
