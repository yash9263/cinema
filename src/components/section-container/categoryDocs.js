const categoryDocs = [
  {
    path: "/popular",
    title: "Popular",
    url: `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`,
  },
  {
    path: "/nowplaying",
    title: "Now Playing",
    url: `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`,
  },
  {
    title: "Trending",
    url: `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_TMDB_API_KEY}`,
  },
];
export default categoryDocs;
