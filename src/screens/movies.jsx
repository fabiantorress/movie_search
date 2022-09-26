import * as React from "react";
import { Text } from "@chakra-ui/react";
import * as axios from "axios";
import MovieList from "../components/movie-list";
import useAsync from "../utils/hooks";
import TopRatedMovies from "../components/top-rated-movies";

const API_KEY = "43e78140f686abd91b3bb952141d2651";
const BASE_URL = "https://api.themoviedb.org/3";

function Movies({ query, rating }) {
  const [movies, setMovies] = React.useState([]);
  const [topRatedMovies, setTopRatedMovies] = React.useState([]);
  const [filteredMovies, setFilteredMovies] = React.useState(movies);
  const { setStatus, isLoadind, isResolved, isRejected } = useAsync();

  React.useEffect(() => {
    async function getTrendingMovies() {
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
    getTrendingMovies();
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
  }, [query, setStatus]);

  React.useEffect(() => {
    async function getTopRatedMovies() {
      setStatus("loading");
      await axios
        .get(`${BASE_URL}/movie/top_rated`, {
          params: { api_key: API_KEY },
        })
        .then((response) => {
          setTopRatedMovies(response.data.results);
          console.log(response.data.results);
        })
        .catch((error) => console.log(error.message));
    }
    getTopRatedMovies();
  }, [setStatus]);

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
      <Text
        color="white"
        fontFamily="fantasy"
        fontSize="30px"
        marginLeft="4%"
        marginBottom="10px"
      >
        Top Rated
      </Text>
      <TopRatedMovies topRatedMovies={topRatedMovies} />
    </>
  );
}
export default Movies;
