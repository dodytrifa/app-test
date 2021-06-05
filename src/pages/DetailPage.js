import { useQuery } from '@apollo/react-hooks';
import { GET_DETAIL } from '../graphql/query'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function DetailPage() {
  const {name} = useParams()

  const { data : { pokemon = {} } = {}} = useQuery(GET_DETAIL, {
    variables: { name: name }
  })


  return (
    <>
     <Link to="/" className="link"> <h1>Pokemon App</h1></Link> 
      <h2>Pokemon Details Page</h2>
      <div className="detail">
        <div className="pokemon_image_detail">
          <img src={pokemon.image} alt={pokemon.name} />
          <p>#{pokemon.number}</p>
          <h3>Name: {name}</h3>
          <p><strong>MaxHP:</strong> {pokemon.maxHP}</p>
          <p><strong>MaxCP:</strong> {pokemon.maxCP}</p>
          <p><strong>FleeRate:</strong> {pokemon.fleeRate}</p>
          <p><strong>Pokemon Type:</strong> {pokemon.types?.join(', ')}</p>
          <p><strong>Height Range:</strong> {pokemon.height?.minimum} - {pokemon.height?.maximum}</p>
          <p><strong>Classification:</strong> {pokemon.classification}</p>
          <p><strong>Weight Range:</strong> {pokemon.weight?.minimum} - {pokemon.weight?.maximum}</p>
          <p><strong>Weaknesses:</strong> {pokemon.weaknesses?.join(', ')}</p>
          <p><strong>Resistant:</strong> {pokemon.resistant?.join(', ')}</p>
          <p><strong>Evolution Requirements:</strong> {pokemon.evolutionRequirements?.name}</p>
          <p><strong>Fast Attacks:</strong> 
            {
            pokemon.attacks.fast?.map(el =>{

              return (
                <p>{el.name}, Damage ({el.damage})</p> 
              )
            }
            )
            }
          </p>
          <p><strong>Special Attacks:</strong> 
            {
            pokemon.attacks.special?.map(el =>{

              return (
              <p>{el.name}, Damage ({el.damage})</p> 
              )
            }
            )
            }
          </p>
        </div>
      </div>
    </>
  )
}
