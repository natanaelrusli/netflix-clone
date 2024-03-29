import React from "react";
import Row from "./Row";
import Banner from "./Banner";
import "./App.css";
import requests from "./requests";
import Nav from "./Nav";

function App() {
  return (
    <div className = "app" >
      <Nav/> 
      <Banner/>
      <Row
        title = "NETFLIX ORIGINALS"
        fetchUrl = {
          requests.fetchNetflixOriginals
        }
        isLargeRow
      ></Row>

      <Row
        title = "Trending Now"
        fetchUrl = {
          requests.fetchTrending
        }
      ></Row> 

      <Row
        title = "Top Rated"
        fetchUrl = {
          requests.fetchTopRated
        }
      ></Row>

      <Row
        title = "Action Movies"
        fetchUrl = {
          requests.fetchActionMovies
        }
      ></Row>

      <Row
        title = "Comedy Movies"
        fetchUrl = {
          requests.fetchComedyMovies
        }
      ></Row>
    </div>
  );
}

export default App;