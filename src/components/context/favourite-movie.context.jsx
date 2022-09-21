import * as React from "react";

function addFavouriteMovie(movieToAdd, favouriteMoviesList) {
  const existingMovieInList = favouriteMoviesList.find(
    (element) => element.id === movieToAdd.id
  );
  if (existingMovieInList) {
    return favouriteMoviesList;
  }
  return [...favouriteMoviesList, movieToAdd];
}

function removeFavouriteMovie(movieToRemove, favouriteMoviesList) {
  const existingMovieInList = favouriteMoviesList.find(
    (element) => element.id === movieToRemove.id
  );
  if (existingMovieInList) {
    return favouriteMoviesList.filter(
      (element) => element.id !== movieToRemove.id
    );
  }
}

const FavouriteMovieContext = React.createContext();

function FavouriteMovieProvider({ children }) {
  const [favouriteMovies, setFavouriteMovie] = React.useState([]);

  const addFavouriteMovieToList = (movie) =>
    setFavouriteMovie(addFavouriteMovie(movie, favouriteMovies));

  const removeFavouriteMovieFromList = (movie) =>
    setFavouriteMovie(removeFavouriteMovie(movie, favouriteMovies));

  const value = {
    favouriteMovies,
    addFavouriteMovieToList,
    removeFavouriteMovieFromList,
  };

  return (
    <FavouriteMovieContext.Provider value={value}>
      {children}
    </FavouriteMovieContext.Provider>
  );
}

function useFavouriteMovie() {
  const context = React.useContext(FavouriteMovieContext);
  if (!context) {
    throw new Error(
      "Error, useCount must be used within a FavouriteMovieProvider"
    );
  }
  return context;
}

export { useFavouriteMovie, FavouriteMovieProvider };
