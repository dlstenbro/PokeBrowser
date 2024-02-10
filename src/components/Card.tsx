import * as React from 'react'
import { 
    Button, 
    Card, 
    CardContent, 
    CardHeader, 
    CardActionArea, 
    CardActions, 
    CardMedia,
    Typography,
} from '@mui/material';

import { Pokemon } from '../services';

function PokemonCard(props : {
    key: number,
    pokemon: Pokemon
}) {

    function handleOnClick(e, data){
        const url : string 
            = `https://pokeapi.co/api/v2/pokemon/${data.name}`
        window.open(url)
    }
    return (
            <Card variant='outlined' 
                sx={{ width: 250, height: 400, boxShadow:2 }} >
                <CardHeader 
                    title={`${props.pokemon.name}` ?? "Pokemon Name"} 
                    subheader={`Pokemon #${props.pokemon.id}` ?? "Pokemon #"}/>

                <CardMedia
                    sx={{ height: 220 }}
                    image={props.pokemon.imgUrl}
                />

                <CardContent sx={{ height: 300, fontSize:16 }}>
                    
                    <CardActions sx={{ paddingTop: 2 }}>
                        <Button size="medium" onClick={(e) => {
                            handleOnClick(e, props.pokemon)
                        }}>Learn More</Button>
                    </CardActions>
                </CardContent>
    
            </Card>

    );
}

export { PokemonCard }