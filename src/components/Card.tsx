import * as React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader'

function PokemonCard(props : {
    headerData: string,
    contentData: string
}) {
    return (
        <Card variant='outlined'>
            <CardHeader>
                {props.headerData ?? "Empty Header"}
            </CardHeader>
            <CardContent>
                {props.contentData ?? "Empty Content"}
            </CardContent>
        </Card>
    );
}

export { PokemonCard }