import * as React from "react";
import { Box } from "@chakra-ui/react";
import styled from "@emotion/styled/macro";

const Text = styled.p({
  color: "white",
  fontFamily: "Arial",
  fontSize: "md",
  marginLeft: "4%",
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
      <Text color="white" fontFamily="Arial" fontSize="md" marginLeft="5%">
        Movies
      </Text>
      <Text>Series</Text>
      <Text>TV Shows</Text>
    </Box>
  );
}

export default Header;
