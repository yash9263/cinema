import { useState, useEffect } from "react";
import "./Leftbar.css";
import { Link } from "react-router-dom";
import useMode from "../../hooks/useMode";

const Leftbar = () => {
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
    <div className="leftbar-container">
      {windowSize.width < 600 && (
        <div>
          <div className="menu-title"> Categories</div>
          <ul className="menu-list">
            <li
              style={{ cursor: "pointer" }}
              className={context === "movie" ? "nav-list-color " : ""}
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
              Tv Shows
            </li>
          </ul>
        </div>
      )}
      <div className="menu-title">Menu</div>
      <ul className="menu-list">
        <Link to="/">
          <li className="menu-item">
            <i className="bx bxs-home box-icon"></i>Home
          </li>
        </Link>
        <Link to="/genre">
          <li className="menu-item">
            <i class="bx bxs-collection box-icon"></i>Genre
          </li>
        </Link>

        <Link to="/toprated">
          <li className="menu-item">
            <i className="bx bxs-star box-icon"></i>Top Rated
          </li>
        </Link>
        <Link to="/popular">
          <li className="menu-item">
            <i class="bx bxs-movie box-icon"></i>Popular
          </li>
        </Link>
        {context !== "tv" ? (
          <Link to="/nowplaying">
            <li className="menu-item">
              <i class="bx bx-play box-icon"></i>Now Playing
            </li>
          </Link>
        ) : null}
      </ul>
    </div>
  );
};

export default Leftbar;
