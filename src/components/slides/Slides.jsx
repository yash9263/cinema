import "./Slides.css";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const backdropurl = "https://www.themoviedb.org/t/p/original";
const images = [
  "/9yBVqNruk6Ykrwc32qrK2TIE5xw.jpg",
  "/inJjDhCjfhh3RtrJWBmmDqeuSYC.jpg",
  "/mYM8x2Atv4MaLulaV0KVJWI1Djv.jpg",
  "/6zbKgwgaaCyyBXE4Sun4oWQfQmi.jpg",
  "/pcDc2WJAYGJTTvRSEIpRZwM3Ola.jpg",
];
const Slides = () => {
  const [imageIndex, setImageIndex] = useState(null);
  useEffect(() => {
    // setImageIndex(0);
    const interval = setInterval(() => {
      if (imageIndex === null) {
        setImageIndex(0 % images.length);
      } else {
        setImageIndex((prevIndex) => {
          return (prevIndex + 1) % images.length;
        });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // console.log(imageIndex);
  return (
    <div className="slides-container">
      <div className="imgs-container">
        <AnimatePresence>
          <motion.img
            className="movie-poster"
            src={backdropurl + images[imageIndex]}
            alt="aimage"
          />
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Slides;
