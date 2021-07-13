import React from 'react';
import Input from '@material-ui/core/Input';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    formControl: {
        minWidth: '15rem',
        margin: '0px 2rem',
        backgroundColor: 'white',
        borderRadius: '2px',
    },
    selectTheme: {
        minWidth: '15rem',
        height: '2.5rem',
        padding: "1rem 1rem",
        borderRadius: '2px',
        backgroundColor: 'rgb(246, 246, 246)'
    }
}));

export const ModalBoxTextFieldComponent = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.formControl}>
            <Input
                className={classes.selectTheme}
                id="outlined-search"
                label="Search field"
                variant="outlined"
                value={props.value}
            />
        </div>
    )
}