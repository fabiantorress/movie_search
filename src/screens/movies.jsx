import * as React from "react";
import { Text, Box } from "@chakra-ui/react";
import * as axios from "axios";
import MovieList from "../components/movie-list";
import TopRatedMovies from "../components/top-rated-movies";
import { Spinner } from "@chakra-ui/react";

const API_KEY = "43e78140f686abd91b3bb952141d2651";
const BASE_URL = "https://api.themoviedb.org/3";

function Movies({ query, rating }) {
  const [movies, setMovies] = React.useState([]);
  const [topRatedMovies, setTopRatedMovies] = React.useState([]);
  const [filteredMovies, setFilteredMovies] = React.useState(movies);

  const [status, setStatus] = React.useState("loading");
  const [error, setError] = React.useState();

  const isLoading = status === "loading";
  const isResolved = status === "resolved";
  const isRejected = status === "rejected";

  React.useEffect(() => {
    setStatus("loading");
    async function getTrendingMovies() {
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
            setStatus("resolved");
            setFilteredMovies(response.data.results);
          })
          .catch((error) => {
            setStatus("rejected");
            console.log(error.message);
            setError(error)
          });
      }
    }
    getFilteredMovies();
  }, [query]);

  React.useEffect(() => {
    async function getTopRatedMovies() {
      setStatus("loading");
      await axios
        .get(`${BASE_URL}/movie/top_rated`, {
          params: { api_key: API_KEY },
        })
        .then((response) => {
          setStatus("resolved");
          setTopRatedMovies(response.data.results);
        })
        .catch((error) => console.log(error.message));
    }
    getTopRatedMovies();
  }, [setStatus]);

  console.log(status);

  return (
    <>
      {isLoading ? (
        <Box
          width="100%"
          height="100vh"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Spinner
            size="lg"
            thickness="4px"
            speed="0.8s"
            emptyColor="gray.200"
            color="blue.500"
          />
        </Box>
      ) : (
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

          {query && isLoading ? (
            <Spinner
              size="lg"
              thickness="4px"
              speed="0.8s"
              emptyColor="gray.200"
              color="blue.500"
            />
          ) : (
            <MovieList
              movies={query ? filteredMovies : movies}
              rating={rating}
            />
          )}

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
      )}
    </>
  );
}
export default Movies;
