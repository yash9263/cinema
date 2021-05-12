import { useState } from "react";
import "./App.css";
import Leftbar from "./components/leftbar/Leftbar";
import Movies from "./components/movies/Movies";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import SectionContainer from "./components/section-container/SectionContainer";
import useApi from "./hooks/useAPI";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Genre from "./components/movies/Genre";
import Search from "./components/movies/Search";
//`https://api.themoviedb.org/3/movie/550?api_key=${process.env.REACT_APP_TMDB_API_KEY}`

const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;

const popularUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`;
const nowPlaying = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`;
const topRated = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`;

function App() {
  const [query, setQuery] = useState("");
  // console.log(docs);

  return (
    <Router>
      <div className="App">
        {/* <Movies /> */}
        <Navbar query={query} setQuery={setQuery} />
        <Leftbar />
        <Switch>
          <Route
            // exact
            path="/popular"
            render={(props) => (
              <Movies title="Popular" url={popularUrl} {...props} />
            )}
          />
          <Route
            // exact
            path="/nowplaying"
            render={(props) => (
              <Movies title="Now Playing" url={nowPlaying} {...props} />
            )}
          />
          <Route
            // exact
            path="/toprated"
            render={(props) => (
              <Movies title="Top Rated" url={topRated} {...props} />
            )}
          />
          <Route path="/genre" render={(props) => <Genre {...props} />} />

          <Route path="/search" render={(props) => <Search query={query} />} />

          <Route
            exact
            path="/"
            render={(props) => <SectionContainer {...props} />}
          />

          {/* </Route> */}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
