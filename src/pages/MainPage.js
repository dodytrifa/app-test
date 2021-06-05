import React, {useState} from 'react'
import Filter from '../components/Filter'
import { GET_POKEMONS } from '../graphql/query'
import { useQuery } from '@apollo/react-hooks';
import { SinglePokemon } from '../components/SinglePokemon'
import { Link } from 'react-router-dom'


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
      <Link to="/" className="link"><h1>Pokemon App</h1></Link> 
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

