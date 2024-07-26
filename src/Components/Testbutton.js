import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">
        <Button>Primary</Button>
        <Button disabled>disabled</Button>
        <Button href='#text-buttons'>Link</Button>
    </Stack>
  );
}



