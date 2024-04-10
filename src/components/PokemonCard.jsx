function PokemonCard(){
  const pokemon = pokemonList[0];
    return <figure>
      
      {pokemon.imgSrc ?(
        <img className="img-card" src={pokemon.imgSrc} alt={pokemon.name}/>
        ):
        (<p>???</p>)}
        <figcaption className="caption">{pokemon.name}</figcaption>

    </figure>
 }
 const pokemonList = [
    {
      name: "Bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];

export default PokemonCard;