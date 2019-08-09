import React from "react";
import queryString from "query-string";

const Posts = props => {
  const { year, month } = props.match.params; //Destructuring the match.params object!
  const resultQueryString = queryString.parse(props.location.search);
  console.log(resultQueryString);
  return (
    <div>
      <h1>Posts</h1>
      Year: {year} , Month: {month}
    </div>
  );
};

export default Posts;
