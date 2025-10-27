import React from 'react'
import MovieList from "./Data.json"

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

                <h2>Name :{movie.Title}</h2>
                <p>Year :{movie.Year}</p>
                <button onClick={()=>{alert(`🎬Title : ${movie.Title}\n📅Year : ${movie.Year}`)}}>Read more</button>
                </div>

            </div>)})
    }


    </div>
    </>
)

}

export default Movie