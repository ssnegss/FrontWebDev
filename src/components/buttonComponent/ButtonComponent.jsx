import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { makeButtonComponentStyles as styles } from './ButtonComponentStyles';

const useStyles = makeStyles((theme) => styles(theme));

export const ButtonComponent = (props) => {
    const classes = useStyles();

    return (
        <Button
            className={classes.button}
            variant="contained"
            color="primary"
            disabled={props.disabled}
            onClick={props.onClick}>
            {props.buttonName}
        </Button>
    );
}