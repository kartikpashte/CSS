import react from 'react'
import games from '../assets/games.json'
const Games = () => {
    let base = "Projects/test-app/src/assets/"
    return(<>

    
        <div className='container'>
        <h1>List of Games</h1>
            {games.map((game)=>{
                return(
                    <div className='card' key={game.id}>
                        <h2>{game.name}</h2>
                        <img src={game.pictures} alt="" />
                        <p>{game.description}</p>
                
                    </div>
                )
            })}
        </div>

    </>)
}

export default Games