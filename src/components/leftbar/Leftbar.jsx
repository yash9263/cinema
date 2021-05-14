import "./Leftbar.css";
import { Link } from "react-router-dom";
import useMode from "../../hooks/useMode";

const Leftbar = () => {
  const [context, setContext] = useMode();
  return (
    <div className="leftbar-container">
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
