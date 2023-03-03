import React, { useState ,useEffect} from 'react'

import  { instance } from "./axios";

// import Youtube from "react-youtube";
// import movieTrailer from "movie-trailer"

const base_url = "https://image.tmdb.org/t/p/original/"

function Row({title,fetchUrl,isLarger}) {
    const [movies, setMovies]=useState([]);
    // const [trailerUrl, setTrailerUrl]=useState();

    // we need something which run at specific condition

    useEffect(() => {
// if [] it will run once when row load.
      async function fetchData(){
        const request = await instance.get(fetchUrl);
        setMovies(request.data.results)
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

    const handleClick =(movies)=>{
      // if(trailerUrl){
      //   setTrailerUrl("");
      // }
      // else{
      //   movieTrailer(movies?.name || "")
      //   .then((url)=>{
      //     // to get string after "?" in https://www.youtube.com/watch?v=XtmTasffgggU
      //     const urlParam = new URLSearchParams(new URL(url).search);
      //     setTrailerUrl(urlParam.get('v'));
      // })
      // .catch((error)=>{
      //   console.log(error);
      // })
      
      // }
    }
    // console.log(movies);
    
//here we have to use [fetchUrl] always bcz it is a variable which is used in use-effect and coming from outside.

  return (
    <div className='row'>
        <h2>{title}</h2>
        <div className='row_posters'>
          {movies.map(e=>(
            
            <img src={`${base_url}${isLarger? e.poster_path : e.backdrop_path}`} className={isLarger ? "poster_large" : "poster"} 
            onClick={handleClick(movies)}
            key={e.id} alt={e.name}/>
          ))}
        
        </div>
        {/* {trailerUrl && <Youtube videoId={trailerUrl} opts={opt} ></Youtube>} */}
    </div>
  )
}

export default Row;