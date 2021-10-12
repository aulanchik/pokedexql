import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { Card } from '../components'

const Pokemons = () => {

    const { loading, error, data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
        variables: {
            first: 151
        }
    });

    if (loading) return (<div className="container container_text"><p>Loading...</p></div>)

    if (pokemons && pokemons.length > 0) {
        return (
            <div className="container">
                {pokemons.map(pokemon => <Card key={pokemon.id} pokemon={pokemon} />)}
            </div>
        )
    }

    if (error) {
        return (
            <div className="container container_text">
                <p>Error ocurred.${error.message}</p>
            </div>
        )
    }
}

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

export default Pokemons;
