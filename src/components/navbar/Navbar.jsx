import { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import useMode from "../../hooks/useMode";

const Navbar = ({ setShowLeftbar }) => {
  const [context, setContext] = useMode();
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
  });
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowSize({ width: window.innerWidth });
    });
    return () => {
      window.removeEventListener("resize", () => {
        setWindowSize({ width: window.innerWidth });
      });
    };
  }, []);

  return (
    <nav className="navbar-container">
      <button
        className="nav-icon"
        onClick={() => {
          setShowLeftbar((prevState) => !prevState);
        }}
      >
        <i className="fas fa-bars"></i>
      </button>
      <div className="app-title">cinemaTV</div>
      {windowSize.width > 600 && (
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
            className={
              context === "tv" ? "nav-list-color nav-item" : "nav-item"
            }
            onClick={() => {
              setContext("tv");
            }}
          >
            TV shows
          </li>
        </ul>
      )}

      <Link to="/search">
        <button className="search-btn">
          <i className="bx bx-search ">Search</i>
        </button>
      </Link>
    </nav>
  );
};
export default Navbar;
