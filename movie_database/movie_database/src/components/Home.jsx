import React from "react";
import "../App.css"
import { NavLink } from "react-router-dom";



function Home({movies}){
    return (
      <>
        <form action="/search">
          <input type="text" name="Genre"/>
          <button type="submit">Filter by Genre</button>
        </form>

        <p>Welcome To My Movie List</p>
        <div>
          {movies.map((movie, index) => (
            <div className="Movies" key={index}>
              <NavLink to={`/movie/${index}`}>
                <img src={movie.image} alt={movie.name} width="200" />
                <p>{movie.name}</p>
              </NavLink>
            </div>
          ))}
        </div>
      </>
    ); 
        
        
}
export default Home