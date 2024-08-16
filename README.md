
Step-by-Step Project: Building a React Movie Search App

Prerequisites
Before we start, make sure you have the following prerequisites:
1.	Node.js and npm installed on your machine.
2.	Basic knowledge of React.js and JavaScript.
Now, let’s get started!
Step 1: Set Up a New React Project
To begin, open your terminal and run the following command to create a new React project:
npx create-react-app movie-search-app
 
This command will create a new directory named movie-search-app with the basic files and folder structure needed for our React app.
Step 2: Install Dependencies
Navigate into the project directory by running:
cd movie-search-app
 
Next, install Axios, a library that will help us fetch data from the OMDb API, by running the following command:
npm install axios
 
Once Axios is installed, we can move on to the next step.
Step 3: Create the MovieSearch Component
Inside the src folder, create a new file called MovieSearch.js. Open the file and input the following code:
import React, { useState, useEffect } from "react";
import axios from "axios";
const MovieSearch = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get(
        `http://www.omdbapi.com/?apikey=YOUR_API_KEY&s=${searchTerm}`
      );
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
        onChange={handleSearch}
      />
      {movies && movies.map((movie) => (
          <div key={movie.imdbID}>
            <h2>{movie.Title}</h2>
            <p>Genre: {movie.Type}</p>
            <p>Release Year: {movie.Year}</p>
            <p>Poster: <img src={movie.Poster} alt={movie.Title} /></p>
          </div>
        ))}
    </div>
  );
};
export default MovieSearch;

In this code, we imported React, useState, and useEffect from the react package, as well as Axios for making API requests.
Inside the MovieSearch component, we defined three state variables: movies, searchTerm, and searchResults. The movies state will store the fetched movie data, while searchTerm will hold the user’s search input, and searchResults will contain the filtered movie data.
We used the useEffect hook to fetch the movies from the OMDb API whenever the searchTerm state changes. The API call is made using the Axios get method, with the API key and search term included in the URL.
The handleSearch function updates the searchTerm state whenever the input field value changes.
Finally, rendered the search input field and mapped over the movies array to display relevant movie details, such as title, genre, release year, and poster.
Remember to replace YOUR_API_KEY in the API URL with your actual OMDb API key.
Step 4: Implement the MovieSearch Component in App.js
Now, open src/App.js and write the following:
import React from "react";
import MovieSearch from "./MovieSearch";
const App = () => {
  return (
    <div>
      <h1>React Movie Search App</h1>
      <MovieSearch />
    </div>
  );
};
export default App;

In this code, we imported the MovieSearch component and rendered it inside the App component. Additionally, we included a heading to indicate the name of our movie search app.
Step 5: Start the Development Server
Now it’s time to run our movie search app! In the terminal, make sure you are inside the movie-search-app directory and run the following command:
npm start
 
The development server will start, and you should see your app in your browser at http://localhost:3000.
 
Step 6: Test the Movie Search App
Open the app in your browser, and you should see the movie search input field. Try entering a movie title, genre, or release year and observing the results. The app will fetch movie data from the OMDb API and display the search results dynamically.
