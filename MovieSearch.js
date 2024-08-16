
import React, { useState, useEffect } from "react";
import axios from "axios";

const MovieSearch = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get(`http://www.omdbapi.com/?apikey=fe2f6c44&s=${searchTerm}`);
      setMovies(response.data.Search);
    };

    fetchMovies();
  }, [searchTerm]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by title, genre, or release year"
        value={searchTerm}
        onChange={handleSearch} />

      {movies && movies.map((movie) => (
          <div key={movie.imdbID}>
            <h2> {movie.Title} </h2>
            <p> Genre: {movie.Type} </p>
            <p> Release Year: {movie.Year} </p>
            <p> Poster: <img src={movie.Poster} alt={movie.Title} /> </p>
          </div>
        ))}
    </div>
  );
};

export default MovieSearch;
