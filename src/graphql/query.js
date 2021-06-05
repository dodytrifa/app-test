import gql from'graphql-tag'

export const GET_POKEMONS = gql`
  query pokemons($first: Int!) {
    pokemons(first: $first) {
      name 
      image
      types
    }
  }
`

export const GET_DETAIL = gql`
  query pokemon($name: String) {
    pokemon(name: $name) {
      id
      number
      name
      maxHP
      maxCP
      image
      classification
      weight {
        minimum
        maximum
      }
      attacks {
        special {
          name 
          damage
        }
      }
      evolutionRequirements {
        amount
        name
      }
      types
      weaknesses
      fleeRate
      resistant
    }
  }
`