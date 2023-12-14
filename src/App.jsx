import "./App.css";
import Header from "./Components/Header/Header";
import MovieList from "./Components/MovieList/MovieList";
import MovieInfo from "./Components/MovieInfo/MovieInfo";
import NewMovieForm from "./Components/NewMovieForm/NewMovieForm";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [movies, setmovies] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1);

  const fetchMovies = async () => {
    try {
      const response = await axios.get("https://localhost:7276/api/movies");
      // console.log(response);
      setmovies(response.data);
    } catch (error) {
      console.warn("Error in fetchMovies request:", Error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const handleNewmovie = (newMovie) => {
    const updatedMovie = [...movies, newMovie];
    setmovies(updatedMovie);
  };

  const selectedMovie = movies[activeIndex];

  return (
    <div className="App">
      <Header />
      <div className="flex-container">
        <MovieList
          movies={movies}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
        <MovieInfo movieObj={selectedMovie} />
        <NewMovieForm onNewMovie={handleNewmovie} />
      </div>
    </div>
  );
}

export default App;
