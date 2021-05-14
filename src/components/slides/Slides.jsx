import "./Slides.css";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import useApi from "../../hooks/useAPI";
import useMode from "../../hooks/useMode";

const backdropurl = "https://www.themoviedb.org/t/p/original";

const Slides = () => {
  const [context, setContext] = useMode();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  let upcomingURL;

  if (context === "movie") {
    upcomingURL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`;
  } else {
    upcomingURL = `https://api.themoviedb.org/3/tv/airing_today?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`;
  }

  const { docs } = useApi(upcomingURL);
  useEffect(() => {
    const interval = setInterval(() => {
      if (imageIndex === null) {
        setImageIndex(0);
      } else {
        setImageIndex((prevIndex) => {
          return (prevIndex + 1) % 20;
        });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // console.log(docs);
  // console.log(imageIndex);
  return (
    <div className="slides-container">
      <div className="imgs-container">
        {docs.length > 0 && (
          <img
            loading="lazy"
            className="movie-poster"
            src={backdropurl + docs[imageIndex].backdrop_path}
            alt="aimage"
          />
        )}
      </div>
    </div>
  );
};

export default Slides;
