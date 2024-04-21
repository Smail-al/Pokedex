function NavBar({ previousClick, nextClick, pokemonIndex, pokemonList, setPokemonIndex }){
    const handlePokemonClick = (index) => {
        setPokemonIndex(index);
    }   
    return (
        <div className="navbar">
            <button onClick={previousClick} disabled={pokemonIndex === 0}>
                Précédent
            </button>
            {pokemonList.map((pokemon, index) => (
                <button key={index} onClick={() => handlePokemonClick(index)}>
                    {pokemon.name}
                </button>
            ))}
            <button onClick={nextClick} disabled={pokemonIndex === pokemonList.length - 1}>
                Suivant
            </button>
        </div>

    );
};

export default NavBar;
