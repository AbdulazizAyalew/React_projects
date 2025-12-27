import React from "react";
import "../App.css"


var movies = [
  {
    name: "Stranger Things",
    Genre: "Sci-fi,Horror",
    Seasons: "5",
    Rating: "10/10",
    image: "/images/Stranger_things.jpg",
  },
  {
    name: "Power",
    Genre: "Drama",
    Seasons: "6",
    Rating: "9.8/10",
    image: "/images/Power.jpg",
  },
  {
    name: "Game of Thrones",
    Genre: "Drama, Thriller",
    Seasons: "8",
    Rating: "9.9/10",
    image: "/images/Got.jpg",
  },
];
function Home(){
    return (
      <>
        <p>Welcome To My Movie List</p>
        <div>
          {movies.map((movie) => (
            <div className="Movies">
              <img src={movie.image} alt={movie.name} width="200" />
              <p>{movie.name}</p>
            </div>
          ))}
        </div>
      </>
    ); 
        
        
}
export default Home