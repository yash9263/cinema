import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <ul>
        <li>
          <p>
            Design inspiraiton from{" "}
            <a
              style={{ textDecoration: "underline" }}
              href="https://dribbble.com/search/movies"
              target="_blank"
            >
              Dribble
            </a>
          </p>
        </li>
        <li>
          <p>
            Using{" "}
            <a
              style={{ textDecoration: "underline" }}
              href="https://developers.themoviedb.org/3/getting-started/introduction"
              target="_blank"
            >
              TMDB API
            </a>{" "}
            for all data.
          </p>
        </li>
      </ul>
      <div className="ack">Made with ❤️ by Yashwant.</div>
    </div>
  );
};
export default Footer;
