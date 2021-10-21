import React from "react";
import Row from "./Row";
import Banner from "./Banner";
import "./App.css";
import requests from "./requests";
import Nav from "./Nav";

function App() {
  return (
    <div className = "app" > {
      /* Navbar */ } <Nav > </Nav> {
      /* Banner */ } 
    <Banner> </Banner> 
    <Row title = "NETFLIX ORIGINALS"
    fetchUrl = {
      requests.fetchNetflixOriginals
    }
    isLargeRow >
    </Row> <
    Row title = "Trending Now"
    fetchUrl = {
      requests.fetchTrending
    } > </Row> 
    <Row title = "Top Rated"
    fetchUrl = {
      requests.fetchTopRated
    } > </Row> <
    Row title = "Action Movies"
    fetchUrl = {
      requests.fetchActionMovies
    } > </Row> 
    <Row title = "Comedy Movies"
    fetchUrl = {
      requests.fetchComedyMovies
    } > </Row> 
    <Row title = "Romance Movies"
    fetchUrl = {
      requests.fetchRomanceMovies
    }> </Row> 
    <Row title = "Horror Movies"
    fetchUrl = {
      requests.fetchHorrorMovies
    } > </Row> 
    <Row title = "Trending Now"
    fetchUrl = {
      requests.fetchTrending
    } > </Row> 
    </div>
  );
}

export default App;