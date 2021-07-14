import React from 'react';
import Input from '@material-ui/core/Input';
import { makeStyles } from '@material-ui/core/styles';
import { makeModalBoxTimeFieldComponentStyles as styles } from './ModalBoxTimeFieldComponentStyles'

const useStyles = makeStyles((theme) => styles(theme));

export const ModalBoxTimeFieldComponent = (props) => {
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