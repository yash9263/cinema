import { Link } from "react-router-dom";
import useMode from "../hooks/useMode";
import "./Card.css";

const IMG_URL = "https://image.tmdb.org/t/p/w500/";
const Card = ({ posterURL, title, id, vote_average }) => {
  const [context, setContext] = useMode();
  // console.log(vote_average);
  return (
    <div className="card-container">
      <div className="vote-bar">{vote_average}</div>
      <Link to={"/" + context + "/" + id}>
        <img
          loading="lazy"
          src={
            posterURL !== null
              ? IMG_URL + posterURL
              : "https://images.unsplash.com/photo-1533488765986-dfa2a9939acd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
          }
          alt={title + " movie poster"}
        />
      </Link>
      {/* <div>{title}</div> */}
    </div>
  );
};

export default Card;
