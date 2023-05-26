import React,{Suspense, lazy} from 'react'
import Loader from './Loader';
import Row from './Row';
import requests from "./requests";


function RowAll() {
  return (
    <div>
   <Suspense fallback= {<Loader/>}>
  
        <Row title = "Netflix Original" fetchUrl={requests.fetchNetflixOriginals} isLarger  />
        <Row title = "Trending Now"fetchUrl={requests.fetchTrending} />
        <Row title = "Top Rated"fetchUrl={requests.fetchTopRated} />
        <Row title = "Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Row title = "Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <Row title = "Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <Row title = "Romance Movies"fetchUrl={requests.fetchRomanceMovies} /> 
        <Row title = "Documantry"fetchUrl={requests.fetchDocumentaries} />
      
      </Suspense>  
    </div>
    
  )
}

export default RowAll;