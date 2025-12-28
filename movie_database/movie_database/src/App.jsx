import React from "react"
import {Routes,Route,BrowserRouter} from 'react-router-dom'
import Home from "./components/Home"
import Search from "./components/Search"
import MovieDetail from "./components/MovieDetail"

const movies = [
  {
    name: "Stranger Things",
    Genre: "Sci-fi , Horror",
    Seasons: "5",
    Rating: "10 / 10",
    image: "/images/Stranger_things.jpg",
  },
  {
    name: "Power",
    Genre: "Drama",
    Seasons: "6",
    Rating: "9.8 / 10",
    image: "/images/Power.jpg",
  },
  {
    name: "Game of Thrones",
    Genre: "Drama ,Thriller",
    Seasons: "8",
    Rating: "9.9 / 10",
    image: "/images/Got.jpg",
  },
];

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home  movies={movies}/>}/>
        <Route path="/movie/:id" element={<MovieDetail movies={movies}/>}/>
        <Route path="/search" element={<Search/>}/>
      </Routes>
    </BrowserRouter>
    // <Movies 
    // movies = {movies}
    // />
  )
}

export default App
