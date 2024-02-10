import * as React from 'react'
import Grid from '@mui/material/Grid';


function PokemonGrid(props: {
    rowSpacing: number,
    colSpacing: number
}, data) {
    return (
        <Grid 
            rowSpacing={props.rowSpacing} 
            columnSpacing={props.colSpacing}>
                {data}
        </Grid>
    )
}
    
export { PokemonGrid }