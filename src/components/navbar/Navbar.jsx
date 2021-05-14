import { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import useMode from "../../hooks/useMode";

const Navbar = () => {
  const [context, setContext] = useMode();
  console.log(context);
  return (
    <nav className="navbar-container">
      <div className="app-title">cinemaTV</div>
      <ul className="nav-list">
        <Link to="/">
          <li className="nav-item">Home</li>
        </Link>

        <li
          style={{ cursor: "pointer" }}
          className={
            context === "movie" ? "nav-list-color nav-item" : "nav-item"
          }
          onClick={() => {
            setContext("movie");
          }}
        >
          Movies
        </li>
        <li
          style={{ cursor: "pointer" }}
          className={context === "tv" ? "nav-list-color nav-item" : "nav-item"}
          onClick={() => {
            setContext("tv");
          }}
        >
          TV shows
        </li>
      </ul>

      <Link to="/search">
        <button className="search-btn">
          <i className="bx bx-search bx-border-circle">Search</i>
        </button>
      </Link>
    </nav>
  );
};
export default Navbar;
