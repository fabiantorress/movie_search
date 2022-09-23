/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import * as React from "react";
import { Box } from "@chakra-ui/react";
import { Link as RouterLink, useMatch } from "react-router-dom";

function NavLink(props) {
  const match = useMatch(props.to);
  return (
    <RouterLink
      css={[
        {
          color: "gray",
          fontFamily: "Arial",
          fontSize: "md",
          marginLeft: "4%",
          cursor: "pointer",
          ":hover": { color: "white" },
        },
        match
          ? {
              ":hover": {
                color: "orange",
              },
              color: "white",
            }
          : null,
      ]}
      {...props}
    />
  );
}

function Header() {
  return (
    <Box
      display="flex"
      flexDirection="row"
      height="10%"
      justifyContent="left"
      alignItems="center"
    >
      <NavLink to="/">Movies</NavLink>
      <NavLink to="">Series</NavLink>
      <NavLink to="">TV Shows</NavLink>
    </Box>
  );
}

export default Header;
