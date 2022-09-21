import * as React from "react";
import { Box } from "@chakra-ui/react";
import styled from "@emotion/styled/macro";

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

function MovieList({ movies }) {
  return (
    <Box
      height="350px"
      display="flex"
      flex="none"
      scrollSnapType="x mandatory"
      overflowX="scroll"
      overflowY="hidden"
      css={{
        "&::-webkit-scrollbar": {
          width: "0.5px",
        },
        "&::-webkit-scrollbar-track": {
          width: "6px",
          color: "white",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "grey",
          width: "10px",
          borderRadius: "24px",
        },
      }}
    >
      {movies
        ? movies.slice(0, 10).map((movie) => (
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
              <Box display="flex" flexDirection="column" height="350px">
                <TitleText>{movie.title}</TitleText>
                <DateText>{movie.release_date}</DateText>
              </Box>
            </Box>
          ))
        : null}
    </Box>
  );
}

export default MovieList;
