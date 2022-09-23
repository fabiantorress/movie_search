import * as React from "react";
import { Box } from "@chakra-ui/react";
import Header from "./components/header";
import SearchBox from "./components/search-box";
import Rating from "./components/rating";
import MenuBar from "./components/menu-bar";
import { Routes, Route, useParams, Link } from "react-router-dom";
import Home from "./screens/movies";
import useAsync from "./utils/hooks";

function AuthenticatedApp() {
  const [rating, setRating] = React.useState(0);
  const [query, setQuery] = React.useState("");
  const {setStatus} = useAsync()

  function AppRoutes() {
    return (
      <Routes>
        <Route path="/" element={<Home query={query} rating={rating} />} />
      </Routes>
    );
  }

  function handlerChange(event) {
    setStatus("loading")
    setTimeout(() => {
      setQuery(event.target.value);
    }, 2000);
  }

  return (
    <Box display="flex" flexDirection="row">
      <Box width="15%" height="container.xl" backgroundColor="gray.900">
        <MenuBar />
      </Box>
      <Box
        width="70%"
        height="container.xl"
        bg="black"
        display="flex"
        flexDirection="column"
      >
        <Header />
        <main width="100%">
          <AppRoutes />
        </main>
      </Box>
      <Box width="15%" height="container.xl" backgroundColor="gray.900">
        <SearchBox handlerChange={handlerChange} />
        <Rating rating={rating} setRating={setRating} />
      </Box>
    </Box>
  );
}

export default AuthenticatedApp;
