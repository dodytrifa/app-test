import React from 'react'
import { useQuery } from '@apollo/react-hooks';
import { GET_POKEMONS } from '../graphql/query'
import { SinglePokemon } from '../components/SinglePokemon'
import Filter from '../components/Filter'

export function MainPage(){
  const { data : { pokemons = [] } = {}} = useQuery(GET_POKEMONS, {
      variables: { first: 30 }
    })
  
  return (
    <>
      <h1>Pokemon App</h1>
      <div className="filter">
        <h2>Filter the Pokemon: </h2>
        <Filter />
      </div>
    <div className="container">
      {
        pokemons && pokemons.map(pokemon => <SinglePokemon key={pokemon.id} pokemon={pokemon}/>)
      }
    </div>  

    </>
  )
}

