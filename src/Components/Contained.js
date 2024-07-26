import React from "react";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function Contained() {
    return (
        <Stack spacing={2} direction="row">
            <Button variant="contained">Contained</Button>
            <Button variant="contained" disabled>Disabled</Button>
            <Button variant="contained" href="#contained-buttons">Link</Button>
        </Stack>
    );
}
