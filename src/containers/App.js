import React from 'react'
import { Header } from '../components'
import Pokemons from './Pokemons'

const App = () => {
  return (
    <div className="container">
      <Header/>
      <Pokemons/>
    </div>
  )
}

export default App;