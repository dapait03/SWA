import * as React from 'react';
import Grid from '@mui/material/Grid';

import SideMenu from './SideMenu';
import User from './User';

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

const UserMS = () => {
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
                    <User />
                </Grid>
            </Grid>
        </div>
    );
}

export default UserMS;