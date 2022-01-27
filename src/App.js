import Movie from "./Movie.js";
import React, { useEffect, useState } from "react";
import { api } from "./Api.js";
const App = () => {
  //disini kita akan melakukan fetch api data dari API TMDB org lalu return sbg json dan di console log
  const [movies, setMovies] = useState([]);

  const FEATURED_API = api.api;
  //console.log(api.api);

  useEffect(() => {
    fetch(FEATURED_API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);

  return (
    <div>
      {movies.map((movie) => (
        <Movie key={movie.id} {...movie}/>
      ))} 
    </div>
  );
};

export default App;
