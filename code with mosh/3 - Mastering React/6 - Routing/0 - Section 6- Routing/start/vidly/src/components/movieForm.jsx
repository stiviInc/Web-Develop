import React from "react";

const MovieForm = ({ match, history }) => {
  return (
    <React.Fragment>
      <h2>Movie Form {match.params.id} </h2>;
      <button
        className="btn btn-primary"
        onClick={() => history.push("/movies")} //Save the actual URL in browser history and redirect the page to /movies
      >
        Save
      </button>
    </React.Fragment>
  );
};

export default MovieForm;
