export const getWatchedMovies = () => {
  const movies = localStorage.getItem("movies-watched");

  if (!movies) {
    return [];
  }

  return JSON.parse(movies);
};

export const getAllMovies = () => {
  const movies = localStorage.getItem("movies-all");

  if (!movies) {
    return [
      {
        title: "The Avengers",
        image:
          "http://d21lz9b0v8r1zn.cloudfront.net/wp-content/uploads//2012/03/detail.jpg",
        comment: "New York blows up in this!",
      },
      {
        title: "Dark City",
        image: "https://i.chzbgr.com/full/5569379584/hA96709E0/",
        comment: "This looks mysterious. Cool!",
      },
      {
        title: "Hot Tub Time Machine",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG7vNmphIcVhEcybvSvMgbTkV6EE2twHBNanKvgDx3ZS7Ivn6Dtg",
        comment: "Someone said this was fun. Maybe!",
      },
    ];
  }

  return JSON.parse(movies);
};

export const add = (title, description, image) => {
  const movies = getAllMovies();
  movies.push({ title, description, image });

  localStorage.setItem("movies-all", JSON.stringify(movies));
};

export const addWatchedMovie = (title, description, image) => {
  const movies = getWatchedMovies();
  movies.push({ title, description, image });

  localStorage.setItem("movies-watched", JSON.stringify(movies));
};

export const removeWatchedMovie = (title) => {
  const movies = getWatchedMovies();

  const updatedMovieList = movies.filter((movie) => movie.title === title);

  localStorage.setItem("movies-watched", JSON.stringify(updatedMovieList));
};
