import { Link } from "react-router-dom";
import "./Card.css";

const IMG_URL = "https://image.tmdb.org/t/p/w500/";
const Card = ({ posterURL, title, id, vote_average }) => {
  // console.log(vote_average);
  return (
    <div className="card-container">
      <div className="vote-bar">{vote_average}</div>
      <Link to={"/movie/" + id}>
        <img
          loading="lazy"
          src={IMG_URL + posterURL}
          alt={title + " movie poster"}
        />
      </Link>
      {/* <div>{title}</div> */}
    </div>
  );
};

export default Card;
