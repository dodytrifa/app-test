import React from 'react'
import { useQuery } from '@apollo/react-hooks';
import { GET_POKEMONS } from '../graphql/query'
import { SinglePokemon } from '../components/SinglePokemon'

export function MainPage(){
  const { data : { pokemons = [] } = {}} = useQuery(GET_POKEMONS, {
      variables: { first: 20 }
    })
  

  return (
    <div className="pokemons">
      {
        pokemons && pokemons.map(pokemon => <SinglePokemon key={pokemon.id} pokemon={pokemon}/>)
      }

    </div>  
  )
}

