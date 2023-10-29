import { useQuery, gql } from "@apollo/client";

const GET_POKEMONS = gql`
  query pokemons($first: Int!) {
    pokemons(first: $first) {
      id
      name
      image
      maxHP
      maxCP
      attacks {
        special {
          name
          damage
        }
      }
    }
  }
`;

/**
 * Retrieves a list of Pokemons using the specified limit.
 *
 * @param {number} limit - The maximum number of Pokemons to retrieve.
 * @return {Object} The query object containing the retrieved Pokemons.
 */
const GetPokemons = (limit) => {
  const { loading, error, data } = useQuery(GET_POKEMONS, {
    variables: {
      first: limit,
    },
  });

  const pokemons = data?.pokemons || [];

  return { loading, error, pokemons };
};

export default GetPokemons;
