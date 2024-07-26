import * as React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import Stack from '@mui/material/Stack';

export default function Loadingbuttons(){
    return(
    <Stack direction="row" spacing={2}>
        <LoadingButton loading variant="outlined">Submit</LoadingButton>
        <LoadingButton loading loadingindicator="loading.." variant="outlined">Fetch Data</LoadingButton>
        <LoadingButton
        loading
        loadingPosition="start"
        startIcon={<SaveIcon/>}
        variant="outlined"
        >
            Save
        </LoadingButton>

    </Stack>

    );
}









