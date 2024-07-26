import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function OutlinedButtons() {
    return (
        <Stack spacing={2} direction="row">
            <Button variant='outlined'>Primary</Button>
            <Button variant='outlined' disabled>Disabled</Button>
            <Button variant='outlined' href='#outlined-buttons'>Link</Button>
            <Button onClick={() => {
                alert('clicked');
            }}>
                Click me
            </Button>
        </Stack>
    );
}
