import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router";
import useApi from "../../hooks/useAPI";
import "./Movie.css";
import { motion } from "framer-motion";
import useMode from "../../hooks/useMode";

const backdropurl = "https://www.themoviedb.org/t/p/original";

const Movie = () => {
  const [details, setDetails] = useState(null);
  const [error, setError] = useState(null);
  const [context, setContext] = useMode();
  const keys = ["backdrop_path", "title", "genres", "overview"];
  let { id } = useParams();
  let history = useHistory();
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

  const getMovie = `https://api.themoviedb.org/3/${context}/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&append_to_response=videos`;
  //   console.log(getMovie);
  useEffect(() => {
    fetch(getMovie)
      .then((res) => {
        if (!res.ok) {
          // make the promise be rejected if we didn't get a 2xx response
          throw new Error("Resource not found");
        }
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        setDetails(data);
        // console.log(details.videos);
        setError(null);
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  }, [id, getMovie]);
  // console.log(details.title);
  if (error) {
    return (
      <div>
        {error} Required details are not present to load this Movie page.
        <motion.button
          className="back"
          onClick={() => history.goBack()}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          ← GO Back
        </motion.button>
      </div>
    );
  } else {
    return (
      <div className="movie-container">
        {details && (
          <>
            <img
              src={backdropurl + details.backdrop_path}
              alt={context === "movie" ? details.title : details.name}
            />
            <div className="layer-div"></div>
            <div className="about-cont">
              <motion.button
                className="back"
                onClick={() => history.goBack()}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                ← Back
              </motion.button>
              <div className="title-cont">
                {context === "movie"
                  ? details.title
                      .split(" ")
                      .map((part, index) =>
                        index > 0 ? (
                          part + " "
                        ) : (
                          <div style={{ display: "block" }}>{part + " "}</div>
                        )
                      )
                  : details.name
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
                {details.genres &&
                  details.genres.map((genre) => (
                    <div className="genre">{genre.name}</div>
                  ))}
              </div>
              {details.homepage.length > 1 && (
                <div className="visit">
                  <a href={details.homepage} target="_blank">
                    <button>Visit 🠒</button>
                  </a>
                </div>
              )}
              <div className="overview">{details.overview}</div>
              <div className="movie-details">
                <div className="detail relase-date">
                  {context === "movie"
                    ? details.release_date.split("-")[0]
                    : details.first_air_date.split("-")[0]}
                </div>
                <span className="div-border"></span>
                {context === "movie" ? (
                  <div className="detail runtime">
                    {Math.floor(details.runtime / 60) > 0
                      ? Math.floor(details.runtime / 60) + " hr "
                      : ""}
                    {details.runtime % 60 > 0
                      ? (details.runtime % 60) + " min"
                      : ""}
                  </div>
                ) : (
                  <div className="detail runtime">
                    {details.number_of_seasons > 1
                      ? details.number_of_seasons + " Seasons"
                      : details.number_of_seasons + " Season"}
                  </div>
                )}
                <span className="div-border"></span>
                <div className="detail budget">
                  {context === "movie"
                    ? "$ " + details.budget
                    : details.number_of_episodes + " episodes"}
                </div>
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

              {details.videos.results.length > 0 && (
                <div className="videos">
                  <div className="trailers"> Trailers </div>
                  {details.videos.results.map((video) => {
                    if (video.site === "YouTube") {
                      return (
                        <motion.div
                          className="video"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <a
                            href={"http://www.youtube.com/watch?v=" + video.key}
                            target="_blank"
                          >
                            <img
                              src={
                                "https://img.youtube.com/vi/" +
                                video.key +
                                "/0.jpg"
                              }
                              alt="youtube thumbnail"
                            />
                          </a>
                        </motion.div>
                      );
                    } else {
                      return null;
                    }
                  })}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    );
  }
};

export default Movie;
