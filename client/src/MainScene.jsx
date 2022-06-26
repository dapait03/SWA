import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';

import SideMenu from './SideMenu';
import Customer from './Customer';

import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
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

const MainScene = () => {
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
                    <Customer />
                </Grid>
            </Grid>
        </div>
    );
}

export default MainScene;