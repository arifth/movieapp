import Movie from "./Movie.js";
import React, { useEffect, useState } from "react";
import { api } from "./Api.js";
const App = () => {
  //disini kita akan melakukan fetch api data dari API TMDB org lalu return sbg json dan di console log
  const [movies, setMovies] = useState([]);
  const [searchTerm, setsearchTerm] = useState("");

  const FEATURED_API = api.api;
  //console.log(api.api);
  const SEARCH_API =
    "https://api.themoviedb.org/3/search/movie?api_key=f8a88a605d021d7add571e3ac9dec9aa&language=en-US&page=1&include_adult=false&query=";

  useEffect(() => {
    fetch(FEATURED_API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
      fetch(SEARCH_API+searchTerm)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setMovies(data.results);
        });
  
  };

  const handleOnChange = (e) => {
    setsearchTerm(e.target.value);
  };

  return (
    <div className="movie-container">
      <header>
        <h3>Movie Database and search</h3>
        <form onSubmit={handleSubmit}>
          <input
            className="search"
            type="text"
            placeholder="Cari disini"
            value={searchTerm}
            onChange={handleOnChange}
          />
        </form>
      </header>

      {movies.map((movie) => (
        <Movie key={movie.id} {...movie} />
      ))}
    </div>
  );
};

export default App;
