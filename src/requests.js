const API_KEY = "c366e6afa97f35239d05c1b231db647d"

// const requests = {
//     // url endings
//     fetchTrending : `/trending/all/week?api_key=${APIKEY}&language=en-US`,
//     fetchNetflixOriginals : `/discover/tv?api_key=${APIKEY}discover/movie?api`,
//     fetchTopRated : `/movie/top_rated?api_key=${APIKEY}&language=en-US`,
//     fetchActionMovies : `/discover/movie?api_key=${APIKEY}&with_genres=28`,
//     fetchComedMovies : `/discover/movie?api_key=${APIKEY}&with_genres=35`,
//     fetchHorrorMovies : `/discover/movie?api_key=${APIKEY}&with_genres=27`,
//     fetchRomanceMovies : `/discover/movie?api_key=${APIKEY}&with_genres=10749`,
//     fetchDocumentaries : `/discover/movie?api_key=${APIKEY}&with_genres=99`
// }
// https://api.themoviedb.org/3/movie/550?api_key=c366e6afa97f35239d05c1b231db647d

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`
  }

export default requests;