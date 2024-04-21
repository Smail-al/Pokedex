import './App.css'
import { useState } from 'react';
import PokemonCard from './components/PokemonCard'
import NavBar from './components/NavBar';
import { useEffect } from 'react';

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
  ];

  useEffect(() => {
    alert("Hello pokemon trainer :)")
  },
  []);

  const handlePreviousClick = () =>{
    setPokemonIndex(prevIndex => prevIndex -1);
  };

  const handleNextClick =() => {
    setPokemonIndex(prevIndex => prevIndex +1);
  };

  return (
    <div>
    <PokemonCard pokemon ={pokemonList[pokemonIndex]}
    />
   <NavBar
   previousClick={handlePreviousClick}
   nextClick={handleNextClick}
   pokemonIndex={pokemonIndex}
   pokemonList={pokemonList}
   setPokemonIndex={setPokemonIndex}
   />
   </div>
  );
  };


export default App
