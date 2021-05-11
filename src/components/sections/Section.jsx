import { useRef } from "react";
import posters from "../../posters";
import Card from "../Card";
import "./Section.css";

const Section = () => {
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
  return (
    <div className="category">
      <div className="title-container">
        <h1 className="category-title">Category Name</h1>
      </div>
      <div className="section-container">
        <button id="prev" className="scroll-btn" onClick={handleScrollPrev}>
          <i class="bx bxs-chevron-left"></i>
        </button>
        <div className="all-cards" ref={cards}>
          {posters.map((movie, index) => (
            <Card posterURL={movie.poster_path} title={movie.title} />
          ))}
        </div>
        <button id="next" className="scroll-btn" onClick={handleScrollNext}>
          <i class="bx bxs-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Section;
