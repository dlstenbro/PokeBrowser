interface Pokemon {
  id: number
  name: string,
  url: string,
  imgUrl: string
}

class PokemonClient {
    constructor() {}
  
    public async getPokemon() : Promise<Pokemon[]> {
      const url: string = "https://pokeapi.co/api/v2/pokemon";

      let records  = [] as Array<Pokemon>;

      await fetch(url)
        .then((res) => res.json())
        .then((data) => {
          for(let i of data['results'] as Pokemon[])
          {
            let record : Pokemon = {
              id: Number(this.getPokemonIdFromUrl(i.url)),
              name: i.name,
              url: i.url,
              imgUrl: this.getPokemonSpritUrl(i.url)
            };

            records.push(record)
          }
        })

      return records;
    }

    private getPokemonIdFromUrl = (url) => new URL(url).pathname.split('/').at(-2) // -1 is a unknown character? 

    private getPokemonSpritUrl = (url) => {
      let spriteBaseUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon'
      let id = this.getPokemonIdFromUrl(url);
      return `${spriteBaseUrl}/${id}.png`;
    }
}
  
export { PokemonClient, Pokemon };