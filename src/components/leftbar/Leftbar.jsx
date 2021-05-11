import "./Leftbar.css";
const Leftbar = () => {
  return (
    <div className="leftbar-container">
      <div className="menu-title">Menu</div>
      <ul className="menu-list">
        <li className="menu-item">
          <i className="bx bxs-home box-icon"></i>Home
        </li>
        <li className="menu-item">
          <i className="bx bxs-movie box-icon"></i>Genre
        </li>
        <li className="menu-item">
          <i className="bx bxs-compass box-icon"></i>Discover
        </li>
        <li className="menu-item">
          <i className="bx bxs-star box-icon"></i>Top Rated
        </li>
      </ul>
    </div>
  );
};

export default Leftbar;
