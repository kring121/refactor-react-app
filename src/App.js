import React, { useEffect, useState } from "react";
import "./App.css";

import {
  addWatchedMovie,
  add,
  removeWatchedMovie,
  getWatchedMovies,
  getAllMovies,
} from "./actions.js";
import Movie from "./Movie";

const App = (props) => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [comment, setComment] = useState("");
  const [allMovies, setAllMovies] = useState([]);
  const [watchedMovies, setWatchedMovies] = useState([]);

  useEffect(() => {
    setAllMovies(getAllMovies());
    setWatchedMovies(getWatchedMovies());
  }, []);

  return (
    <div className="App">
      <h1>Codest Movies!</h1>
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
        onClick={function (e) {
          add(title, image, comment);
        }}
        value="ADD MOVIE"
      />

      <h1>Watchlist:</h1>
      {allMovies.map((movie) => (
        <Movie
          movie={movie}
          movieType="all"
          onClick={() => addWatchedMovie(movie)}
        />
      ))}
      <h1>Already watched:</h1>
      {watchedMovies.map((movie) => (
        <Movie
          movie={movie}
          movieType="watched"
          onClick={() => removeWatchedMovie(movie.title)}
        />
      ))}
    </div>
  );
};

export default App;
