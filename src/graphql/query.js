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
      name
      maxHP
      maxCP
      image
      types
      number
      fleeRate
      resistant
      weaknesses
      classification
      weight {
        minimum
        maximum
      }
      height {
        minimum
        maximum
      }
      attacks {
        fast {
          name
          damage
        }
        special {
          name
          damage
        }
      }
      evolutionRequirements {
        name
      }
    }
  }
`