import { useQuery } from '@apollo/react-hooks';
import { GET_DETAIL } from '../graphql/query'
import { useParams } from 'react-router-dom'

export default function DetailPage() {
  const {name} = useParams()

  const { data : { pokemon = {} } = {}} = useQuery(GET_DETAIL, {
    variables: { name: name }
  })

  return (
    <>
    <h1>Pokemon Details Page</h1>
    <div className="detail">
      <div className="pokemon_image">
        <img src={pokemon.image} alt={pokemon.name} />
      <p>Name: {name}</p>
      <p>Pokemon Class: {pokemon.classification}</p>
      {/* <p>Weight Range: {pokemon.weight.minimum} </p>
      <p>Weight Range: {pokemon.weight.maximum} </p> */}
      <p>MaxHP: {pokemon.maxHP}</p>
      {/* <p>Pokemon Evolution: {pokemon.evolutionRequirements}</p> */}
      <p>Pokemon Class: {pokemon.classification}</p>
      <p>Pokemon Class: {pokemon.classification}</p>
      </div>
    </div>
    </>
  )
}
