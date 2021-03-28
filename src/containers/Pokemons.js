import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { Card } from '../components'

const Pokemons = () => {
    const {loading, data : { pokemons = [] } = {}, error} = useQuery(GET_POKEMONS, {
        variables: {
            first: 151
        }
    });
    
    if (loading) return <div>Loading...</div>
    if (error) return <div>Error: `${error.message}`</div>

    return (
        <div className="container">
            {pokemons && pokemons.map(
                pokemon => (
                    <Card key={pokemon.id} pokemon={pokemon} />
                )
            )}
            {error && <span>Unable to get data</span>}
        </div>
    )
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