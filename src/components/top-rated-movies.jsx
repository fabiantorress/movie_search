import * as React from "react";
import CardMovie from "./card-movie";
import CardMovieContainer from "./card-movie-container";

function TopRatedMovies({ topRatedMovies }) {
  return (
    <CardMovieContainer>
      {topRatedMovies.slice(0, 10).map((topMovie) => (
        <CardMovie movie={topMovie} />
      ))}
    </CardMovieContainer>
  );
}

export default TopRatedMovies;
