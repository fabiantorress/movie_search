import "./App.css";
import * as React from "react";
import { Box, Text } from "@chakra-ui/react";
import Header from "./components/header/header";
import SearchBox from "./components/search-box/search-box";
import * as axios from "axios";
import MovieList from "./components/movie-list/movie-list";
import Rating from "./components/rating";
import FavouriteMovieList from "./components/favourite-movie-list";
import { useFavouriteMovie } from "./components/context/favourite-movie.context";

const API_KEY = "43e78140f686abd91b3bb952141d2651";
const BASE_URL = "https://api.themoviedb.org/3";

function App() {
  const [movies, setMovies] = React.useState([]);
  const [query, setQuery] = React.useState("");
  const [filteredMovies, setFilteredMovies] = React.useState(movies);
  const [status, setStatus] = React.useState("loading");

  const [rating, setRating] = React.useState(0);

  const isLoading = status === "loading";
  const isResolved = status === "resolved";
  const isRejected = status === "rejected";

  const { favouriteMovies } = useFavouriteMovie();

  React.useEffect(() => {
    async function getMovies() {
      setStatus("loading");
      await axios
        .get(`${BASE_URL}/discover/movie`, {
          params: { api_key: API_KEY },
        })
        .then((response) => {
          setMovies(response.data.results);
          setStatus("resolved");
        })
        .catch((error) => console.log(error.message));
    }
    getMovies();
  }, []);

  React.useEffect(() => {
    async function getFilteredMovies() {
      if (query) {
        setStatus("loading");
        await axios
          .get(`${BASE_URL}/search/movie`, {
            params: {
              api_key: API_KEY,
              query: query,
            },
          })
          .then((response) => {
            setFilteredMovies(response.data.results);
            setStatus("resolved");
          })
          .catch((error) => {
            console.log(error.message);
            setStatus("rejected");
          });
      }
    }
    getFilteredMovies();
  }, [query]);

  function handlerChange(event) {
    setTimeout(() => {
      setQuery(event.target.value);
    }, 2000);
  }

  return (
    <Box display="flex" flexDirection="row">
      <Box width="20%" height="100vh" backgroundColor="gray.900" />
      <Box
        width="60%"
        height="100vh"
        bg="black"
        display="flex"
        flexDirection="column"
      >
        <Header />
        <Text
          color="white"
          fontFamily="fantasy"
          fontSize="30px"
          marginLeft="4%"
          marginBottom="10px"
        >
          Trending Movies
        </Text>
        <MovieList movies={query ? filteredMovies : movies} rating={rating} />
        {favouriteMovies.length !== 0 ? (
          <Text
            color="white"
            fontFamily="fantasy"
            fontSize="30px"
            marginLeft="4%"
            marginBottom="10px"
          >
            Bookmarked
          </Text>
        ) : null}
        <FavouriteMovieList />
      </Box>
      <Box width="20%" height="100vh" backgroundColor="gray.900">
        <SearchBox handlerChange={handlerChange} />
        <Rating rating={rating} setRating={setRating} />
      </Box>
    </Box>
  );
}
export default App;
