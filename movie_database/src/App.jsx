import React from "react"
import {Routes,Route,BrowserRouter} from 'react-router-dom'
import Home from "./components/Home"
import Search from "./components/Search"
import MovieDetail from "./components/MovieDetail"

const movies = [
  {
    name: "Stranger Things",
    Genre: "Horror",
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
    name: "Arcane",
    Genre: "Adventure",
    Seasons: "2",
    Rating: "10 / 10",
    image: "/images/Arcane.jpg",
  },
];

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home  movies={movies}/>}/>
        <Route path="/movie/:id" element={<MovieDetail movies={movies}/>}/>
        <Route path="/search" element={<Search movies={movies}/>}/>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
