import React from 'react';
import './Button.css'
import Button from '@mui/material/Button';

import Stack from '@mui/material/Stack';

function ButtonPro() {
    return (
        <div className='stackbutton'>
            <Stack direction="row" spacing={1.5}>
                <Button variant="outlined" >
                    1-20
                </Button>
            
            
                <Button variant="outlined" >
                    21-50
                </Button>
                <Button variant="contained">
                    51-200
                </Button>
            
                <Button variant="outlined" >
                    201-500
                </Button>
                <Button variant="outlined" >
                    500+
                </Button>
            </Stack>
        </div>
    )
}

export default ButtonPro