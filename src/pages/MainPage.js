import React, {useState} from 'react'
import { useQuery } from '@apollo/react-hooks';
import { GET_POKEMONS } from '../graphql/query'
import { SinglePokemon } from '../components/SinglePokemon'
import Filter from '../components/Filter'

export function MainPage(){
  const { data : { pokemons = [] } = {}} = useQuery(GET_POKEMONS, {
      variables: { first: 3000 }
  })
  
  const [filterKey, setFilterKey] = useState('')

  const getFilter = ((e) => {
    setFilterKey(e.target.value)
  })

  const filter = pokemons.filter(pokemon => {
    if (!filterKey) {
      return pokemon
    } else if (pokemon.types.includes(filterKey)) {
      return pokemon
    } else {
      return ""
    }
  }) 

  return (
    <>
      <h1>Pokemon App</h1>
      <div className="filter">
        <h2>Filter the Pokemon: </h2>
        <Filter getFilter={getFilter} />
      </div>
      <div className="container">
        {
          filter && filter.map(pokemon => <SinglePokemon key={pokemon.id} pokemon={pokemon}/>)
        }
      </div>  
    </>
  )
  
}

