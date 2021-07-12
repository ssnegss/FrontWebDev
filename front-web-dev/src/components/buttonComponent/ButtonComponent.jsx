import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    button: {
        width: '7rem',
        borderRadius: '2px',
        height: "2.2rem",
    },
}));

export const ButtonComponent = (props) => {
    const classes = useStyles();
    return (
        <Button className={classes.button} variant="contained" color="primary" disableElevation>
            {props.buttonName}
        </Button>
    );
}