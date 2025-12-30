import React from "react";
import { useSearchParams } from "react-router-dom";

function Search({movies}){
    const [searchparam] = useSearchParams();
    const Genre = searchparam.get("Genre").toLowerCase();

    const count_filtered = movies.reduce(
  (count, movie) => movie.Genre.toLowerCase() === Genre ? count + 1 : count,
  0
);


    if(count_filtered == 0){
      return <p>No Movie Found!!</p>
    }
    else{
      return (
        <div>
          <p>Current Genre: {Genre}</p>
          {movies.map(
            (movie) =>
              movie.Genre.toLowerCase() == Genre && (
                <>
                  <img src={movie.image} alt={movie.name} width="200" />
                  <p>{movie.name}</p>
                </>
              )
          )}
        </div>
      );
    }
    
}
export default Search