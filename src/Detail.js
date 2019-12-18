import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Query } from "react-apollo";

const Detail = ({
  match: {
    params: { movieId }
  }
}) => {
  console.log("====================================");
  console.log(movieId);
  console.log("====================================");
  return <div>Detail</div>;
};

export default withRouter(Detail);
