import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { Card } from '../components'

const Pokemons = () => {
    const {loading, data, error} = useQuery(GET_POKEMONS, {
        variables: {
            first: 50
        }
    });
    
    if (loading) return <div>Loading...</div>
    if (error) return <div>Error: `${error.message}`</div>

    return (
        <React.Fragment>
            {data && data.pokemons.map(
                pokemon => (
                    <Card key={pokemon.id} pokemon={pokemon}/>
                )
            )}
            {error && <span>Unable to get data</span>}
        </React.Fragment>
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