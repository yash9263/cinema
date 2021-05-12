import { useEffect } from "react";

const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;

// const posterurl =
// "https://www.themoviedb.org/t/p/original/9yBVqNruk6Ykrwc32qrK2TIE5xw.jpg";
// const imageurl =
// "https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg";
// console.log(process.env.REACT_APP_TMDB_API_KEY);
// console.log(API_URL);
const Movies = () => {
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return <div>Movies</div>;
};

export default Movies;
