import React from "react";
import { useParams } from "react-router-dom";

function MovieDetail({movies}) {
    const {id} = useParams();
    var movie = movies[parseInt(id)];
    return(
        <>  
            <p>Now showing the Detail of Movie {id}</p>
            <img src={movie.image} alt={movie.name} width="200"/>
            <p>{movie.name}</p>
            <p>Genre: {movie.Genre}</p>
            <p>Rating: {movie.Rating}</p>
            <p>Total Seasons: {movie.Seasons}</p>
        </>
    )
}
export default MovieDetail;
