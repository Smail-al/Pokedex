
import PropTypes from "prop-types";

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
 PokemonCard.propTypes = {
  pokemon: PropTypes.shape ({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.element.isRequired,
  }).isRequired,
 }
 

export default PokemonCard;