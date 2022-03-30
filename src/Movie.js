import React from "react";

const Movie = ({ movie, onClick }) => {
  return (
    <div>
      <div>
        <img src={movie.image} height="100px" />
      </div>
      <span>
        <a className="movie-watched" onClick={onClick}>
          {movie.title}
        </a>
      </span>
      <br />
      <span>{movie.comment}</span>
      <br />
      <br />
    </div>
  );
};

export default Movie;
