import * as React from "react";
import { Text } from "@chakra-ui/react";
import CardMovie from "./card-movie";
import CardMovieContainer from "./card-movie-container";

function MovieList({ movies, rating }) {
  if (movies) {
    if (rating) {
      const filteredRatingMovies = movies
        .slice(0, 10)
        .filter(
          (movie) =>
            movie.vote_average <= rating && movie.vote_average > rating - 2
        );
      return filteredRatingMovies.length !== 0 ? (
        <CardMovieContainer>
          {filteredRatingMovies.map((movie) => (
            <CardMovie movie={movie} />
          ))}
        </CardMovieContainer>
      ) : (
        <Text
          fontSize="30px"
          color="red.300"
          fontFamily="Arial"
          marginStart="30%"
        >
          No book found. Try again!
        </Text>
      );
    } else {
      return (
        <CardMovieContainer>
          {movies.slice(0, 10).map((movie) => (
            <CardMovie movie={movie} />
          ))}
        </CardMovieContainer>
      );
    }
  }
}

export default MovieList;
