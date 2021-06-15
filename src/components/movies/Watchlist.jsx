import { useEffect, useState } from "react";
import useApi from "../../hooks/useAPI";
import Card from "../Card";
import "./Movies.css";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import useFirestore from "../../hooks/useFirestore";

const Watchlist = ({ collection, title }) => {
  let history = useHistory();

  const { movieList } = useFirestore(collection);

  return (
    <div>
      <div className="title-container">
        <motion.button
          className="back-type"
          onClick={() => history.goBack()}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          ← Back
        </motion.button>
        <h1 className="category-title">{title}</h1>
        <div className="divider"></div>
      </div>

      <div className="movies-container">
        {movieList.map((movie) => {
          // console.log(movie.vote_average);
          return (
            <Card
              movie={movie}
              posterURL={movie.poster_path}
              title={movie.title}
              id={movie.id}
              vote_average={movie.vote_average}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Watchlist;
