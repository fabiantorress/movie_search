import * as React from "react";
import CardMovie from "./card-movie";
import CardMovieContainer from "./card-movie-container";
import { useFavouriteMovie } from "./context/favourite-movie.context";

function FavouriteMovieList() {
  const { favouriteMovies, removeFavouriteMovieFromList } = useFavouriteMovie();

  return (
    <CardMovieContainer>
      {favouriteMovies.map((movie) => (
        <CardMovie movie={movie} />
      ))}
    </CardMovieContainer>
  );
}

export default FavouriteMovieList;
