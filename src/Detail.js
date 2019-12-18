import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import { Query } from "react-apollo";
import { MOVIE_DETAILS } from "./queries";

const Detail = ({
  match: {
    params: { movieId }
  }
}) => {
  console.log("====================================");
  console.log(movieId);
  console.log("====================================");
  return (
    <Query query={MOVIE_DETAILS} variables={{ movieId: parseInt(movieId) }}>
      {({ loading, error, data }) => {
        if (loading) return "loading";
        if (error) return "error";
        return (
          <Fragment>
            {data.movie.medium_cover_image}
            {data.movie.title}
            {data.movie.rating}
            {data.movie.description_intro}
            {data.movie.language}
            {data.movie.genres}
          </Fragment>
        );
      }}
    </Query>
  );
};

export default withRouter(Detail);
