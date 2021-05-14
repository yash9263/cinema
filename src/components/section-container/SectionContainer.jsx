import useMode from "../../hooks/useMode";
import Section from "../sections/Section";
import Slides from "../slides/Slides";
import "./SectionContainer.css";
// import categoryDocs from "./categoryDocs";

const SectionContainer = () => {
  const [context, setContext] = useMode();
  const categoryDocs = [
    {
      path: "/popular",
      title: "Popular",
      url: `https://api.themoviedb.org/3/${context}/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`,
    },
    {
      path: "/nowplaying",
      title: "Now Playing",
      url: `https://api.themoviedb.org/3/${context}/now_playing?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`,
    },
    {
      title: "Trending",
      url: `https://api.themoviedb.org/3/trending/${context}/day?api_key=${process.env.REACT_APP_TMDB_API_KEY}`,
    },
  ];
  return (
    <div className="sections-container">
      <Slides />
      {categoryDocs.map((categoryDoc) => {
        return categoryDoc.title === "Now Playing" &&
          context === "tv" ? null : (
          <Section
            title={categoryDoc.title}
            url={categoryDoc.url}
            path={categoryDoc.path}
          />
        );
      })}
    </div>
  );
};

export default SectionContainer;
