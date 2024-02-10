import { useEffect, useState } from 'react';
import './App.css'
import { 
  PokemonClient, 
}
from './services'

import { PokemonCard, PokemonGrid } from './components';
import { AppBar } from '@mui/material'

function App() {
  const [cards, setCards] = useState([
    {key: 1, name: 1, url: 'card1'},
    {key: 2, name: 2, url: 'card2'},
    {key: 3, name: 3, url: 'card3'},
    {key: 4, name: 4, url: 'card4'},
  ]);

  /* 
    initial render 

    Using list on the dependencies
    means only render on the first load
  */
  useEffect(() => {
    let client = new PokemonClient();

    client.getPokemon().then((e) => {
      setCards(e);  // update state of cards with new data
    })

  }, []) // dependencies

  return (
    <>
      <AppBar>
        PokeBrowser
      </AppBar>
      <PokemonGrid 
        spacing={2} 
        data={cards} />
    </>
  );
};

export default App