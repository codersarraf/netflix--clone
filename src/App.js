import React from "react";
import './App.css';
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner"
import Navbar from "./Navbar"

function App() {
  return (
    <div className="App">
      
      <Navbar />
      <Banner />
      <Row title = "Netflix Original" fetchUrl={requests.fetchNetflixOriginals} isLarger />
      <Row title = "Trending Now"fetchUrl={requests.fetchTrending}/>
      <Row title = "Top Rated"fetchUrl={requests.fetchTopRated}/>
      <Row title = "Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title = "Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title = "Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title = "Romance Movies"fetchUrl={requests.fetchRomanceMovies}/> 
      <Row title = "Documantry"fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;


// c366e6afa97f35239d05c1b231db647d

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCZHFRpWPlnn1mzY6eF0wdBvfytiOd-yu0",
//   authDomain: "netflix-clone-5cc92.firebaseapp.com",
//   projectId: "netflix-clone-5cc92",
//   storageBucket: "netflix-clone-5cc92.appspot.com",
//   messagingSenderId: "913268112317",
//   appId: "1:913268112317:web:685846b96085fce4dbb0d4",
//   measurementId: "G-8Y2Y2QTPTS"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


// firebase login
// firebase init
// firebase deploy
