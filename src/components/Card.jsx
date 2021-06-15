import { Link } from "react-router-dom";
import useMode from "../hooks/useMode";
import "./Card.css";
import { authService, db } from "../firebase-config";
import "firebase/firestore";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const IMG_URL = "https://image.tmdb.org/t/p/w500/";
const Card = ({ movie, posterURL, title, id, vote_average }) => {
  const [context, setContext] = useMode();
  const user = authService.currentUser;
  const saveMovie = () => {
    db.collection(`accounts/${user.uid}/watchlist`)
      .doc(`${movie.id}`)
      .set({ ...movie })
      .then(() => {
        console.log("document suceesfully added");
        toast.success("added to watchlist", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((error) => console.error(error));
  };

  const addWatchedMovie = () => {
    db.collection(`accounts/${user.uid}/watched`)
      .doc(`${movie.id}`)
      .set({ ...movie })
      .then(() => {
        console.log("documents suceesfully added");
        toast.success("added to watched", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((error) => console.error(error));
  };

  const notify = () => {
    toast.error("Please login", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    console.log("toast");
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
      <button
        onClick={user ? () => saveMovie() : notify}
        className="movie-title-cont"
      >
        <i class="fas fa-bookmark"></i>
      </button>
      <button
        onClick={user ? () => addWatchedMovie() : notify}
        className="watched-icon-cont"
      >
        <i class="fas fa-check"></i>
      </button>
    </div>
  );
};

export default Card;
