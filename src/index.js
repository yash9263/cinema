import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Movie from "./components/movie/Movie";
import ProvideMode from "./ProvideMode";

ReactDOM.render(
  <React.StrictMode>
    <ProvideMode>
      <App />
    </ProvideMode>
    {/* <Movie /> */}
  </React.StrictMode>,
  document.getElementById("root")
);
