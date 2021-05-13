import Leftbar from "../leftbar/Leftbar";
import Movies from "../movies/Movies";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import SectionContainer from "../section-container/SectionContainer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import Genre from "../movies/Genre";
import Search from "../movies/Search";

const Home = () => {
  const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;

  const popularUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`;
  const nowPlaying = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`;
  const topRated = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`;

  const { category } = useParams();

  const renderCategory = () => {
    switch (category) {
      case "/popular":
        return <Movies title="Popular" url={popularUrl} />;

      case "/nowplaying":
        return <Movies title="Now Playing" url={nowPlaying} />;

      case "/toprated":
        return <Movies title="Top Rated" url={topRated} />;
      case "/genre":
        return <Genre />;
      case "/search":
        return <Search />;
      default:
        return <SectionContainer />;
    }
  };

  return (
    <>
      <Navbar />
      <Leftbar />
      <Switch>
        <Route path="/" children={<SectionContainer />} />
        <Route
          path="/popular"
          component={<Movies title="Popular" url={popularUrl} />}
        />
      </Switch>
      <Footer />
    </>
  );
};

export default Home;
