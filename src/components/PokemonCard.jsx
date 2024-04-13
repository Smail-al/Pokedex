
function PokemonCard({pokemon}){
    return ( 
    <figure>

      {pokemon.imgSrc ?(
        <img className="img-card" src={pokemon.imgSrc} alt={pokemon.name}/>
        ):
        (<p>???</p>)}
        <figcaption className="caption">{pokemon.name}</figcaption>

    </figure>);
    
    
 }
 

export default PokemonCard;