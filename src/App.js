import React from "react";
import './App.css';
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Navbar from "./Navbar";
import Notsigned from "./Notsigned";




function App() {
  let userDetail = JSON.parse(localStorage.getItem("userDetails"))
  
  return (
    <div className="App">
      <Navbar />
      {userDetail ==null  ? <Notsigned /> :
      <>
      <Banner/>
      <Row title = "Netflix Original" fetchUrl={requests.fetchNetflixOriginals} isLarger />
      <Row title = "Trending Now"fetchUrl={requests.fetchTrending}/>
      <Row title = "Top Rated"fetchUrl={requests.fetchTopRated}/>
      <Row title = "Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title = "Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title = "Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title = "Romance Movies"fetchUrl={requests.fetchRomanceMovies}/> 
      <Row title = "Documantry"fetchUrl={requests.fetchDocumentaries}/>
      </>
      }
    </div>
  );
}

export default App;


// c366e6afa97f35239d05c1b231db647d

// 

