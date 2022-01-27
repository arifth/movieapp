import Movie from "./Movie.js";
import React, { useEffect, useState } from "react";
import API_FEATURED from ./Api.js
const App = () => {
  //disini kita akan melakukan fetch api data dari API TMDB org lalu return sbg json dan di console log
  const [movie, setMovie] = useState([]);
  
  const IMG_API = null;
  const SEARCH_API = null;

  useEffect(() => {
    fetch(FEATURED_API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovie(data.results);
      });
  }, []);

  return (
    <div>
      {movie.map((movies) => (
        <Movie key={movies.id} data={movies} />
      ))}
    </div>
  );
};

export default App;
