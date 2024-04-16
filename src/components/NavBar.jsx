const NavBar =({ previousClick, nextClick, pokemonIndex, pokemonList }) => {
    return (
<>
<button 
onClick ={previousClick}
disabled={pokemonIndex === 0}>
    Précédent
</button>
<button 
onClick ={nextClick}
disabled={pokemonIndex === pokemonList.length -1}>
    Suivant
    </button>
    </>
    );
};

export default NavBar;
