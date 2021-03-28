import React from 'react'
import { Header } from '../components'
import Pokemons from './Pokemons'

const App = () => {
  return (
    <React.Fragment>
      <header>
        <Header>PokeDex</Header>
      </header>
      <main>
        <Pokemons/>
      </main>
    </React.Fragment>
  )
}

export default App;