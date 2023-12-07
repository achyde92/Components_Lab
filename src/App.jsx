import "./App.css";
import Header from "./Components/Header/Header";
import MovieList from "./Components/MovieList/MovieList";
import MovieInfo from "./Components/MovieInfo/MovieInfo";

function App() {
  const selectedMovie = {
    title: "Forrest Gump",
    runningtime: 142,
    genre: "Romantic Drama",
  };

  return (
    <div className="App">
      <Header />
      <MovieList />
      <MovieInfo movieObj={selectedMovie} />
    </div>
  );
}

export default App;
