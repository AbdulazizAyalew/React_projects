import React from "react";
import { useSearchParams } from "react-router-dom";

function Search({movies}){
    const [searchparam] = useSearchParams();
    const Genre = searchparam.get("Genre")

    return (
      <div>
        <p>Current Genre: {Genre}</p>
        {movies.map(
          (movie) =>
            movie.Genre == Genre && (
              <>
                <img src={movie.image} alt={movie.name} width="200" />
                <p>{movie.name}</p>
              </>
            )
        )}
      </div>
    );
}
export default Search