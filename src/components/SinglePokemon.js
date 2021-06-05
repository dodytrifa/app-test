import { Link } from 'react-router-dom'

export function SinglePokemon({pokemon}) {

  return (
    
    <div className="pokemon">
      <Link to={`/details/${pokemon.name}`} className="link" >
        <div className="pokemon_image">
          <img src={pokemon.image} alt={pokemon.name} />
        </div>
        <div className="pokemon_name">
          <p>{pokemon.name}</p>
        </div>
      </Link>
    </div>
  )
}