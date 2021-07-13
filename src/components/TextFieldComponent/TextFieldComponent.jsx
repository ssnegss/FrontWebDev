import React from 'react';
import Input from '@material-ui/core/Input';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    formControl: {
        minWidth: '10rem',
        margin: '0px 2rem',
        backgroundColor: 'white',
        borderRadius: '2px',
    },
    selectTheme: {
        height: '2.5rem',
        padding: "1rem 1rem",
        borderRadius: '2px',
        backgroundColor: 'rgb(246, 246, 246)'
    }
}));

export const TextFieldComponent = () => {
    const classes = useStyles();

    return (
        <div className={classes.formControl}>
            <Input
                className={classes.selectTheme}
                id="outlined-search"
                label="Search field"
                type="week"
                variant="outlined"
                displayEmpty
            />
        </div>
    )
}