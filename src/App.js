import { useEffect, useState } from "react";
import "./App.css";

import MovieComponent from "./components/MovieComponent";

function App() {
  const MOVIE_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=f87491fe&s=";

  const [movies, setMovies] = useState([]);

  const fetchMovies = async (title) => {
    const response = await fetch(MOVIE_URL + title);
    const data = await response.json();

    setMovies(data.Search);
  };

  const setMovieName = (e) => {
    if (e.target.value.length > 0) {
      fetchMovies(e.target.value);
    } else {
      fetchMovies();
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="wrapper-div">
      <div className="nav-div">
        <div className="logo-div">Movie App</div>
        <input
          className="search-div"
          placeholder="Search Movie.."
          type="text"
          onChange={setMovieName}
        />
      </div>
      <div className="movie-container">
        {movies &&
          movies.map((movie) => (
            <MovieComponent movie={movie} key={movie.imdbID} />
          ))}
      </div>
    </div>
  );
}

export default App;
