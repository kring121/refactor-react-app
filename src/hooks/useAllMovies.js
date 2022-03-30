import { useState, useEffect } from "react";

export const useAllMovies = () => {
  const [allMovies, setAllMovies] = useState([]);

  const getAllMovies = () => {
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

  useEffect(() => {
    setAllMovies(getAllMovies());
  }, []);

  // everytime all movies are updated, we handle local storage updates
  useEffect(() => {
    localStorage.setItem("movies-all", JSON.stringify(allMovies));
  }, [allMovies]);

  return [allMovies, setAllMovies];
};
