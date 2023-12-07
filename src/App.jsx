import "./App.css";
import Header from "./Components/Header/Header";
import MovieList from "./Components/MovieList/MovieList";
import MovieInfo from "./Components/MovieInfo/MovieInfo";

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList />
      <MovieInfo title="Forrest Gump" runningtime={142} genre="Romantic Drama" />
    </div>
  );
}

export default App;
