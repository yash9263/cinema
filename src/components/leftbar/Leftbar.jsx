import { useState, useEffect } from "react";
import "./Leftbar.css";
import { Link, useHistory } from "react-router-dom";
import useMode from "../../hooks/useMode";
import { authService } from "../../firebase-config.js";

const Leftbar = ({ showLeftbar, setShowLeftbar }) => {
  const [context, setContext] = useMode();
  const history = useHistory();
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

  const handleSignOut = () => {
    authService
      .signOut()
      .then(() => {
        history.push("/");
      })
      .catch((error) => {
        console.error(error.message);
      });
  };
  return (
    <div
      className={
        showLeftbar
          ? "leftbar-container showLeftbar-container"
          : "leftbar-container"
      }
    >
      {windowSize.width < 600 && (
        <div>
          <button
            className="close-btn"
            onClick={() => {
              setShowLeftbar(!showLeftbar);
            }}
          >
            <i className="fas fa-times"></i>
          </button>
          <div className="menu-title"> Categories</div>
          <ul className="menu-list">
            <li
              style={{ cursor: "pointer" }}
              className={
                context === "movie" ? "nav-list-color menu-item" : "menu-item"
              }
              onClick={() => {
                setContext("movie");
                setShowLeftbar(!showLeftbar);
              }}
            >
              Movies
            </li>
            <li
              style={{ cursor: "pointer" }}
              className={
                context === "tv" ? "nav-list-color menu-item" : "menu-item"
              }
              onClick={() => {
                setContext("tv");
                setShowLeftbar(!showLeftbar);
              }}
            >
              Tv Shows
            </li>
          </ul>
        </div>
      )}
      <div className="menu-title">Menu</div>
      <ul className="menu-list">
        <Link
          to="/"
          onClick={() => {
            setShowLeftbar(!showLeftbar);
          }}
        >
          <li className="menu-item">
            <i className="bx bxs-home box-icon"></i>Home
          </li>
        </Link>
        <Link
          to="/genre"
          onClick={() => {
            setShowLeftbar(!showLeftbar);
          }}
        >
          <li className="menu-item">
            <i class="bx bxs-collection box-icon"></i>Genre
          </li>
        </Link>

        <Link
          to="/toprated"
          onClick={() => {
            setShowLeftbar(!showLeftbar);
          }}
        >
          <li className="menu-item">
            <i className="bx bxs-star box-icon"></i>Top Rated
          </li>
        </Link>
        <Link
          to="/popular"
          onClick={() => {
            setShowLeftbar(!showLeftbar);
          }}
        >
          <li className="menu-item">
            <i class="bx bxs-movie box-icon"></i>Popular
          </li>
        </Link>
        {context !== "tv" ? (
          <Link
            to="/nowplaying"
            onClick={() => {
              setShowLeftbar(!showLeftbar);
            }}
          >
            <li className="menu-item">
              <i class="bx bx-play box-icon"></i>Now Playing
            </li>
          </Link>
        ) : null}
        {authService.currentUser ? (
          <span>
            <Link
              to="/watchlist"
              onClick={() => {
                setShowLeftbar(!showLeftbar);
              }}
            >
              <li className="menu-item">
                <i class="fas fa-bookmark"></i> Watchlist
              </li>
            </Link>
            <Link to="/watched">
              <li className="menu-item">
                <i class="fas fa-check"></i> Watched
              </li>
            </Link>
            <li className="menu-item" onClick={handleSignOut}>
              Sign Out
            </li>
          </span>
        ) : (
          <Link
            to="/signin"
            onClick={() => {
              setShowLeftbar(!showLeftbar);
            }}
          >
            <li className="menu-item">Login</li>
          </Link>
        )}
      </ul>
    </div>
  );
};

export default Leftbar;
