import { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({ query, setQuery }) => {
  return (
    <nav className="navbar-container">
      <div className="app-title">cinemaTV</div>
      <ul className="nav-list">
        <li className="nav-item">Home</li>
        <li className="nav-item">Movies</li>
        <li className="nav-item">TV shows</li>
      </ul>

      <Link to="/search">
        <button className="search-btn">
          <i className="bx bx-search bx-border-circle"></i>
        </button>
      </Link>
    </nav>
  );
};
export default Navbar;
