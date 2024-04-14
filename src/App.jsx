import './App.css'
import { useState } from 'react';
import PokemonCard from './components/PokemonCard'


function App (){
  const [pokemonIndex, setPokemonIndex] = useState(0);
  const pokemonList = [
    {
      name: "Bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
  {
    name: "Charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "Squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "Pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
      name: "mew",
    },
  ]

  return (
    <div>
    <PokemonCard pokemon ={pokemonList[pokemonIndex]}
    />
    <button onClick={() => setPokemonIndex(prevIndex => prevIndex - 1)} disabled={pokemonIndex === 0}>
      Précédent
    </button>
    <button onClick={() => setPokemonIndex(prevIndex => prevIndex + 1)} disabled={pokemonIndex === pokemonList.length - 1}>
      Suivant
    </button>    </div>
     
  )
}

export default App
