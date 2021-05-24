import { createContext, useEffect, useState } from "react";
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
import Movie from "./components/movie/Movie";
import Home from "./components/home/Home";
import ProvideMode from "./ProvideMode";
import useMode from "./hooks/useMode";

const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;

function App() {
  const [context, useContext] = useMode();
  const [showLeftbar, setShowLeftbar] = useState(false);
  // useEffect(() => {}, []);
  // return <Movie />;
  const popularUrl = `https://api.themoviedb.org/3/${context}/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`;
  const nowPlaying = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`;
  const topRated = `https://api.themoviedb.org/3/${context}/top_rated?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`;

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route
            // exact
            path="/toprated"
            render={(props) => {
              return (
                <>
                  <Navbar setShowLeftbar={setShowLeftbar} />
                  <Leftbar
                    showLeftbar={showLeftbar}
                    setShowLeftbar={setShowLeftbar}
                  />
                  <Movies title="Top Rated" url={topRated} {...props} />
                  <Footer />
                </>
              );
            }}
          />
          <Route
            path="/genre"
            render={(props) => {
              return (
                <>
                  <Navbar setShowLeftbar={setShowLeftbar} />
                  <Leftbar
                    showLeftbar={showLeftbar}
                    setShowLeftbar={setShowLeftbar}
                  />{" "}
                  <Genre {...props} />
                  <Footer />
                </>
              );
            }}
          />

          <Route
            path="/search"
            render={(props) => {
              return (
                <>
                  <Navbar setShowLeftbar={setShowLeftbar} />
                  <Leftbar
                    showLeftbar={showLeftbar}
                    setShowLeftbar={setShowLeftbar}
                  />{" "}
                  <Search />
                  <Footer />
                </>
              );
            }}
          />
          <Route
            // exact
            path="/popular"
            render={(props) => {
              return (
                <>
                  <Navbar setShowLeftbar={setShowLeftbar} />
                  <Leftbar
                    showLeftbar={showLeftbar}
                    setShowLeftbar={setShowLeftbar}
                  />
                  <Movies title="Popular" url={popularUrl} {...props} />
                  <Footer />
                </>
              );
            }}
          />
          <Route
            // exact
            path="/nowplaying"
            render={(props) => {
              return (
                <>
                  <Navbar setShowLeftbar={setShowLeftbar} />
                  <Leftbar
                    showLeftbar={showLeftbar}
                    setShowLeftbar={setShowLeftbar}
                  />
                  <Movies title="Now Playing" url={nowPlaying} {...props} />
                  <Footer />
                </>
              );
            }}
          />
          <Route path={"/" + context + "/:id"} component={Movie} />
          <Route
            exact
            path="/"
            render={(props) => {
              return (
                <>
                  <Navbar setShowLeftbar={setShowLeftbar} />
                  <Leftbar
                    showLeftbar={showLeftbar}
                    setShowLeftbar={setShowLeftbar}
                  />
                  <SectionContainer {...props} />
                  <Footer />
                </>
              );
            }}
          />
          <Route path="*">
            <Navbar setShowLeftbar={setShowLeftbar} />
            <Leftbar
              showLeftbar={showLeftbar}
              setShowLeftbar={setShowLeftbar}
            />
            <SectionContainer />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
