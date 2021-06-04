import { Link } from 'react-router-dom'


export function SinglePokemon({pokemon}) {

  return (
    <div className="pokemon">
      <Link to={`/details/${pokemon.name}`}>
        <div className="pokemon_image">
          <img src={pokemon.image} alt={pokemon.name} />
        </div>
        <div className="pokemon_name">
          <p>{pokemon.name}</p>
          {/* <p>{pokemon.classification}</p> */}
          {/* <p>{pokemon.weight.minimum}</p> */}
          {/* <p>{pokemon.weight.maximum}</p> */}
          {/* <p>{pokemon.types}</p> */}
        </div>
      </Link>
    </div>
  )
}