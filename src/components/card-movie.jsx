import * as React from "react";
import { Box, IconButton } from "@chakra-ui/react";
import styled from "@emotion/styled/macro";
import { GrAdd } from "react-icons/gr";
import { useFavouriteMovie } from "./context/favourite-movie.context";
import { DeleteIcon } from "@chakra-ui/icons";
import { formatDate } from "../utils/misc";

const TitleText = styled.h1({
  justifyContent: "left",
  color: "white",
  fontSize: "20px",
  marginTop: "190px",
  marginLeft: "20px",
  lineHeight: "20px",
  fontWeight: "bold",
  mixBlendMode: "difference"
});

const DateText = styled.h1({
  justifyContent: "left",
  color: "white",
  fontSize: "15px",
  marginTop: "0px",
  marginLeft: "20px",
  fontWeight: "bold",
  mixBlendMode: "difference"
});

function CardMovie({ movie, favouriteMovie = false } = {}) {
  const { addFavouriteMovieToList, removeFavouriteMovieFromList } =
    useFavouriteMovie();
  return (
    <Box
      display="inline-block"
      flexShrink="0"
      backgroundImage={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      backgroundPosition="center"
      height="300px"
      width="300px"
      marginRight="40px"
      scrollSnapAlign="start"
      cursor="pointer"
      borderRadius="20px"
      key={movie.id}
      opacity="1"
    >
      <Box display="flex" flexDirection="column" height="300px">
        <TitleText>{movie.title}</TitleText>
        <DateText>
          {movie.release_date ? formatDate(new Date(movie.release_date)) : null}
        </DateText>
        {favouriteMovie ? (
          <IconButton
            colorScheme="cyan"
            aria-label="Add to favourite list"
            icon={<DeleteIcon />}
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
              removeFavouriteMovieFromList(movie);
            }}
            title="Delete from list"
          />
        ) : (
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
            }}
            title="Add to list"
          />
        )}
      </Box>
    </Box>
  );
}

export default CardMovie;
