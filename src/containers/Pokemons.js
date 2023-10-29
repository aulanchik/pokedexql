import React, { Suspense } from "react";
import { getPokemons } from "../hooks";
import { Card } from "../components";

const Pokemons = () => {
  const { error, pokemons } = getPokemons(125);

  const renderPokemons = () => {
    return pokemons?.map((pokemon) => (
      <Card key={pokemon.id} pokemon={pokemon} />
    ));
  };

  if (error) {
    return (
      <div className="container container_text">
        <p>Error occurred. {error.message}</p>
      </div>
    );
  }

  return (
    <div className="container">
      <Suspense fallback={<div>Loading...</div>}>{renderPokemons()}</Suspense>
    </div>
  );
};

export default Pokemons;
