import * as React from "react";
import { Box } from "@chakra-ui/react";
import Header from "./components/header";
import SearchBox from "./components/search-box";
import Rating from "./components/rating";
import MenuBar from "./components/menu-bar";
import { Routes, Route, useParams, Link } from "react-router-dom";
import Movies from "./screens/movies";
import { useAsync } from "./components/context/status.context.js";
import FavouriteMovieList from "./components/favourite-movie-list";

function AuthenticatedApp() {
  const [rating, setRating] = React.useState(0);
  const [query, setQuery] = React.useState("");

  function AppRoutes() {
    return (
      <Routes>
        <Route path="/" element={<Movies query={query} rating={rating} />} />
      </Routes>
    );
  }

  function handlerChange(event) {
    setTimeout(() => {
      setQuery(event.target.value);
    }, 2000);
  }

  return (
    <Box display="flex" flexDirection="row">
      <Box width="20%" height="container.xl" backgroundColor="gray.900">
        <MenuBar />
      </Box>
      <Box
        width="60%"
        height="container.xl"
        bg="black"
        display="flex"
        flexDirection="column"
      >
        <Header />
        <main width="100%"><AppRoutes /></main>
      </Box>
      <Box width="20%" height="container.xl" backgroundColor="gray.900">
        <SearchBox handlerChange={handlerChange} />
        <Rating rating={rating} setRating={setRating} />
        <FavouriteMovieList />
      </Box>
    </Box>
  );
}

export default AuthenticatedApp;
