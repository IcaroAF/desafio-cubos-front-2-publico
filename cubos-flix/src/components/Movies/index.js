import "./style.css";
import goldenstar from "../../assets/images/golden-star.svg";

function MovieCard({ movies, handleAddMovieCart }) {
  return (
    <>
      <div className="movies-list">
        {movies.map((movie) => (
          <div
            className="movie-card"
            style={{
              background: `linear-gradient(rgba(0, 0, 0, 0.3) 100%, rgba(0, 0, 0, 0.3) 100%), url(${movie.poster_path}) center center / cover no-repeat`,
            }}
            key={movie.id}
          >
            <div className="movie-info">
              <h3>{movie.title}</h3>
              <p>
                <img src={goldenstar} alt="star-icon" />
                {movie.vote_average}
              </p>
            </div>
            <button
              onClick={() => handleAddMovieCart(movie.id)}
              className="movie-button"
            >
              <p>Sacola</p>
              <p>R$ {movie.price.toFixed(2)}</p>
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default MovieCard;
