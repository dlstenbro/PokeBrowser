import * as React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader'
import { CardActionArea, CardActions, CardMedia } from '@mui/material';
import Button from '@mui/material/Button';
import Link from '@mui/material';



function PokemonCard(props : {
    key: number,
    headerData: string,
    contentData: string,
    imgUrl : string ,
    imgTitle ?: string,
    url: string
}) {

    return (
            <Card variant='outlined' 
                sx={{ width: 250, height: 400, boxShadow:2 }} >

                <CardMedia
                    sx={{ height: 275 }}
                    image={props.imgUrl}
                    title={props.imgTitle}
                />

                <CardContent sx={{ height: 300, fontSize:16 }}>

                    {props.contentData ?? "Empty Content"}
                    
                    <CardActions sx={{ paddingTop: 2 }}>
                        <Button size="medium">Learn More</Button>
                    </CardActions>
                </CardContent>
    
            </Card>

    );
}

export { PokemonCard }