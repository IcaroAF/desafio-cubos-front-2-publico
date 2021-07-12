import "./style.css";
import MovieCard from "../Movies";
import { useEffect, useState } from "react";

function TopMovies({ movies, handleAddMovieCart }) {
  const localMovies = [...movies];
  const [topMovies, setTopMovies] = useState([]);

  useEffect(() => {
    const topMoviesList = localMovies.slice(0, 5);
    setTopMovies(topMoviesList);
  }, [movies, localMovies]);

  return (
    <>
      <div className="container-topmovies">
        <h1>Top Filmes</h1>
        <MovieCard movies={topMovies} handleAddMovieCart={handleAddMovieCart} />
      </div>
    </>
  );
}

export default TopMovies;
