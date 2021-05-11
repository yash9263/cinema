import "./App.css";
import Leftbar from "./components/leftbar/Leftbar";
import Movies from "./components/movies/Movies";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import SectionContainer from "./components/section-container/SectionContainer";
//`https://api.themoviedb.org/3/movie/550?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
function App() {
  return (
    <div className="App">
      {/* <Movies /> */}
      <Navbar />
      <Leftbar />
      <SectionContainer />
      <Footer />
    </div>
  );
}

export default App;
