import * as React from "react";
import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";

function SearchBox({handlerChange}) {
  return (
    <InputGroup
      display="flex"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
    >
      <InputLeftElement
        margin="6% 5% 5% 5%"
        pointerEvents="none"
        children={<Search2Icon height="20px" width="20px" color="white" />}
      />
      <Input
        height="50px"
        placeholder="Search movies"
        margin="5% 5% 5% 5%"
        borderRadius="30px"
        bg="black"
        color="white"
        borderColor="black"
        onChange={handlerChange}
      />
    </InputGroup>
  );
}

export default SearchBox;
