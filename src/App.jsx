import { useState } from 'react';
import './App.css'
import { 
  PokemonClient, 
}
from './services'

import { PokemonCard, PokemonGrid } from './components';
import { Container, Card, AppBar } from '@mui/material'

const createPokemonCards = (newData) => {
  let cardsUI = data.map((e) => 
    <PokemonCard
      key={e.name} 
      contentData={e.url} 
      headerData={e.name} />
  )

  console.log(cardsUI);
  return cardsUI;
}

function App() {
  const [cards, setCards] = useState([]);

  let client = new PokemonClient()

  return (
    <>
      <AppBar>
        PokeBrowser
      </AppBar>
      
        <PokemonGrid>
          {
            cards.map(card => {
              <Card key={card.id}>{card.name}</Card>
            })
          }
        </PokemonGrid>
    </>
  );
};

export default App