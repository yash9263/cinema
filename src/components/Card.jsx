import "./Card.css";

const IMG_URL = "https://image.tmdb.org/t/p/w500/";
const Card = ({ posterURL, title }) => {
  return (
    <div className="card-container">
      <img src={IMG_URL + posterURL} alt={title + " movie poster"} />
      {/* <div>{title}</div> */}
    </div>
  );
};

export default Card;
