import * as React from "react";
import { Box } from "@chakra-ui/react";
import styled from "@emotion/styled/macro";

const TextHeader = styled.p({
  color: "white",
  fontFamily: "Arial",
  fontSize: "md",
  marginLeft: "4%",
  cursor: "pointer"
});

function Header() {
  return (
    <Box
      display="flex"
      flexDirection="row"
      height="10%"
      justifyContent="left"
      alignItems="center"
    >
      <TextHeader color="white" fontFamily="Arial" fontSize="md" marginLeft="5%">
        Movies
      </TextHeader>
      <TextHeader>Series</TextHeader>
      <TextHeader>TV Shows</TextHeader>
    </Box>
  );
}

export default Header;
