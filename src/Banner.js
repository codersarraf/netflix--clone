import React, { useEffect, useState } from 'react'
import requests from './requests';
import { instance } from './axios';

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(()=>{
        async function fetchDatas(){
            const req = await instance.get(requests.fetchNetflixOriginals);
            setMovie(req.data.results[Math.floor(Math.random()*req.data.results.length)]);
            return req;
        }
        fetchDatas();

    },[]);

    function truncate(str,n){
        return str?.length > n ? str.substr(0,n-1) + "..." : str;
    }

  return (
    <header className='banner'
        style={{
            backgroundSize:"cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`}} >

        <div className='banner_data'>
            <h1 className='banner_title'>{movie?.title || movie?.name || movie?.original_name}</h1>

            {/* <div className='buttons'>
                <button className='button' >Play</button>
                <button className='button' >My List</button>
            </div> */}

            <h1 className='banner_desc'>
                {truncate(movie?.overview,150)}
            </h1>
        </div>
        <div className="banner_fade" />



    </header>
  )
}

export default Banner;