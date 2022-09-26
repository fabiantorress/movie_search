import * as React from "react";
import CardMovie from "./card-movie";
import CardMovieContainer from "./card-movie-container";
import { useFavouriteMovie } from "./context/favourite-movie.context";
import { Text } from "@chakra-ui/react";

function FavouriteMovieList() {
  const { favouriteMovies } = useFavouriteMovie();

  if (favouriteMovies.length !== 0) {
    return (
      <>
        <Text
          color="white"
          fontFamily="fantasy"
          fontSize="30px"
          margin="30px 0px 10px 4%"
        >
          Bookmarked
        </Text>
        <CardMovieContainer>
          {favouriteMovies.map((movie) => (
            <CardMovie movie={movie} favouriteMovie={true} />
          ))}
        </CardMovieContainer>
      </>
    );
  }
}

export default FavouriteMovieList;
