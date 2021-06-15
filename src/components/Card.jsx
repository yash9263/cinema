import { Link } from "react-router-dom";
import useMode from "../hooks/useMode";
import "./Card.css";

const IMG_URL = "https://image.tmdb.org/t/p/w500/";
const Card = ({ movie, posterURL, title, id, vote_average }) => {
  const [context, setContext] = useMode();
  const saveMovie = () => {
    let prevItems = [];
    if (localStorage.getItem("wishlist")) {
      prevItems = JSON.parse(localStorage.getItem("wishlist"));
    }
    const found = prevItems.some((el) => el.id === movie.id);

    if (!found) {
      prevItems.push(movie);
    }
    localStorage.setItem("wishlist", JSON.stringify(prevItems));
  };

  const addWatchedMovie = () => {
    let prevMovies = [];
    if (localStorage.getItem("watched")) {
      prevMovies = JSON.parse(localStorage.getItem("watched"));
    }
    const found = prevMovies.some((el) => el.id === movie.id);

    if (!found) {
      prevMovies.push(movie);
    }
    localStorage.setItem("watched", JSON.stringify(prevMovies));
  };

  return (
    <div className="card-container">
      <div className="vote-bar">{vote_average}</div>
      <Link to={"/" + context + "/" + id}>
        <img
          src={
            posterURL !== null
              ? IMG_URL + posterURL
              : "https://images.unsplash.com/photo-1533488765986-dfa2a9939acd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
          }
          alt={title + " movie poster"}
        />
      </Link>
      <button onClick={() => saveMovie()} className="movie-title-cont">
        <i class="fas fa-bookmark"></i>
      </button>
      <button onClick={() => addWatchedMovie()} className="watched-icon-cont">
        <i class="fas fa-check"></i>
      </button>
    </div>
  );
};

export default Card;
