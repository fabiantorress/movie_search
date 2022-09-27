import * as React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "@chakra-ui/react";

function StyledLink(props) {
  return (
    <Link
      as={RouterLink}
      color="white"
      css={{
        ":hover": {
          color: "#364495",
          textDecoration: "underline",
        },
      }}
      {...props}
    />
  );
}

export { StyledLink };
