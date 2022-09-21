import * as React from "react";
import { Box } from "@chakra-ui/react";

const CardMovieContainer = ({ children }) => {
  return (
    <Box
      height="350px"
      marginBottom="40px"
      display="flex"
      flex="none"
      scrollSnapType="x mandatory"
      overflowX="scroll"
      overflowY="hidden"
      css={{
        "&::-webkit-scrollbar": {
          width: "0.5px",
          height: "15px"
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
      {children}
    </Box>
  );
};

export default CardMovieContainer;
