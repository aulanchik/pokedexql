import React from 'react'

const Card = ({ pokemon }) => {
    return (
        <div className="pokemon">
            <div className="pokemon__name">
                <p>{pokemon.name}</p>
            </div>
            <div className="pokemon__meta">
                <span>{`${pokemon.maxHP} HP`}</span>
                <span>{`${pokemon.maxCP} CP`}</span>
            </div>
            <div className="pokemon__img">
                <img src={pokemon.image} alt={pokemon.name} />
            </div>
            <div className="pokemon__attacks">
                {pokemon.attacks.special.slice(0, 3).map(
                    attack => (
                        <span key={`${attack.name}-${attack.damage}`}>{attack.name}{' '}</span>
                    )
                )}
            </div>
        </div>
    )
}

export default Card;