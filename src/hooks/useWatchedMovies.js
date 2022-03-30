import { useState, useEffect } from "react";

export const useWatchedMovies = () => {
  const [watchedMovies, setWatchedMovies] = useState([]);

  const getWatchedMovies = () => {
    const movies = localStorage.getItem("movies-watched");

    if (!movies) {
      return [];
    }

    return JSON.parse(movies);
  };

  useEffect(() => {
    setWatchedMovies(getWatchedMovies());
  }, []);

  // everytime watched movies are updated, we handle local storage updates
  useEffect(() => {
    localStorage.setItem("movies-watched", JSON.stringify(watchedMovies));
  }, [watchedMovies]);

  return [watchedMovies, setWatchedMovies];
};
