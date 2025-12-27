import React from "react"
import {Routes,Route,BrowserRouter} from 'react-router-dom'
import Home from "./components/Home"
import Search from "./components/Search"
import MovieDetail from "./components/MovieDetail"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movie/:id" element={<MovieDetail/>}/>
        <Route path="/search" element={<Search/>}/>
      </Routes>
    </BrowserRouter>
    // <Movies 
    // movies = {movies}
    // />
  )
}

export default App
