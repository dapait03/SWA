import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import SideMenu from './SideMenu';
import Contract from './Contract';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const ContractMS = () => {
    const classes = useStyles();

    return(
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={1.5}>
                    <SideMenu />
                </Grid>
                <Grid item xs={10.5}
                sx={{marginTop: "10px"}}
                >
                    <Contract />
                </Grid>
            </Grid>
        </div>
    );
}

export default ContractMS;