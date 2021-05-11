import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <nav className="navbar-container">
      <div className="app-title">cinemaTV</div>
      <ul className="nav-list">
        <li className="nav-item">Home</li>
        <li className="nav-item">Movies</li>
        <li className="nav-item">TV shows</li>
      </ul>
      <form className="search-form">
        <input
          className="search-input"
          type="text"
          placeholder="search"
          value={searchText}
          onChange={(event) => {
            setSearchText(event.target.value);
          }}
        />
        <button className="search-btn" type="submit">
          <i className="bx bx-search bx-border-circle"></i>
        </button>
      </form>
    </nav>
  );
};
export default Navbar;
