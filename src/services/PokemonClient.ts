// https://pokeapi.co/api/v2/pokemon

class PokemonClient {
    constructor() {}
  
    public async getPokemon() : Promise<Pokemon[]> {
      const url: string = "https://pokeapi.co/api/v2/pokemon";

      const data = await fetch(url)
        .then((res) => res.json());
      return data['results'];
    }
}

interface Pokemon {
  name: string,
  url: string
}
  
export { PokemonClient, Pokemon };

/*
  
*/