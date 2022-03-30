import React, { useState } from "react";
import "./App.css";

import Movie from "./Movie";
import { useWatchedMovies, useAllMovies } from "./hooks";

const App = (props) => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [comment, setComment] = useState("");
  const [watchedMovies, setWatchedMovies] = useWatchedMovies();
  const [allMovies, setAllMovies] = useAllMovies();

  const add = (title, image, comment) => {
    setAllMovies([...allMovies, { title, image, comment }]);
  };

  const addWatchedMovie = (newMovie) => {
    setWatchedMovies([...watchedMovies, newMovie]);
  };

  const removeWatchedMovie = (title) => {
    const updatedMovieList = watchedMovies.filter(
      (movie) => movie.title !== title
    );
    console.log(updatedMovieList);
    setWatchedMovies(updatedMovieList);
  };

  return (
    <div className="App">
      <h1 className="header">Codest Movies!</h1>
      <div className="add-container">
        <h1>Add movie!</h1>
        <b>
          TITLE:
          <br />
          <input type="text" onChange={(e) => setTitle(e.target.value)} />
        </b>
        <br />
        <b>
          IMAGE URL:
          <br />
          <input type="text" onChange={(e) => setImage(e.target.value)} />
        </b>
        <br />
        <b>
          COMMENT:
          <br />
          <input type="text" onChange={(e) => setComment(e.target.value)} />
        </b>
        <br />
        <input
          type="button"
          onClick={() => add(title, image, comment)}
          value="ADD MOVIE"
        />
      </div>
      <div className="watchlist-container">
        <h1>Watchlist:</h1>
        {allMovies.map((movie) => (
          <Movie
            key={movie.title}
            movie={movie}
            onClick={() => addWatchedMovie(movie)}
          />
        ))}
      </div>
      <div className="watched-container">
        <h1>Already watched:</h1>
        {watchedMovies.map((movie) => (
          <Movie
            key={movie.title}
            movie={movie}
            onClick={() => removeWatchedMovie(movie.title)}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
