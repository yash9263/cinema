import { useState } from "react";
import "./Movies.css";
import useApi from "../../hooks/useAPI";
import Card from "../Card";

const Search = () => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");

  const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`;

  const { docs } = useApi(searchUrl);
  return (
    <div>
      <div className="title-container">
        <h1 className="category-title">{query}</h1>
        <div className="divider"></div>
        <form className="search-form">
          <input
            className="search-input"
            type="text"
            placeholder="search"
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
            }}
          />
        </form>
        {query.length > 0 && (
          <>
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
          </>
        )}
      </div>
      {query.length > 0 ? (
        <div className="movies-container">
          {docs &&
            docs.map((movie) => {
              return (
                <Card
                  posterURL={movie.poster_path}
                  title={movie.title}
                  id={movie.id}
                  vote_average={movie.vote_average}
                />
              );
            })}
        </div>
      ) : (
        <div>Search your query</div>
      )}
    </div>
  );
};
export default Search;
