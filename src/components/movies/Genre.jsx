import { useEffect, useState } from "react";
import useApi from "../../hooks/useAPI";
import Card from "../Card";
import "./Movies.css";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import useMode from "../../hooks/useMode";

const genreList = `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`;

const Genre = () => {
  let history = useHistory();
  const [context, useContext] = useMode();
  const [genres, setgenres] = useState([]);
  const [genre, setGenre] = useState({ id: 28, name: "Action" });
  const [page, setPage] = useState(1);

  let genreUrl;
  if (context === "movie") {
    genreUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&sort_by=popularity.asc&include_adult=false&include_video=false&page=${page}&with_genres=${genre.id}`;
  } else {
    genreUrl = `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&page=${page}&timezone=America%2FNew_York&with_genres=${genre.id}&include_null_first_air_dates=false&with_watch_monetization_types=flatrate`;
  }
  useEffect(() => {
    fetch(genreList)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.genres);
        let document = [];
        data.genres.forEach((genre) => {
          document.push({ ...genre });
        });
        setgenres(document);

        // console.log(genres);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const { docs } = useApi(genreUrl);
  //   console.log(docs);
  return (
    <div className="genre-container">
      <div className="all-genre">
        {genres.map((genre) => (
          <button
            className="genre-btn"
            id={genre.id}
            onClick={() => setGenre({ id: genre.id, name: genre.name })}
          >
            {genre.name}
          </button>
        ))}
      </div>
      <div className="title-container">
        <motion.button
          className="back-type"
          onClick={() => history.goBack()}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          ← Back
        </motion.button>
        <h1 className="category-title">{genre.name}</h1>
        <div className="divider"></div>
        <button
          id="prev"
          className="scroll-btn"
          onClick={() => {
            if (page > 1) {
              setPage(page - 1);
            }
          }}
        >
          <i class="bx bxs-chevron-left"></i>
        </button>
        <button
          id="next"
          className="scroll-btn"
          onClick={() => {
            setPage(page + 1);
          }}
        >
          <i class="bx bxs-chevron-right"></i>
        </button>
      </div>
      <div className="movies-container">
        {docs.map((doc) => {
          return (
            <Card
              movie={doc}
              posterURL={doc.poster_path}
              title={doc.title}
              id={doc.id}
              vote_average={doc.vote_average}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Genre;
