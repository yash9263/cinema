import { useRef } from "react";
import useApi from "../../hooks/useAPI";
import posters from "../../posters";
import Card from "../Card";
import "./Section.css";
import { Link } from "react-router-dom";

const Section = ({ title, url, path }) => {
  const { docs } = useApi(url);
  // console.log(docs);
  const cards = useRef();
  // console.log(posters);

  const handleScrollNext = (event) => {
    event.preventDefault();
    // console.log(cards.current.offsetWidth, cards.current.offsetWidth / 2);
    cards.current.scrollLeft = cards.current.scrollLeft +=
      window.innerWidth / 2 > 600
        ? window.innerWidth / 2
        : window.innerWidth - 100;
  };
  const handleScrollPrev = (event) => {
    event.preventDefault();
    // console.log(cards.current.offsetWidth, cards.current.offsetWidth / 2);
    cards.current.scrollLeft = cards.current.scrollLeft -=
      window.innerWidth / 2 > 600
        ? window.innerWidth / 2
        : window.innerWidth - 100;
  };
  if (docs) {
    return (
      <div className="category">
        <div className="title-container">
          <h1 className="catg-title">
            <Link to={path}>{title}</Link>
          </h1>

          <div className="divider"></div>
        </div>
        <div className="section-container">
          <button id="prev" className="scroll-btn" onClick={handleScrollPrev}>
            <i class="bx bxs-chevron-left"></i>
          </button>
          <div className="all-cards" ref={cards}>
            {docs.map((movie, index) => (
              <Card
                posterURL={movie.poster_path}
                title={movie.title}
                id={movie.id}
                vote_average={movie.vote_average}
              />
            ))}
          </div>
          <button id="next" className="scroll-btn" onClick={handleScrollNext}>
            <i class="bx bxs-chevron-right"></i>
          </button>
        </div>
      </div>
    );
  } else {
    <div>Loading</div>;
  }
};

export default Section;
