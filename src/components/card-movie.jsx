import * as React from "react";
import { Box, IconButton } from "@chakra-ui/react";
import styled from "@emotion/styled/macro";
import { GrAdd } from "react-icons/gr";
import { useFavouriteMovie } from "./context/favourite-movie.context";

const TitleText = styled.h1({
  justifyContent: "left",
  color: "white",
  fontSize: "20px",
  marginTop: "180px",
  marginLeft: "20px",
  lineHeight: "30px",
  fontWeight: "bold",
});

const DateText = styled.h1({
  justifyContent: "left",
  color: "white",
  fontSize: "20px",
  marginTop: "0px",
  marginLeft: "20px",
  fontWeight: "bold",
});

function CardMovie({ movie }) {
  const { addFavouriteMovieToList, favouriteMovies } = useFavouriteMovie();
  return (
    <Box
      display="flex"
      flexShrink="0"
      backgroundImage={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      backgroundPosition="center"
      height="300px"
      width="300px"
      marginLeft="40px"
      scrollSnapAlign="start"
      cursor="pointer"
      borderRadius="20px"
      scrollBehavior="unset"
      key={movie.id}
    >
      <Box display="flex" flexDirection="column" height="300px">
        <TitleText>{movie.title}</TitleText>
        <DateText>{movie.release_date}</DateText>
        <IconButton
          colorScheme="cyan"
          aria-label="Add to favourite list"
          icon={<GrAdd />}
          height="40px"
          width="20px"
          borderRadius="30px"
          padding="0"
          lineHeight="1"
          display="flex"
          alignItems="center"
          justifyContent="center"
          marginLeft="240px"
          cursor="pointer"
          _hover={{ backgroundColor: "blue" }}
          onClick={() => {
            addFavouriteMovieToList(movie);
            console.log(favouriteMovies);
          }}
        />
      </Box>
    </Box>
  );
}

export default CardMovie;
