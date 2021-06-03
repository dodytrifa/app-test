
export function SinglePokemon({pokemon}) {

  return (
    <div className="pokemoncard">
      <div className="pokemon_image">
        <img src={pokemon.image} alt={pokemon.name} />
      </div>
      <div className="pokemon_name">
        <p>{pokemon.name}</p>
      </div>
    </div>
  )
}