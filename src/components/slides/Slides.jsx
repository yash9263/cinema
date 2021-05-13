import "./Slides.css";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import useApi from "../../hooks/useAPI";

const backdropurl = "https://www.themoviedb.org/t/p/original";
const upcomingURL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=2`;
const images = [
  "/9yBVqNruk6Ykrwc32qrK2TIE5xw.jpg",
  "/inJjDhCjfhh3RtrJWBmmDqeuSYC.jpg",
  "/mYM8x2Atv4MaLulaV0KVJWI1Djv.jpg",
  "/6zbKgwgaaCyyBXE4Sun4oWQfQmi.jpg",
  "/pcDc2WJAYGJTTvRSEIpRZwM3Ola.jpg",
];
const Slides = () => {
  // const [docs, setDocs] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
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
        <AnimatePresence>
          {docs.length > 0 && (
            <motion.img
              loading="lazy"
              className="movie-poster"
              src={backdropurl + docs[imageIndex].backdrop_path}
              alt="aimage"
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Slides;
