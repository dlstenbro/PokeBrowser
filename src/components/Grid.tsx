import * as React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { Pokemon } from '../services';
import { PokemonCard } from './Card';
import { Container } from '@mui/material';

function PokemonGrid(props:{
    spacing : number, 
    data : Array<Pokemon>
}) {
    return (
        <Container sx={{ flexGrow: 1 }}>
            <Grid container spacing={props.spacing} rowSpacing={20}>
                {props.data.map(e => (
                        <Grid padding={2}>
                            <PokemonCard 
                                key={e.id} 
                                headerData={e.name} 
                                contentData={e.name}
                                imgUrl={e.imgUrl} 
                                imgTitle={e.name}
                                url={e.url}
                                />
                        </Grid>
                    ))}
            </Grid>
      </Container>
    )
}
    
export { PokemonGrid }