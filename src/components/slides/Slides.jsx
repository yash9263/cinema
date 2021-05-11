import "./Slides.css";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const images = [
  "https://picsum.photos/1200/700",
  "https://picsum.photos/1200/700",
  "https://picsum.photos/1200/700",
];
const Slides = () => {
  const [imageIndex, setImageIndex] = useState(0);
  useEffect(() => {
    change();
  }, []);
  const change = () => {
    if (imageIndex >= images.length - 1) {
      setImageIndex(0);
    } else {
      setImageIndex(imageIndex + 1);
    }
    console.log(imageIndex);
    setTimeout(change, 4000);
  };
  return (
    <div className="slides-container">
      <div className="img-container">
        <AnimatePresence>
          console.log(imageIndex);
          {images.map((image, index) => {
            return (
              <motion.img
                className="movie-poster"
                src={image}
                key={index}
                alt="aimage"
                initial={{ opacity: 0, y: 200 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Slides;
