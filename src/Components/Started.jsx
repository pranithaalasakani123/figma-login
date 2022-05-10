import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './Started.css'

function Started() {
    return (
        <div className='rowS'>
            <Stack direction="row" sx={{minWidth: '400px'}}>

                <Button sx={{minWidth: '420px'}} size="large" variant="contained">Contained</Button>

            </Stack>
        </div>
    )
}

export default Started