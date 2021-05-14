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

const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;

const popularUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`;
const nowPlaying = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`;
const topRated = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`;

function App() {
  // useEffect(() => {}, []);
  // return <Movie />;
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
                  <Navbar />
                  <Leftbar />
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
                  <Navbar />
                  <Leftbar /> <Genre {...props} />
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
                  <Navbar />
                  <Leftbar /> <Search />
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
                  <Navbar />
                  <Leftbar />
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
                  <Navbar />
                  <Leftbar />
                  <Movies title="Now Playing" url={nowPlaying} {...props} />
                  <Footer />
                </>
              );
            }}
          />
          <Route path="/movie/:id" component={Movie} />
          <Route
            exact
            path="/"
            render={(props) => {
              return (
                <>
                  <Navbar />
                  <Leftbar />
                  <SectionContainer {...props} />
                  <Footer />
                </>
              );
            }}
          />
          <Route path="*">
            <Navbar />
            <Leftbar />
            <SectionContainer />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
