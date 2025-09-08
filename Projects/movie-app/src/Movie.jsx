import React from 'react'
import MovieList from "./data.json"

const Movie = () => {
  
    
return (
    <>
    <div className="movies">

    {
        MovieList.map((movie)=>{
            return(
            <div className="card">
            <img src={movie.Poster} alt="" />
            <div className="lower">
                <h1>{movie.Title}</h1>
                <p>Year :{movie.Year}</p>

            </div>
        </div>
            )
        })
    }

        

    </div>
    </>
)

}

export default Movie