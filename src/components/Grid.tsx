import * as React from 'react'
import { useState } from 'react';

import { Pokemon } from '../services';
import { PokemonCard } from './Card';
import { Grid, Stack, TablePagination } from '@mui/material';

function PokemonGrid(props:{
    spacing : number, 
    data : Array<Pokemon>
}) {

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    }

    return (
        <Stack alignItems={'center'}>

            <TablePagination
                component="div"
                count={props.data.length}
                key={155} 
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                sx={{ paddingBottom: 5}}
                showFirstButton
                showLastButton
            />
            <Grid
                key={156}
                container 
                spacing={props.spacing} 
                justifyContent="center" >

                {props.data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(e => (
                    <Grid item key={e.id}>
                        <PokemonCard 
                            key={1000 + e.id} 
                            pokemon={e}
                        />
                    </Grid> ))}
            </Grid>
        </Stack>
    )
}
    
export { PokemonGrid }