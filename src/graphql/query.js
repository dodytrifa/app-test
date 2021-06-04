import gql from'graphql-tag'

export const GET_POKEMONS = gql`
  query pokemons($first: Int!) {
    pokemons(first: $first) {
      id
      name
      maxHP
      image
      types
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
      
    }
  }
`

export const GET_DETAIL = gql`
  query pokemon($name: String) {
    pokemon(name: $name) {
      id
      name
      maxHP
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
    }
  }
`