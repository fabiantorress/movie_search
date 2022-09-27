import * as React from "react";
import { StyledLink } from "../components/lib";
import { Box, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "@chakra-ui/react";

function NotFoundScreen() {
  return (
    <Box
      height="100%"
      display="grid"
      alignItems="center"
      justifyContent="center"
    >
      <Box>
        <Text color="white">
          Sorry... nothing here. <StyledLink to="/">Go Home</StyledLink>
        </Text>
      </Box>
    </Box>
  );
}

export default NotFoundScreen;
