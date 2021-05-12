import "./Leftbar.css";
import { Link } from "react-router-dom";
const Leftbar = () => {
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
            <i className="bx bxs-movie box-icon"></i>Genre
          </li>
        </Link>
        <Link to="/toprated">
          <li className="menu-item">
            <i className="bx bxs-star box-icon"></i>Top Rated
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Leftbar;
