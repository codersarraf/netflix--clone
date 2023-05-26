import React, { useState, useEffect } from 'react'

import { instance } from "./axios";


// import Youtube from "react-youtube";
// import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/"

function Row({ title, fetchUrl, isLarger }) {
  const [movies, setMovies] = useState([]);


  const [trailerUrl, setTrailerUrl] = useState("");



  useEffect(() => {


    async function fetchData() {

      const request = await instance.get(fetchUrl);

      setMovies(request.data.results);

      // console.table(request);
      return request;
    }
    fetchData();

  }, [fetchUrl])

  // const opt = {
  //   height: "390",
  //   width:"100vw",
  //   playerVars :{
  //     autoplay:1,
  //   },
  // };

  const handleClick = async (e) => {
    // let vidurl;
    // console.log(e);
let name = e.name;
    const URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${name}&key=AIzaSyDe3BdPL454DhKw62OGMiikVxU2sY9bTZY`
    // console.log(e.name);
    const fetchdata= await fetch(URL)
    const resp = await fetchdata.json();
      let videoID = resp.items[0].id.videoId;
      let vidUrl = `https://www.youtube.com/embed/${videoID}`
      setTrailerUrl(vidUrl);
    }

  console.log (trailerUrl);
  




  // if (movies.name) {
  //   
  // }


  // console.log(movies);

  //here we have to use [fetchUrl] always bcz it is a variable which is used in use-effect and coming from outside.

  return (
    <div className='row'>

      <h2>{title}</h2>
      <div className='row_posters'>
        {movies.map(e => (



          <img src={`${base_url}${isLarger ? e.poster_path : e.backdrop_path}`} className={isLarger ? "poster_large" : "poster"}
            onClick={() => handleClick(e)}
            key={e.id} alt={e.name} />
        ))}
      </div>

        {trailerUrl && <iframe title="youtube-video" width="420" height="315"
          src={trailerUrl}>
        </iframe>}
    </div>
  )
}

export default Row;