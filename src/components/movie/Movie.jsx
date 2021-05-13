import { useEffect, useState } from "react";
import { useParams } from "react-router";
import useApi from "../../hooks/useAPI";
import "./Movie.css";

const backdropurl = "https://www.themoviedb.org/t/p/original";

const Movie = () => {
  const [details, setDetails] = useState(null);
  const [error, setError] = useState(null);
  let { id } = useParams();
  // let id = 460465;
  // const details = {
  //   backdrop_path: "/9yBVqNruk6Ykrwc32qrK2TIE5xw.jpg",
  //   overview:
  //     "A man refuses all assistance from his daughter as he ages and, as he tries to make sense of his changing circumstances, he begins to doubt his loved ones, his own mind and even the fabric of his reality.",
  //   budget: 20000000,
  //   genres: [
  //     { id: 28, name: "Action" },
  //     { id: 14, name: "Fantasy" },
  //     { id: 12, name: "Adventure" },
  //   ],
  //   tagline: "Get over here.",
  //   title: "Mortal Kombat",
  //   vote_average: 9.1,
  //   runtime: 110,
  //   release_date: "2021-05-05",
  // };

  const getMovie = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&append_to_response=videos`;
  //   console.log(getMovie);
  useEffect(() => {
    fetch(getMovie)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDetails(data);
        setError(null);
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  }, [id, getMovie]);
  // console.log(details.title);
  if (error) {
  } else {
    return (
      <div className="movie-container">
        {details && (
          <>
            <img
              src={backdropurl + details.backdrop_path}
              alt={details.title}
            />
            <div className="layer-div"></div>
            <div className="about-cont">
              <div className="title-cont">
                {details.title
                  .split(" ")
                  .map((part, index) =>
                    index > 0 ? (
                      part + " "
                    ) : (
                      <div style={{ display: "block" }}>{part + " "}</div>
                    )
                  )}
              </div>
              <div className="all-genres">
                {details.genres.map((genre) => (
                  <div className="genre">{genre.name}</div>
                ))}
              </div>
              <div className="overview">{details.overview}</div>
              <div className="movie-details">
                <div className="detail relase-date">
                  {details.release_date.split("-")[0]}
                </div>
                <span className="div-border"></span>
                <div className="detail runtime">
                  {Math.floor(details.runtime / 60) > 0
                    ? Math.floor(details.runtime / 60) + " hr "
                    : ""}
                  {details.runtime % 60 > 0
                    ? (details.runtime % 60) + " min"
                    : ""}
                </div>
                <span className="div-border"></span>
                <div className="detail budget">${details.budget}</div>
                <span className="div-border"></span>
                <div className="detail vote-average">
                  <div className="stars">
                    {Array.from({ length: 5 }, (_, index) =>
                      Math.floor(details.vote_average / 2) > index ? (
                        <i class="bx bxs-star starscolor"></i>
                      ) : (
                        <i class="bx bxs-star"></i>
                      )
                    )}
                  </div>
                </div>
              </div>
              <div className="tagline">{details.tagline}</div>
            </div>
          </>
        )}
      </div>
    );
  }
};

export default Movie;
