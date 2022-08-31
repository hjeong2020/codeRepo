import { Button } from '@mui/material';
import { useSnackbar } from 'notistack';
import React from 'react';

const MyButton = () => {
    const { enqueueSnackbar, closeSnackbar } = useSnackbar()
    return (
        <Button onClick = { () => enqueueSnackbar('I love hooks')}>
            Show snackbar
        </Button>
    )
}
export default MyButton;