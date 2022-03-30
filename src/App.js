import React from "react";
import "./App.css";

import {
  addWatchedMovie,
  add,
  removeWatchedMovie,
  getWatchedMovies,
  getAllMovies,
} from "./index.js";

// better to separate this into it's own component
const getMoviesComponents = (movies) => {
  var components = [];

  // .map() is a better approach to avoid having to create the components array and pushing to it
  movies.forEach(function (movie) {
    components.push(
      <div className="all">
        <div>
          <img src={movie.image} height="100px" />
        </div>
        <span>
          <a
            className="movie-watched"
            href="#"
            onClick={function () {
              addWatchedMovie(movie.title, movie.comment, movie.image);
            }}
          >
            {movie.title}
          </a>
        </span>
        <br />
        <span>{movie.comment}</span>
        <br />
        <br />
      </div>
    );
  });

  return components;
};

// can combine this with the one above with some logic
function getWatchedMoviesComponents(movies) {
  var components = [];

  // .map() is a better approach to avoid having to create the components array and pushing to it
  movies.forEach(function (movie) {
    components.push(
      movie && (
        <div className="watched">
          <div>
            <img src={movie.image} height="100px" />
          </div>
          <span>
            <a
              className="movie-watched"
              href="#"
              onClick={function () {
                removeWatchedMovie(movie.title);
              }}
            >
              {movie.title}
            </a>
          </span>
          <br />
          <span>{movie.comment}</span>
          <br />
          <br />
        </div>
      )
    );
  });

  return components;
}

function App(props) {
  return (
    <div className="App">
      <h1>Codest Movies!</h1>
      <h1>Add movie!</h1>
      <b>
        TITLE:
        <br />
        <input
          type="text"
          onChange={function (e) {
            title = e.target.value;
          }}
        />
      </b>
      <br />
      <b>
        IMAGE URL:
        <br />
        <input
          type="text"
          onChange={function (e) {
            image = e.target.value;
          }}
        />
      </b>
      <br />
      <b>
        COMMENT:
        <br />
        <input
          type="text"
          onChange={function (e) {
            comment = e.target.value;
          }}
        />
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
      {/* would be cleaner to then use the components I spoke of above */}
      {getMoviesComponents(getAllMovies())}

      <h1>Already watched:</h1>
      {/* would be cleaner to then use the components I spoke of above */}
      {getWatchedMoviesComponents(getWatchedMovies())}
    </div>
  );
}

// put these values in our state
var title = "";
var image = "";
var comment = "";

export default App;
