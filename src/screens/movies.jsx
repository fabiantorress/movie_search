import * as React from "react";
import { Text } from "@chakra-ui/react";
import * as axios from "axios";
import MovieList from "../components/movie-list";
import FavouriteMovieList from "../components/favourite-movie-list";
import { useFavouriteMovie } from "../components/context/favourite-movie.context";
import useAsync from "../utils/hooks";

const API_KEY = "43e78140f686abd91b3bb952141d2651";
const BASE_URL = "https://api.themoviedb.org/3";

function Home({ query, rating }) {
  const [movies, setMovies] = React.useState([]);
  const [filteredMovies, setFilteredMovies] = React.useState(movies);
  const { setStatus, isLoadind, isResolved, isRejected } = useAsync();

  const { favouriteMovies } = useFavouriteMovie();

  React.useEffect(() => {
    async function getMovies() {
      setStatus("loading");
      await axios
        .get(`${BASE_URL}/discover/movie`, {
          params: { api_key: API_KEY },
        })
        .then((response) => {
          setStatus("resolved");
          setMovies(response.data.results);
        })
        .catch((error) => {
          setStatus("rejected");
          console.log(error.message);
        });
    }
    getMovies();
  }, [setStatus]);

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

  return (
    <>
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
    </>
  );
}
export default Home;
