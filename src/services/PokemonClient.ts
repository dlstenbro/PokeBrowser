interface Pokemon {
  id: number
  name: string,
  url: string,
  imgUrl: string
}

class PokemonClient {
    constructor() {}
  
    public async getPokemon(records = [] as Array<Pokemon>, offset = 0, limit = 20) : Promise<Pokemon[]> {
      const url: string 
              = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

      let data = await fetch(url)
        .then((res) => res.json())
        .then((data) => {
          for(let i of data['results'] as Pokemon[])
          {
            let record : Pokemon = {
              id: Number(this.getPokemonIdFromUrl(i.url)),
              name: i.name,
              url: i.url,
              imgUrl: this.getPokemonSpriteUrl(i.url)
            };
            records.push(record)
          }
          return data;
        })

      // get all pokemon by paging the results
      if(data['next'] != null || records.length == data["count"])
      {
        offset = offset + limit
        this.getPokemon(records, offset, limit)
      }
      else{
        //console.log(records)
      }

      return records;
    }

    private getPokemonIdFromUrl = (url) => new URL(url).pathname.split('/').at(-2) // -1 is a unknown character? 

    private getPokemonSpriteUrl = (url) => {
      let spriteBaseUrl 
            = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon'
      let id = this.getPokemonIdFromUrl(url);
      return `${spriteBaseUrl}/${id}.png`;
    }
}
  
export { PokemonClient, Pokemon };