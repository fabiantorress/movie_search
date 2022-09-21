/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import * as React from "react";
import { FaStar } from "react-icons/fa";
import { Box, Icon, Text } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

function Rating({ rating, setRating }) {
  const stars = Array.from({ length: 5 }).map((x, i) => {
    const ratingValue = (i + 1) * 2;
    return (
      <>
        <Icon
          as={FaStar}
          width="30px"
          height="30px"
          margin="0 2px"
          cursor="pointer"
          css={{
            ":hover ~ svg": {
              color: "gray",
            },
          }}
          // https://stackoverflow.com/questions/1817792/is-there-a-previous-sibling-selector
          color={rating >= ratingValue ? "yellow" : "gray"}
          onClick={() => setRating(ratingValue)}
        />
      </>
    );
  });

  return (
    <Box display="flex" flexDirection="column">
      <Text color="white" fontFamily="Arial" marginLeft="10px">
        Search by Rating
      </Text>
      <Box display="flex" flexDirection="row" alignContent="center">
        <Box
          display="inline-flex"
          alignItems="center"
          flexDirection="row"
          marginLeft="10px"
          marginTop="10px"
          css={{
            ":hover svg": {
              color: "yellow",
            },
          }}
        >
          {stars}
        </Box>
        <DeleteIcon
          color="gray"
          width="28px"
          height="28px"
          position="relative"
          margin="10px 0px 0px 15px"
          cursor="pointer"
          onClick={() => setRating(0)}
        />
      </Box>
    </Box>
  );
}

export default Rating;
