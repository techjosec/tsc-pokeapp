const container : HTMLElement | any = document.getElementById(`app`);

interface IPokemon {
    id      : number;
    name    : string;
    image   : string;
    type    : string;
}

const showPokemon = ( pokemon: IPokemon ): void => {

    const pokemonCard: string = `
        <div class="card">
            <span class="card-id">#${pokemon.id} </span>
            <img loading="lazy" width="150" height="150" class="card-image" src=${pokemon.image} alt=${pokemon.name} />
            <h1 class="card-name">${pokemon.name}</h1>
            <span class="card-details">${pokemon.type}</span>
        </div>
    `;

    container.innerHTML += pokemonCard;
};

const getPokemon = async ( id: number ): Promise<void> => {

    const data          : Response = await fetch( `https://pokeapi.co/api/v2/pokemon/${id}` )
    const pokemon       : any = await data.json();
    const pokemonType   : string = pokemon.types.map( ( poke: any ) => poke.type.name).join(`, `);
    const transformedPokemon = {
        id      : pokemon.id,
        name    : pokemon.name,
        image   : `${pokemon.sprites.front_default}`,
        type    : pokemonType,
    };

    showPokemon( transformedPokemon );
}

const fetchData = ( ): void => {
    const pokemonsToGet = [...new Array( 100 )].map(() => Math.round(Math.random() * 100))
    for ( let i = 1; i < 100; i++ ) 
    {
        getPokemon( pokemonsToGet[i] );
    }
}

fetchData();