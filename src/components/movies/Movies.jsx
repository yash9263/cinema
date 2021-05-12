import { useEffect, useState } from "react";
import useApi from "../../hooks/useAPI";
import Card from "../Card";
import "./Movies.css";

const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;

// const posterurl =
// "https://www.themoviedb.org/t/p/original/9yBVqNruk6Ykrwc32qrK2TIE5xw.jpg";
// const imageurl =
// "https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg";
// console.log(process.env.REACT_APP_TMDB_API_KEY);
// console.log(API_URL);
const Movies = ({ url, title }) => {
  const [page, setPage] = useState(1);
  const [movieurl, setmovieUrl] = useState(
    url.substring(0, url.length - 1) + page
  );

  const { docs } = useApi(movieurl);

  useEffect(() => {
    setmovieUrl(url.substring(0, url.length - 1) + page);
    console.log(docs, movieurl, page);
  }, [page, docs]);
  return (
    <div>
      <div className="title-container">
        <h1 className="category-title">{title}</h1>
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
        {docs.map((movie) => {
          return <Card posterURL={movie.poster_path} title={movie.title} />;
        })}
      </div>
    </div>
  );
};

export default Movies;
