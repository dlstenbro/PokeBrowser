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

  useEffect(() => {

    let client = new PokemonClient();
    let data = client.getPokemon().then((e) => {
      console.log(e)
      setCards(e);
    })

  }, [])

  return (
    <>
      <AppBar>
        PokeBrowser
      </AppBar>
      <PokemonGrid 
        spacing={1} 
        data={cards} />
    </>
  );
};

export default App