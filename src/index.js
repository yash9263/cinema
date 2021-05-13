import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Movie from "./components/movie/Movie";

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <Movie /> */}
  </React.StrictMode>,
  document.getElementById("root")
);
